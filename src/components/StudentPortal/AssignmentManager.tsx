import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Download,
  Eye,
  MessageSquare,
  Star,
  Filter,
  Search
} from 'lucide-react';

const AssignmentManager: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('pending');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const assignments = [
    {
      id: 1,
      title: 'Database Design Project',
      subject: 'CS 301 - Database Systems',
      dueDate: '2024-03-20',
      dueTime: '11:59 PM',
      status: 'pending',
      priority: 'high',
      description: 'Design and implement a complete database system for a library management system.',
      maxMarks: 100,
      submissionFormat: 'PDF + SQL Files',
      instructions: 'Include ER diagram, normalized tables, and sample queries.',
      attachments: ['assignment_guidelines.pdf', 'sample_data.sql']
    },
    {
      id: 2,
      title: 'Machine Learning Report',
      subject: 'CS 405 - Artificial Intelligence',
      dueDate: '2024-03-25',
      dueTime: '11:59 PM',
      status: 'submitted',
      priority: 'medium',
      description: 'Comparative analysis of different machine learning algorithms.',
      maxMarks: 80,
      submissionFormat: 'PDF Report',
      submittedDate: '2024-03-18',
      grade: 75,
      feedback: 'Good analysis but could improve on the conclusion section.',
      teacherComments: 'Well-structured report with clear methodology. Consider adding more recent research papers in your references.'
    },
    {
      id: 3,
      title: 'Web Development Portfolio',
      subject: 'CS 350 - Web Technologies',
      dueDate: '2024-03-30',
      dueTime: '11:59 PM',
      status: 'in-progress',
      priority: 'medium',
      description: 'Create a responsive portfolio website showcasing your projects.',
      maxMarks: 90,
      submissionFormat: 'GitHub Repository Link',
      instructions: 'Must include at least 3 projects with live demos.'
    },
    {
      id: 4,
      title: 'Algorithm Analysis',
      subject: 'CS 302 - Data Structures',
      dueDate: '2024-04-05',
      dueTime: '11:59 PM',
      status: 'pending',
      priority: 'low',
      description: 'Analyze time and space complexity of sorting algorithms.',
      maxMarks: 70,
      submissionFormat: 'PDF + Code Files'
    }
  ];

  const filteredAssignments = assignments.filter(assignment => {
    const matchesTab = selectedTab === 'all' || assignment.status === selectedTab;
    const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assignment.subject.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Assignment Manager</h1>
        <p className="text-purple-100 mb-6">Track, submit, and manage all your assignments in one place</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{assignments.filter(a => a.status === 'pending').length}</p>
            <p className="text-sm text-purple-100">Pending</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{assignments.filter(a => a.status === 'in-progress').length}</p>
            <p className="text-sm text-purple-100">In Progress</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{assignments.filter(a => a.status === 'submitted').length}</p>
            <p className="text-sm text-purple-100">Submitted</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">
              {assignments.filter(a => a.grade).reduce((acc, a) => acc + (a.grade || 0), 0) / assignments.filter(a => a.grade).length || 0}%
            </p>
            <p className="text-sm text-purple-100">Avg Grade</p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Tabs */}
          <div className="flex space-x-2">
            {['all', 'pending', 'in-progress', 'submitted'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search assignments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Assignments List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredAssignments.map((assignment) => (
          <div key={assignment.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col lg:flex-row justify-between items-start space-y-4 lg:space-y-0">
              {/* Assignment Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{assignment.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                    {assignment.status.replace('-', ' ')}
                  </span>
                  <span className={`text-sm font-medium ${getPriorityColor(assignment.priority)}`}>
                    {assignment.priority} priority
                  </span>
                </div>
                
                <p className="text-gray-600 mb-2">{assignment.subject}</p>
                <p className="text-gray-700 mb-4">{assignment.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Due: {assignment.dueDate} at {assignment.dueTime}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Max Marks: {assignment.maxMarks}
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    Format: {assignment.submissionFormat}
                  </div>
                </div>

                {assignment.status === 'submitted' && assignment.grade && (
                  <div className="mt-4 p-4 bg-green-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-green-800">Grade: {assignment.grade}/{assignment.maxMarks}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor((assignment.grade || 0) / 20) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                    {assignment.teacherComments && (
                      <div className="bg-white p-3 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <MessageSquare className="w-4 h-4 text-blue-600 mt-1" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Teacher Feedback:</p>
                            <p className="text-sm text-gray-700">{assignment.teacherComments}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col space-y-3 min-w-[200px]">
                {assignment.status === 'pending' && (
                  <>
                    <div className={`text-center p-3 rounded-xl ${
                      getDaysUntilDue(assignment.dueDate) <= 2 ? 'bg-red-50 text-red-700' :
                      getDaysUntilDue(assignment.dueDate) <= 7 ? 'bg-yellow-50 text-yellow-700' :
                      'bg-green-50 text-green-700'
                    }`}>
                      <Clock className="w-5 h-5 mx-auto mb-1" />
                      <p className="text-sm font-medium">
                        {getDaysUntilDue(assignment.dueDate)} days left
                      </p>
                    </div>
                    
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                      <Upload className="w-4 h-4" />
                      <span>Submit Assignment</span>
                    </button>
                  </>
                )}

                {assignment.status === 'in-progress' && (
                  <>
                    <div className="bg-yellow-50 text-yellow-700 text-center p-3 rounded-xl">
                      <AlertTriangle className="w-5 h-5 mx-auto mb-1" />
                      <p className="text-sm font-medium">In Progress</p>
                    </div>
                    
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                      <Upload className="w-4 h-4" />
                      <span>Upload Final</span>
                    </button>
                  </>
                )}

                {assignment.status === 'submitted' && (
                  <>
                    <div className="bg-green-50 text-green-700 text-center p-3 rounded-xl">
                      <CheckCircle className="w-5 h-5 mx-auto mb-1" />
                      <p className="text-sm font-medium">Submitted</p>
                      <p className="text-xs">{assignment.submittedDate}</p>
                    </div>
                    
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>View Submission</span>
                    </button>
                  </>
                )}

                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download Brief</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Upload Modal Trigger */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110">
          <Upload className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default AssignmentManager;