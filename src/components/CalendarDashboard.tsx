import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Check } from "lucide-react";
import { useState } from "react";

const CalendarDashboard = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  
  // Mock data for completed days
  const completedDays = [20, 21, 22];
  const currentDate = new Date();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  
  const generateCalendarDays = () => {
    const days = [];
    
    // Empty cells for days before first day of month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="w-12 h-12"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isCompleted = completedDays.includes(day);
      const isSelected = selectedDate === day;
      
      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(day)}
          className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
            isCompleted 
              ? 'bg-healthcare-primary text-white hover:bg-healthcare-accent' 
              : 'text-gray-600 hover:bg-gray-100'
          } ${
            isSelected ? 'ring-2 ring-healthcare-primary ring-offset-2' : ''
          }`}
        >
          {day}
        </button>
      );
    }
    
    return days;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            COMPLETE ONE QUESTION A DAY
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Progress Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-healthcare-primary rounded"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">EASY QUESTIONS</div>
                    <div className="text-xs text-gray-600">3/7</div>
                  </div>
                  <Check className="h-4 w-4 text-healthcare-primary ml-auto" />
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">MEDIUM QUESTIONS</div>
                    <div className="text-xs text-gray-600">0/7</div>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">HARD QUESTIONS</div>
                    <div className="text-xs text-gray-600">0/7</div>
                  </div>
                </div>
              </Card>

              <div className="pt-4">
                <div className="text-sm font-medium text-gray-900 mb-2">
                  You're on a 3-day streak!
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3].map((star) => (
                    <Star key={star} className="h-5 w-5 text-healthcare-primary fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="lg:col-span-3">
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-center text-xl font-bold text-gray-900">
                  {monthName} {currentDate.getFullYear()}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                {/* Week day headers */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {weekDays.map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-2">
                  {generateCalendarDays()}
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-sm text-gray-600 italic">
                    **Click on the calendar to receive your question for the day
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarDashboard;