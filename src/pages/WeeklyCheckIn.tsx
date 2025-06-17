import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const WeeklyCheckIn = () => {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      question: 'Hoe voel je je echt?',
      placeholder: 'Deel je huidige staat van zijn...'
    },
    {
      id: 2,
      question: 'Wat heb je deze week nodig?',
      placeholder: 'Welke ondersteuning of middelen heb je nodig?'
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
          <h1 className="text-xl font-semibold text-buddy-text-primary">Wekelijkse Check-In</h1>
        </div>

        {/* Check-in Questions */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-buddy-text-primary">Check-In Vragen</h2>
          </div>

          {questions.map((q) => (
            <Card key={q.id} className="border-0 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-buddy-blue/10 p-2 rounded-full mt-1">
                    <HelpCircle className="w-4 h-4 text-buddy-blue" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-medium text-buddy-text-primary">{q.question}</h3>
                    <Textarea 
                      placeholder={q.placeholder}
                      className="min-h-[80px] resize-none border-buddy-gray focus:border-buddy-blue"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chat Section */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-medium text-buddy-text-primary mb-4">Chat</h3>
            <div className="space-y-4">
              <div className="bg-buddy-gray-light p-3 rounded-lg">
                <p className="text-sm text-buddy-text-secondary">Liam</p>
                <p className="text-buddy-text-primary mt-1">Hey Maya, hoe gaat je week tot nu toe?</p>
              </div>
              <div className="bg-buddy-blue/10 p-3 rounded-lg ml-8">
                <p className="text-sm text-buddy-text-secondary">Maya</p>
                <p className="text-buddy-text-primary mt-1">
                  Hoi Liam! Het is een beetje uitdagend geweest, maar ik red het wel. 
                  Hoe is het met jou?
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button 
          className="w-full bg-buddy-blue hover:bg-buddy-blue-dark text-white py-6 rounded-xl"
        >
          Check-in Voltooien
        </Button>
      </div>
    </div>
  );
};

export default WeeklyCheckIn;
