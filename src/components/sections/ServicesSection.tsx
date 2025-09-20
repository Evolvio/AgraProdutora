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
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* 3D Marquee Section */}
        <div className="mx-auto max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Nossos Trabalhos em Ação</h3>
            <p className="text-muted-foreground">Veja alguns dos nossos projetos mais recentes</p>
          </div>
          <ThreeDMarquee images={portfolioImages} />
        </div>

        <AnimatedSection delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground">
              Soluções completas em produção audiovisual
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
