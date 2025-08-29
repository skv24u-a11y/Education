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
    document.title = 'About Us - Matipa Academy | Leading African Nursing Education';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Matipa College of Nursing, Africa\'s premier online nursing college. Discover our mission, values, faculty, and commitment to empowering African healthcare professionals through world-class nursing education.');
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
      position: 'Dean of Nursing',
      education: 'PhD in Nursing Science, University of Cape Town',
      image: 'https://images.pexels.com/photos/7551544/pexels-photo-7551544.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: 'Critical Care Nursing, Healthcare Leadership'
    },
    {
      name: 'Prof. Kwame Asante',
      position: 'Head of Clinical Training',
      education: 'MSN Clinical Leadership, University of Ghana Medical School',
      image: 'https://images.pexels.com/photos/7551468/pexels-photo-7551468.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: 'Clinical Simulation, Emergency Nursing'
    },
    {
      name: 'Dr. Fatima Al-Zahra',
      position: 'Director of Nursing Research',
      education: 'PhD in Nursing Research, University of the Witwatersrand',
      image: 'https://images.pexels.com/photos/7551522/pexels-photo-7551522.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: 'Community Health Nursing, Maternal Care'
    },
    {
      name: 'Prof. Chinua Okafor',
      position: 'Chair of Pediatric Nursing',
      education: 'MSN Pediatric Nursing, University of Ibadan',
      image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: 'Pediatric Care, Child Health Nursing'
    }
  ];

  const accreditations = [
    'African Nursing Council (ANC)',
    'International Council of Nurses (ICN)',
    'Commission on Collegiate Nursing Education (CCNE)',
    'Inter-University Council for East Africa (IUCEA)',
    'African Association of Nursing and Midwifery (AANM)'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-400 via-teal-500 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Matipa Academy</h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Matipa College of Nursing</h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto">
              Empowering African nursing minds, transforming healthcare lives, and building tomorrow's nursing leaders since 2020
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Dhamira Yetu (Our Mission)</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Matipa College of Nursing is dedicated to providing world-class nursing education that empowers African healthcare professionals 
                to achieve their full potential. We combine rigorous clinical training with innovative teaching 
                methods, hands-on experience, and African healthcare perspectives to prepare nursing graduates for success 
                in addressing Africa's healthcare challenges while staying rooted in Ubuntu values.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment extends beyond traditional nursing education – we nurture Ubuntu philosophy, 
                critical thinking, compassionate care, and leadership skills that enable our nursing students to become 
                catalysts for positive healthcare transformation in their African communities and beyond.
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
                src="https://images.pexels.com/photos/7551421/pexels-photo-7551421.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="African nursing students in clinical training"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-6 rounded-lg shadow-lg">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Maadili Yetu (Our Core Values)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental African principles guide everything we do and shape our educational approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-cyan-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-cyan-600" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Historia Yetu (Our History)</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-teal-600 pl-6">
                  <div className="text-teal-600 font-semibold">2020</div>
                  <h3 className="text-lg font-semibold text-gray-900">Foundation</h3>
                  <p className="text-gray-600">Matipa College of Nursing was founded with a vision to revolutionize African nursing education</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-6">
                  <div className="text-cyan-500 font-semibold">2021</div>
                  <h3 className="text-lg font-semibold text-gray-900">Sierra Leone  Expansion</h3>
                  <p className="text-gray-600">Launched online programs reaching students across all 54 African countries</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="text-blue-500 font-semibold">2022</div>
                  <h3 className="text-lg font-semibold text-gray-900">Innovation Hub</h3>
                  <p className="text-gray-600">Established African Innovation Hub focusing on solving African challenges</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-6">
                  <div className="text-teal-500 font-semibold">2024</div>
                  <h3 className="text-lg font-semibold text-gray-900">AI Integration</h3>
                  <p className="text-gray-600">Leading African nursing education with AI-powered personalized clinical learning in local languages</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">{achievement.number}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mkutano na Walimu Wetu (Meet Our Faculty)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from African industry experts and renowned academics who are passionate about African excellence
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
                src="https://images.pexels.com/photos/7551421/pexels-photo-7551421.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Diverse African nursing students"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Globe className="w-8 h-8 text-white mr-2" />
                  <div>
                    <div className="text-2xl font-bold text-white">54</div>
                    <div className="text-sm text-orange-100">African Countries</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sierra Leone  Student Community</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our virtual campus is home to a vibrant community of nursing students from all 54 African countries, creating 
                a rich Sierra Leone  healthcare learning environment that celebrates our diversity while preparing you for global nursing excellence.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Sierra Leone  nursing student exchange programs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Healthcare clubs representing all African regions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>African and global clinical placement network</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Ubuntu philosophy and cross-cultural healthcare workshops</span>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-teal-700 transition-colors">
                Explore Sierra Leone  Nursing Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Uthibitisho na Utambulisho (Accreditations & Recognition)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our nursing programs are recognized by leading African and international nursing accreditation bodies
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accreditations.map((accreditation, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Award className="w-6 h-6 text-cyan-600 mr-3" />
                  <span className="text-gray-700">{accreditation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jiunge na Uongozi wa Matipa College of Nursing (Join Our Legacy of Excellence)
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Become part of an African nursing community that values Ubuntu, innovation, integrity, and clinical excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all transform hover:scale-105">
              Jiunge Sasa (Apply Now)
            </button>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;