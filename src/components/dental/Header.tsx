import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        {/* Top Bar */}
        <div className="py-3 border-b border-gray-100">
          <div className="flex flex-wrap items-center justify-between text-sm text-dental-text-muted">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Dental Street, City, State</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 8AM-6PM</span>
              </div>
            </div>
            <div className="text-dental-blue font-medium">
              Emergency: +1 (555) 999-8888
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-dental-blue">
              DentalCare
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-dental-text hover:text-dental-blue font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-dental-text hover:text-dental-blue font-medium transition-colors">
                About
              </a>
              <a href="#" className="text-dental-text hover:text-dental-blue font-medium transition-colors">
                Services
              </a>
              <a href="#" className="text-dental-text hover:text-dental-blue font-medium transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <Button 
            className="bg-dental-blue hover:bg-dental-blue-dark text-white px-6 py-2 font-semibold shadow-button"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;