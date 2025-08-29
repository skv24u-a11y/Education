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
  // Set page title and description
  React.useEffect(() => {
    document.title = 'FAQ & Testimonials - Matipa Academy | Student Success Stories';
    document.title = 'FAQ & Testimonials - Matipa College of Nursing | Student Success Stories';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Find answers to frequently asked questions about Matipa College of Nursing\'s nursing programs and read inspiring testimonials from our successful African nursing graduates.');
    }
  }, []);

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
      testimonial: 'Matipa College of Nursing transformed my life. The nursing professors understand African healthcare challenges, the online clinical simulations work even with limited internet, and the career support helped me secure a position at Kenyatta National Hospital.',
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
      <section className="relative bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Maswali na Ushuhuda (FAQ & Testimonials)</h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto">
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
              Maswali Yanayoulizwa Mara Kwa Mara (