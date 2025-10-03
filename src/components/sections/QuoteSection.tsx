'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const QuoteSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background relative overflow-hidden">
      {/* Floating stars - asymmetric and chaotic - responsive positioning */}
      <div className="absolute top-8 sm:top-12 md:top-16 left-1/4 text-lg sm:text-xl animate-bounce" style={{ animationDelay: '2.1s', animationDuration: '2.4s' }}>
        ✨
      </div>
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 right-8 sm:right-12 md:right-16 text-2xl sm:text-3xl animate-pulse" style={{ animationDelay: '0.8s', animationDuration: '3.8s' }}>
        ✨
      </div>
      <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12 text-base sm:text-lg animate-bounce" style={{ animationDelay: '1.9s', animationDuration: '2.6s' }}>
        ✨
      </div>
      <div className="absolute bottom-1/3 left-1/5 text-xl sm:text-2xl animate-bounce" style={{ animationDelay: '1.4s', animationDuration: '2.9s' }}>
        ✨
      </div>
      <div className="absolute top-2/3 right-1/5 text-base sm:text-lg animate-pulse" style={{ animationDelay: '0.3s', animationDuration: '4.1s' }}>
        ✨
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <AnimatedSection>
          <div className="max-w-4xl sm:max-w-5xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight sm:leading-tight text-foreground">
              <div className="whitespace-nowrap mb-1 sm:mb-2">O caminho para sua empresa vender</div>
              <div className="whitespace-nowrap mb-1 sm:mb-2">mais e gerar valor para marca</div>
              <div className="whitespace-nowrap text-primary">Aqui a gente não tenta, faz acontecer</div>
            </h2>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
