import React from 'react';
import { Link } from 'react-router-dom';
import VirtualCampusTour from '../components/VirtualCampusTour';
import AIStudyAssistant from '../components/AIStudyAssistant';
import LiveNursingClasses from '../components/LiveNursingClasses';
import { 
  BookOpen, 
  Users, 
  Award, 
  Globe, 
  Play, 
  ArrowRight, 
  Star,
  Calendar,
  Clock,
  CheckCircle,
  TrendingUp,
  UserPlus,
  Heart
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Clinical Excellence',
      description: 'Comprehensive nursing curriculum with hands-on clinical training'
    },
    {
      icon: Users,
      title: 'Expert Nursing Faculty',
      description: 'Learn from experienced nurses and healthcare professionals'
    },
    {
      icon: Globe,
      title: 'Sierra Leone  Healthcare Network',
      description: 'Connect with nursing students from all 54 African countries'
    },
    {
      icon: Award,
      title: 'Accredited Nursing Programs',
      description: 'Internationally recognized nursing degrees and certifications'
    }
  ];

  const stats = [
    { number: '8,500+', label: 'Nursing Students' },
    { number: '96%', label: 'Healthcare Job Placement' },
    { number: '150+', label: 'Clinical Instructors' },
    { number: '50+', label: 'Countries Represented' }
  ];

  const blogPosts = [
    {
      title: 'The Future of Nursing Education in Africa',
      excerpt: 'Discover how technology is reshaping nursing education and creating new opportunities for healthcare professionals across Africa.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/7551544/pexels-photo-7551544.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Clinical Skills for African Nurses',
      excerpt: 'Essential clinical skills and techniques to help you excel in nursing practice and provide quality healthcare.',
      date: 'March 12, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/7551468/pexels-photo-7551468.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Healthcare Career Opportunities in Africa',
      excerpt: 'Explore the growing healthcare career opportunities across Africa and how our nursing programs prepare you for success.',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/7551522/pexels-photo-7551522.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-500 via-cyan-600 to-emerald-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        {/* African Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-cyan-300 rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-teal-400 transform rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 bg-cyan-400 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 border-4 border-cyan-300 transform rotate-12"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Unlock Your Potential with 
                <span className="text-emerald-300 drop-shadow-lg"> Matipa College of Nursing</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-teal-100 leading-relaxed">
                Join thousands of African nursing students at Matipa College of Nursing in our innovative healthcare learning environment. 
                Get access to world-class nursing education, clinical training, and healthcare career opportunities designed for African excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/onboarding"
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Jiunge Sasa (Join Now)
                </Link>
                <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                  Start Free Quiz
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105">
                  Explore Our Blog
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="African nursing students in clinical training"
                className="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-yellow-400"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-900 p-4 rounded-lg shadow-xl">
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-teal-400 to-emerald-400 text-gray-900 p-4 rounded-lg shadow-xl">
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/393rK7nD/generated-image.png"
                    alt="Matipa College of Nursing"
                    className="w-6 h-6 mr-2 rounded"
                  />
                  <span className="font-semibold">4.9/5 Student Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-teal-400 rounded-full opacity-30 animate-pulse"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
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
              We provide an exceptional nursing education experience tailored for African students with cutting-edge clinical resources and dedicated support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group hover:transform hover:scale-105">
                <div className="bg-gradient-to-r from-teal-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-teal-600 group-hover:to-emerald-600 transition-all">
                  <feature.icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Classroom Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Experience Our Virtual Nursing Labs
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join interactive online nursing classes with virtual clinical simulations, real-time collaboration tools, and personalized learning paths designed for healthcare excellence.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Live clinical simulations with expert nursing instructors</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Collaborative case studies and peer-to-peer clinical learning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>24/7 access to recorded clinical procedures and nursing materials</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
                <button className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                  Join Free Webinar
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7551421/pexels-photo-7551421.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="African nursing students in virtual clinical training"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-teal-600 bg-opacity-20 rounded-lg flex items-center justify-center">
                <div className="bg-white bg-opacity-90 p-4 rounded-full">
                  <Play className="w-12 h-12 text-teal-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Nursing Classes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Live Nursing Classes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Participate in real-time nursing education with expert instructors and fellow students
            </p>
          </div>
          <LiveNursingClasses />
        </div>
      </section>

      {/* AI Study Assistant */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Personal AI Nursing Tutor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant help with nursing concepts, study plans, and clinical scenarios 24/7
            </p>
          </div>
          <AIStudyAssistant />
        </div>
      </section>

      {/* Assignment System Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Clinical Assignment Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined clinical assignment submission, case study evaluation, and detailed feedback system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-gradient-to-r from-teal-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Upload</h3>
              <p className="text-gray-600 mb-6">Submit clinical reports and case studies in multiple formats with drag-and-drop simplicity</p>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Upload Clinical Report
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-gradient-to-r from-cyan-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Feedback</h3>
              <p className="text-gray-600 mb-6">Get detailed clinical feedback and evaluations within 24-48 hours</p>
              <button className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors">
                View Feedback
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-gradient-to-r from-teal-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Track Progress</h3>
              <p className="text-gray-600 mb-6">Monitor your clinical competency progress with detailed analytics</p>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                View Progress
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, tips, and trends in education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-orange-600 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-orange-600 font-semibold hover:text-orange-700 flex items-center">
                    <a href="#" onClick={(e) => { e.preventDefault(); alert('Full article coming soon! Stay tuned for more nursing education insights.'); }}>
                      Read More
                    </a>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all shadow-lg">
              View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white relative overflow-hidden">
        {/* African Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-cyan-300 rounded-full"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-300 transform rotate-45"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-cyan-300 transform rotate-12"></div>
            <div className="absolute bottom-10 right-10 w-18 h-18 bg-cyan-300 rounded-full"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your African Excellence Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of successful nursing graduates who have transformed their careers with Matipa College of Nursing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/onboarding"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 inline-block shadow-xl"
            >
              Jiunge Sasa (Apply Now)
            </Link>
            <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Take Campus Tour
            </button>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105 inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;