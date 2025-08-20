import React, { useState } from 'react';
import { 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Upload, 
  FileText, 
  User, 
  GraduationCap,
  Calendar,
  Download,
  Eye
} from 'lucide-react';

const AdmissionTracker: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const admissionSteps = [
    { 
      id: 1, 
      title: 'Application Submitted', 
      status: 'completed', 
      date: '2024-01-15',
      description: 'Your application has been successfully submitted and is under review.'
    },
    { 
      id: 2, 
      title: 'Document Verification', 
      status: 'completed', 
      date: '2024-01-20',
      description: 'All required documents have been verified and approved.'
    },
    { 
      id: 3, 
      title: 'Entrance Test', 
      status: 'completed', 
      date: '2024-02-01',
      description: 'Entrance test completed with a score of 85/100.'
    },
    { 
      id: 4, 
      title: 'Interview Round', 
      status: 'in-progress', 
      date: '2024-02-15',
      description: 'Interview scheduled for February 15th at 10:00 AM.'
    },
    { 
      id: 5, 
      title: 'Final Decision', 
      status: 'pending', 
      date: 'TBD',
      description: 'Final admission decision will be communicated after the interview.'
    },
    { 
      id: 6, 
      title: 'Enrollment', 
      status: 'pending', 
      date: 'TBD',
      description: 'Complete enrollment process and fee payment.'
    }
  ];

  const requiredDocuments = [
    { name: 'Academic Transcripts', status: 'uploaded', uploadDate: '2024-01-10' },
    { name: 'Identity Proof', status: 'uploaded', uploadDate: '2024-01-10' },
    { name: 'Passport Photo', status: 'uploaded', uploadDate: '2024-01-10' },
    { name: 'Statement of Purpose', status: 'uploaded', uploadDate: '2024-01-12' },
    { name: 'Letters of Recommendation', status: 'pending', uploadDate: null },
    { name: 'Portfolio (if applicable)', status: 'pending', uploadDate: null }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-yellow-500" />;
      default:
        return <AlertCircle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <GraduationCap className="w-10 h-10" />
          <div>
            <h1 className="text-3xl font-bold">Admission Tracker</h1>
            <p className="text-blue-100">Track your admission progress and manage documents</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <h3 className="font-semibold mb-2">Application ID</h3>
            <p className="text-2xl font-bold">ADM2024001</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <h3 className="font-semibold mb-2">Program Applied</h3>
            <p className="text-2xl font-bold">Computer Science</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <h3 className="font-semibold mb-2">Application Status</h3>
            <p className="text-2xl font-bold text-yellow-300">Under Review</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Progress Timeline */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Admission Progress</h2>
          
          <div className="relative">
            {admissionSteps.map((step, index) => (
              <div key={step.id} className="flex items-start space-x-4 mb-8 last:mb-0">
                <div className="relative">
                  {getStatusIcon(step.status)}
                  {index < admissionSteps.length - 1 && (
                    <div className={`absolute top-8 left-3 w-0.5 h-16 ${getStatusColor(step.status)}`}></div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      step.status === 'completed' ? 'bg-green-100 text-green-800' :
                      step.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {step.status.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {step.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Management */}
        <div className="space-y-6">
          {/* Document Upload */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Documents</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload New Document</h3>
              <p className="text-gray-600 mb-4">Drag and drop your file here, or click to browse</p>
              
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
              <label
                htmlFor="file-upload"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer inline-block"
              >
                Choose File
              </label>
              
              {selectedFile && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-medium">{selectedFile.name}</p>
                  <p className="text-blue-600 text-sm">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              )}
            </div>
          </div>

          {/* Document Status */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Document Status</h2>
            
            <div className="space-y-4">
              {requiredDocuments.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                      {doc.uploadDate && (
                        <p className="text-sm text-gray-600">Uploaded on {doc.uploadDate}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      doc.status === 'uploaded' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {doc.status}
                    </span>
                    
                    {doc.status === 'uploaded' ? (
                      <div className="flex space-x-1">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors">
                        Upload
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upcoming Interview</h3>
            <p className="text-gray-600 mb-4">Your interview is scheduled for February 15th at 10:00 AM. Please prepare the following:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Review your application and statement of purpose</li>
              <li>• Prepare questions about the program</li>
              <li>• Test your video call setup</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Join Interview
            </button>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pending Actions</h3>
            <p className="text-gray-600 mb-4">Complete these actions to move forward:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Upload Letters of Recommendation</li>
              <li>• Submit Portfolio (if applicable)</li>
              <li>• Complete background verification</li>
            </ul>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Complete Actions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionTracker;