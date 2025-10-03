'use client';

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
              Quem Somos
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Somos o ponto de encontro de soluções criativas para todos
              os segmentos digitais. Nossa fundadora, Angela Agra, é uma apaixonada por
              transformar ideias em ações e, como palestrante, compartilha sua experiência com
              empreendedores e UGC. Se você quer entender como se destacar no mundo
              digital, a Agra Produtora é o seu lugar
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
