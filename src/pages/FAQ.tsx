import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Quote,
  User,
  Calendar,
  MapPin,
  ThumbsUp,
  MessageCircle,
  BookOpen,
  CreditCard,
  Users,
  Globe
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const faqCategories = [
    {
      icon: BookOpen,
      title: 'Admissions',
      color: 'text-blue-600',
      faqs: [
        {
          question: 'What are the admission requirements?',
          answer: 'Admission requirements vary by program. Generally, you need a high school diploma or equivalent, standardized test scores (SAT/ACT), letters of recommendation, and a personal statement. International students may need TOEFL/IELTS scores.'
        },
        {
          question: 'When is the application deadline?',
          answer: 'Application deadlines are: Fall semester - May 1st, Spring semester - November 1st, Summer session - March 1st. Early decision deadlines are typically 6 weeks earlier.'
        },
        {
          question: 'How do I apply for financial aid?',
          answer: 'Complete the FAFSA form and our institutional financial aid application. Submit all required documents by the priority deadline to maximize your aid eligibility. We offer scholarships, grants, and work-study programs.'
        }
      ]
    },
    {
      icon: Globe,
      title: 'Online Classes',
      color: 'text-green-600',
      faqs: [
        {
          question: 'How do online classes work?',
          answer: 'Our online classes use a state-of-the-art learning management system. You\'ll have access to live lectures, recorded sessions, interactive assignments, and virtual labs. Classes are designed for flexibility while maintaining academic rigor.'
        },
        {
          question: 'What technology do I need?',
          answer: 'You need a reliable internet connection, a computer or tablet, webcam, and microphone. We provide access to all necessary software and platforms. Technical support is available 24/7.'
        },
        {
          question: 'Can I interact with professors and classmates?',
          answer: 'Absolutely! You can participate in live discussions, virtual office hours, group projects, and peer collaboration sessions. Our online community is vibrant and engaging.'
        }
      ]
    },
    {
      icon: MessageCircle,
      title: 'Assignments',
      color: 'text-orange-600',
      faqs: [
        {
          question: 'How do I submit assignments?',
          answer: 'Assignments are submitted through our online portal. You can upload documents, images, videos, and other file types. The system provides confirmation and tracks submission history.'
        },
        {
          question: 'What if I miss a deadline?',
          answer: 'Contact your instructor immediately if you anticipate missing a deadline. Late submission policies vary by course, but we understand emergencies happen and work with students when possible.'
        },
        {
          question: 'How quickly will I receive feedback?',
          answer: 'Most assignments receive feedback within 48-72 hours. Major projects may take up to one week. Professors provide detailed comments and suggestions for improvement.'
        }
      ]
    },
    {
      icon: Users,
      title: 'Campus Life',
      color: 'text-purple-600',
      faqs: [
        {
          question: 'What housing options are available?',
          answer: 'We offer traditional dormitories, apartment-style housing, and off-campus housing assistance. All on-campus housing includes meal plans, Wi-Fi, and utilities. Applications open in February.'
        },
        {
          question: 'What clubs and activities can I join?',
          answer: 'We have over 100 student organizations including academic clubs, sports teams, cultural groups, volunteer organizations, and special interest clubs. New students are encouraged to join orientation activities.'
        },
        {
          question: 'What support services are available?',
          answer: 'We provide academic tutoring, career counseling, mental health services, disability support, financial counseling, and international student services. All services are confidential and free to students.'
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Amina Hassan',
      program: 'Bachelor of Science in Nursing, Class of 2023',
      location: 'Nairobi, Kenya',
      image: 'https://images.pexels.com/photos/7551544/pexels-photo-7551544.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      date: 'March 2024',
      testimonial: 'Matipa Academy transformed my life. The nursing professors understand African healthcare challenges, the online clinical simulations work even with limited internet, and the career support helped me secure a position at Kenyatta National Hospital.',
      highlight: 'Senior Nurse at Kenyatta National Hospital'
    },
    {
      name: 'Kofi Mensah',
      program: 'Registered Nurse Program, Class of 2022',
      location: 'Accra, Ghana',
      image: 'https://images.pexels.com/photos/7551468/pexels-photo-7551468.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      date: 'February 2024',
      testimonial: 'The flexibility of online learning allowed me to balance my work at the local clinic with studies. The nursing program taught me advanced clinical skills. Now I lead the emergency department at Ridge Hospital.',
      highlight: 'Emergency Department Head at Ridge Hospital'
    },
    {
      name: 'Fatima Al-Rashid',
      program: 'Nurse Midwifery, Class of 2024',
      location: 'Cairo, Egypt',
      image: 'https://images.pexels.com/photos/7551522/pexels-photo-7551522.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      date: 'January 2024',
      testimonial: 'As a working mother in Cairo, the online format was perfect. The professors understood my cultural context, and the clinical simulations helped me build confidence. I now run the leading maternal health clinic in North Africa!',
      highlight: 'Leading Maternal Health Clinic in North Africa'
    },
    {
      name: 'Thabo Mthembu',
      program: 'Clinical Nurse Specialist, Class of 2023',
      location: 'Cape Town, South Africa',
      image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      date: 'March 2024',
      testimonial: 'The hands-on approach to clinical nursing was exceptional. Real-world African healthcare scenarios, clinical mentors, and cutting-edge curriculum prepared me to address African healthcare challenges.',
      highlight: 'Leading Clinical Nursing at Groote Schuur Hospital'
    },
    {
      name: 'Aisha Traore',
      program: 'Public Health Nursing, Class of 2022',
      location: 'Bamako, Mali',
      image: 'https://images.pexels.com/photos/7551421/pexels-photo-7551421.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      date: 'February 2024',
      testimonial: 'The public health nursing program focused on African health challenges. The networking with African nursing leaders and alumni connections helped me establish community health programs across rural Mali.',
      highlight: 'Community Health Director in Rural Mali'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Maswali na Ushuhuda (FAQ & Testimonials)</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Get answers to common questions and hear from our successful African graduates
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Maswali Yanayoulizwa Mara Kwa Mara (Frequently Asked Questions)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to the most common questions about our African-focused programs and services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {faqCategories.map((category, categoryIndex) => (
                    <button
                      key={categoryIndex}
                      className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <category.icon className={`w-5 h-5 ${category.color} mr-3`} />
                      <span className="font-medium text-gray-700">{category.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {faqCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
                      <div className="flex items-center">
                        <category.icon className={`w-6 h-6 ${category.color} mr-3`} />
                        <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {category.faqs.map((faq, faqIndex) => {
                        const globalIndex = categoryIndex * 10 + faqIndex;
                        return (
                          <div key={faqIndex} className="p-6">
                            <button
                              onClick={() => toggleFAQ(globalIndex)}
                              className="w-full flex justify-between items-center text-left"
                            >
                              <h4 className="text-lg font-semibold text-gray-900 pr-4">
                                {faq.question}
                              </h4>
                              {openFAQ === globalIndex ? (
                                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                              )}
                            </button>
                            {openFAQ === globalIndex && (
                              <div className="mt-4 pr-8">
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who have transformed their careers and achieved their dreams
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 text-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-orange-600 font-medium mb-2">
                  {testimonials[currentTestimonial].program}
                </p>
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                  <span className="text-gray-600 text-sm">{testimonials[currentTestimonial].location}</span>
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                <div className="bg-gradient-to-r from-green-100 to-yellow-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonials[currentTestimonial].highlight}
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <Quote className="w-12 h-12 text-orange-600 mb-4" />
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].testimonial}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{testimonials[currentTestimonial].date}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                    >
                      <ChevronUp className="w-5 h-5 text-gray-600 transform -rotate-90" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-600 transform rotate-90" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.program}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-4 line-clamp-3">"{testimonial.testimonial}"</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{testimonial.date}</span>
                  <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                    {testimonial.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Stats */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">15,000+</div>
                <div className="text-gray-600">Happy African Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">97%</div>
                <div className="text-gray-600">Would Recommend</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">97%</div>
                <div className="text-gray-600">Career Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bado Una Maswali? (Still Have Questions?)
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our African admissions counselors are here to help you every step of the way
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Schedule a Call
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105">
              Live Chat Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;