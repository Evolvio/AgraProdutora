'use client';

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const ContactSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
              Entre em Contato
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 md:mb-12">
              Pronto para criar algo incrível juntos? Vamos conversar sobre seu projeto.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📧</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm sm:text-base text-muted-foreground">contato@agraproductora.com</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📱</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Telefone</h3>
              <p className="text-sm sm:text-base text-muted-foreground">+55 (11) 99999-9999</p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📍</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Localização</h3>
              <p className="text-sm sm:text-base text-muted-foreground">São Paulo, Brasil</p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Iniciar um novo projeto conosco"
            >
              Iniciar Projeto
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Agendar uma reunião para discutir seu projeto"
            >
              Agendar Reunião
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
