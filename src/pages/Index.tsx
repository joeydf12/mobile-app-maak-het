
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Shield, Users } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Users,
      title: 'Verhoogde Ondersteuning',
      description: 'Verbind met iemand die begrijpt wat je doormaakt'
    },
    {
      icon: Heart,
      title: 'Verminderde Isolatie',
      description: 'Voel je minder alleen door regelmatige check-ins'
    },
    {
      icon: Shield,
      title: 'Veilige Ruimte voor Delen',
      description: 'Een vertrouwelijke omgeving om je ervaringen te delen'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-buddy-blue/5 to-buddy-gray-light p-6 flex flex-col">
      <div className="flex-1 flex flex-col justify-center space-y-8 max-w-md mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-3xl font-bold text-buddy-text-primary">
            Verbind met een Buddy
          </h1>
          <p className="text-buddy-text-secondary leading-relaxed">
            Doe mee aan ons buddy systeem om verbinding te maken met een peer voor wekelijkse check-ins, 
            het bevorderen van wederzijdse ondersteuning en het verminderen van barrières om hulp te zoeken. 
            Het is een vrijwillig initiatief ontworpen om welzijn en een gevoel van gemeenschap te bevorderen.
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-buddy-text-primary text-center">Voordelen</h2>
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white/80 backdrop-blur-sm animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="flex items-start space-x-4 p-4">
                  <div className="bg-buddy-blue/10 p-2 rounded-lg">
                    <benefit.icon className="w-5 h-5 text-buddy-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-buddy-text-primary">{benefit.title}</h3>
                    <p className="text-sm text-buddy-text-secondary mt-1">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Get Started Button */}
        <div className="space-y-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <Button 
            onClick={() => navigate('/buddy-match')}
            className="w-full bg-buddy-blue hover:bg-buddy-blue-dark text-white font-medium py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Ga aan de slag
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
