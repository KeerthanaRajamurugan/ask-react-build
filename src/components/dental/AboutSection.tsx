import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Award } from "lucide-react";
import dentalOffice from "@/assets/dental-office.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src={dentalOffice} 
                alt="Modern dental office with advanced equipment" 
                className="w-full h-auto rounded-3xl shadow-soft"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-dental-blue p-6 rounded-2xl shadow-button">
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-soft border">
                <Award className="w-8 h-8 text-dental-blue" />
              </div>
            </div>
            
            {/* Decorative sparkles */}
            <div className="absolute top-12 left-12 w-3 h-3 bg-dental-blue rounded-full opacity-60"></div>
            <div className="absolute top-20 left-8 w-2 h-2 bg-dental-blue-light rounded-full opacity-80"></div>
            <div className="absolute top-16 left-20 w-4 h-4 bg-dental-blue rounded-full opacity-40"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-dental-blue font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-dental-text leading-tight">
                15 Years of Expertise
                <br />
                <span className="text-dental-blue">in Dental Care</span>
              </h2>
              <p className="text-dental-text-muted text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-dental-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-dental-text font-medium">
                  Premium Dental Services For Our Clients
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-dental-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-dental-text font-medium">
                  Award-Winning Experts In Dental Care
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-dental-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-dental-text font-medium">
                  Dedicated Experts Behind Every Smile
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-dental-blue hover:bg-dental-blue-dark text-white px-8 py-4 font-semibold shadow-button"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;