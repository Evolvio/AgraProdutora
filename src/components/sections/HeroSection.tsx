'use client';

import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Vídeo de fundo da seção hero"
      >
        <source src="/video-hero.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      
      {/* Overlay opcional para mejor contraste si es necesario */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Sound Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
        aria-label={isMuted ? "Ativar som do vídeo" : "Desativar som do vídeo"}
      >
        {isMuted ? (
          <VolumeX size={20} />
        ) : (
          <Volume2 size={20} />
        )}
      </button>
    </section>
  );
};
