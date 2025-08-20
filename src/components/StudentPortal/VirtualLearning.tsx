import React, { useState, useEffect } from 'react';
import { 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  Users, 
  MessageSquare, 
  Share, 
  Settings,
  Hand,
  Monitor,
  Volume2,
  VolumeX,
  Camera,
  Maximize,
  Minimize,
  FileText,
  Download,
  Upload,
  Bookmark,
  Clock,
  User,
  ChevronRight,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RotateCcw,
  Zap,
  BookOpen,
  Award,
  Target
} from 'lucide-react';

const VirtualLearning: React.FC = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Dr. Johnson', message: 'Welcome to today\'s lecture on Advanced Algorithms!', time: '10:00 AM', isInstructor: true },
    { id: 2, user: 'Sarah M.', message: 'Thank you professor, excited for today\'s topic!', time: '10:01 AM', isInstructor: false },
    { id: 3, user: 'Mike Chen', message: 'Could you please share the slides?', time: '10:02 AM', isInstructor: false }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [activeTab, setActiveTab] = useState('classroom');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const participants = [
    { id: 1, name: 'Dr. Sarah Johnson', role: 'Instructor', avatar: 'https://images.pexels.com/photos/3781529/pexels-photo-3781529.jpeg?auto=compress&cs=tinysrgb&w=100', isOnline: true, isSpeaking: true },
    { id: 2, name: 'Alex Johnson', role: 'Student', avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100', isOnline: true, isSpeaking: false },
    { id: 3, name: 'Sarah Martinez', role: 'Student', avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100', isOnline: true, isSpeaking: false },
    { id: 4, name: 'Mike Chen', role: 'Student', avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100', isOnline: true, isSpeaking: false },
    { id: 5, name: 'Emily Rodriguez', role: 'Student', avatar: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=100', isOnline: false, isSpeaking: false }
  ];

  const upcomingClasses = [
    { id: 1, title: 'Database Systems', time: '11:30 AM', instructor: 'Prof. Chen', duration: '90 min' },
    { id: 2, title: 'Web Development', time: '2:00 PM', instructor: 'Dr. Rodriguez', duration: '120 min' },
    { id: 3, title: 'Machine Learning', time: '4:00 PM', instructor: 'Dr. Thompson', duration: '90 min' }
  ];

  const resources = [
    { id: 1, title: 'Lecture Slides - Week 8', type: 'PDF', size: '2.4 MB', downloadUrl: '#' },
    { id: 2, title: 'Assignment Guidelines', type: 'PDF', size: '1.2 MB', downloadUrl: '#' },
    { id: 3, title: 'Code Examples', type: 'ZIP', size: '5.8 MB', downloadUrl: '#' },
    { id: 4, title: 'Reading Material', type: 'PDF', size: '3.1 MB', downloadUrl: '#' }
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: chatMessages.length + 1,
        user: 'You',
        message: newMessage,
        time: currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        isInstructor: false
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage('');
    }
  };

  const toggleVideo = () => setIsVideoOn(!isVideoOn);
  const toggleAudio = () => setIsAudioOn(!isAudioOn);
  const toggleHandRaise = () => setIsHandRaised(!isHandRaised);
  const toggleScreenShare = () => setIsScreenSharing(!isScreenSharing);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Video className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Advanced Algorithms - CS 401</h1>
              <p className="text-gray-400">Dr. Sarah Johnson • Live Session</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Live</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-screen">
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Video Area */}
          <div className="flex-1 bg-black relative">
            {/* Main Video */}
            <div className="h-full flex items-center justify-center">
              {isScreenSharing ? (
                <div className="w-full h-full bg-white flex items-center justify-center">
                  <div className="text-center">
                    <Monitor className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-700 mb-2">Screen Sharing Active</h3>
                    <p className="text-gray-500">Dr. Johnson is sharing their screen</p>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <img 
                    src="https://images.pexels.com/photos/3781529/pexels-photo-3781529.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Instructor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">
                    Dr. Sarah Johnson (Instructor)
                  </div>
                  {participants.find(p => p.isSpeaking) && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-lg flex items-center">
                      <Mic className="w-4 h-4 mr-2" />
                      Speaking
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Participant Videos */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {participants.slice(1, 4).map((participant) => (
                <div key={participant.id} className="relative">
                  <img 
                    src={participant.avatar}
                    alt={participant.name}
                    className="w-24 h-16 object-cover rounded-lg border-2 border-gray-600"
                  />
                  <div className="absolute bottom-1 left-1 text-white text-xs bg-black bg-opacity-50 px-1 rounded">
                    {participant.name.split(' ')[0]}
                  </div>
                  {!participant.isOnline && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                      <VideoOff className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-4">
                <button
                  onClick={toggleAudio}
                  className={`p-3 rounded-full transition-colors ${
                    isAudioOn ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {isAudioOn ? (
                    <Mic className="w-5 h-5 text-white" />
                  ) : (
                    <MicOff className="w-5 h-5 text-white" />
                  )}
                </button>
                
                <button
                  onClick={toggleVideo}
                  className={`p-3 rounded-full transition-colors ${
                    isVideoOn ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {isVideoOn ? (
                    <Video className="w-5 h-5 text-white" />
                  ) : (
                    <VideoOff className="w-5 h-5 text-white" />
                  )}
                </button>
                
                <button
                  onClick={toggleHandRaise}
                  className={`p-3 rounded-full transition-colors ${
                    isHandRaised ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  <Hand className="w-5 h-5 text-white" />
                </button>
                
                <button
                  onClick={toggleScreenShare}
                  className={`p-3 rounded-full transition-colors ${
                    isScreenSharing ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  <Share className="w-5 h-5 text-white" />
                </button>
                
                <button className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                  <Settings className="w-5 h-5 text-white" />
                </button>
                
                <button className="p-3 rounded-full bg-red-600 hover:bg-red-700 transition-colors">
                  <span className="text-white font-medium px-2">Leave</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-gray-700">
            <button
              onClick={() => setActiveTab('participants')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'participants' 
                  ? 'text-blue-400 border-b-2 border-blue-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4 inline mr-2" />
              Participants ({participants.length})
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'chat' 
                  ? 'text-blue-400 border-b-2 border-blue-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Chat
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'resources' 
                  ? 'text-blue-400 border-b-2 border-blue-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Resources
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-hidden">
            {/* Participants Tab */}
            {activeTab === 'participants' && (
              <div className="h-full overflow-y-auto p-4">
                <div className="space-y-3">
                  {participants.map((participant) => (
                    <div key={participant.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="relative">
                        <img 
                          src={participant.avatar}
                          alt={participant.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-800 ${
                          participant.isOnline ? 'bg-green-500' : 'bg-gray-500'
                        }`}></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-medium">{participant.name}</span>
                          {participant.role === 'Instructor' && (
                            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Host</span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">{participant.role}</p>
                      </div>
                      {participant.isSpeaking && (
                        <div className="text-green-400">
                          <Volume2 className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Tab */}
            {activeTab === 'chat' && (
              <div className="h-full flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {chatMessages.map((message) => (
                    <div key={message.id} className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-medium ${
                          message.isInstructor ? 'text-blue-400' : 'text-white'
                        }`}>
                          {message.user}
                        </span>
                        <span className="text-gray-500 text-xs">{message.time}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{message.message}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-700">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Type a message..."
                      className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={sendMessage}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Resources Tab */}
            {activeTab === 'resources' && (
              <div className="h-full overflow-y-auto p-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white font-medium mb-3">Class Materials</h3>
                    <div className="space-y-2">
                      {resources.map((resource) => (
                        <div key={resource.id} className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <FileText className="w-5 h-5 text-blue-400" />
                              <div>
                                <p className="text-white text-sm font-medium">{resource.title}</p>
                                <p className="text-gray-400 text-xs">{resource.type} • {resource.size}</p>
                              </div>
                            </div>
                            <button className="text-blue-400 hover:text-blue-300">
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium mb-3">Upload Assignment</h3>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Drop files here or click to upload</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Upcoming Classes Notification */}
      <div className="fixed bottom-4 left-4 bg-gray-800 border border-gray-700 rounded-lg p-4 max-w-sm">
        <h4 className="text-white font-medium mb-2">Upcoming Classes</h4>
        <div className="space-y-2">
          {upcomingClasses.slice(0, 2).map((classItem) => (
            <div key={classItem.id} className="flex items-center justify-between text-sm">
              <div>
                <p className="text-white">{classItem.title}</p>
                <p className="text-gray-400">{classItem.time} • {classItem.instructor}</p>
              </div>
              <button className="text-blue-400 hover:text-blue-300">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualLearning;