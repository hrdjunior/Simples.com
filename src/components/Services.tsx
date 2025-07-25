import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Megaphone, 
  Users, 
  FileText, 
  TrendingUp, 
  Presentation, 
  Share2 
} from "lucide-react";
import servicesImage from "@/assets/services-communication.jpg";

const Services = () => {
  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Simples Autoridade",
      subtitle: "PACOTE PROFISSIONAL ORGÂNICO",
      description: "Para quem quer crescer nas redes sem depender de anúncios.",
      features: [
        "4 vídeos para feed (roteirizados e gravados)",
        "8 artes para o feed (com planejamento e publicação)",
        "4 fotos profissionais para uso nas redes",
        "Calendário editorial mensal personalizado",
        "Consultoria estratégica de conteúdo 1x/mês",
        "Mini assessoria",
        "Sugestão de pauta para veículo local"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Simples Alcance", 
      subtitle: "PACOTE PROFISSIONAL COM TRÁFEGO",
      description: "Para médicos, advogados, coaches e outros especialistas que querem impulsionar sua autoridade com estratégia.",
      features: [
        "4 vídeos para feed (roteiro, gravação, edição)",
        "8 artes para feed (com legendas e planejamento)",
        "4 fotos profissionais para redes sociais",
        "Gestão de tráfego pago (Meta Ads)",
        "Criação de campanhas personalizada",
        "Relatórios simples mensais",
        "Mini assessoria",
        "Release para apresentação de profissional",
        "Sugestão de pauta para veículo local"
      ]
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Simples Presença",
      subtitle: "PACOTE EMPRESARIAL", 
      description: "Ideal para empresas que precisam de consistência, visibilidade e autoridade digital.",
      features: [
        "8 vídeos por mês (feed ou reels)",
        "30 stories mensais (formato simples, publicação direta)",
        "8 artes para feed",
        "4 fotos para redes sociais",
        "1 vídeo institucional por semestre (com drone e roteiro aprovado)",
        "Assessoria de comunicação simples",
        "Monitoramento de imagem",
        "Reportagens espontâneas",
        "Releases e sugestões de pauta"
      ]
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Gestão de Tráfego Pago",
      subtitle: "",
      description: "Criação e monitoramento de campanhas patrocinadas no Meta Ads (Facebook/Instagram), Google Ads (Rede de Pesquisa, Display e YouTube).",
      features: [
        "Otimização de orçamento e análise de resultados",
        "Relatórios mensais com indicadores de desempenho"
      ]
    },
    {
      icon: <Presentation className="h-8 w-8" />,
      title: "Media Training e Comunicação Estratégica",
      subtitle: "",
      description: "Treinamento para entrevistas e presença em vídeo.",
      features: [
        "Aulas práticas de postura, linguagem e posicionamento de fala",
        "Desenvolvimento de Q&A (perguntas e respostas para porta-vozes)",
        "Media training voltado para gestão de crise"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Produção de Foto e Vídeo",
      subtitle: "",
      description: "Ensaio fotográfico profissional (com até 10 fotos editadas).",
      features: [
        "Vídeos para redes sociais (roteiro, gravação, imagens aéreas e edição final)",
        "Captação com drone (roteirizada)",
        "Vídeos institucionais completos (aprovados previamente com cliente)"
      ]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Marketing de Conteúdo e Redes Sociais",
      subtitle: "",
      description: "Planejamento editorial para redes sociais.",
      features: [
        "Criação de artes (feed, stories, destaques)",
        "Redação de legendas com foco em engajamento e autoridade",
        "Calendário de postagens personalizado",
        "Monitoramento e ajustes estratégicos"
      ]
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Assessoria de Comunicação",
      subtitle: "",
      description: "Criação de releases, artigos e notas oficiais.",
      features: [
        "Relacionamento com a imprensa (mailing com +9 mil jornalistas no Brasil)",
        "Sugestão de pautas para repercussão orgânica em veículos de mídia",
        "Gerenciamento de crise e comunicação institucional",
        "Planejamento e execução de estratégias de imagem"
      ]
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">Produtos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especializados em transformar marcas e histórias em resultados reais através de 
            comunicação estratégica e produção de conteúdo de alta qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-elegant transition-smooth border-border hover:scale-105 h-full"
            >
              <CardHeader>
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                {service.subtitle && (
                  <p className="text-sm font-medium text-primary uppercase tracking-wide">
                    {service.subtitle}
                  </p>
                )}
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-muted-foreground text-base leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                {service.features && (
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1 text-xs">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center text-white shadow-elegant">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua comunicação?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Vamos descomplicar sua estratégia de comunicação e gerar resultados reais para sua marca.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-orange"
            >
              Solicitar Proposta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;