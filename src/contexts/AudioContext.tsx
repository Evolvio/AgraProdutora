'use client';

import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';

interface AudioContextType {
  isHeroMuted: boolean;
  isHeroPlaying: boolean;
  heroVolume: number;
  setHeroMuted: (muted: boolean) => void;
  updateHeroVolume: (volume: number) => void;
  setHeroPlaying: (playing: boolean) => void;
  pauseHeroAudio: () => void;
  resumeHeroAudio: () => void;
  heroVideoRef: React.RefObject<HTMLVideoElement | null>;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

interface AudioProviderProps {
  children: ReactNode;
}

export const AudioProvider = ({ children }: AudioProviderProps) => {
  const [isHeroMuted, setIsHeroMuted] = useState(true);
  const [isHeroPlaying, setIsHeroPlaying] = useState(false);
  const [heroVolume, setHeroVolume] = useState(0.5);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const setHeroMuted = (muted: boolean) => {
    setIsHeroMuted(muted);
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = muted;
      // Si se desactiva el mute, restaurar el volumen anterior
      if (!muted && heroVideoRef.current.volume === 0) {
        heroVideoRef.current.volume = heroVolume;
      }
    }
  };

  const updateHeroVolume = (volume: number) => {
    setHeroVolume(volume);
    if (heroVideoRef.current) {
      heroVideoRef.current.volume = volume;
      // Solo actualizar muted si el volumen es 0
      if (volume === 0) {
        heroVideoRef.current.muted = true;
        setIsHeroMuted(true);
      } else {
        // Si hay volumen, asegurar que no esté muted
        heroVideoRef.current.muted = false;
        setIsHeroMuted(false);
      }
    }
  };

  const setHeroPlaying = (playing: boolean) => {
    setIsHeroPlaying(playing);
  };

  const pauseHeroAudio = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.pause();
      setIsHeroPlaying(false);
    }
  };

  const resumeHeroAudio = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.play();
      setIsHeroPlaying(true);
    }
  };

  // Sincronizar el estado inicial del video
  useEffect(() => {
    if (heroVideoRef.current) {
      const video = heroVideoRef.current;
      video.muted = isHeroMuted;
      video.volume = heroVolume;
    }
  }, [isHeroMuted, heroVolume]);

  const value: AudioContextType = {
    isHeroMuted,
    isHeroPlaying,
    heroVolume,
    setHeroMuted,
    updateHeroVolume,
    setHeroPlaying,
    pauseHeroAudio,
    resumeHeroAudio,
    heroVideoRef,
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
};
