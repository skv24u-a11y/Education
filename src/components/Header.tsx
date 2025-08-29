import React, { useState } from 'react';
import { 
  Heart, 
  GraduationCap, 
  Building, 
  BookOpen, 
  Users, 
  Star,
  CheckCircle,
  CreditCard,
  DollarSign,
  Award,
  Target,
  TrendingUp
} from 'lucide-react';

const Donation: React.FC = () => {
  // Set page title and description
  React.useEffect(() => {
    document.title = 'Support Our Mission - Matipa College of Nursing | Make a Donation';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Support African nursing education by donating to Matipa College of Nursing. Your contribution helps provide scholarships, improve facilities, and empower the next generation of African healthcare professionals.');
    }
  }, []);

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const donationCategories = [
    {
      icon: GraduationCap,
      title: 'Nursing Student Scholarships',
      description: 'Help deserving nursing students achieve their healthcare education dreams regardless of financial background',
      impact: '$1,500 covers one semester tuition for a nursing student in need',
      color: 'from-blue-500 to-blue-600',
      raised: 75000,
      goal: 100000
    },
    {
      icon: Building,
      title: 'Clinical Lab Infrastructure',
      description: 'Support the development of modern clinical simulation labs and nursing learning environments',
      impact: '$8,000 helps upgrade clinical simulation equipment and nursing lab technology',
      color: 'from-green-500 to-green-600',
      raised: 125000,
      goal: 200000
    },
    {
      icon: BookOpen,
      title: 'Nursing Resources',
      description: 'Enhance our nursing library, clinical research facilities, and digital learning platforms',
      impact: '$750 provides access to premium nursing software and clinical databases for 100 students',
      color: 'from-orange-500 to-orange-600',
      raised: 45000,
      goal: 75000
    },
    {
      icon: Users,
      title: 'Nursing Faculty Development',
      description: 'Invest in professional development and attract world-class nursing educators',
      impact: '$3,500 sponsors nursing faculty clinical training and certification programs',
      color: 'from-purple-500 to-purple-600',
      raised: 32000,
      goal: 50000
    }
  ];

  const successStories = [
    {
      name: 'Amara Diallo',
      image: 'https://images.pexels.com/photos/7551544/pexels-photo-7551544.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'Thanks to Matipa Academy nursing scholarship, I graduated with honors and now lead healthcare innovation in Senegal.',
      achievement: 'BSN Graduate, 2023 - Chief Nurse at Dakar General Hospital'
    },
    {
      name: 'Kwame Osei',
      image: 'https://images.pexels.com/photos/7551468/pexels-photo-7551468.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'The nursing scholarship program changed my life. I went from struggling community health worker to successful nurse practitioner.',
      achievement: 'Nurse Practitioner Graduate, 2022 - Ghana'
    },
    {
      name: 'Fatou Kone',
      image: 'https://images.pexels.com/photos/7551522/pexels-photo-7551522.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'Your support helped me pursue nursing research. Now I\'m developing community health programs for maternal care in Mali.',
      achievement: 'MSN in Public Health Nursing, 2024 - Mali'
    }
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be handled by FormSubmit
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('_subject', 'New Donation - Matipa Academy');
    formData.append('_captcha', 'false');
    
    fetch('https://formsubmit.co/skv24u@gmail.com', {
      method: 'POST',
      body: formData
    }).then(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedAmount(null);
        setCustomAmount('');
      }, 3000);
    });
  };

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Fanya Mabadiliko (Make a Difference)</h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto mb-8">
              Your generous donation helps us provide world-class education and opportunities to African students
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105">
                Donate Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15,000+</div>
              <div className="text-gray-600">African Students Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$5.2M</div>
              <div className="text-gray-600">Scholarships Awarded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">97%</div>
              <div className="text-gray-600">Graduate Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">54</div>
              <div className="text-gray-600">African Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mahali Mchango Wako Unapoenda (Where Your Donation Goes)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the area where you'd like to make the biggest impact for African students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {donationCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${category.color} p-6`}>
                  <div className="flex items-center text-white">
                    <category.icon className="w-8 h-8 mr-3" />
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <p className="text-blue-800 font-medium">{category.impact}</p>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        ${category.raised.toLocaleString()} raised
                      </span>
                      <span className="text-sm text-gray-500">
                        Goal: ${category.goal.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-3 rounded-full transition-all duration-500`}
                        style={{ width: `${getProgressPercentage(category.raised, category.goal)}%` }}
                      ></div>
                    </div>
                    <div className="text-right mt-1">
                      <span className="text-sm font-medium text-gray-700">
                        {getProgressPercentage(category.raised, category.goal).toFixed(1)}% Complete
                      </span>
                    </div>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${category.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                    Donate to {category.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-white">
        <div className="max