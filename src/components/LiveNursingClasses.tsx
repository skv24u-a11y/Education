import React, { useState, useEffect } from 'react';
import { 
  Video, 
  Users, 
  Clock, 
  Calendar, 
  Play, 
  Mic, 
  MicOff,
  Camera,
  CameraOff,
  Hand,
  MessageSquare,
  Share,
  BookOpen,
  Heart,
  Stethoscope,
  Activity
} from 'lucide-react';

const LiveNursingClasses: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedClass, setSelectedClass] = useState<any>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const liveClasses = [
    {
      id: 1,
      title: 'Fundamentals of Nursing Care',
      instructor: 'Dr. Amina Hassan, RN, PhD',
      time: '10:00 AM',
      duration: '90 minutes',
      participants: 45,
      status: 'live',
      subject: 'Nursing Fundamentals',
      description: 'Basic nursing principles, patient care techniques, and clinical safety protocols',
      image: 'https://images.pexels.com/photos/3823204/pexels-photo-3823204.jpeg?auto=compress&cs=tinysrgb&w=400',
      topics: ['Patient Assessment', 'Vital Signs', 'Infection Control', 'Documentation']
    },
    {
      id: 2,
      title: 'Pharmacology for Nurses',
      instructor: 'Prof. Kwame Osei, PharmD, RN',
      time: '2:00 PM', // Changed from '2:00 PM' to '2:00 PM'
      duration: '120 minutes',
      participants: 38,
      status: 'starting-soon',
      subject: 'Pharmacology',
      description: 'Drug administration, dosage calculations, and medication safety in nursing practice',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400',
      topics: ['Drug Classifications', 'Dosage Calculations', 'Side Effects', 'Patient Education']
    },
    {
      id: 3,
      title: 'Maternal & Child Health Nursing',
      instructor: 'Dr. Fatou Kone, CNM, MSN',
      time: '4:00 PM', // Changed from '4:00 PM' to '4:00 PM'
      duration: '90 minutes',
      participants: 52,
      status: 'upcoming',
      subject: 'Maternal Health',
      description: 'Prenatal care, labor and delivery, postpartum care, and pediatric nursing essentials',
      image: 'https://images.pexels.com/photos/3823204/pexels-photo-3823204.jpeg?auto=compress&cs=tinysrgb&w=400',
      topics: ['Prenatal Care', 'Labor Support', 'Newborn Care', 'Breastfeeding']
    },
    {
      id: 4,
      title: 'Critical Care Nursing',
      instructor: 'Dr. Thabo Mthembu, CCRN, MSN',
      time: '6:00 PM', // Changed from '6:00 PM' to '6:00 PM'
      duration: '90 minutes',
      participants: 29,
      status: 'upcoming',
      subject: 'Critical Care',
      description: 'Advanced life support, ICU protocols, and critical patient monitoring techniques',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400',
      topics: ['Ventilator Management', 'Hemodynamic Monitoring', 'Emergency Protocols', 'Family Support']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'starting-soon':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'live':
        return <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>;
      case 'starting-soon':
        return <Clock className="w-4 h-4 mr-2" />;
      default:
        return <Calendar className="w-4 h-4 mr-2" />;
    }
  };

  const joinClass = (classItem: any) => {
    setSelectedClass(classItem);
  };

  if (selectedClass) {
    return (
      <div className="bg-gray-900 text-white min-h-screen">
        {/* Class Header */}
        <div className="bg-gray-800 border-b border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">{selectedClass.title}</h1>
                <p className="text-gray-400">{selectedClass.instructor}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-red-400">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">LIVE</span>
              </div>
              <button
                onClick={() => setSelectedClass(null)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Leave Class
              </button>
            </div>
          </div>
        </div>

        {/* Main Video Area */}
        <div className="flex h-screen">
          <div className="flex-1 relative">
            <img 
              src={selectedClass.image}
              alt="Live Class"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-20 h-20 text-white mb-4 mx-auto opacity-80" />
                <h2 className="text-2xl font-bold mb-2">{selectedClass.title}</h2>
                <p className="text-gray-200">Live nursing class in progress</p>
              </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-4">
                <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                  <Camera className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-yellow-600 hover:bg-yellow-700 transition-colors">
                  <Hand className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                  <Share className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Class Participants</h3>
                <span className="bg-gray-700 px-2 py-1 rounded text-sm">{selectedClass.participants}</span>
              </div>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {Array.from({ length: Math.min(selectedClass.participants, 8) }, (_, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm">
                    <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                    <span>Student {i + 1}</span>
                    {i === 0 && <span className="text-green-400 text-xs">(You)</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 p-4">
              <h3 className="font-semibold mb-4">Class Topics</h3>
              <div className="space-y-2">
                {selectedClass.topics.map((topic: string, index: number) => (
                  <div key={index} className="bg-gray-700 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Video className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">Live Nursing Classes</h2>
              <p className="text-red-100">Join interactive nursing sessions with expert instructors</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <p className="text-red-100 text-sm">{currentTime.toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Live Classes Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {liveClasses.map((classItem) => (
            <div key={classItem.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-full h-32 object-cover"
                />
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(classItem.status)} flex items-center`}>
                  {getStatusIcon(classItem.status)}
                  {classItem.status === 'live' ? 'LIVE NOW' : 
                   classItem.status === 'starting-soon' ? 'STARTING SOON' : 'UPCOMING'}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">{classItem.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{classItem.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{classItem.instructor}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{classItem.time} • {classItem.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{classItem.participants} participants</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {classItem.topics.slice(0, 2).map((topic, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                  {classItem.topics.length > 2 && (
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      +{classItem.topics.length - 2} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => joinClass(classItem)}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    classItem.status === 'live' 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : classItem.status === 'starting-soon'
                      ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {classItem.status === 'live' ? 'Join Live Class' : 
                   classItem.status === 'starting-soon' ? 'Join Soon' : 'Set Reminder'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Footer */}
      <div className="bg-gray-50 p-6 border-t">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Heart className="w-5 h-5 text-red-600" />
            <span className="text-sm font-medium text-gray-700">Interactive Learning</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Stethoscope className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Clinical Focus</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Activity className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Real-time Q&A</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <BookOpen className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Recorded Sessions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveNursingClasses;