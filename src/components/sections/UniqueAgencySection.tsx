'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { 
  TrendingUp, 
  Video, 
  Camera, 
  Handshake 
} from 'lucide-react';

export const UniqueAgencySection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Marketing digital completo",
      description: "Foco em tráfego orgânico gerado por SEO e estratégias de marketing de influência."
    },
    {
      icon: Video,
      title: "Produção de vídeo profissional",
      description: "Com uma equipe dedicada e equipamentos de ponta para criar conteúdos de alta qualidade."
    },
    {
      icon: Camera,
      title: "Estúdio de fotografia especializado",
      description: "Oferecemos um estúdio próprio para fotos e vídeos, dentro do nosso escritório, para um atendimento ágil e eficiente."
    },
    {
      icon: Handshake,
      title: "Parcerias estratégicas",
      description: "Colaboramos com os principais veículos de comunicação e influenciadores para garantir máxima visibilidade e engajamento."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#191919' }}>
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Somos a única agência a te oferecer isso:
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center group"
                >
                  <div className="w-20 h-20 mx-auto mb-4 sm:mb-6 rounded-full border-2 border-red-800 flex items-center justify-center group-hover:bg-red-800/10 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-red-800" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
