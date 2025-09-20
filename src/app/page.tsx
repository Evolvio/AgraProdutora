'use client';

import { Navbar03 } from "@/components/ui/shadcn-io/navbar-03";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  const handlePrimaryClick = () => {
    console.log("Ver Nossos Trabalhos clicked");
  };

  const handleSecondaryClick = () => {
    console.log("Saber Mais clicked");
  };

  return (
    <div className="min-h-screen">
      <Navbar03 
        logoHref="/"
        navigationLinks={[
          { href: "#quem-somos", label: "Quem somos", active: true },
          { href: "#servicos", label: "Serviços" },
          { href: "#portfolio", label: "Portfolio" },
          { href: "#contato", label: "Contato" },
        ]}
      />
      
      <main>
        <HeroSection
          backgroundImage="/Beach Scene with Woman.png"
          title="Bem-vindo à"
          titleHighlight="Agra Productora"
          description="Criamos experiências audiovisuais excepcionais que conectam com o seu público e elevam a sua marca."
          primaryButtonText="Ver Nossos Trabalhos"
          secondaryButtonText="Saber Mais"
          onPrimaryClick={handlePrimaryClick}
          onSecondaryClick={handleSecondaryClick}
        />
        
        <div id="quem-somos">
          <AboutSection />
        </div>
        <div id="servicos">
          <ServicesSection />
        </div>
        <div id="portfolio">
          <PortfolioSection />
        </div>
        <div id="contato">
          <ContactSection />
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}
