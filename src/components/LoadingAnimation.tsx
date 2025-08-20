import React from 'react';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Animated Books */}
          <div className="flex justify-center space-x-4 mb-6">
            <BookOpen className="w-12 h-12 text-white animate-bounce" style={{ animationDelay: '0ms' }} />
            <BookOpen className="w-12 h-12 text-green-400 animate-bounce" style={{ animationDelay: '200ms' }} />
            <BookOpen className="w-12 h-12 text-orange-400 animate-bounce" style={{ animationDelay: '400ms' }} />
          </div>
          
          {/* Graduation Cap */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <GraduationCap className="w-16 h-16 text-yellow-400 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>
          
          {/* Students Icon */}
          <div className="flex justify-center">
            <Users className="w-10 h-10 text-white animate-pulse" style={{ animationDelay: '600ms' }} />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">Excellence Academy</h2>
        <p className="text-blue-200 text-lg mb-6">Preparing tomorrow's leaders today</p>
        
        {/* Loading bar */}
        <div className="w-64 bg-blue-800 rounded-full h-2 mx-auto">
          <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full animate-pulse"></div>
        </div>
        
        <p className="text-blue-300 mt-4 animate-pulse">Loading your educational journey...</p>
      </div>
    </div>
  );
};

export default LoadingAnimation;