
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Chat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const messages = [
    {
      id: 1,
      sender: 'Liam',
      text: 'Hey Maya, hoe gaat je week tot nu toe?',
      time: '10:30',
      isMe: false
    },
    {
      id: 2,
      sender: 'Maya',
      text: 'Hoi Liam! Het is een beetje uitdagend geweest, maar ik red het wel. Hoe is het met jou?',
      time: '10:35',
      isMe: true
    }
  ];

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center space-x-4 max-w-md mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Avatar className="w-10 h-10">
            <AvatarImage src="/lovable-uploads/afc9962e-0add-4cac-a5e9-3b0beb8a058c.png" />
            <AvatarFallback className="bg-buddy-blue/10 text-buddy-blue">M</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="font-semibold text-buddy-text-primary">Maya</h1>
            <p className="text-sm text-buddy-text-secondary">Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 max-w-md mx-auto w-full">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
              msg.isMe 
                ? 'bg-buddy-blue text-white' 
                : 'bg-buddy-gray text-buddy-text-primary'
            }`}>
              <p>{msg.text}</p>
              <p className={`text-xs mt-1 ${
                msg.isMe ? 'text-blue-100' : 'text-buddy-text-light'
              }`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center space-x-2 max-w-md mx-auto">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type een bericht..."
            className="flex-1 rounded-full border-buddy-gray focus:border-buddy-blue"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="rounded-full bg-buddy-blue hover:bg-buddy-blue-dark text-white"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
