import { Button } from "@/components/ui/button";
import healthcareLogo from "@/assets/healthcare-logo.png";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src={healthcareLogo} 
              alt="Healthcare Analysis HQ" 
              className="h-10 w-10"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                HEALTHCARE ANALYSIS HQ (HAQ)
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#technology" 
              className="text-gray-600 hover:text-healthcare-primary transition-colors"
            >
              Technology
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-healthcare-primary transition-colors"
            >
              About Us
            </a>
            <Button variant="healthcare-outline" size="sm">
              Login
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;