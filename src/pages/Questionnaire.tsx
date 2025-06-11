
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';

const Questionnaire = () => {
  const navigate = useNavigate();
  const [isAIBuddy, setIsAIBuddy] = useState(false);
  const [answers, setAnswers] = useState({
    interests: '',
    goals: '',
    experience: '',
    preferences: ''
  });

  const handleSubmit = () => {
    // Store questionnaire data
    localStorage.setItem('questionnaire', JSON.stringify({
      ...answers,
      buddyType: isAIBuddy ? 'ai' : 'human'
    }));
    navigate('/buddy-match');
  };

  const questions = [
    {
      id: 'interests',
      question: 'Wat zijn je interesses en hobby\'s?',
      placeholder: 'Beschrijf waar je van houdt en wat je graag doet...'
    },
    {
      id: 'goals',
      question: 'Wat zijn je doelen voor dit buddy programma?',
      placeholder: 'Wat hoop je te bereiken of te verbeteren...'
    },
    {
      id: 'experience',
      question: 'Heb je eerder ervaring met buddy programma\'s?',
      placeholder: 'Vertel over je eerdere ervaringen...'
    },
    {
      id: 'preferences',
      question: 'Zijn er specifieke voorkeuren die we moeten weten?',
      placeholder: 'Bijvoorbeeld tijdsvoorkeur, communicatiestijl...'
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
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
          <h1 className="text-xl font-semibold text-buddy-text-primary">Vragenlijst</h1>
        </div>

        {/* Buddy Type Selection */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-medium text-buddy-text-primary mb-4">Type Buddy</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {isAIBuddy ? (
                  <Bot className="w-6 h-6 text-buddy-blue" />
                ) : (
                  <User className="w-6 h-6 text-buddy-blue" />
                )}
                <div>
                  <p className="font-medium text-buddy-text-primary">
                    {isAIBuddy ? 'AI Buddy' : 'Echte Persoon'}
                  </p>
                  <p className="text-sm text-buddy-text-secondary">
                    {isAIBuddy 
                      ? 'Altijd beschikbaar, consistente ondersteuning'
                      : 'Menselijke verbinding en empathie'
                    }
                  </p>
                </div>
              </div>
              <Switch
                checked={isAIBuddy}
                onCheckedChange={setIsAIBuddy}
              />
            </div>
          </CardContent>
        </Card>

        {/* Questions */}
        <div className="space-y-4">
          {questions.map((q) => (
            <Card key={q.id} className="border-0 shadow-sm">
              <CardContent className="p-6 space-y-3">
                <h3 className="font-medium text-buddy-text-primary">{q.question}</h3>
                <Textarea 
                  placeholder={q.placeholder}
                  value={answers[q.id as keyof typeof answers]}
                  onChange={(e) => setAnswers(prev => ({
                    ...prev,
                    [q.id]: e.target.value
                  }))}
                  className="min-h-[80px] resize-none border-buddy-gray focus:border-buddy-blue"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Submit Button */}
        <Button 
          onClick={handleSubmit}
          className="w-full bg-buddy-blue hover:bg-buddy-blue-dark text-white py-6 rounded-xl"
        >
          Vragenlijst Voltooien
        </Button>
      </div>
    </div>
  );
};

export default Questionnaire;
