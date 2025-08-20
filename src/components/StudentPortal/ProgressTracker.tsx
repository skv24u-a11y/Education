import React from 'react';
import { TrendingUp, Award, Calendar, Target, BookOpen, Clock } from 'lucide-react';

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

interface ProgressTrackerProps {
  studentData: StudentData;
  darkMode: boolean;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ studentData, darkMode }) => {
  const progressPercentage = (studentData.completedCredits / studentData.totalCredits) * 100;
  
  const subjects = [
    { name: 'Advanced Algorithms', progress: 85, grade: 'A-', credits: 3 },
    { name: 'Database Systems', progress: 92, grade: 'A', credits: 4 },
    { name: 'Software Engineering', progress: 78, grade: 'B+', credits: 3 },
    { name: 'Machine Learning', progress: 65, grade: 'B', credits: 4 },
    { name: 'Web Technologies', progress: 88, grade: 'A-', credits: 3 }
  ];

  const achievements = [
    { title: 'Perfect Attendance', description: '100% attendance for 3 months', icon: Calendar, color: 'text-green-600' },
    { title: 'Top Performer', description: 'Highest GPA in class', icon: Award, color: 'text-yellow-600' },
    { title: 'Quick Learner', description: 'Completed 5 courses ahead of schedule', icon: TrendingUp, color: 'text-blue-600' },
    { title: 'Assignment Master', description: 'Submitted all assignments on time', icon: Target, color: 'text-purple-600' }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-600 bg-green-100';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-100';
    if (grade.startsWith('C')) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Academic Progress */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Academic Progress</h3>
        
        {/* Overall Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Overall Completion</span>
            <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{Math.round(progressPercentage)}%</span>
          </div>
          <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3`}>
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>{studentData.completedCredits} credits completed</span>
            <span>{studentData.totalCredits} total credits</span>
          </div>
        </div>

        {/* Subject Progress */}
        <div className="space-y-4">
          <h4 className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>Current Subjects</h4>
          {subjects.map((subject, index) => (
            <div key={index} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="flex justify-between items-center mb-2">
                <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{subject.name}</span>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGradeColor(subject.grade)}`}>
                    {subject.grade}
                  </span>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {subject.credits} credits
                  </span>
                </div>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${subject.progress}%` }}
                ></div>
              </div>
              <div className="text-right mt-1">
                <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {subject.progress}% complete
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements & Goals */}
      <div className="space-y-6">
        {/* Achievements */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Recent Achievements</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} hover:shadow-md transition-shadow`}>
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                    <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Goals */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Weekly Goals</h3>
          
          <div className="space-y-4">
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Complete 3 Assignments
                  </span>
                </div>
                <span className="text-blue-600 font-semibold">2/3</span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>
            </div>

            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Study 20 Hours
                  </span>
                </div>
                <span className="text-green-600 font-semibold">15/20</span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Attend All Classes
                  </span>
                </div>
                <span className="text-purple-600 font-semibold">4/5</span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>

          <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
            Set New Goals
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;