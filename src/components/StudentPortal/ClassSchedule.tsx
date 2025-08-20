import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Video, 
  Users, 
  MapPin, 
  Bell, 
  Play,
  BookOpen,
  User,
  ChevronLeft,
  ChevronRight,
  Plus
} from 'lucide-react';

const ClassSchedule: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'week' | 'day'>('week');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const classes = [
    {
      id: 1,
      title: 'Advanced Algorithms',
      instructor: 'Dr. Sarah Johnson',
      time: '09:00',
      duration: 90,
      type: 'online',
      meetingLink: 'https://zoom.us/j/123456789',
      subject: 'CS 401',
      room: 'Virtual Room A',
      date: '2024-03-18',
      status: 'upcoming',
      attendees: 45,
      description: 'Dynamic programming and graph algorithms'
    },
    {
      id: 2,
      title: 'Software Engineering',
      instructor: 'Prof. Michael Chen',
      time: '11:00',
      duration: 120,
      type: 'hybrid',
      meetingLink: 'https://meet.google.com/abc-defg-hij',
      subject: 'CS 350',
      room: 'Room 201 / Virtual',
      date: '2024-03-18',
      status: 'live',
      attendees: 38,
      description: 'Agile development methodologies'
    },
    {
      id: 3,
      title: 'Database Systems',
      instructor: 'Dr. Emily Rodriguez',
      time: '14:00',
      duration: 90,
      type: 'offline',
      subject: 'CS 301',
      room: 'Lab 105',
      date: '2024-03-18',
      status: 'upcoming',
      attendees: 30,
      description: 'Advanced SQL queries and optimization'
    },
    {
      id: 4,
      title: 'Machine Learning',
      instructor: 'Dr. David Thompson',
      time: '16:00',
      duration: 90,
      type: 'online',
      meetingLink: 'https://teams.microsoft.com/l/meetup-join/xyz',
      subject: 'CS 405',
      room: 'Virtual Room B',
      date: '2024-03-18',
      status: 'upcoming',
      attendees: 42,
      description: 'Neural networks and deep learning'
    }
  ];

  const getTimeUntilClass = (classTime: string, classDate: string) => {
    const now = new Date();
    const classDateTime = new Date(`${classDate} ${classTime}`);
    const diffMs = classDateTime.getTime() - now.getTime();
    
    if (diffMs <= 0) return 'Started';
    
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    if (diffHours > 0) {
      return `${diffHours}h ${diffMinutes}m`;
    }
    return `${diffMinutes}m`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'online':
        return <Video className="w-5 h-5 text-blue-600" />;
      case 'offline':
        return <MapPin className="w-5 h-5 text-green-600" />;
      case 'hybrid':
        return <Users className="w-5 h-5 text-purple-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-gray-600" />;
    }
  };

  const formatTime = (time: string, duration: number) => {
    const startTime = new Date(`2024-01-01 ${time}`);
    const endTime = new Date(startTime.getTime() + duration * 60000);
    return `${startTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} - ${endTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Class Schedule</h1>
            <p className="text-indigo-100">Manage your classes and never miss a session</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
            <p className="text-indigo-100">{currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{classes.filter(c => c.status === 'upcoming').length}</p>
            <p className="text-sm text-indigo-100">Today's Classes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{classes.filter(c => c.status === 'live').length}</p>
            <p className="text-sm text-indigo-100">Live Now</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{classes.filter(c => c.type === 'online').length}</p>
            <p className="text-sm text-indigo-100">Online Classes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">95%</p>
            <p className="text-sm text-indigo-100">Attendance Rate</p>
          </div>
        </div>
      </div>

      {/* View Controls */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setViewMode('day')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'day' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Day View
            </button>
            <button
              onClick={() => setViewMode('week')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'week' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Week View
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <span className="font-semibold text-gray-900">
              {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Reminder</span>
          </button>
        </div>
      </div>

      {/* Today's Classes */}
      <div className="grid grid-cols-1 gap-6">
        {classes.map((classItem) => (
          <div key={classItem.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row justify-between items-start space-y-4 lg:space-y-0">
              {/* Class Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  {getTypeIcon(classItem.type)}
                  <h3 className="text-xl font-bold text-gray-900">{classItem.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(classItem.status)}`}>
                    {classItem.status === 'live' && (
                      <span className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                        LIVE
                      </span>
                    )}
                    {classItem.status === 'upcoming' && 'Upcoming'}
                    {classItem.status === 'completed' && 'Completed'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <User className="w-4 h-4 mr-2" />
                      <span>{classItem.instructor}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{formatTime(classItem.time, classItem.duration)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span>{classItem.subject}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{classItem.room}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{classItem.attendees} students</span>
                    </div>
                    {classItem.status === 'upcoming' && (
                      <div className="flex items-center text-blue-600 font-medium">
                        <Bell className="w-4 h-4 mr-2" />
                        <span>Starts in {getTimeUntilClass(classItem.time, classItem.date)}</span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{classItem.description}</p>
              </div>

              {/* Actions */}
              <div className="flex flex-col space-y-3 min-w-[200px]">
                {classItem.status === 'live' && (
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 animate-pulse">
                    <Play className="w-5 h-5" />
                    <span>Join Live Class</span>
                  </button>
                )}

                {classItem.status === 'upcoming' && classItem.meetingLink && (
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <Video className="w-5 h-5" />
                    <span>Join Class</span>
                  </button>
                )}

                {classItem.status === 'upcoming' && !classItem.meetingLink && (
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>View Location</span>
                  </button>
                )}

                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <Bell className="w-4 h-4" />
                  <span>Set Reminder</span>
                </button>

                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Class Materials</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Overview */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Weekly Overview</h2>
        
        <div className="grid grid-cols-7 gap-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={day} className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">{day}</h3>
              <div className="space-y-2">
                {index < 5 && (
                  <>
                    <div className="bg-blue-100 text-blue-800 p-2 rounded text-xs">
                      9:00 AM<br />Algorithms
                    </div>
                    <div className="bg-green-100 text-green-800 p-2 rounded text-xs">
                      2:00 PM<br />Database
                    </div>
                  </>
                )}
                {index === 5 && (
                  <div className="bg-purple-100 text-purple-800 p-2 rounded text-xs">
                    10:00 AM<br />Workshop
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;