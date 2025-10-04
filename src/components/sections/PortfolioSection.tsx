'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAudio } from '@/contexts/AudioContext';

const galleryImages = [
  {
    id: 1,
    image: "/gallery/reel-1.mp4",
    likes: 124,
    comments: 8,
    type: "reel" // Video
  },
  {
    id: 2,
    image: "/gallery/1 (5).jpg",
    likes: 89,
    comments: 12,
    type: "post" // Cuadrado
  },
  {
    id: 3,
    image: "/gallery/reel-2.mp4",
    likes: 156,
    comments: 23,
    type: "reel" // Video
  },
  {
    id: 4,
    image: "/gallery/1 (8).jpg",
    likes: 203,
    comments: 15,
    type: "post" // Cuadrado
  },
  {
    id: 5,
    image: "/gallery/reel-3.mp4",
    likes: 178,
    comments: 19,
    type: "reel" // Video
  },
  {
    id: 6,
    image: "/gallery/1 (9).jpg",
    likes: 95,
    comments: 6,
    type: "post" // Cuadrado
  },
  {
    id: 7,
    image: "/gallery/reel-4.mp4",
    likes: 142,
    comments: 11,
    type: "reel" // Video
  },
  {
    id: 8,
    image: "/gallery/1 (19).jpg",
    likes: 167,
    comments: 14,
    type: "post" // Cuadrado
  },
  {
    id: 9,
    image: "/gallery/reel-5.mp4",
    likes: 134,
    comments: 9,
    type: "reel" // Video
  },
  {
    id: 10,
    image: "/gallery/1 (22).jpg",
    likes: 189,
    comments: 17,
    type: "post" // Cuadrado
  },
  {
    id: 11,
    image: "/gallery/reel-6.mp4",
    likes: 112,
    comments: 7,
    type: "reel" // Video
  },
  {
    id: 12,
    image: "/gallery/1 (24).jpg",
    likes: 145,
    comments: 13,
    type: "post" // Cuadrado
  }
];

export const PortfolioSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const { pauseHeroAudio, resumeHeroAudio } = useAudio();

  const handleVideoClick = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
    setIsVideoOpen(true);
    // Pausar el audio del hero cuando se abre un reel
    pauseHeroAudio();
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    setSelectedVideo(null);
    // Reanudar el audio del hero cuando se cierra el reel
    resumeHeroAudio();
  };

  // Efecto para manejar el cierre del modal de video
  useEffect(() => {
    if (!isVideoOpen && selectedVideo) {
      // Si el modal se cierra pero aún hay un video seleccionado, limpiar y reanudar audio
      setSelectedVideo(null);
      resumeHeroAudio();
    }
  }, [isVideoOpen, selectedVideo, resumeHeroAudio]);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsImageOpen(true);
  };

  const handleCloseImage = () => {
    setIsImageOpen(false);
    setSelectedImage(null);
  };

  const handleVideoRef = (video: HTMLVideoElement | null, videoSrc: string) => {
    if (video) {
      videoRefs.current[videoSrc] = video;
      
      // Para videos problemáticos, configuramos el tiempo después de un delay
      if (videoSrc.includes('reel-4') || videoSrc.includes('reel-5')) {
        setTimeout(() => {
          if (video && video.readyState >= 2) { // HAVE_CURRENT_DATA
            video.currentTime = 2; // 2 segundos adelante
            video.pause();
          }
        }, 500);
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={200}>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Nossa Galeria
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Momentos capturados pelos nossos projetos
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          {/* Instagram-style grid with balanced layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 sm:gap-2">
          {galleryImages.map((item, index) => {
            // Para crear un grid balanceado, alternamos entre diferentes configuraciones
            const isReel = item.type === "reel";
            const isEvenIndex = index % 2 === 0;
            
            return (
              <div 
                key={item.id} 
                className={`group relative overflow-hidden rounded-lg bg-gray-100 ${
                  isReel 
                    ? "col-span-1 row-span-2 aspect-[3/4]" // Reels ocupan 2 filas
                    : isEvenIndex 
                      ? "col-span-1 row-span-1 aspect-square" // Posts normales
                      : "col-span-1 row-span-1 aspect-square" // Posts normales
                }`}
              >
                {item.image.endsWith('.mp4') ? (
                  <button
                    onClick={() => handleVideoClick(item.image)}
                    className="w-full h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                  >
                    <video 
                      ref={(video) => handleVideoRef(video, item.image)}
                      src={item.image} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => handleImageClick(item.image)}
                    className="w-full h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <img 
                      src={item.image} 
                      alt={`Imagem da galeria ${item.id} - ${item.type === 'reel' ? 'Reel' : 'Post'} com ${item.likes} curtidas`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </button>
                )}
                
                {/* Reel indicator */}
                {isReel && (
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                    REEL
                  </div>
                )}
                
                {/* Overlay on hover - hidden on mobile for better performance */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center pointer-events-none">
                  <div className="text-center text-white">
                    <div className="flex items-center gap-2 sm:gap-4 mb-2">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs sm:text-sm font-medium">{item.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs sm:text-sm font-medium">{item.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={600}>
          {/* Call to action */}
          <div className="text-center mt-8 sm:mt-12">
            <button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm sm:text-base"
              aria-label="Ver mais imagens no Instagram"
            >
              Ver Mais no Instagram
            </button>
          </div>
        </AnimatedSection>
      </div>

      {/* Video Player Modal */}
      <Dialog open={isVideoOpen} onOpenChange={handleCloseVideo}>
        <DialogContent className="max-w-2xl w-full p-0 bg-black">
          <DialogHeader className="sr-only">
            <DialogTitle>Reproducir Video</DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <video 
              src={selectedVideo}
              className="w-full h-auto max-h-[80vh] object-contain"
              controls
              autoPlay
              preload="metadata"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Image Viewer Modal */}
      <Dialog open={isImageOpen} onOpenChange={handleCloseImage}>
        <DialogContent 
          className="max-w-4xl w-full p-0 bg-black border-0 focus:outline-none [&>button]:text-white [&>button]:hover:text-gray-300 [&>button]:text-3xl [&>button]:font-bold [&>button]:bg-gray-800 [&>button]:hover:bg-gray-700 [&>button]:rounded-full [&>button]:w-10 [&>button]:h-10 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:shadow-md [&>button]:border [&>button]:border-gray-600" 
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>Ver Imagen</DialogTitle>
          </DialogHeader>
          {selectedImage && (
            <div className="relative focus:outline-none">
              <img 
                src={selectedImage}
                alt="Imagen ampliada de la galería"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
