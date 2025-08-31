import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  RotateCcw,
  MapPin,
  Users,
  BookOpen,
  Microscope,
  Heart,
  GraduationCap
} from 'lucide-react';

const VirtualCampusTour: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const campusLocations = [
    {
      id: 1,
      name: 'Virtual Nursing Simulation Lab',
      description: 'State-of-the-art virtual reality nursing simulation lab where students practice clinical procedures in a safe, controlled environment.', // Changed from 'State-of-the-art virtual reality nursing simulation lab where students practice clinical procedures in a safe, controlled environment.' to 'State-of-the-art virtual reality nursing simulation lab where students practice clinical procedures in a safe, controlled environment.'
      image: 'https://images.pexels.com/photos/3823204/pexels-photo-3823204.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Microscope,
      features: ['VR Patient Simulators', '3D Anatomy Models', 'Clinical Scenario Training', 'Real-time Feedback']
    },
    {
      id: 2,
      name: 'Digital Learning Commons',
      description: 'Interactive online learning spaces where nursing students collaborate, study, and access digital resources 24/7.', // Changed from 'Interactive online learning spaces where nursing students collaborate, study, and access digital resources 24/7.' to 'Interactive online learning spaces where nursing students collaborate, study, and access digital resources 24/7.'
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: BookOpen,
      features: ['Digital Library', 'Study Groups', 'Peer Tutoring', 'Research Resources']
    },
    {
      id: 3,
      name: 'Virtual Clinical Training Center',
      description: 'Advanced clinical training facility with virtual patients and real-world healthcare scenarios for hands-on nursing practice.', // Changed from 'Advanced clinical training facility with virtual patients and real-world healthcare scenarios for hands-on nursing practice.' to 'Advanced clinical training facility with virtual patients and real-world healthcare scenarios for hands-on nursing practice.'
      image: 'https://images.pexels.com/photos/3823204/pexels-photo-3823204.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Heart,
      features: ['Patient Care Simulations', 'Emergency Scenarios', 'Medication Administration', 'Clinical Assessment']
    },
    {
      id: 4,
      name: 'Student Success Center',
      description: 'Comprehensive support hub providing academic advising, career counseling, and wellness resources for nursing students.', // Changed from 'Comprehensive support hub providing academic advising, career counseling, and wellness resources for nursing students.' to 'Comprehensive support hub providing academic advising, career counseling, and wellness resources for nursing students.'
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Users,
      features: ['Academic Advising', 'Career Services', 'Mental Health Support', 'Financial Aid Guidance']
    },
    {
      id: 5,
      name: 'Virtual Graduation Hall',
      description: 'Celebrate your nursing achievements in our beautiful virtual graduation ceremony space, connecting nursing graduates worldwide.',
      image: 'https://images.pexels.com/photos/3823204/pexels-photo-3823204.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: GraduationCap,
      features: ['Live Ceremonies', 'Family Viewing', 'Digital Diplomas', 'Alumni Network']
    }
  ];

  const nextLocation = () => {
    setCurrentLocation((prev) => (prev + 1) % campusLocations.length);
  };

  const prevLocation = () => {
    setCurrentLocation((prev) => (prev - 1 + campusLocations.length) % campusLocations.length);
  };

  const current = campusLocations[currentLocation];

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Virtual Campus Tour</h2>
            <p className="text-blue-100">Explore our world-class online nursing facilities</p>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-6 h-6" />
            <span className="font-medium">{currentLocation + 1} of {campusLocations.length}</span>
          </div>
        </div>
      </div>

      {/* Main Tour Area */}
      <div className="relative">
        <img 
          src={current.image} 
          alt={current.name}
          className="w-full h-96 object-cover"
        />
        
        {/* Overlay Controls */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 p-4 rounded-full transition-all transform hover:scale-110"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-blue-600" />
              ) : (
                <Play className="w-8 h-8 text-blue-600" />
              )}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full transition-all"
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-gray-600" />
              ) : (
                <Volume2 className="w-6 h-6 text-gray-600" />
              )}
            </button>
            <button className="bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full transition-all">
              <Maximize className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Location Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <current.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{current.name}</h3>
              <p className="text-gray-600 text-sm">{current.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features & Navigation */}
      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {current.features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
              <p className="text-sm font-medium text-gray-700">{feature}</p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevLocation}
            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg font-medium transition-colors"
          >
            ← Previous
          </button>
          
          <div className="flex space-x-2">
            {campusLocations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentLocation(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentLocation ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextLocation}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default VirtualCampusTour;