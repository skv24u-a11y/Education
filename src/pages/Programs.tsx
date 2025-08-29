import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Heart, 
  Stethoscope, 
  Users, 
  Clock, 
  Award,
  CheckCircle,
  BookOpen,
  Calendar,
  DollarSign
} from 'lucide-react';

const Programs: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Nursing Programs - Matipa College of Nursing | BSN, RN, ADN Programs';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Matipa College of Nursing\'s comprehensive nursing programs including BSN, RN, ADN, LPN, and NP degrees. World-class nursing education designed for African healthcare professionals.');
    }
  }, []);

  const programs = [
    {
      id: 1,
      title: 'Bachelor of Science in Nursing (BSN)',
      duration: '4 Years',
      credits: '120 Credits',
      tuition: '$8,500/year',
      icon: GraduationCap,
      description: 'Comprehensive 4-year nursing degree program preparing students for leadership roles in healthcare.',
      features: [
        'Clinical rotations in major hospitals',
        'Leadership and management training',
        'Research methodology',
        'Community health nursing',
        'Advanced patient care techniques'
      ],
      careers: ['Registered Nurse', 'Charge Nurse', 'Clinical Coordinator', 'Nurse Manager'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Associate Degree in Nursing (ADN)',
      duration: '2 Years',
      credits: '60 Credits',
      tuition: '$6,500/year',
      icon: Heart,
      description: 'Accelerated 2-year program focusing on essential nursing skills and patient care.',
      features: [
        'Hands-on clinical experience',
        'Fundamental nursing skills',
        'Patient assessment techniques',
        'Medication administration',
        'Basic life support training'
      ],
      careers: ['Staff Nurse', 'Clinical Nurse', 'Home Health Nurse', 'Long-term Care Nurse'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'Licensed Practical Nurse (LPN)',
      duration: '12 Months',
      credits: '30 Credits',
      tuition: '$4,500/year',
      icon: Stethoscope,
      description: 'Fast-track program to become a licensed practical nurse with essential healthcare skills.',
      features: [
        'Basic nursing procedures',
        'Patient monitoring',
        'Wound care techniques',
        'Vital signs assessment',
        'Medical terminology'
      ],
      careers: ['Licensed Practical Nurse', 'Clinic Assistant', 'Nursing Home Aide', 'Home Care Provider'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 4,
      title: 'Registered Nurse (RN) Bridge',
      duration: '18 Months',
      credits: '45 Credits',
      tuition: '$7,000/year',
      icon: Users,
      description: 'Bridge program for LPNs to advance to Registered Nurse status.',
      features: [
        'Advanced clinical skills',
        'Critical thinking development',
        'Pharmacology specialization',
        'Patient advocacy training',
        'Healthcare technology integration'
      ],
      careers: ['Registered Nurse', 'ICU Nurse', 'Emergency Room Nurse', 'Surgical Nurse'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 5,
      title: 'Nurse Practitioner (NP)',
      duration: '2.5 Years',
      credits: '75 Credits',
      tuition: '$12,000/year',
      icon: Award,
      description: 'Advanced practice nursing program for experienced RNs seeking specialized expertise.',
      features: [
        'Advanced pathophysiology',
        'Diagnostic procedures',
        'Prescriptive authority',
        'Independent practice preparation',
        'Specialized clinical rotations'
      ],
      careers: ['Family Nurse Practitioner', 'Pediatric NP', 'Adult-Gerontology NP', 'Psychiatric NP'],
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-400 via-teal-500 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nursing Programs</h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto">
              Comprehensive nursing education programs designed to prepare African healthcare professionals for excellence
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Nursing Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From entry-level to advanced practice, we offer nursing programs to match your career goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <program.icon className="w-12 h-12" />
                    <div className="text-right">
                      <div className="text-2xl font-bold">{program.tuition}</div>
                      <div className="text-sm opacity-90">Annual Tuition</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {program.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {program.credits}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6">{program.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Career Opportunities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.careers.map((career, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      to="/onboarding"
                      className={`flex-1 bg-gradient-to-r ${program.color} text-white py-3 px-4 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity`}
                    >
                      Apply Now
                    </Link>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              General requirements for our nursing programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• High school diploma or equivalent</li>
                <li>• Minimum GPA of 2.5</li>
                <li>• Science prerequisites (Biology, Chemistry)</li>
                <li>• English proficiency</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Materials</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Completed application form</li>
                <li>• Official transcripts</li>
                <li>• Letters of recommendation</li>
                <li>• Personal statement</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Background check</li>
                <li>• Health clearance</li>
                <li>• Immunization records</li>
                <li>• CPR certification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Nursing Career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of successful nursing graduates who started their journey at Matipa College of Nursing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/onboarding"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-block"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all transform hover:scale-105 inline-block"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;