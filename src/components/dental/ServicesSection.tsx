import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import dentalOffice from "@/assets/dental-office.jpg";
import dentalImplant from "@/assets/dental-implant.jpg";
import teethWhitening from "@/assets/teeth-whitening.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "General Dentistry",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: dentalOffice,
      icon: "🦷"
    },
    {
      title: "Dental Implant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: dentalImplant,
      icon: "🔬"
    },
    {
      title: "Teeth Whitening",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: teethWhitening,
      icon: "✨"
    }
  ];

  return (
    <section className="py-20 bg-dental-gray">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-dental-blue font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-dental-text leading-tight max-w-3xl mx-auto">
            A Wide Range of Services
            <br />
            <span className="text-dental-blue">for Your Best Smile</span>
          </h2>
          <Button 
            variant="outline" 
            className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white mt-8"
          >
            Explore All Services
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group cursor-pointer border-none shadow-soft hover:shadow-button transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-dental-blue rounded-full flex items-center justify-center shadow-button">
                    <span className="text-white text-xl">{service.icon}</span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-dental-text group-hover:text-dental-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dental-text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-dental-blue font-semibold group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Categories */}
        <div className="mt-16 bg-dental-blue rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <span className="text-2xl font-bold">General Dentistry</span>
            </div>
            <div className="space-y-2">
              <span className="text-2xl font-bold">Teeth Whitening</span>
            </div>
            <div className="space-y-2">
              <span className="text-2xl font-bold">Dental Implant</span>
            </div>
            <div className="space-y-2">
              <span className="text-2xl font-bold">Dental Sealants</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;