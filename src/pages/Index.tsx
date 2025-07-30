import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TechnologySection from "@/components/TechnologySection";
import AboutSection from "@/components/AboutSection";
import CalendarDashboard from "@/components/CalendarDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TechnologySection />
      <AboutSection />
      <CalendarDashboard />
    </div>
  );
};

export default Index;
