import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Phone, Play } from "lucide-react";
import dentistHero from "@/assets/dentist-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-dental-blue via-dental-blue-light to-dental-blue-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-white/30"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full border-2 border-white/20"></div>
        <div className="absolute bottom-40 left-40 w-40 h-40 rounded-full border-2 border-white/25"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Header Tag */}
            <div className="flex items-center gap-2 text-white/90">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Top-Notch Dental Care, Just for You</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Best Dental
                <br />
                <span className="text-white/90">Experience Awaits</span>
              </h1>
              <p className="text-lg text-white/80 max-w-md leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-dental-blue hover:bg-white/90 shadow-button px-8 py-6 text-lg font-semibold"
              >
                Explore Our Services
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-white border-white/30 hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </Button>
            </div>

            {/* Appointment Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 mt-12 shadow-soft">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-dental-text mb-2">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dental-text-muted w-4 h-4" />
                    <Input 
                      placeholder="John Doe" 
                      className="pl-10 py-3 border-gray-200 focus:border-dental-blue"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-dental-text mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dental-text-muted w-4 h-4" />
                    <Input 
                      placeholder="Your Phone" 
                      className="pl-10 py-3 border-gray-200 focus:border-dental-blue"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-dental-text mb-2">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dental-text-muted w-4 h-4" />
                    <Input 
                      placeholder="dd/mm/yyyy" 
                      className="pl-10 py-3 border-gray-200 focus:border-dental-blue"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-dental-text mb-2">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dental-text-muted w-4 h-4" />
                    <Input 
                      placeholder="00:00" 
                      className="pl-10 py-3 border-gray-200 focus:border-dental-blue"
                    />
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full md:w-auto bg-dental-blue hover:bg-dental-blue-dark text-white px-8 py-3 font-semibold shadow-button"
              >
                Book an Appointment
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={dentistHero} 
                alt="Professional female dentist in medical attire" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/15 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;