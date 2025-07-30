import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Ready to master the{" "}
                <span className="text-healthcare-primary">technologies</span>{" "}
                that power healthcare analysis?
              </h1>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Being a healthcare analyst comes down to mastering{" "}
                  <span className="font-semibold text-healthcare-primary">SQL, Python and Statistics</span>.
                </p>
                <p className="text-lg text-gray-600">
                  Start your journey to mastery with us today.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Sign Up Card */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md p-8 shadow-card">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Sign Up
                  </h2>
                </div>

                <Button 
                  variant="healthcare" 
                  size="lg" 
                  className="w-full justify-center"
                >
                  <Facebook className="h-5 w-5" />
                  Login with Facebook
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">
                      or
                    </span>
                  </div>
                </div>

                <Button 
                  variant="healthcare-outline" 
                  size="lg" 
                  className="w-full"
                >
                  Sign Up with Email
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Fusce convallis sollicitudin rhoncus ut lorem.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <Button variant="healthcare-ghost" className="font-medium">
                    Learn More →
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;