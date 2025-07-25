import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Como a Comunicação Estratégica Impulsiona o Crescimento de Pequenas Empresas",
      excerpt: "Descubra as principais estratégias que estão ajudando pequenas empresas a se destacarem no mercado através de uma comunicação mais eficaz.",
      date: "2024-01-15",
      category: "Estratégia",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Tendências de Marketing Digital para 2024: O que sua empresa precisa saber",
      excerpt: "Análise das principais tendências que vão dominar o marketing digital este ano e como se preparar para elas.",
      date: "2024-01-10",
      category: "Marketing Digital",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "A Importância da Autenticidade na Era das Redes Sociais",
      excerpt: "Por que marcas autênticas estão conquistando mais engajamento e como aplicar essa estratégia em seu negócio.",
      date: "2024-01-05",
      category: "Redes Sociais",
      readTime: "4 min"
    },
    {
      id: 4,
      title: "Gestão de Crise: Como Proteger a Reputação da sua Marca",
      excerpt: "Estratégias fundamentais para gerenciar crises de comunicação e manter a confiança do seu público.",
      date: "2023-12-28",
      category: "Assessoria",
      readTime: "6 min"
    },
    {
      id: 5,
      title: "ROI em Comunicação: Como Medir o Sucesso das suas Estratégias",
      excerpt: "Métricas e indicadores essenciais para avaliar o retorno dos seus investimentos em comunicação.",
      date: "2023-12-20",
      category: "Análise",
      readTime: "8 min"
    },
    {
      id: 6,
      title: "Storytelling Corporativo: Transformando Dados em Narrativas Envolventes",
      excerpt: "Técnicas para criar histórias corporativas que engajam audiências e fortalecem a marca.",
      date: "2023-12-15",
      category: "Conteúdo",
      readTime: "5 min"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section id="noticias" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Notícias</span> e Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe as últimas tendências em comunicação estratégica, marketing digital 
            e produção de conteúdo com nossos artigos especializados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card 
              key={item.id} 
              className="hover:shadow-elegant transition-smooth border-border hover:scale-105 cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {item.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {item.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground leading-tight hover:text-primary transition-smooth">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed mb-4">
                  {item.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(item.date)}
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Ler mais
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold"
          >
            Ver Todas as Notícias
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;