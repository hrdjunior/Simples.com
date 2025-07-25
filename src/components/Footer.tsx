import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Nossos Produtos", href: "#produtos" },
    { label: "Notícias", href: "#noticias" },
    { label: "O Simples da Vida", href: "#simples-vida" }
  ];

  const services = [
    { label: "Narrativas de Valor", href: "#" },
    { label: "Posicionamento Digital", href: "#" },
    { label: "Assessoria de Imprensa", href: "#" },
    { label: "Gestão de Redes Sociais", href: "#" }
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">
                Simples<span className="text-primary">.com</span>
              </h3>
              <p className="text-white/80 mt-2">
                Comunicação estratégica e produção de conteúdo
              </p>
            </div>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              Especializados em transformar marcas e histórias em resultados reais 
              através de narrativas de valor e estratégias digitais eficazes.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-primary hover:bg-white/10"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-white/70 hover:text-primary transition-smooth"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-white/70">contato@simples.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-white/70">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-white/70">São Paulo, SP</span>
              </div>
            </div>

            <div className="mt-6">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-orange"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © {currentYear} Simples.com. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-white/70">
              <a href="#" className="hover:text-primary transition-smooth">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;