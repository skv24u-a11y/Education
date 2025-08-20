import React, { useState, useEffect } from 'react';
import { 
  User, 
  BookOpen, 
  Calendar, 
  Upload, 
  MessageSquare, 
  Bell, 
  Award, 
  TrendingUp,
  Clock,
  FileText,
  Video,
  CreditCard,
  HelpCircle,
  Settings,
  Moon,
  Sun,
  Target,
  CheckCircle,
  AlertCircle,
  Play,
  Download,
  Star,
  BarChart3,
  GraduationCap,
  Zap,
  Heart,
  Monitor
} from 'lucide-react';
import WelcomeHero from './WelcomeHero';
import AdmissionTracker from './AdmissionTracker';
import AssignmentManager from './AssignmentManager';
import ClassSchedule from './ClassSchedule';
import QuizPortal from './QuizPortal';
import ProgressTracker from './ProgressTracker';
import NotificationCenter from './NotificationCenter';
import VirtualLearning from './VirtualLearning';

const Dashboard: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [notifications, setNotifications] = useState(3);

  const studentData = {
    name: 'Alex Johnson',
    id: 'STU2024001',
    program: 'Computer Science',
    semester: '6th Semester',
    avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
    gpa: 3.8,
    completedCredits: 85,
    totalCredits: 120,
    attendance: 92
  };

  const quickStats = [
    { label: 'Assignments Due', value: '3', color: 'text-orange-600', bgColor: 'bg-orange-100', icon: FileText },
    { label: 'Classes Today', value: '4', color: 'text-blue-600', bgColor: 'bg-blue-100', icon: Video },
    { label: 'Pending Fees', value: '$250', color: 'text-red-600', bgColor: 'bg-red-100', icon: CreditCard },
    { label: 'Quiz Score Avg', value: '87%', color: 'text-green-600', bgColor: 'bg-green-100', icon: Award }
  ];

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'admission', label: 'Admission', icon: GraduationCap },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'quizzes', label: 'Quizzes', icon: Award },
    { id: 'virtual-learning', label: 'Virtual Learning', icon: Monitor },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'support', label: 'Support', icon: HelpCircle }
  ];

  const motivationalQuotes = [
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill"
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'admission':
        return <AdmissionTracker />;
      case 'assignments':
        return <AssignmentManager />;
      case 'schedule':
        return <ClassSchedule />;
      case 'quizzes':
        return <QuizPortal />;
      case 'virtual-learning':
        return <VirtualLearning />;
      case 'overview':
      default:
        return (
          <div className="space-y-8">
            <WelcomeHero studentData={studentData} />
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>{stat.label}</p>
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                    <div className={`${stat.bgColor} p-3 rounded-full`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Overview */}
            <ProgressTracker studentData={studentData} darkMode={darkMode} />

            {/* Recent Activity & Upcoming */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Assignments */}
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Recent Assignments</h3>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'Database Design Project', subject: 'CS 301', due: '2 days', status: 'pending' },
                    { title: 'Machine Learning Report', subject: 'CS 405', due: '5 days', status: 'submitted' },
                    { title: 'Web Development Portfolio', subject: 'CS 350', due: '1 week', status: 'in-progress' }
                  ].map((assignment, index) => (
                    <div key={index} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} hover:shadow-md transition-shadow`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{assignment.title}</h4>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{assignment.subject}</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Due in {assignment.due}</p>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            assignment.status === 'submitted' ? 'bg-green-100 text-green-800' :
                            assignment.status === 'pending' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {assignment.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Today's Classes */}
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Today's Classes</h3>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">Full Schedule</button>
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'Advanced Algorithms', time: '09:00 AM', duration: '1h 30m', status: 'upcoming' },
                    { title: 'Software Engineering', time: '11:00 AM', duration: '2h', status: 'live' },
                    { title: 'Database Systems', time: '02:00 PM', duration: '1h 30m', status: 'upcoming' }
                  ].map((classItem, index) => (
                    <div key={index} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} hover:shadow-md transition-shadow`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{classItem.title}</h4>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{classItem.time} • {classItem.duration}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {classItem.status === 'live' && (
                            <span className="flex items-center text-red-600">
                              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse mr-2"></div>
                              Live
                            </span>
                          )}
                          <button className={`px-3 py-1 rounded-lg text-sm font-medium ${
                            classItem.status === 'live' 
                              ? 'bg-red-600 text-white hover:bg-red-700' 
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}>
                            {classItem.status === 'live' ? 'Join Now' : 'Set Reminder'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Motivational Quote */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-pink-300 mr-3" />
                <h3 className="text-xl font-bold">Daily Inspiration</h3>
              </div>
              <p className="text-lg italic leading-relaxed max-w-4xl mx-auto">
                {motivationalQuotes[currentQuote]}
              </p>
              <div className="flex justify-center mt-4 space-x-2">
                {motivationalQuotes.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentQuote ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-40`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Student Portal</h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Excellence Academy</p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <Bell className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? (
                  <Sun className="w-6 h-6 text-yellow-500" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-600" />
                )}
              </button>

              {/* Profile */}
              <div className="flex items-center space-x-3">
                <img
                  src={studentData.avatar}
                  alt={studentData.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="hidden md:block">
                  <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {studentData.name}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {studentData.id}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg sticky top-24`}>
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                        : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
                  Quick Actions
                </h4>
                <div className="space-y-2">
                  <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                    <Upload className="w-4 h-4" />
                    <span>Upload Assignment</span>
                  </button>
                  <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span>Submit Feedback</span>
                  </button>
                  <button className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg transition-colors">
                    <HelpCircle className="w-4 h-4" />
                    <span>Get Help</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;