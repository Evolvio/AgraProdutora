'use client';

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Pronto para criar algo incrível juntos? Vamos conversar sobre seu projeto.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">contato@agraproductora.com</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2">Telefone</h3>
              <p className="text-muted-foreground">+55 (11) 99999-9999</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-lg font-semibold mb-2">Localização</h3>
              <p className="text-muted-foreground">São Paulo, Brasil</p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Iniciar um novo projeto conosco"
            >
              Iniciar Projeto
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
