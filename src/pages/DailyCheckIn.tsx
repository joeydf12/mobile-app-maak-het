import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Lightbulb, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const DailyCheckIn = () => {
  const navigate = useNavigate();
  const [checkInData, setCheckInData] = useState({
    mood: '',
    needs: '',
    notes: ''
  });

  const handleSave = () => {
    const today = new Date().toISOString().split('T')[0];
    const existingData = JSON.parse(localStorage.getItem('dailyCheckIns') || '{}');
    
    existingData[today] = {
      ...checkInData,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('dailyCheckIns', JSON.stringify(existingData));
    
    // Navigate back with success message
    navigate(-1);
  };

  const questions = [
    {
      id: 'mood',
      icon: Heart,
      title: 'Hoe voel je je vandaag?',
      placeholder: 'Beschrijf je huidige gemoedstoestand, energie niveau, en hoe je dag is verlopen...',
      value: checkInData.mood,
      onChange: (value: string) => setCheckInData(prev => ({ ...prev, mood: value }))
    },
    {
      id: 'needs',
      icon: Lightbulb,
      title: 'Wat heb je vandaag nodig?',
      placeholder: 'Welke ondersteuning, rust, activiteiten of middelen zou je vandaag helpen...',
      value: checkInData.needs,
      onChange: (value: string) => setCheckInData(prev => ({ ...prev, needs: value }))
    },
    {
      id: 'notes',
      icon: FileText,
      title: 'Persoonlijke notities',
      placeholder: 'Eventuele gedachten, doelen voor morgen, dankbaarheid, of andere reflecties...',
      value: checkInData.notes,
      onChange: (value: string) => setCheckInData(prev => ({ ...prev, notes: value }))
    }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-buddy-text-primary">Dagelijkse Check-In</h1>
        </div>

        {/* Date Display */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-buddy-text-primary">
            {new Date().toLocaleDateString('nl-NL', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h2>
          <p className="text-buddy-text-secondary mt-1">
            Neem even de tijd voor jezelf
          </p>
        </div>

        {/* Check-in Questions */}
        <div className="space-y-4">
          {questions.map((question) => (
            <Card key={question.id} className="border-0 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-buddy-blue/10 p-2 rounded-full mt-1">
                    <question.icon className="w-4 h-4 text-buddy-blue" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-medium text-buddy-text-primary">{question.title}</h3>
                    <Textarea 
                      placeholder={question.placeholder}
                      value={question.value}
                      onChange={(e) => question.onChange(e.target.value)}
                      className="min-h-[100px] resize-none border-buddy-gray focus:border-buddy-blue"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Save Button */}
        <Button 
          onClick={handleSave}
          className="w-full bg-buddy-blue hover:bg-buddy-blue-dark text-white py-6 rounded-xl"
        >
          Check-in Opslaan
        </Button>

        {/* Previous Check-ins Link */}
        <Button 
          variant="outline"
          onClick={() => navigate('/check-in-history')}
          className="w-full py-4 border-buddy-blue text-buddy-blue hover:bg-buddy-blue/5"
        >
          Vorige Check-ins Bekijken
        </Button>
      </div>
    </div>
  );
};

export default DailyCheckIn;
