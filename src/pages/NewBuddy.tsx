
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const NewBuddy = () => {
  const navigate = useNavigate();

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
          <h1 className="text-xl font-semibold text-buddy-text-primary">Nieuwe Buddy</h1>
        </div>

        {/* Buddy Profile */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center space-y-4">
            <Avatar className="w-24 h-24 mx-auto">
              <AvatarImage src="/lovable-uploads/afc9962e-0add-4cac-a5e9-3b0beb8a058c.png" />
              <AvatarFallback className="bg-buddy-blue/10 text-buddy-blue text-xl font-semibold">M</AvatarFallback>
            </Avatar>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-buddy-text-primary">Maya</h2>
              <p className="text-buddy-text-secondary">Je buddy voor deze week</p>
            </div>
            
            <div className="bg-buddy-gray-light p-4 rounded-lg">
              <p className="text-sm text-buddy-text-secondary leading-relaxed">
                Maya is een software engineer die houdt van wandelen en fotografie. 
                Ze kijkt ernaar uit om verbinding te maken en ervaringen te delen.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={() => navigate('/chat')}
            className="w-full bg-buddy-blue hover:bg-buddy-blue-dark text-white py-6 rounded-xl flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Stuur een Bericht</span>
          </Button>
          
          <Button 
            onClick={() => navigate('/schedule-check-in')}
            variant="outline"
            className="w-full py-6 rounded-xl border-buddy-blue text-buddy-blue hover:bg-buddy-blue/5 flex items-center justify-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Plan een Check-in</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewBuddy;
