import React from 'react';
import { GraduationCap, BookOpen, Users, Laptop } from 'lucide-react';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-600 via-red-700 to-yellow-800 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated 3D Graduation Cap */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 animate-spin">
              <GraduationCap className="w-32 h-32 text-yellow-400 drop-shadow-2xl" />
            </div>
            <div className="absolute inset-0 animate-pulse">
              <div className="w-4 h-4 bg-white rounded-full absolute top-4 right-8 animate-ping"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full absolute bottom-8 left-6 animate-bounce"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full absolute top-12 left-4 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Floating Educational Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="animate-bounce" style={{ animationDelay: '0ms' }}>
            <BookOpen className="w-10 h-10 text-orange-300" />
          </div>
          <div className="animate-bounce" style={{ animationDelay: '200ms' }}>
            <Users className="w-10 h-10 text-yellow-300" />
          </div>
          <div className="animate-bounce" style={{ animationDelay: '400ms' }}>
            <Laptop className="w-10 h-10 text-red-300" />
          </div>
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-4">Student Portal</h2>
        <p className="text-orange-200 text-xl mb-8">Preparing your digital campus experience...</p>
        
        {/* Animated Progress Bar */}
        <div className="w-80 bg-white/20 rounded-full h-3 mx-auto mb-6">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 h-3 rounded-full animate-pulse"></div>
        </div>
        
        {/* Loading Text Animation */}
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        
        <p className="text-blue-300 mt-4 animate-pulse">Loading your academic dashboard...</p>
        <p className="text-orange-300 mt-4 animate-pulse">Loading your academic dashboard...</p>
      </div>
    </div>
  );
};

export default LoadingAnimation;