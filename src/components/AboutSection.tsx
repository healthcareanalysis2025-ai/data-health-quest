import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Healthcare Analysis HQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering healthcare professionals and analysts with cutting-edge data analysis skills through daily practice and interactive learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-harvard-crimson/20">
            <CardContent className="p-6">
              <div className="text-harvard-crimson text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To democratize healthcare data analysis education by providing accessible, practical learning experiences that bridge the gap between theory and real-world application.
              </p>
            </CardContent>
          </Card>

          <Card className="border-harvard-crimson/20">
            <CardContent className="p-6">
              <div className="text-harvard-crimson text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3">Daily Learning</h3>
              <p className="text-muted-foreground">
                Master SQL and Python through carefully curated daily challenges designed specifically for healthcare data scenarios and real-world problem solving.
              </p>
            </CardContent>
          </Card>

          <Card className="border-harvard-crimson/20">
            <CardContent className="p-6">
              <div className="text-harvard-crimson text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Track your learning journey with detailed analytics, achievement badges, and streak counters that motivate consistent practice and skill development.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-card rounded-lg p-8 border border-harvard-crimson/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Healthcare Analysis HQ?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-harvard-crimson mr-2">✓</span>
                  Specialized focus on healthcare data analysis challenges
                </li>
                <li className="flex items-start">
                  <span className="text-harvard-crimson mr-2">✓</span>
                  Interactive SQL and Python learning environment
                </li>
                <li className="flex items-start">
                  <span className="text-harvard-crimson mr-2">✓</span>
                  Daily practice routine to build consistent skills
                </li>
                <li className="flex items-start">
                  <span className="text-harvard-crimson mr-2">✓</span>
                  Real-world healthcare datasets and scenarios
                </li>
                <li className="flex items-start">
                  <span className="text-harvard-crimson mr-2">✓</span>
                  Progress tracking and gamification features
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-harvard-crimson/10 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
                <span className="text-4xl">🏥</span>
              </div>
              <p className="text-lg font-semibold text-harvard-crimson">
                Building the future of healthcare analytics education
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;