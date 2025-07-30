import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TechnologySection from "@/components/TechnologySection";
import CalendarDashboard from "@/components/CalendarDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TechnologySection />
      <CalendarDashboard />
    </div>
  );
};

export default Index;
