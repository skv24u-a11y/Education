import React from 'react';
import { Link } from 'react-router-dom';
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
  UserPlus
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'World-Class Education',
      description: 'Comprehensive curriculum designed by industry experts'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from passionate educators with real-world experience'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with students from over 50 countries worldwide'
    },
    {
      icon: Award,
      title: 'Accredited Programs',
      description: 'Internationally recognized degrees and certifications'
    }
  ];

  const stats = [
    { number: '15,000+', label: 'Active Students' },
    { number: '98%', label: 'Job Placement Rate' },
    { number: '200+', label: 'Expert Instructors' },
    { number: '50+', label: 'Countries Represented' }
  ];

  const blogPosts = [
    {
      title: 'The Future of Online Learning',
      excerpt: 'Discover how technology is reshaping education and creating new opportunities for students worldwide.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Study Tips for Academic Success',
      excerpt: 'Essential strategies and techniques to help you excel in your studies and achieve your academic goals.',
      date: 'March 12, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Career Opportunities in Tech',
      excerpt: 'Explore the fastest-growing career paths in technology and how our programs prepare you for success.',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        {/* African Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-yellow-400 rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-orange-400 transform rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 bg-red-400 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 border-4 border-yellow-400 transform rotate-12"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Unlock Your Potential with 
                <span className="text-yellow-300 drop-shadow-lg"> Matipa</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
                Join thousands of African students in our innovative learning environment. 
                Get access to world-class education, expert mentorship, and career opportunities designed for African excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/onboarding"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Jiunge Sasa (Join Now)
                </Link>
                <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                  Start Free Quiz
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105">
                  Explore Our Blog
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="African students learning"
                className="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-yellow-400"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 p-4 rounded-lg shadow-xl">
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="font-semibold">4.9/5 Student Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-400 rounded-full opacity-30 animate-pulse"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
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
              Why Choose Matipa Academy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide an exceptional learning experience tailored for African students with cutting-edge resources and dedicated support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group hover:transform hover:scale-105">
                <div className="bg-gradient-to-r from-orange-100 to-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-orange-600 group-hover:to-red-600 transition-all">
                  <feature.icon className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
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
                Experience Our Virtual Classroom
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join interactive online classes with real-time collaboration tools, virtual labs, and personalized learning paths designed for your success.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Live interactive sessions with expert instructors</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Collaborative projects and peer-to-peer learning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>24/7 access to recorded lectures and materials</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Join Free Webinar
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="African students in virtual classroom"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-orange-600 bg-opacity-20 rounded-lg flex items-center justify-center">
                <div className="bg-white bg-opacity-90 p-4 rounded-full">
                  <Play className="w-12 h-12 text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assignment System Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart Assignment Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined assignment submission, automated grading, and detailed feedback system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-gradient-to-r from-green-100 to-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Upload</h3>
              <p className="text-gray-600 mb-6">Submit assignments in multiple formats with drag-and-drop simplicity</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Upload Assignment
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Feedback</h3>
              <p className="text-gray-600 mb-6">Get detailed feedback and grades within 24-48 hours</p>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                View Feedback
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Track Progress</h3>
              <p className="text-gray-600 mb-6">Monitor your academic progress with detailed analytics</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all shadow-lg">
              View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white relative overflow-hidden">
        {/* African Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-400 rounded-full"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-400 transform rotate-45"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-yellow-400 transform rotate-12"></div>
            <div className="absolute bottom-10 right-10 w-18 h-18 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your African Excellence Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of successful African students who have transformed their careers with Matipa Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/onboarding"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105 inline-block shadow-xl"
            >
              Jiunge Sasa (Apply Now)
            </Link>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Take Campus Tour
            </button>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105 inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;