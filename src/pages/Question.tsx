import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Download, LogOut, User, Lightbulb } from "lucide-react";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import healthcareLogo from "@/assets/healthcare-logo.png";

const Question = () => {
  const { date } = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(`SELECT *
FROM PUBLIC.DEMOGRAPHY
WHERE OCCUPATION = 'farmer';`);
  const [showHint, setShowHint] = useState(false);
  const [hasEvaluated, setHasEvaluated] = useState(false);

  const handleEvaluate = () => {
    setHasEvaluated(true);
    // Simulate evaluation logic
  };

  const handleDownloadDB = () => {
    // Simulate database download
    alert("Database download started! Check your downloads folder.");
  };

  const handleLogout = () => {
    navigate("/");
  };

  // Mock question data based on date
  const questionData = {
    title: `${date}. How many patients in this dataset are farmers?`,
    difficulty: "EASY",
    expectedResult: "23 patients",
    hint: "Use the COUNT(*) function with a WHERE clause to filter by occupation = 'farmer'"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/dashboard">
              <Button variant="ghost" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Dashboard</span>
              </Button>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link to="/profile">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Button>
              </Link>
              <Button 
                variant="healthcare-outline" 
                size="sm"
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {questionData.difficulty}
            </span>
            <span className="text-sm text-gray-500">
              Day {date} Challenge
            </span>
          </div>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 text-center">
              {questionData.title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Enter your query here
                </label>
                <Button
                  variant="healthcare-ghost"
                  size="sm"
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center space-x-1"
                >
                  <Lightbulb className="h-4 w-4" />
                  <span>{showHint ? "Hide Hint" : "Show Hint"}</span>
                </Button>
              </div>
              
              {showHint && (
                <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    💡 <strong>Hint:</strong> {questionData.hint}
                  </p>
                </div>
              )}

              <div className="relative">
                <Textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="min-h-[200px] font-mono text-sm p-4 border-2 border-gray-200 focus:border-healthcare-primary bg-gray-50"
                  placeholder="Write your SQL query here..."
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button 
                variant="healthcare" 
                size="lg" 
                className="px-12"
                onClick={handleEvaluate}
              >
                Evaluate
              </Button>
            </div>

            {hasEvaluated && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-green-800">Correct!</h3>
                </div>
                <p className="text-green-700">
                  Your query returned <strong>{questionData.expectedResult}</strong>. 
                  Great job! You've successfully completed today's challenge.
                </p>
                <div className="mt-4">
                  <Link to="/dashboard">
                    <Button variant="healthcare-outline">
                      Return to Dashboard
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                If you haven't downloaded the database,{" "}
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-healthcare-primary"
                  onClick={handleDownloadDB}
                >
                  click here to download it now
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Question;