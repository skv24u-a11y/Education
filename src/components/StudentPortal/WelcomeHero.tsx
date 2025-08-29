import React from 'react';
import { GraduationCap, TrendingUp, Calendar, Award, Zap } from 'lucide-react';

interface StudentData {
  name: string;
  id: string;
  program: string;
  semester: string;
  avatar: string;
  gpa: number;
  completedCredits: number;
  totalCredits: number;
  attendance: number;
}

interface WelcomeHeroProps {
  studentData: StudentData;
}

const WelcomeHero: React.FC<WelcomeHeroProps> = ({ studentData }) => {
  const progressPercentage = (studentData.completedCredits / studentData.totalCredits) * 100;

  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Welcome Message */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={studentData.avatar}
              alt={studentData.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white/20 shadow-lg"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, {studentData.name.split(' ')[0]}! 👋
              </h1>
              <p className="text-blue-100 text-lg">
                Ready to continue your learning journey?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <GraduationCap className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
              <p className="text-2xl font-bold">{studentData.gpa}</p>
              <p className="text-sm text-blue-100">Current GPA</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <p className="text-2xl font-bold">{studentData.attendance}%</p>
              <p className="text-sm text-blue-100">Attendance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-orange-400" />
              <p className="text-2xl font-bold">{studentData.semester}</p>
              <p className="text-sm text-blue-100">Current</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-pink-400" />
              <p className="text-2xl font-bold">{Math.round(progressPercentage)}%</p>
              <p className="text-sm text-blue-100">Complete</p>
            </div>
          </div>
        </div>

        {/* Progress Circle */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 144 144">
              <circle
                cx="72"
                cy="72"
                r="60"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="72"
                cy="72"
                r="60"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 60}`}
                strokeDashoffset={`${2 * Math.PI * 60 * (1 - progressPercentage / 100)}`}
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold">{studentData.completedCredits}</p>
                <p className="text-sm text-blue-100">of {studentData.totalCredits}</p>
                <p className="text-xs text-blue-200">Credits</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="relative z-10 flex flex-wrap gap-4 mt-8">
        <button className="bg-white text-cyan-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center space-x-2">
          <Zap className="w-5 h-5" />
          <span>Quick Quiz</span>
        </button>
        <button className="bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600 transition-all transform hover:scale-105 flex items-center space-x-2">
          <Calendar className="w-5 h-5" />
          <span>Join Live Class</span>
        </button>
        <button className="bg-cyan-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-500 transition-all transform hover:scale-105 flex items-center space-x-2">
          <Award className="w-5 h-5" />
          <span>View Achievements</span>
        </button>
      </div>
    </div>
  );
};

export default WelcomeHero;