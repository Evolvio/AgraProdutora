'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';

export const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const { 
    isHeroMuted, 
    heroVolume, 
    setHeroMuted, 
    updateHeroVolume, 
    setHeroPlaying, 
    heroVideoRef 
  } = useAudio();

  const toggleMute = () => {
    setHeroMuted(!isHeroMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    updateHeroVolume(newVolume);
  };

  // Sincronizar el estado del video con el contexto
  useEffect(() => {
    if (heroVideoRef.current) {
      const video = heroVideoRef.current;
      
      const handlePlay = () => setHeroPlaying(true);
      const handlePause = () => setHeroPlaying(false);

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, [heroVideoRef, setHeroPlaying]);

  // Aplicar cambios de muted y volume directamente al video
  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = isHeroMuted;
      heroVideoRef.current.volume = heroVolume;
    }
  }, [isHeroMuted, heroVolume]);

  return (
    <section className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={heroVideoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted={isHeroMuted}
        volume={heroVolume}
        loop
        playsInline
        aria-label="Vídeo de fundo da seção hero"
      >
        <source src="/video-hero.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      
      {/* Overlay opcional para mejor contraste si es necesario */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Sound Controls Container */}
      <div 
        className="absolute bottom-4 right-4 z-10 flex items-center gap-3"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Volume Slider - Only visible on hover */}
        {isHovering && (
          <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={heroVolume}
              onChange={handleVolumeChange}
              className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #ffffff 0%, #ffffff ${heroVolume * 100}%, rgba(255,255,255,0.3) ${heroVolume * 100}%, rgba(255,255,255,0.3) 100%)`
              }}
            />
            <span className="text-white text-xs ml-2 min-w-[2rem] text-center">
              {Math.round(heroVolume * 100)}%
            </span>
          </div>
        )}
        
        {/* Sound Toggle Button */}
        <button
          onClick={toggleMute}
          className="p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
          aria-label={isHeroMuted ? "Ativar som do vídeo" : "Desativar som do vídeo"}
        >
          {isHeroMuted ? (
            <VolumeX size={20} />
          ) : (
            <Volume2 size={20} />
          )}
        </button>
      </div>
    </section>
  );
};
