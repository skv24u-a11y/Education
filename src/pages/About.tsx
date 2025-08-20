import React from 'react';
import { 
  Award, 
  Users, 
  Globe, 
  BookOpen, 
  Target, 
  Heart, 
  Lightbulb,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in education and student success'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We maintain honesty, transparency, and ethical practices in all we do'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new technologies and teaching methods to enhance learning'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We foster a supportive, inclusive environment for all students and faculty'
    }
  ];

  const achievements = [
    { number: '29', label: 'Years of Excellence' },
    { number: '50,000+', label: 'Alumni Worldwide' },
    { number: '150+', label: 'Academic Programs' },
    { number: '95%', label: 'Graduate Employment Rate' }
  ];

  const facultyMembers = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Dean of Engineering',
      education: 'PhD in Computer Science, MIT',
      image: 'https://images.pexels.com/photos/3781529/pexels-photo-3781529.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: 'Artificial Intelligence, Machine Learning'
    },
    {
      name: 'Prof. Michael Chen',
      position: 'Head of Business School',
      education: 'MBA Harvard, PhD Economics Stanford',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: 'Strategic Management, Entrepreneurship'
    },
    {
      name: 'Dr. Emily Rodriguez',
      position: 'Director of Research',
      education: 'PhD in Biomedical Sciences, Johns Hopkins',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: 'Biotechnology, Medical Research'
    },
    {
      name: 'Prof. David Thompson',
      position: 'Chair of Liberal Arts',
      education: 'PhD in Literature, Oxford University',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: 'Comparative Literature, Creative Writing'
    }
  ];

  const accreditations = [
    'Middle States Commission on Higher Education',
    'AACSB International (Business Programs)',
    'ABET (Engineering Programs)',
    'National Association of Schools of Art and Design',
    'Commission on Collegiate Nursing Education'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Excellence Academy</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Empowering minds, transforming lives, and building tomorrow's leaders since 1995
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Excellence Academy is dedicated to providing world-class education that empowers students 
                to achieve their full potential. We combine rigorous academics with innovative teaching 
                methods, practical experience, and global perspectives to prepare graduates for success 
                in an ever-evolving world.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment extends beyond traditional education – we nurture critical thinking, 
                creativity, and leadership skills that enable our students to become catalysts for 
                positive change in their communities and industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Watch Our Story
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Students in library"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm">Student Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our educational approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our History</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="text-blue-600 font-semibold">1995</div>
                  <h3 className="text-lg font-semibold text-gray-900">Foundation</h3>
                  <p className="text-gray-600">Excellence Academy was founded with a vision to revolutionize higher education</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="text-green-500 font-semibold">2005</div>
                  <h3 className="text-lg font-semibold text-gray-900">Global Expansion</h3>
                  <p className="text-gray-600">Launched online programs reaching students in over 30 countries</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="text-orange-500 font-semibold">2015</div>
                  <h3 className="text-lg font-semibold text-gray-900">Innovation Hub</h3>
                  <p className="text-gray-600">Established state-of-the-art research facilities and innovation labs</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="text-purple-500 font-semibold">2024</div>
                  <h3 className="text-lg font-semibold text-gray-900">AI Integration</h3>
                  <p className="text-gray-600">Leading the future of education with AI-powered personalized learning</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                  <div className="text-gray-700 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Faculty</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts and renowned academics who are passionate about your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={faculty.image} 
                  alt={faculty.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{faculty.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{faculty.position}</p>
                  <p className="text-sm text-gray-600 mb-3">{faculty.education}</p>
                  <p className="text-sm text-gray-700">{faculty.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Diversity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Diverse students"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Globe className="w-8 h-8 text-blue-600 mr-2" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Global Student Diversity</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our campus is home to a vibrant community of students from over 50 countries, creating 
                a rich multicultural learning environment that prepares you for global success.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>International student exchange programs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Multicultural clubs and organizations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Global internship and job placement network</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Cross-cultural communication workshops</span>
                </li>
              </ul>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Explore International Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Accreditations & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs are recognized by leading accreditation bodies, ensuring the highest quality education
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accreditations.map((accreditation, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">{accreditation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Legacy of Excellence
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Become part of a community that values innovation, integrity, and academic excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105">
              Apply Now
            </button>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;