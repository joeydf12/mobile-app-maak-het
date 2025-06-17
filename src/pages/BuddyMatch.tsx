
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const BuddyMatch = () => {
  const navigate = useNavigate();

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
          <h1 className="text-xl font-semibold text-buddy-text-primary">Buddy Match</h1>
        </div>

        {/* Content */}
        <div className="text-center space-y-6 pt-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-buddy-text-primary">
              Je perfecte buddy zoeken...
            </h2>
            <p className="text-buddy-text-secondary">
              We verbinden je met iemand die om je geeft en je begrijpt. 
              Even geduld terwijl we je match zoeken.
            </p>
          </div>

          {/* Progress */}
          <div className="space-y-4">
            <Progress value={65} className="w-full" />
            <p className="text-sm text-buddy-text-light">Matching in uitvoering</p>
          </div>

          {/* Animation placeholder */}
          <div className="flex justify-center py-12">
            <div className="w-24 h-24 bg-buddy-blue/10 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-12 h-12 bg-buddy-blue/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-buddy-blue rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          <Button 
            onClick={() => navigate('/new-buddy')}
            className="w-full bg-buddy-blue hover:bg-buddy-blue-dark text-white py-6 rounded-xl"
          >
            Match gevonden! Bekijk je buddy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuddyMatch;
