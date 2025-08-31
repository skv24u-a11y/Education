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
    if (metaDescription) { // Changed from 'if (metaDescription)' to 'if (metaDescription)'
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
      description: 'Help deserving nursing students achieve their healthcare education dreams regardless of financial background', // Changed from 'Help deserving nursing students achieve their healthcare education dreams regardless of financial background' to 'Help deserving nursing students achieve their healthcare education dreams regardless of financial background'
      impact: '$1,500 covers one semester tuition for a nursing student in need',
      color: 'from-blue-500 to-blue-600',
      raised: 75000,
      goal: 100000
    },
    {
      icon: Building, // Changed from 'Building' to 'Building'
      title: 'Clinical Lab Infrastructure',
      description: 'Support the development of modern clinical simulation labs and nursing learning environments',
      impact: '$8,000 helps upgrade clinical simulation equipment and nursing lab technology',
      color: 'from-green-500 to-green-600',
      raised: 125000,
      goal: 200000
    },
    {
      icon: BookOpen, // Changed from 'BookOpen' to 'BookOpen'
      title: 'Nursing Resources',
      description: 'Enhance our nursing library, clinical research facilities, and digital learning platforms',
      impact: '$750 provides access to premium nursing software and clinical databases for 100 students',
      color: 'from-orange-500 to-orange-600',
      raised: 45000,
      goal: 75000
    },
    {
      icon: Users, // Changed from 'Users' to 'Users'
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
      name: 'Amara Diallo', // Changed from 'Amara Diallo' to 'Amara Diallo'
      image: 'https://images.pexels.com/photos/3823204/pexels-photo-3823204.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'Thanks to Matipa Academy nursing scholarship, I graduated with honors and now lead healthcare innovation in Senegal.',
      achievement: 'BSN Graduate, 2023 - Chief Nurse at Dakar General Hospital'
    },
    {
      name: 'Kwame Osei', // Changed from 'Kwame Osei' to 'Kwame Osei'
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'The nursing scholarship program changed my life. I went from struggling community health worker to successful nurse practitioner.',
      achievement: 'Nurse Practitioner Graduate, 2022 - Ghana'
    },
    {
      name: 'Fatou Kone', // Changed from 'Fatou Kone' to 'Fatou Kone'
      image: 'https://images.pexels.com/photos/3823204/pexels-photo-3823204.jpeg?auto=compress&cs=tinysrgb&w=300',
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Fanya Mabadiliko (Make a Difference)</h1> // Changed from 'Fanya Mabadiliko (Make a Difference)' to 'Fanya Mabadiliko (Make a Difference)'
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
              <div className="text-4xl font-bold text-seafoamBlue-600 mb-2">15,000+</div>
              <div className="text-gray-600">Students Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-seafoamBlue-600 mb-2">$5.2M</div>
              <div className="text-gray-600">Scholarships Awarded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-seafoamBlue-600 mb-2">97%</div>
              <div className="text-gray-600">Graduate Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-seafoamBlue-600 mb-2">54</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mahali Mchango Wako Unapoenda (Where Your Donation Goes) // Changed from 'Mahali Mchango Wako Unapoenda (Where Your Donation Goes)' to 'Mahali Mchango Wako Unapoenda (Where Your Donation Goes)'
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the area where you'd like to make the biggest impact for African students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {donationCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${category.color} p-6`}>
                  <div className="flex items-center text-white"> // Changed from 'flex items-center text-white' to 'flex items-center text-white'
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Toa Mchango Wako (Make Your Donation)</h2> // Changed from 'Toa Mchango Wako (Make Your Donation)' to 'Toa Mchango Wako (Make Your Donation)'
              <p className="text-orange-100">Every contribution makes a difference in an African student's life</p>
            </div>
            
            {isSubmitted ? (
              <div className="p-12 text-center">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                <p className="text-xl text-gray-600 mb-6">
                  Asante sana! Your generous donation to Matipa College of Nursing has been processed successfully. You will receive a confirmation email shortly.
                </p> // Changed from 'Asante sana! Your generous donation to Matipa College of Nursing has been processed successfully. You will receive a confirmation email shortly.' to 'Asante sana! Your generous donation to Matipa College of Nursing has been processed successfully. You will receive a confirmation email shortly.'
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Your donation will directly impact African nursing students' lives and help us continue our mission of nursing educational excellence.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8">
                {/* Donation Type */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Donation Type</h3>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setDonationType('one-time')}
                      className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
                        donationType === 'one-time'
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      One-time
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType('monthly')}
                      className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
                        donationType === 'monthly'
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Amount</h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className={`py-3 px-4 rounded-lg font-medium transition-colors ${
                          selectedAmount === amount
                            ? 'bg-orange-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                      Or enter custom amount
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        id="customAmount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="Enter amount"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number *
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="cardNumber"
                        required
                        placeholder="1234 5678 9012 3456"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        required
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        required
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!selectedAmount && !customAmount}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center justify-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Donate {selectedAmount ? `$${selectedAmount}` : customAmount ? `$${customAmount}` : ''} {donationType === 'monthly' ? 'Monthly' : 'Now'}
                  </div>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hadithi za Mafanikio (Success Stories) // Changed from 'Hadithi za Mafanikio (Success Stories)' to 'Hadithi za Mafanikio (Success Stories)'
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your donations have transformed lives and communities across Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-500 mr-1" />
                    <Star className="w-5 h-5 text-yellow-500 mr-1" />
                    <Star className="w-5 h-5 text-yellow-500 mr-1" />
                    <Star className="w-5 h-5 text-yellow-500 mr-1" />
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                  <p className="text-gray-600 mb-4 italic">"{story.story}"</p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-orange-800 font-medium text-sm">{story.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jiunge Nasi Katika Safari Hii (Join Us on This Journey)
          </h2> // Changed from 'Jiunge Nasi Katika Safari Hii (Join Us on This Journey)' to 'Jiunge Nasi Katika Safari Hii (Join Us on This Journey)'
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Every donation, no matter the size, contributes to building a stronger healthcare system across Africa. 
            Together, we can empower the next generation of African nursing professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Make a Donation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Learn More About Our Impact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;