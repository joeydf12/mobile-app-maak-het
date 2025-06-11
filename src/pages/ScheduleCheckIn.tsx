
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Bell, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Switch } from '@/components/ui/switch';

const ScheduleCheckIn = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [reminder, setReminder] = useState(true);
  const [withAI, setWithAI] = useState(false);

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const handleSchedule = () => {
    if (!selectedDate || !selectedTime) return;

    const scheduledCheckIn = {
      id: Date.now(),
      date: selectedDate.toISOString(),
      time: selectedTime,
      reminder,
      buddyType: withAI ? 'ai' : 'human',
      status: 'scheduled'
    };

    const existingSchedules = JSON.parse(localStorage.getItem('scheduledCheckIns') || '[]');
    existingSchedules.push(scheduledCheckIn);
    localStorage.setItem('scheduledCheckIns', JSON.stringify(existingSchedules));

    navigate('/management');
  };

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
          <h1 className="text-xl font-semibold text-buddy-text-primary">Check-in Plannen</h1>
        </div>

        {/* Calendar */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-medium text-buddy-text-primary mb-4 flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Kies een datum</span>
            </h3>
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < new Date()}
              className="rounded-md border-0"
            />
          </CardContent>
        </Card>

        {/* Time Selection */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-medium text-buddy-text-primary mb-4 flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Kies een tijd</span>
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  className={`${
                    selectedTime === time 
                      ? 'bg-buddy-blue text-white' 
                      : 'border-buddy-gray text-buddy-text-primary hover:bg-buddy-blue/5'
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Buddy Type Selection */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-medium text-buddy-text-primary mb-4">Met wie wil je de check-in doen?</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {withAI ? (
                  <Bot className="w-6 h-6 text-buddy-blue" />
                ) : (
                  <User className="w-6 h-6 text-buddy-blue" />
                )}
                <div>
                  <p className="font-medium text-buddy-text-primary">
                    {withAI ? 'AI Buddy' : 'Maya (Echte Buddy)'}
                  </p>
                  <p className="text-sm text-buddy-text-secondary">
                    {withAI 
                      ? 'Direct beschikbaar op het geplande moment'
                      : 'Afhankelijk van beschikbaarheid'
                    }
                  </p>
                </div>
              </div>
              <Switch
                checked={withAI}
                onCheckedChange={setWithAI}
              />
            </div>
          </CardContent>
        </Card>

        {/* Reminder Setting */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="w-6 h-6 text-buddy-blue" />
                <div>
                  <p className="font-medium text-buddy-text-primary">Herinnering</p>
                  <p className="text-sm text-buddy-text-secondary">
                    Ontvang een melding 15 minuten van tevoren
                  </p>
                </div>
              </div>
              <Switch
                checked={reminder}
                onCheckedChange={setReminder}
              />
            </div>
          </CardContent>
        </Card>

        {/* Schedule Button */}
        <Button 
          onClick={handleSchedule}
          disabled={!selectedDate || !selectedTime}
          className="w-full bg-buddy-blue hover:bg-buddy-blue-dark text-white py-6 rounded-xl disabled:opacity-50"
        >
          Check-in Plannen
        </Button>
      </div>
    </div>
  );
};

export default ScheduleCheckIn;
