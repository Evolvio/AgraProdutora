'use client';

import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  titleHighlight: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const HeroSection = ({
  backgroundImage,
  title,
  titleHighlight,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) => {
  return (
    <section className="relative h-[900px] w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
        role="img"
        aria-label="Imagem de fundo da seção hero"
      />
      
      {/* Content */}
      <div className="relative z-10 w-full px-4 h-full flex items-start pt-20 justify-center">
        <div className="text-left space-y-8 max-w-2xl -ml-32">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            {title}{" "}
            <span className="text-primary">{titleHighlight}</span>
          </h1>
          <p className="text-xl text-white">
            {description}
          </p>
          <div className="flex gap-4">
            <Button 
              variant="default"
              size="xl"
              onClick={onPrimaryClick}
            >
              {primaryButtonText}
            </Button>
            <Button 
              variant="glass"
              size="xl"
              onClick={onSecondaryClick}
            >
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
