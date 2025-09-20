'use client';

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Quem Somos
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A Agra Productora é uma empresa especializada em produção audiovisual, 
              dedicada a criar experiências visuais excepcionais que contam histórias 
              únicas e conectam marcas com seus públicos de forma autêntica e impactante.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
