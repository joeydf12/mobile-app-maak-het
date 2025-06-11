
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Pause, X, Flag, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Management = () => {
  const navigate = useNavigate();

  const connectionOptions = [
    {
      icon: Pause,
      title: 'Verbinding Pauzeren',
      description: 'Stop tijdelijk check-ins met je buddy.',
      action: 'pause'
    },
    {
      icon: X,
      title: 'Verbinding Beëindigen',
      description: 'Beëindig de verbinding permanent met je buddy.',
      action: 'end'
    }
  ];

  const safetyOptions = [
    {
      icon: Flag,
      title: 'Probleem Melden',
      description: 'Meld eventuele problemen of zorgen over je buddy.',
      action: 'report'
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
          <h1 className="text-xl font-semibold text-buddy-text-primary">Beheer & Veiligheid</h1>
        </div>

        {/* Connection Management */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-buddy-text-primary flex items-center space-x-2">
            <Settings className="w-5 h-5" />
            <span>Verbinding Beheer</span>
          </h2>
          
          <div className="space-y-3">
            {connectionOptions.map((option, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-buddy-gray p-2 rounded-lg">
                      <option.icon className="w-5 h-5 text-buddy-text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-buddy-text-primary">{option.title}</h3>
                      <p className="text-sm text-buddy-text-secondary mt-1">{option.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety & Support */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-buddy-text-primary">Veiligheid & Ondersteuning</h2>
          
          <div className="space-y-3">
            {safetyOptions.map((option, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-50 p-2 rounded-lg">
                      <option.icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-buddy-text-primary">{option.title}</h3>
                      <p className="text-sm text-buddy-text-secondary mt-1">{option.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="border-buddy-blue bg-buddy-blue/5">
          <CardContent className="p-4 text-center">
            <h3 className="font-medium text-buddy-text-primary mb-2">Noodcontact</h3>
            <p className="text-sm text-buddy-text-secondary mb-4">
              Als je je in een crisissituatie bevindt, neem dan onmiddellijk contact op met professionele hulp.
            </p>
            <Button variant="outline" className="border-buddy-blue text-buddy-blue hover:bg-buddy-blue/10">
              Krijg Hulp Nu
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Management;
