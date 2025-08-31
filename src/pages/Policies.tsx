import React from 'react';
import { 
  Shield, 
  BookOpen, 
  Users, 
  DollarSign, 
  Clock, 
  Award,
  AlertCircle,
  CheckCircle,
  FileText,
  Heart,
  Scale,
  GraduationCap
} from 'lucide-react';

const Policies: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Academic Policies - Matipa Academy | Student Guidelines';
    document.title = 'Academic Policies - Matipa College of Nursing | Student Guidelines';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Review Matipa College of Nursing\'s academic policies including admission, fees, grading, attendance, and student conduct guidelines for nursing programs.');
    }
  }, []);

  const policies = [
    {
      id: 'admission',
      title: 'Admission Policy',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600',
      sections: [
        {
          title: 'General Admission Requirements',
          content: [
            'High school diploma or equivalent with minimum 2.5 GPA',
            'Completion of prerequisite courses (Biology, Chemistry, Mathematics)',
            'Satisfactory performance on entrance examination or standardized tests',
            'Clean criminal background check and drug screening',
            'Current immunizations and health clearance'
          ]
        },
        {
          title: 'Application Process',
          content: [
            'Submit completed online application with required documents',
            'Pay non-refundable application fee of $50',
            'Participate in admission interview (virtual or in-person)',
            'Provide two professional or academic references',
            'Submit personal statement outlining career goals'
          ]
        },
        {
          title: 'Special Considerations',
          content: [
            'Transfer students must have minimum 2.0 GPA from previous institution',
            'International students require TOEFL/IELTS scores and credential evaluation',
            'Veterans and military personnel receive priority consideration',
            'Students with disabilities are provided reasonable accommodations',
            'Re-admission requires approval from Academic Standards Committee'
          ]
        }
      ]
    },
    {
      id: 'fees',
      title: 'Fee Structure & Payment Policy',
      icon: DollarSign,
      color: 'from-green-500 to-green-600',
      sections: [
        {
          title: 'Tuition and Fees (Per Academic Year)',
          content: [
            'BSc Nursing Program: $8,500 tuition + $1,200 fees = $9,700 total',
            'SRN Program: $7,000 tuition + $1,100 fees = $8,100 total',
            'Community Health Nursing: $5,500 tuition + $900 fees = $6,400 total',
            'Midwifery Nursing: $6,800 tuition + $1,000 fees = $7,800 total',
            'Psychiatric Nursing: $8,200 tuition + $1,300 fees = $9,500 total'
          ]
        },
        {
          title: 'Payment Options',
          content: [
            'Full payment due before start of each semester',
            'Payment plans available: 3, 6, or 12-month installments',
            'Online payment accepted via credit card, debit card, or bank transfer',
            'Late payment fee of $100 applies after 30-day grace period',
            'Returned check fee: $35 per occurrence'
          ]
        },
        {
          title: 'Refund Policy',
          content: [
            'Full refund if withdrawal occurs before classes begin',
            '80% refund during first week of classes',
            '60% refund during second week of classes',
            '40% refund during third week of classes',
            'No refund after third week of classes'
          ]
        }
      ]
    },
    {
      id: 'academic',
      title: 'Academic Standards',
      icon: BookOpen,
      color: 'from-orange-500 to-orange-600',
      sections: [
        {
          title: 'Grading System',
          content: [
            'A: 90-100% (4.0 points) - Excellent',
            'B: 80-89% (3.0 points) - Good',
            'C: 70-79% (2.0 points) - Satisfactory',
            'D: 60-69% (1.0 points) - Below Standard',
            'F: Below 60% (0.0 points) - Failing'
          ]
        },
        {
          title: 'Academic Progression',
          content: [
            'Minimum cumulative GPA of 2.0 required for good standing',
            'Nursing courses require minimum grade of C (70%) to progress',
            'Students must maintain 2.5 GPA in nursing courses',
            'Maximum of 2 course repeats allowed in nursing program',
            'Academic probation for GPA below 2.0 for two consecutive semesters'
          ]
        },
        {
          title: 'Clinical Requirements',
          content: [
            'Minimum 75% attendance required for all clinical rotations',
            'Satisfactory clinical evaluation required to pass course',
            'Current CPR certification mandatory for clinical participation',
            'Professional liability insurance required (provided by academy)',
            'Clinical makeup sessions available for excused absences only'
          ]
        }
      ]
    },
    {
      id: 'attendance',
      title: 'Attendance Policy',
      icon: Clock,
      color: 'from-purple-500 to-purple-600',
      sections: [
        {
          title: 'Class Attendance',
          content: [
            'Regular attendance is mandatory for all courses',
            'Maximum of 3 unexcused absences per course per semester',
            'Excused absences require documentation (medical, family emergency)',
            'Students responsible for missed content and assignments',
            'Excessive absences may result in course withdrawal'
          ]
        },
        {
          title: 'Clinical Attendance',
          content: [
            'Clinical attendance is mandatory - no unexcused absences allowed',
            'Medical documentation required for clinical absence',
            'Makeup clinical hours must be completed within same semester',
            'Two clinical absences may result in course failure',
            'Tardiness to clinical (>15 minutes) counts as absence'
          ]
        },
        {
          title: 'Online Learning',
          content: [
            'Active participation in online discussions required weekly',
            'Assignment deadlines are firm - late submissions penalized',
            'Technical difficulties must be reported within 24 hours',
            'Minimum login frequency: 3 times per week',
            'Virtual class attendance tracked and monitored'
          ]
        }
      ]
    },
    {
      id: 'conduct',
      title: 'Student Conduct & Ethics',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      sections: [
        {
          title: 'Professional Behavior',
          content: [
            'Maintain professional appearance and demeanor at all times',
            'Respect for patients, families, faculty, and fellow students',
            'Confidentiality of patient information must be maintained',
            'Punctuality and reliability in all academic and clinical settings',
            'Honest and ethical behavior in all academic work'
          ]
        },
        {
          title: 'Academic Integrity',
          content: [
            'Plagiarism, cheating, and academic dishonesty are prohibited',
            'All sources must be properly cited in academic work',
            'Collaboration on assignments only when explicitly permitted',
            'Use of unauthorized materials during exams is forbidden',
            'Violations may result in course failure or program dismissal'
          ]
        },
        {
          title: 'Clinical Conduct',
          content: [
            'Professional uniform and identification required in clinical settings',
            'Cell phone use prohibited during patient care activities',
            'Social media posts about clinical experiences are forbidden',
            'Substance abuse policy: zero tolerance for drugs/alcohol',
            'Reporting of unsafe practices or ethical concerns is mandatory'
          ]
        }
      ]
    },
    {
      id: 'support',
      title: 'Student Support Services',
      icon: Heart,
      color: 'from-pink-500 to-pink-600',
      sections: [
        {
          title: 'Academic Support',
          content: [
            'Free tutoring services available for all nursing courses',
            'Study groups and peer mentoring programs',
            'Academic advising appointments available weekly',
            'Learning disability accommodations through Student Services',
            'Remediation programs for students at risk of academic failure'
          ]
        },
        {
          title: 'Personal Support',
          content: [
            'Confidential counseling services available at no cost',
            'Financial aid counseling and emergency assistance funds',
            'Career counseling and job placement assistance',
            'Health and wellness programs including stress management',
            'Childcare referral services for student parents'
          ]
        },
        {
          title: 'Technology Support',
          content: [
            '24/7 technical support for online learning platforms',
            'Computer lab access with nursing software and simulations',
            'Free Wi-Fi throughout campus facilities',
            'Equipment loan program for students in need',
            'Training sessions on educational technology tools'
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-seafoamBlue-600 via-vibrantCoral-500 to-seafoamBlue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Academic Policies</h1>
            <p className="text-xl md:text-2xl text-seafoamBlue-100 max-w-4xl mx-auto">
              Clear, fair, and student-friendly policies designed to support your nursing education success
            </p>
          </div>
        </div>
      </section>

      {/* Policies Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Commitment to You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These policies are designed to create a supportive, fair, and professional learning environment for all nursing students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {policies.map((policy) => (
              <div key={policy.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${policy.color} p-6 text-white`}>
                  <policy.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold">{policy.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {policy.sections.length} key areas covered in this policy
                  </p>
                  <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {policies.map((policy) => (
              <div key={policy.id} id={policy.id} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-8">
                  <div className={`bg-gradient-to-r ${policy.color} p-4 rounded-full mr-6`}>
                    <policy.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{policy.title}</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {policy.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="flex items-start">
              <AlertCircle className="w-8 h-8 text-blue-600 mr-4 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Important Policy Information</h3>
                <div className="space-y-4 text-blue-800">
                  <p>
                    <strong>Policy Updates:</strong> These policies are reviewed annually and may be updated. 
                    Students will be notified of any changes via email and student portal announcements.
                  </p>
                  <p>
                    <strong>Appeals Process:</strong> Students have the right to appeal academic decisions 
                    through our formal appeals process. Contact Student Services for guidance.
                  </p>
                  <p>
                    <strong>Accommodations:</strong> Students with documented disabilities can request 
                    reasonable accommodations through our Disability Services office.
                  </p>
                  <p>
                    <strong>Questions:</strong> If you have questions about any policy, please contact 
                    your academic advisor or the Student Services office for clarification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Policy Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Questions About Our Policies?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our Student Services team is here to help you understand and navigate our policies
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <FileText className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Student Handbook</h3>
              <p className="text-gray-600 mb-4">Download the complete student handbook with all policies</p>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Download PDF
              </button>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <Users className="w-8 h-8 text-seafoamBlue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Student Services</h3>
              <p className="text-gray-600 mb-4">Speak with a counselor about policy questions</p>
              <button className="bg-seafoamBlue-600 text-white px-6 py-2 rounded-lg hover:bg-seafoamBlue-700 transition-colors">
                Schedule Meeting
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-seafoamBlue-600 to-vibrantCoral-600 text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Policy Commitment</h3>
            <p className="text-seafoamBlue-100">
              We are committed to maintaining fair, transparent, and student-centered policies that support 
              your success in our nursing programs. Your feedback helps us improve our policies continuously.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;