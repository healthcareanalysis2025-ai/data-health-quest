import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import healthcareLogo from "@/assets/healthcare-logo.png";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful registration
    navigate("/dashboard");
  };

  const handleFacebookSignup = () => {
    // Simulate Facebook OAuth
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="w-full bg-background border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
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
            </Link>
            
            <Link to="/login">
              <Button variant="healthcare-outline" size="sm">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Sign Up Form */}
      <div className="flex items-center justify-center py-20">
        <Card className="w-full max-w-md shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Create Your Account
            </CardTitle>
            <p className="text-gray-600">
              Start your healthcare data analysis journey
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <Button 
              onClick={handleFacebookSignup}
              variant="healthcare" 
              size="lg" 
              className="w-full justify-center"
            >
              <Facebook className="h-5 w-5" />
              Sign up with Facebook
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="Create a password"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <Button 
                type="submit"
                variant="healthcare" 
                size="lg" 
                className="w-full"
              >
                Create Account
              </Button>
            </form>

            <div className="text-center pt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-healthcare-primary font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;