import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import News from "@/components/News";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <News />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
