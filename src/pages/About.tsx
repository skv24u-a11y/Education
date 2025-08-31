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
  // Set page title and description
  React.useEffect(() => {
    document.title = 'About Us - Matipa Academy | Leading Nursing Education';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) { // Changed from 'if (metaDescription)' to 'if (metaDescription)'
      metaDescription.setAttribute('content', 'Learn about Matipa College of Nursing, a premier online nursing college. Discover our mission, values, faculty, and commitment to empowering healthcare professionals through world-class nursing education.');
    }
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Clinical Excellence',
      description: 'We strive for the highest standards in nursing education and patient care'
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We maintain empathy, compassion, and ethical nursing practices in all we do'
    },
    {
      icon: Lightbulb,
      title: 'Healthcare Innovation',
      description: 'We embrace new medical technologies and teaching methods to enhance nursing education'
    },
    {
      icon: Users,
      title: 'Ubuntu Community',
      description: 'We foster a supportive, inclusive environment for all nursing students and faculty'
    }
  ];

  const achievements = [
    { number: '6', label: 'Years of Nursing Excellence' },
    { number: '12,000+', label: 'African Nursing Alumni' },
    { number: '25+', label: 'Nursing Specializations' },
    { number: '98%', label: 'Healthcare Employment Rate' }
  ];

  const facultyMembers = [
    {
      name: 'Dr. Amina Kone',
      position: 'Dean of Nursing', // Changed from 'Dean of Nursing' to 'Dean of Nursing'
      education: 'PhD in Nursing Science, University of Cape Town',
      image: 'https://i.ibb.co/Y4XGxSL2/11.jpg',
      expertise: 'Critical Care Nursing, Healthcare Leadership'
    },
    {
      name: 'Prof. Kwame Asante',
      position: 'Head of Clinical Training', // Changed from 'Head of Clinical Training' to 'Head of Clinical Training'
      education: 'MSN Clinical Leadership, University of Ghana Medical School',
      image: 'https://i.ibb.co/CpSNv2zt/33.jpg',
      expertise: 'Clinical Simulation, Emergency Nursing'
    },
    {
      name: 'Dr. Fatima Al-Zahra',
      position: 'Director of Nursing Research', // Changed from 'Director of Nursing Research' to 'Director of Nursing Research'
      education: 'PhD in Nursing Research, University of the Witwatersrand',
      image: 'https://images.pexels.com/photos/3823204/pexels-photo-3823204.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: 'Community Health Nursing, Maternal Care'
    },
    {
      name: 'Prof. Chinua Okafor',
      position: 'Chair of Pediatric Nursing', // Changed from 'Chair of Pediatric Nursing' to 'Chair of Pediatric Nursing'
      education: 'MSN Pediatric Nursing, University of Ibadan',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: 'Pediatric Care, Child Health Nursing'
    }
  ];

  const accreditations = [
    'Global Nursing Council (GNC)',
    'International Council of Nurses (ICN)',
    'Commission on Collegiate Nursing Education (CCNE)',
    'Inter-University Council for East Africa (IUCEA)',
    'International Association of Nursing and Midwifery (IANM)'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-seafoamBlue-600 via-seafoamBlue-700 to-seafoamBlue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Matipa Academy</h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Matipa College of Nursing</h1>
            <p className="text-xl md:text-2xl text-seafoamBlue-100 max-w-4xl mx-auto">
              Empowering nursing minds, transforming healthcare lives, and building tomorrow's nursing leaders since 2018
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
              <h2 className="text-3xl md:text-4xl font-bold text-navyBlue-800 mb-6">Dhamira Yetu (Our Mission)</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Matipa College of Nursing is dedicated to providing world-class nursing education that empowers healthcare professionals 
                to achieve their full potential. We combine rigorous clinical training with innovative teaching methods, 
                hands-on experience, and global healthcare perspectives to prepare nursing graduates for success in 
                addressing global healthcare challenges while staying rooted in our core values.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment extends beyond traditional nursing education – we nurture critical thinking, compassionate care, 
                and leadership skills that enable our nursing students to become catalysts for positive healthcare transformation 
                in their communities and beyond.
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
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Nursing students in clinical training"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg shadow-lg">
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
            <h2 className="text-3xl md:text-4xl font-bold text-navyBlue-800 mb-4">Maadili Yetu (Our Core Values)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our educational approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-orange-100 to-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-seafoamBlue-600" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-navyBlue-800 mb-6">Historia Yetu (Our History)</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-seafoamBlue-600 pl-6">
                  <div className="text-seafoamBlue-600 font-semibold">2018</div>
                  <h3 className="text-lg font-semibold text-gray-900">Foundation</h3>
                  <p className="text-gray-600">Matipa College of Nursing was founded with a vision to revolutionize nursing education</p>
                </div>
                <div className="border-l-4 border-seafoamBlue-500 pl-6">
                  <div className="text-seafoamBlue-500 font-semibold">2019</div>
                  <h3 className="text-lg font-semibold text-gray-900">Program Expansion</h3>
                  <p className="text-gray-600">Launched comprehensive online nursing programs reaching students globally</p>
                </div>
                <div className="border-l-4 border-seafoamBlue-500 pl-6">
                  <div className="text-seafoamBlue-500 font-semibold">2021</div>
                  <h3 className="text-lg font-semibold text-gray-900">Innovation Hub</h3>
                  <p className="text-gray-600">Established Healthcare Innovation Hub focusing on solving global healthcare challenges</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="text-green-500 font-semibold">2023</div>
                  <h3 className="text-lg font-semibold text-gray-900">AI Integration</h3>
                  <p className="text-gray-600">Leading nursing education with AI-powered personalized clinical learning</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-br from-seafoamBlue-50 to-seafoamBlue-100 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{achievement.number}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-navyBlue-800 mb-4">Mkutano na Walimu Wetu (Meet Our Faculty)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts and renowned academics who are passionate about nursing excellence
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
                  <p className="text-orange-600 font-medium mb-2">{faculty.position}</p>
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
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Diverse nursing students"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Globe className="w-8 h-8 text-white mr-2" />
                  <div>
                    <div className="text-2xl font-bold text-white">25+</div>
                    <div className="text-sm text-orange-100">Countries</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navyBlue-800 mb-6">Global Student Community</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our virtual campus is home to a vibrant community of nursing students from diverse countries, creating 
                a rich global healthcare learning environment that celebrates diversity while preparing you for nursing excellence.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>International nursing student exchange programs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Healthcare clubs representing diverse regions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Global clinical placement network</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Cross-cultural healthcare workshops</span>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-colors">
                Explore Nursing Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navyBlue-800 mb-4">Uthibitisho na Utambulisho (Accreditations & Recognition)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our nursing programs are recognized by leading international nursing accreditation bodies
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> // Changed from 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' to 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              {accreditations.map((accreditation, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700">{accreditation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6"> // Changed from 'h2 className="text-3xl md:text-4xl font-bold mb-6"' to 'h2 className="text-3xl md:text-4xl font-bold mb-6"'
            Jiunge na Uongozi wa Matipa College of Nursing (Join Our Legacy of Excellence)
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Become part of a nursing community that values innovation, integrity, and clinical excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105">
              Jiunge Sasa (Apply Now)
            </button>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;