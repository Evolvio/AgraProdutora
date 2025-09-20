'use client';

import { ThreeDMarquee } from "@/components/ui/shadcn-io/3d-marquee";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    title: "AGRA PRODUTORA",
    description: "Produção audiovisual completa com qualidade profissional.",
    icon: "🎬"
  },
  {
    title: "AGRA Mentoria",
    description: "Orientação especializada para profissionais do audiovisual.",
    icon: "🎓"
  },
  {
    title: "Produção de Eventos e Projetos",
    description: "Organização e execução de eventos corporativos e especiais.",
    icon: "🎪"
  },
  {
    title: "AGRA EVENTO",
    description: "Soluções completas para eventos de todos os tamanhos.",
    icon: "🎉"
  },
  {
    title: "Serviços Criativos",
    description: "Design, branding e soluções criativas personalizadas.",
    icon: "🎨"
  },
  {
    title: "PORTFOLIO",
    description: "Desenvolvimento e gestão de portfólios profissionais.",
    icon: "📁"
  },
  {
    title: "Serviços Complementares",
    description: "Suporte técnico e logístico para projetos audiovisuais.",
    icon: "🔧"
  },
  {
    title: "Gestão e Estratégia",
    description: "Planejamento estratégico e gestão de projetos criativos.",
    icon: "📊"
  },
  {
    title: "Outros Segmentos",
    description: "Soluções personalizadas para diferentes áreas de atuação.",
    icon: "🌟"
  }
];

// Imagens do portfolio para o 3D Marquee
const portfolioImages = [
  "/Beach Scene with Woman.png",
  "/Yoga Practice in Serene Outdoor Setting.png",
  "/Glamorous Party Scene.png",
  "/Celebratory Party Scene.png",
  "/Dazzling Festival Dancer.png",
  "/Beach Scene with Woman.png",
  "/Yoga Practice in Serene Outdoor Setting.png",
  "/Glamorous Party Scene.png",
  "/Celebratory Party Scene.png",
  "/Dazzling Festival Dancer.png",
  "/Beach Scene with Woman.png",
  "/Yoga Practice in Serene Outdoor Setting.png",
  "/Glamorous Party Scene.png",
  "/Celebratory Party Scene.png",
  "/Dazzling Festival Dancer.png",
  "/Beach Scene with Woman.png",
  "/Yoga Practice in Serene Outdoor Setting.png",
  "/Glamorous Party Scene.png",
  "/Celebratory Party Scene.png",
  "/Dazzling Festival Dancer.png",
  "/Beach Scene with Woman.png",
  "/Yoga Practice in Serene Outdoor Setting.png",
  "/Glamorous Party Scene.png",
  "/Celebratory Party Scene.png",
  "/Dazzling Festival Dancer.png",
  "/Beach Scene with Woman.png",
  "/Yoga Practice in Serene Outdoor Setting.png",
  "/Glamorous Party Scene.png",
  "/Celebratory Party Scene.png",
  "/Dazzling Festival Dancer.png",
  "/Beach Scene with Woman.png",
  "/Yoga Practice in Serene Outdoor Setting.png",
];

export const ServicesSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* 3D Marquee Section */}
        <div className="mx-auto max-w-7xl rounded-2xl sm:rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800 mb-8 sm:mb-12 md:mb-16">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Nossos Trabalhos em Ação</h3>
            <p className="text-sm sm:text-base text-muted-foreground">Veja alguns dos nossos projetos mais recentes</p>
          </div>
          <ThreeDMarquee images={portfolioImages} />
        </div>

        <AnimatedSection delay={200}>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Nossos Serviços
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Soluções completas em produção audiovisual
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-4 sm:p-6 rounded-lg bg-background shadow-sm hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:rotate-6 group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">{service.description}</p>
            </div>
          ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
