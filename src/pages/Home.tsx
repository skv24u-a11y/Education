import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Users, 
  Globe, 
  Award, 
  BookOpen, 
  Heart, 
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Lightbulb,
  Stethoscope,
  Activity,
  Brain
} from 'lucide-react';
import LoadingAnimation from '../components/LoadingAnimation';
import AIStudyAssistant from '../components/AIStudyAssistant';
import VirtualCampusTour from '../components/VirtualCampusTour';
import LiveNursingClasses from '../components/LiveNursingClasses';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Set page title and description
  React.useEffect(() => {
    document.title = 'Matipa College of Nursing - Empowering African Nursing Excellence';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Matipa College of Nursing - Africa\'s leading online nursing college. Offering BSN, RN, and specialized nursing programs with world-class education, clinical training, and career support for African healthcare professionals.');
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: '15,000+', label: 'African Nursing Students', icon: Users },
    { number: '54', label: 'African Countries', icon: Globe },
    { number: '98%', label: 'Employment Rate', icon: Award },
    { number: '25+', label: 'Nursing Specializations', icon: BookOpen }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Personalized nursing education with AI tutoring and adaptive clinical scenarios'
    },
    {
      icon: Activity,
      title: 'Virtual Clinical Labs',
      description: 'State-of-the-art virtual reality nursing simulations and patient care training'
    },
    {
      icon: Globe,
      title: 'Pan-African Network',
      description: 'Connect with nursing students and healthcare professionals across all 54 African countries'
    },
    {
      icon: Stethoscope,
      title: 'Clinical Excellence',
      description: 'World-class nursing curriculum designed by leading African healthcare experts'
    }
  ];

  const programs = [
    {
      title: 'Bachelor of Science in Nursing (BSN)',
      duration: '4 Years',
      description: 'Comprehensive nursing degree for healthcare leadership',
      image: 'https://images.pexels.com/photos/7551544/pexels-photo-7551544.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Registered Nurse (RN) Program',
      duration: '2 Years',
      description: 'Fast-track program for nursing certification',
      image: 'https://images.pexels.com/photos/7551468/pexels-photo-7551468.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Nurse Practitioner (NP)',
      duration: '2.5 Years',
      description: 'Advanced practice nursing specialization',
      image: 'https://images.pexels.com/photos/7551522/pexels-photo-7551522.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Amina Hassan',
      role: 'Chief Nurse, Kenyatta National Hospital',
      image: 'https://images.pexels.com/photos/7551544/pexels-photo-7551544.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Matipa College of Nursing gave me the clinical skills and confidence to lead healthcare innovation in Kenya.',
      rating: 5
    },
    {
      name: 'Kwame Osei',
      role: 'Emergency Department Nurse, Ridge Hospital',
      image: 'https://images.pexels.com/photos/7551468/pexels-photo-7551468.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The virtual clinical training prepared me for real-world nursing challenges. I now save lives daily.',
      rating: 5
    },
    {
      name: 'Fatou Kone',
      role: 'Maternal Health Specialist, Mali',
      image: 'https://images.pexels.com/photos/7551522/pexels-photo-7551522.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The nursing program\'s focus on African healthcare helped me develop community health solutions.',
      rating: 5
    }
  ];

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-seafoam-400 via-seafoam-500 to-seafoam-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering African 
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent"> Nursing Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl text-seafoam-100 mb-8 leading-relaxed">
                Join Africa's premier online nursing college. World-class nursing education, clinical training, and career support for African healthcare professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/onboarding"
                  className="bg-gradient-to-r from-seafoam-500 to-seafoam-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-seafoam-600 hover:to-seafoam-700 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Start Your Nursing Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/programs"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-seafoam-600 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Explore Programs
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7551421/pexels-photo-7551421.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="African nursing students"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-seafoam-500 to-seafoam-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-seafoam-50 to-seafoam-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <stat.icon className="w-10 h-10 text-seafoam-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Matipa College of Nursing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of nursing education with our innovative approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-seafoam-100 to-seafoam-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-seafoam-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Nursing Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of nursing programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                  <div className="flex items-center text-seafoam-600 mb-3">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{program.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link
                    to="/programs"
                    className="text-seafoam-600 font-semibold hover:text-seafoam-700 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Study Assistant */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Nursing Study Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get personalized help with nursing concepts, study plans, and clinical scenarios
            </p>
          </div>
          <AIStudyAssistant />
        </div>
      </section>

      {/* Virtual Campus Tour */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Virtual Campus Tour
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our world-class online nursing facilities and learning environments
            </p>
          </div>
          <VirtualCampusTour />
        </div>
      </section>

      {/* Live Classes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Live Nursing Classes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join interactive nursing sessions with expert instructors from across Africa
            </p>
          </div>
          <LiveNursingClasses />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who are making a difference in African healthcare
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-seafoam-50 to-seafoam-100 rounded-2xl p-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-lg"
                />
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonials[currentTestimonial].rating }, (_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-seafoam-600 font-medium">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-seafoam-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-seafoam-600 to-seafoam-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform African Healthcare?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of nursing professionals who chose Matipa College of Nursing for their healthcare education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/onboarding"
              className="bg-white text-seafoam-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-seafoam-600 transition-all transform hover:scale-105"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;