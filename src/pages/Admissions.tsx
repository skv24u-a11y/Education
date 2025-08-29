import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  FileText, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Users,
  Award,
  BookOpen,
  AlertCircle,
  Phone,
  Mail
} from 'lucide-react';

const Admissions: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Admissions - Matipa Academy | Apply to Nursing Programs';
    document.title = 'Admissions - Matipa College of Nursing | Apply to Nursing Programs';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Matipa College of Nursing\'s nursing program admissions process, requirements, deadlines, and financial aid options. Start your nursing education journey today.');
    }
  }, []);

  const admissionSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete our online application form with personal and academic information',
      timeline: 'Takes 15-20 minutes',
      icon: FileText
    },
    {
      step: 2,
      title: 'Document Submission',
      description: 'Upload required documents including transcripts and recommendations',
      timeline: '1-2 weeks to gather',
      icon: BookOpen
    },
    {
      step: 3,
      title: 'Application Review',
      description: 'Our admissions team reviews your complete application',
      timeline: '2-3 weeks',
      icon: Users
    },
    {
      step: 4,
      title: 'Interview Process',
      description: 'Virtual interview with nursing faculty and admissions counselor',
      timeline: '30-45 minutes',
      icon: Clock
    },
    {
      step: 5,
      title: 'Admission Decision',
      description: 'Receive your admission decision via email and postal mail',
      timeline: '1-2 weeks after interview',
      icon: CheckCircle
    },
    {
      step: 6,
      title: 'Enrollment',
      description: 'Accept offer, pay deposit, and complete enrollment requirements',
      timeline: '2-4 weeks',
      icon: Award
    }
  ];

  const requirements = [
    {
      category: 'Academic Requirements',
      items: [
        'High school diploma or equivalent (GED accepted)',
        'Minimum cumulative GPA of 2.5 on a 4.0 scale',
        'Completion of prerequisite courses with grade C or better',
        'Science courses: Biology, Chemistry, Anatomy & Physiology',
        'Mathematics: Algebra or higher level math course'
      ]
    },
    {
      category: 'Application Materials',
      items: [
        'Completed online application form',
        'Official high school and college transcripts',
        'Two letters of recommendation (academic or professional)',
        'Personal statement (500-750 words)',
        'Resume or CV highlighting healthcare experience'
      ]
    },
    {
      category: 'Health & Background',
      items: [
        'Criminal background check clearance',
        'Health clearance from licensed physician',
        'Current immunization records (MMR, Hepatitis B, etc.)',
        'CPR certification (Basic Life Support preferred)',
        'Drug screening (required before clinical rotations)'
      ]
    },
    {
      category: 'International Students',
      items: [
        'TOEFL score of 80+ or IELTS score of 6.5+',
        'Credential evaluation of foreign transcripts',
        'Proof of financial support for tuition and living expenses',
        'Valid passport and visa documentation',
        'English proficiency interview may be required'
      ]
    }
  ];

  const deadlines = [
    {
      semester: 'Fall Semester',
      priority: 'March 1st',
      regular: 'May 1st',
      late: 'June 15th (if space available)',
      startDate: 'August'
    },
    {
      semester: 'Spring Semester',
      priority: 'September 1st',
      regular: 'November 1st',
      late: 'December 15th (if space available)',
      startDate: 'January'
    },
    {
      semester: 'Summer Session',
      priority: 'January 1st',
      regular: 'March 1st',
      late: 'April 15th (if space available)',
      startDate: 'May'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-400 via-teal-500 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Admissions</h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto">
              Your journey to becoming a healthcare professional starts here
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to join our nursing programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionSteps.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <step.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <div className="flex items-center text-sm text-orange-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {step.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ensure you meet all requirements before applying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{req.category}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
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
      </section>

      {/* Application Deadlines */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Deadlines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan ahead and apply early for the best chance of admission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deadlines.map((deadline, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{deadline.semester}</h3>
                  <p className="text-gray-600">Classes begin in {deadline.startDate}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-green-800">Priority Deadline</span>
                    <span className="text-green-600 font-bold">{deadline.priority}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium text-yellow-800">Regular Deadline</span>
                    <span className="text-yellow-600 font-bold">{deadline.regular}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="font-medium text-red-800">Late Deadline</span>
                    <span className="text-red-600 font-bold text-sm">{deadline.late}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Important Notes:</h3>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• Priority deadline applicants receive first consideration for admission and financial aid</li>
                  <li>• Late applications are accepted only if space is available in the program</li>
                  <li>• International students should apply by the priority deadline due to visa processing time</li>
                  <li>• All deadlines are at 11:59 PM Eastern Time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financial Aid & Scholarships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to making nursing education affordable and accessible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-teal-100 p-6 rounded-xl">
              <DollarSign className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Merit Scholarships</h3>
              <p className="text-gray-600 mb-4">Academic excellence scholarships up to $5,000 per year</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• GPA-based awards</li>
                <li>• Leadership scholarships</li>
                <li>• Community service awards</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Need-Based Aid</h3>
              <p className="text-gray-600 mb-4">Financial assistance based on demonstrated need</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Federal Pell Grants</li>
                <li>• State grant programs</li>
                <li>• Institutional grants</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-6 rounded-xl">
              <BookOpen className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Work-Study Programs</h3>
              <p className="text-gray-600 mb-4">Earn money while gaining valuable experience</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Campus employment</li>
                <li>• Healthcare facility partnerships</li>
                <li>• Research assistantships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Admissions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Questions About Admissions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our admissions counselors are here to help you every step of the way
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Phone className="w-8 h-8 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+254 700 123 456</p>
              <p className="text-sm text-gray-500">Monday - Friday, 8 AM - 6 PM</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Mail className="w-8 h-8 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">admissions@matipaacademy.online</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>
          </div>

          <Link
            to="/onboarding"
            className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-teal-700 transition-all transform hover:scale-105 inline-block"
          >
            Start Your Application
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Admissions;