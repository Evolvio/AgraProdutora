'use client';

import { Navbar03 } from "@/components/ui/shadcn-io/navbar-03";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { UniqueAgencySection } from "@/components/sections/UniqueAgencySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { AudioProvider } from "@/contexts/AudioContext";

export default function Home() {

  return (
    <AudioProvider>
      <div className="min-h-screen">
        <Navbar03 
          logoHref="/"
          navigationLinks={[
            { href: "#quem-somos", label: "Quem somos" },
            { href: "#portfolio", label: "Portfolio" },
            { href: "#servicos", label: "Serviços" },
            { href: "#contato", label: "Contato" },
          ]}
        />
        
        <main>
          <HeroSection />
          
          {/* Flecha animada indicando más contenido */}
          <div className="flex justify-center pt-8 pb-4">
            <div className="animate-bounce">
              <svg 
                className="w-8 h-8 text-black/70 hover:text-black transition-colors cursor-pointer" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                onClick={() => document.getElementById('quem-somos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          
          <div id="quem-somos">
            <AboutSection />
          </div>
          
          <UniqueAgencySection />
          
          <div id="portfolio">
            <PortfolioSection />
          </div>
          
          <div id="servicos">
            <ServicesSection />
          </div>
          
          <QuoteSection />
          
          <div id="contato">
            <ContactSection />
          </div>
        </main>
        
        <FooterSection />
      </div>
    </AudioProvider>
  );
}
