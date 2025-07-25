import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Lightbulb } from "lucide-react";
import teamImage from "@/assets/team-meeting.jpg";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Humana",
      description: "Acreditamos que a comunicação deve ser genuína, próxima e criar conexões reais entre marcas e pessoas."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Estratégica",
      description: "Cada ação é pensada para gerar resultados concretos e construir valor de longo prazo para nossos clientes."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Simples",
      description: "Descomplicamos processos complexos, tornando a comunicação acessível e profissional para todos."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Colaborativa",
      description: "Trabalhamos como parceiros dos nossos clientes, construindo soluções em conjunto e compartilhando conhecimento."
    }
  ];

  return (
    <section id="simples-vida" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O <span className="text-primary">Simples</span> da Vida
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa filosofia vai além da comunicação: acreditamos que as melhores soluções 
            nascem da simplicidade, autenticidade e do genuíno cuidado com as pessoas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Nossa Missão
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Fundada em 2021, a Simples.com nasceu com a missão de <strong className="text-primary">descomplicar a comunicação</strong>, 
              tornando-a acessível, profissional e humana, como deve ser.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Somos especializados em transformar marcas e histórias em resultados reais através de 
              narrativas de valor, posicionamento digital, assessoria de imprensa, treinamentos de 
              mídia e gestão de redes sociais com foco em crescimento orgânico e autoridade.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-orange"
            >
              Conheça Nossa História
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src={teamImage} 
              alt="Equipe Simples.com trabalhando em estratégias de comunicação"
              className="rounded-2xl shadow-elegant w-full h-auto object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-hero opacity-20"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-elegant transition-smooth border-border hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="text-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center bg-secondary rounded-2xl p-8 md:p-12 text-white">
          <blockquote className="text-2xl md:text-3xl font-medium mb-6 italic">
            "A comunicação eficaz não é sobre falar mais alto, 
            mas sobre falar a linguagem do seu público de forma autêntica e estratégica."
          </blockquote>
          <cite className="text-lg opacity-90">Equipe Simples.com</cite>
        </div>
      </div>
    </section>
  );
};

export default About;