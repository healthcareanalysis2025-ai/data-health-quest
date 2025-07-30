import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Download, LogOut } from "lucide-react";
import { useState } from "react";

const QuestionInterface = () => {
  const [query, setQuery] = useState(`SELECT *
FROM PUBLIC.DEMOGRAPHY
WHERE OCCUPATION = 'farmer';`);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Button variant="ghost" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Button>
            
            <Button variant="healthcare-outline" className="flex items-center space-x-2">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 text-center">
              1. How many patients in this dataset are farmers?
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Enter your query here
              </label>
              
              <div className="relative">
                <Textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="min-h-[200px] font-mono text-sm p-4 border-2 border-gray-200 focus:border-healthcare-primary"
                  placeholder="Write your SQL query here..."
                />
                
                {/* Syntax highlighting overlay could be added here */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <div className="font-mono text-sm space-y-1">
                    <div>
                      <span className="text-blue-600">SELECT</span>{" "}
                      <span className="text-gray-800">*</span>
                    </div>
                    <div>
                      <span className="text-blue-600">FROM</span>{" "}
                      <span className="text-gray-800">PUBLIC.</span>
                      <span className="text-purple-600">DEMOGRAPHY</span>
                    </div>
                    <div>
                      <span className="text-blue-600">WHERE</span>{" "}
                      <span className="text-gray-800">OCCUPATION = </span>
                      <span className="text-green-600">'farmer'</span>
                      <span className="text-gray-800">;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button variant="healthcare" size="lg" className="px-12">
                Evaluate
              </Button>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                If you haven't downloaded the database,{" "}
                <Button variant="link" className="p-0 h-auto text-healthcare-primary">
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

export default QuestionInterface;