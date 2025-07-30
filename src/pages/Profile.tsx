import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, User, Star, Trophy, Target } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import healthcareLogo from "@/assets/healthcare-logo.png";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    occupation: "Healthcare Analyst",
    experience: "Intermediate",
    joinDate: "March 2024"
  });

  const stats = {
    totalQuestions: 45,
    streak: 3,
    completionRate: 78,
    favoriteCategory: "SQL"
  };

  const achievements = [
    { name: "First Steps", description: "Completed your first question", earned: true },
    { name: "Week Warrior", description: "7-day streak achieved", earned: true },
    { name: "SQL Master", description: "Completed 25 SQL questions", earned: true },
    { name: "Consistency King", description: "30-day streak", earned: false },
    { name: "Python Pro", description: "Completed 25 Python questions", earned: false }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save profile data logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-background border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/dashboard" className="flex items-center space-x-3">
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
            
            <Link to="/dashboard">
              <Button variant="ghost" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Dashboard</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile Information</span>
                </CardTitle>
                <Button
                  variant={isEditing ? "healthcare" : "healthcare-outline"}
                  size="sm"
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                >
                  {isEditing ? "Save" : "Edit"}
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input
                    id="occupation"
                    value={profileData.occupation}
                    onChange={(e) => setProfileData({...profileData, occupation: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label htmlFor="experience">Experience Level</Label>
                  <Input
                    id="experience"
                    value={profileData.experience}
                    onChange={(e) => setProfileData({...profileData, experience: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label>Member Since</Label>
                  <Input value={profileData.joinDate} disabled />
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg border ${
                        achievement.earned
                          ? "bg-healthcare-light border-healthcare-primary"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          achievement.earned
                            ? "bg-healthcare-primary text-white"
                            : "bg-gray-300 text-gray-500"
                        }`}
                      >
                        <Trophy className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{achievement.name}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Your Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-healthcare-primary">
                    {stats.totalQuestions}
                  </div>
                  <div className="text-sm text-gray-600">Questions Completed</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-healthcare-primary flex items-center justify-center space-x-1">
                    <span>{stats.streak}</span>
                    <Star className="h-6 w-6" />
                  </div>
                  <div className="text-sm text-gray-600">Day Streak</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-healthcare-primary">
                    {stats.completionRate}%
                  </div>
                  <div className="text-sm text-gray-600">Completion Rate</div>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    {stats.favoriteCategory}
                  </div>
                  <div className="text-sm text-gray-600">Favorite Category</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-healthcare-light">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="font-semibold text-healthcare-primary mb-2">
                    Keep Going!
                  </h3>
                  <p className="text-sm text-gray-600">
                    You're doing great! Complete today's question to extend your streak.
                  </p>
                  <Link to="/dashboard" className="mt-4 block">
                    <Button variant="healthcare" size="sm" className="w-full">
                      Continue Learning
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;