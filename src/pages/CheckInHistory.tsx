
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CheckInHistory = () => {
  const navigate = useNavigate();
  
  // Get check-in history from localStorage
  const checkInHistory = JSON.parse(localStorage.getItem('dailyCheckIns') || '{}');
  const historyEntries = Object.entries(checkInHistory).sort(([a], [b]) => b.localeCompare(a));

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
          <h1 className="text-xl font-semibold text-buddy-text-primary">Check-in Geschiedenis</h1>
        </div>

        {/* History List */}
        <div className="space-y-4">
          {historyEntries.length === 0 ? (
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-buddy-text-light mx-auto mb-4" />
                <p className="text-buddy-text-secondary">
                  Nog geen check-ins uitgevoerd.
                </p>
                <Button 
                  onClick={() => navigate('/daily-check-in')}
                  className="mt-4 bg-buddy-blue hover:bg-buddy-blue-dark text-white"
                >
                  Eerste Check-in Doen
                </Button>
              </CardContent>
            </Card>
          ) : (
            historyEntries.map(([date, data]: [string, any]) => (
              <Card key={date} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-buddy-blue/10 p-2 rounded-full">
                      <Calendar className="w-5 h-5 text-buddy-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-buddy-text-primary">
                        {new Date(date).toLocaleDateString('nl-NL', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </h3>
                      <div className="mt-2 space-y-2">
                        {data.mood && (
                          <div>
                            <p className="text-sm font-medium text-buddy-text-secondary">Gevoel:</p>
                            <p className="text-sm text-buddy-text-primary">{data.mood}</p>
                          </div>
                        )}
                        {data.needs && (
                          <div>
                            <p className="text-sm font-medium text-buddy-text-secondary">Behoeften:</p>
                            <p className="text-sm text-buddy-text-primary">{data.needs}</p>
                          </div>
                        )}
                        {data.notes && (
                          <div>
                            <p className="text-sm font-medium text-buddy-text-secondary">Notities:</p>
                            <p className="text-sm text-buddy-text-primary">{data.notes}</p>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-buddy-text-light mt-2">
                        {new Date(data.timestamp).toLocaleTimeString('nl-NL')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckInHistory;
