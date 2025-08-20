import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Lightbulb, 
  BookOpen, 
  Clock, 
  Target,
  MessageSquare,
  Sparkles,
  Brain,
  TrendingUp
} from 'lucide-react';

const AIStudyAssistant: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your AI Nursing Study Assistant. I can help you with nursing concepts, study plans, clinical scenarios, and exam preparation. What would you like to learn today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    { icon: BookOpen, text: 'Nursing Fundamentals', color: 'bg-blue-100 text-blue-700' },
    { icon: Target, text: 'NCLEX Prep', color: 'bg-green-100 text-green-700' },
    { icon: Clock, text: 'Study Schedule', color: 'bg-orange-100 text-orange-700' },
    { icon: Brain, text: 'Clinical Scenarios', color: 'bg-purple-100 text-purple-700' }
  ];

  const sampleResponses = [
    "Great question! Let me explain the nursing process: Assessment, Diagnosis, Planning, Implementation, and Evaluation (ADPIE). This systematic approach ensures comprehensive patient care...",
    "For NCLEX preparation, I recommend focusing on these key areas: Pharmacology, Pathophysiology, and Clinical Decision Making. Let's create a study plan tailored to your needs...",
    "Clinical scenario: A 65-year-old patient presents with chest pain. As a nurse, your priority assessments would include vital signs, pain scale, and cardiac monitoring. Let's walk through this step by step...",
    "Medication administration requires the 5 Rights: Right Patient, Right Drug, Right Dose, Right Route, and Right Time. Additionally, consider the 6th and 7th rights: Right Documentation and Right Reason..."
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: randomResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickAction = (action: string) => {
    setInputMessage(`Tell me about ${action}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Bot className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1">AI Nursing Study Assistant</h2>
            <p className="text-purple-100">Your 24/7 personalized nursing education companion</p>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium">Powered by AI</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 bg-gray-50 border-b">
        <p className="text-sm font-medium text-gray-700 mb-3">Quick Study Topics:</p>
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action.text)}
              className={`${action.color} px-3 py-2 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity flex items-center space-x-2`}
            >
              <action.icon className="w-4 h-4" />
              <span>{action.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
              message.type === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {message.type === 'bot' && (
                <div className="flex items-center space-x-2 mb-2">
                  <Bot className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-medium text-purple-600">AI Assistant</span>
                </div>
              )}
              <p className="text-sm leading-relaxed">{message.content}</p>
              <p className={`text-xs mt-2 ${
                message.type === 'user' ? 'text-blue-200' : 'text-gray-500'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 px-4 py-3 rounded-2xl">
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4 text-purple-600" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex space-x-3">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask me about nursing concepts, study tips, or clinical scenarios..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
          >
            <Send className="w-5 h-5" />
            <span>Send</span>
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          AI responses are for educational purposes. Always consult official nursing guidelines and instructors.
        </p>
      </div>

      {/* Features Footer */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Personalized Learning</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">24/7 Availability</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Lightbulb className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-medium text-gray-700">Instant Explanations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStudyAssistant;