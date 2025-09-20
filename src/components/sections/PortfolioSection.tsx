'use client';

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const galleryImages = [
  {
    id: 1,
    image: "/Beach Scene with Woman.png",
    likes: 124,
    comments: 8,
    type: "reel" // Vertical
  },
  {
    id: 2,
    image: "/Yoga Practice in Serene Outdoor Setting.png",
    likes: 89,
    comments: 12,
    type: "post" // Cuadrado
  },
  {
    id: 3,
    image: "/Glamorous Party Scene.png",
    likes: 156,
    comments: 23,
    type: "reel" // Vertical
  },
  {
    id: 4,
    image: "/Celebratory Party Scene.png",
    likes: 203,
    comments: 15,
    type: "post" // Cuadrado
  },
  {
    id: 5,
    image: "/Dazzling Festival Dancer.png",
    likes: 178,
    comments: 19,
    type: "reel" // Vertical
  },
  {
    id: 6,
    image: "/Beach Scene with Woman.png",
    likes: 95,
    comments: 6,
    type: "post" // Cuadrado
  },
  {
    id: 7,
    image: "/Yoga Practice in Serene Outdoor Setting.png",
    likes: 142,
    comments: 11,
    type: "reel" // Vertical
  },
  {
    id: 8,
    image: "/Glamorous Party Scene.png",
    likes: 167,
    comments: 14,
    type: "post" // Cuadrado
  },
  {
    id: 9,
    image: "/Celebratory Party Scene.png",
    likes: 134,
    comments: 9,
    type: "reel" // Vertical
  },
  {
    id: 10,
    image: "/Dazzling Festival Dancer.png",
    likes: 189,
    comments: 17,
    type: "post" // Cuadrado
  },
  {
    id: 11,
    image: "/Beach Scene with Woman.png",
    likes: 112,
    comments: 7,
    type: "reel" // Vertical
  },
  {
    id: 12,
    image: "/Yoga Practice in Serene Outdoor Setting.png",
    likes: 145,
    comments: 13,
    type: "post" // Cuadrado
  }
];

export const PortfolioSection = () => {
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
                <img 
                  src={item.image} 
                  alt={`Imagem da galeria ${item.id} - ${item.type === 'reel' ? 'Reel' : 'Post'} com ${item.likes} curtidas`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                
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
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center">
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
    </section>
  );
};
