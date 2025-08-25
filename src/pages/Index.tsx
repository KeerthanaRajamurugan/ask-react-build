import Header from "@/components/dental/Header";
import HeroSection from "@/components/dental/HeroSection";
import AboutSection from "@/components/dental/AboutSection";
import ServicesSection from "@/components/dental/ServicesSection";
import BenefitsSection from "@/components/dental/BenefitsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
    </div>
  );
};

export default Index;
