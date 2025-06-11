
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Chat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Maya',
      text: 'Hoi! Ik ben Maya, je buddy. Hoe gaat het vandaag met je?',
      time: '10:30',
      isMe: false,
      isAI: false
    },
    {
      id: 2,
      sender: 'Jij',
      text: 'Hallo Maya! Het gaat wel oké, maar ik voel me een beetje gestrest.',
      time: '10:35',
      isMe: true,
      isAI: false
    },
    {
      id: 3,
      sender: 'Maya',
      text: 'Dat begrijp ik. Wil je erover praten? Soms helpt het om te delen wat je bezighoudt.',
      time: '10:37',
      isMe: false,
      isAI: false
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Get buddy type from questionnaire
  const questionnaire = JSON.parse(localStorage.getItem('questionnaire') || '{"buddyType": "human"}');
  const isAIBuddy = questionnaire.buddyType === 'ai';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'Jij',
        text: message.trim(),
        time: new Date().toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' }),
        isMe: true,
        isAI: false
      };
      
      setMessages(prev => [...prev, newMessage]);
      setMessage('');

      // Simulate response (in real app this would be API call)
      setTimeout(() => {
        const responses = [
          "Dank je voor het delen. Dat klinkt inderdaad uitdagend.",
          "Ik begrijp je gevoel. Hoe kan ik je het beste ondersteunen?",
          "Je doet het goed door hierover te praten.",
          "Wat denk je dat zou helpen in deze situatie?"
        ];
        
        const responseMessage = {
          id: messages.length + 2,
          sender: isAIBuddy ? 'AI Buddy' : 'Maya',
          text: responses[Math.floor(Math.random() * responses.length)],
          time: new Date().toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' }),
          isMe: false,
          isAI: isAIBuddy
        };
        
        setMessages(prev => [...prev, responseMessage]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
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
            {isAIBuddy ? (
              <AvatarFallback className="bg-buddy-blue/10 text-buddy-blue">
                <Bot className="w-5 h-5" />
              </AvatarFallback>
            ) : (
              <>
                <AvatarImage src="/lovable-uploads/afc9962e-0add-4cac-a5e9-3b0beb8a058c.png" />
                <AvatarFallback className="bg-buddy-blue/10 text-buddy-blue">M</AvatarFallback>
              </>
            )}
          </Avatar>
          <div className="flex-1">
            <h1 className="font-semibold text-buddy-text-primary">
              {isAIBuddy ? 'AI Buddy' : 'Maya'}
            </h1>
            <p className="text-sm text-buddy-text-secondary">
              {isAIBuddy ? 'Altijd beschikbaar' : 'Online'}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 max-w-md mx-auto w-full overflow-y-auto">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
              msg.isMe 
                ? 'bg-buddy-blue text-white' 
                : msg.isAI
                ? 'bg-purple-100 text-buddy-text-primary border border-purple-200'
                : 'bg-buddy-gray text-buddy-text-primary'
            }`}>
              {msg.isAI && (
                <div className="flex items-center space-x-1 mb-1">
                  <Bot className="w-3 h-3" />
                  <span className="text-xs font-medium">AI</span>
                </div>
              )}
              <p>{msg.text}</p>
              <p className={`text-xs mt-1 ${
                msg.isMe ? 'text-blue-100' : 'text-buddy-text-light'
              }`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center space-x-2 max-w-md mx-auto">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type een bericht..."
            className="flex-1 rounded-full border-buddy-gray focus:border-buddy-blue"
          />
          <Button
            onClick={handleSend}
            size="icon"
            disabled={!message.trim()}
            className="rounded-full bg-buddy-blue hover:bg-buddy-blue-dark text-white disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
