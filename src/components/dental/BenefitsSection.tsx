import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import dentistHero from "@/assets/dentist-hero.jpg";

const BenefitsSection = () => {
  const stats = [
    { number: "10+", label: "Skilled Doctors" },
    { number: "99%", label: "Patient Satisfaction" },
    { number: "20K+", label: "Appointments Booked" }
  ];

  const benefits = [
    "Easy Online Appointment Booking",
    "Experienced and Caring Dentists", 
    "Advanced Dental Equipment"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-dental-blue font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-dental-text leading-tight max-w-4xl mx-auto">
            Benefits of Our Dental Services:
            <br />
            <span className="text-dental-blue">Your Path to a Healthier Smile</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src={dentistHero} 
                alt="Professional dentist providing quality care" 
                className="w-full h-auto rounded-full shadow-soft"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-dental-blue/10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-dental-blue/5 rounded-full"></div>
              
              {/* Floating sparkles */}
              <div className="absolute top-16 right-16 w-3 h-3 bg-dental-blue rounded-full animate-pulse"></div>
              <div className="absolute top-24 right-12 w-2 h-2 bg-dental-blue-light rounded-full animate-pulse delay-150"></div>
              <div className="absolute top-20 right-20 w-4 h-4 bg-dental-blue rounded-full opacity-60 animate-pulse delay-300"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <p className="text-dental-text-muted text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-dental-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-dental-text-muted font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-dental-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-dental-text font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-dental-blue hover:bg-dental-blue-dark text-white px-8 py-4 font-semibold shadow-button"
              >
                Book an Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;