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
    <section className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] w-full">
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
      <div className="relative z-10 w-full px-4 h-full flex items-start lg:items-start items-center justify-center pt-32 lg:pt-32">
        <div className="text-center lg:text-left space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-8 max-w-4xl mx-auto lg:max-w-2xl lg:ml-32">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
            {title}{" "}
            <span className="text-primary">{titleHighlight}</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {description.split('\\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < description.split('\\n').length - 1 && <br />}
              </span>
            ))}
          </p>
          <div className="flex flex-col sm:flex-row lg:flex-row gap-3 sm:gap-4 lg:gap-4 justify-center lg:justify-start items-center">
            <Button 
              variant="default"
              size="lg"
              className="w-full sm:w-auto lg:w-auto px-6 py-3 text-sm sm:text-base"
              onClick={onPrimaryClick}
            >
              {primaryButtonText}
            </Button>
            <Button 
              variant="glass"
              size="lg"
              className="w-full sm:w-auto lg:w-auto px-6 py-3 text-sm sm:text-base"
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
