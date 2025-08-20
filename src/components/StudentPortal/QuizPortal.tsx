import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Play, 
  BarChart3,
  Trophy,
  Target,
  Zap,
  BookOpen,
  TrendingUp,
  Calendar
} from 'lucide-react';

const QuizPortal: React.FC = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const quizzes = [
    {
      id: 1,
      title: 'Data Structures Fundamentals',
      subject: 'CS 302',
      questions: 15,
      duration: 30,
      difficulty: 'Medium',
      maxScore: 100,
      attempts: 2,
      maxAttempts: 3,
      dueDate: '2024-03-25',
      status: 'available',
      description: 'Test your knowledge of arrays, linked lists, stacks, and queues.',
      topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues'],
      lastScore: 85
    },
    {
      id: 2,
      title: 'Database Design Quiz',
      subject: 'CS 301',
      questions: 20,
      duration: 45,
      difficulty: 'Hard',
      maxScore: 100,
      attempts: 1,
      maxAttempts: 2,
      dueDate: '2024-03-22',
      status: 'available',
      description: 'Advanced concepts in database normalization and query optimization.',
      topics: ['Normalization', 'SQL Queries', 'Indexing', 'Transactions'],
      lastScore: null
    },
    {
      id: 3,
      title: 'Web Development Basics',
      subject: 'CS 350',
      questions: 12,
      duration: 25,
      difficulty: 'Easy',
      maxScore: 100,
      attempts: 3,
      maxAttempts: 3,
      dueDate: '2024-03-20',
      status: 'completed',
      description: 'HTML, CSS, and JavaScript fundamentals.',
      topics: ['HTML', 'CSS', 'JavaScript', 'DOM'],
      lastScore: 92
    },
    {
      id: 4,
      title: 'Machine Learning Concepts',
      subject: 'CS 405',
      questions: 18,
      duration: 40,
      difficulty: 'Hard',
      maxScore: 100,
      attempts: 0,
      maxAttempts: 2,
      dueDate: '2024-03-28',
      status: 'upcoming',
      description: 'Supervised and unsupervised learning algorithms.',
      topics: ['Regression', 'Classification', 'Clustering', 'Neural Networks'],
      lastScore: null
    }
  ];

  const sampleQuestions = [
    {
      id: 1,
      question: "Which data structure follows the Last In First Out (LIFO) principle?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correctAnswer: 1,
      explanation: "A stack follows the LIFO principle where the last element added is the first one to be removed."
    },
    {
      id: 2,
      question: "What is the time complexity of searching in a balanced binary search tree?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswer: 1,
      explanation: "In a balanced BST, the height is log n, so search operations take O(log n) time."
    },
    {
      id: 3,
      question: "Which sorting algorithm has the best average-case time complexity?",
      options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
      correctAnswer: 2,
      explanation: "Merge Sort has O(n log n) time complexity in all cases, making it efficient for large datasets."
    }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (quizStarted && timeLeft > 0 && !quizCompleted) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && quizStarted) {
      handleQuizSubmit();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, quizStarted, quizCompleted]);

  const startQuiz = (quiz: any) => {
    setSelectedQuiz(quiz);
    setQuizStarted(true);
    setTimeLeft(quiz.duration * 60);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });
  };

  const handleQuizSubmit = () => {
    setQuizCompleted(true);
    setQuizStarted(false);
    
    // Calculate score
    let correctAnswers = 0;
    sampleQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    const finalScore = Math.round((correctAnswers / sampleQuestions.length) * 100);
    setScore(finalScore);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="bg-white rounded-3xl p-12 shadow-2xl text-center max-w-2xl">
          <div className="mb-8">
            <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Quiz Completed!</h1>
            <p className="text-xl text-gray-600">Great job on completing the quiz</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
            <h2 className="text-3xl font-bold mb-2">Your Score</h2>
            <p className="text-6xl font-bold mb-2">{score}%</p>
            <p className="text-blue-100">
              {score >= 90 ? 'Excellent!' : score >= 80 ? 'Great job!' : score >= 70 ? 'Good work!' : 'Keep practicing!'}
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-2xl font-bold text-gray-900">{Object.keys(selectedAnswers).length}</p>
              <p className="text-gray-600">Answered</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-2xl font-bold text-green-600">{Math.round(score * sampleQuestions.length / 100)}</p>
              <p className="text-gray-600">Correct</p>
            </div>
            <div className="bg-red-50 rounded-xl p-4">
              <p className="text-2xl font-bold text-red-600">{sampleQuestions.length - Math.round(score * sampleQuestions.length / 100)}</p>
              <p className="text-gray-600">Incorrect</p>
            </div>
          </div>
          
          <div className="flex space-x-4 justify-center">
            <button 
              onClick={() => {
                setQuizCompleted(false);
                setSelectedQuiz(null);
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Quizzes
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Review Answers
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizStarted && selectedQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Quiz Header */}
        <div className="bg-white shadow-lg p-6">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{selectedQuiz.title}</h1>
              <p className="text-gray-600">Question {currentQuestion + 1} of {sampleQuestions.length}</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <Clock className="w-6 h-6 text-red-600 mx-auto mb-1" />
                <p className={`text-lg font-bold ${timeLeft < 300 ? 'text-red-600' : 'text-gray-900'}`}>
                  {formatTime(timeLeft)}
                </p>
              </div>
              <button 
                onClick={handleQuizSubmit}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Submit Quiz
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto p-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="max-w-4xl mx-auto p-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {sampleQuestions[currentQuestion]?.question}
            </h2>
            
            <div className="space-y-4">
              {sampleQuestions[currentQuestion]?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(currentQuestion, index)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswers[currentQuestion] === index && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="text-lg">{option}</span>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {currentQuestion < sampleQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleQuizSubmit}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-4 mb-6">
          <Award className="w-12 h-12" />
          <div>
            <h1 className="text-3xl font-bold">Quiz Portal</h1>
            <p className="text-purple-100">Test your knowledge and track your progress</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{quizzes.filter(q => q.status === 'available').length}</p>
            <p className="text-sm text-purple-100">Available</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{quizzes.filter(q => q.status === 'completed').length}</p>
            <p className="text-sm text-purple-100">Completed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">
              {Math.round(quizzes.filter(q => q.lastScore).reduce((acc, q) => acc + (q.lastScore || 0), 0) / quizzes.filter(q => q.lastScore).length) || 0}%
            </p>
            <p className="text-sm text-purple-100">Avg Score</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{quizzes.filter(q => q.status === 'upcoming').length}</p>
            <p className="text-sm text-purple-100">Upcoming</p>
          </div>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">↗ 12%</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Score Improvement</h3>
            <p className="text-gray-600 text-sm">Your average score has improved by 12% this month</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-green-600">85%</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Accuracy Rate</h3>
            <p className="text-gray-600 text-sm">Your overall accuracy across all quizzes</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-purple-600">7</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Streak Days</h3>
            <p className="text-gray-600 text-sm">Consecutive days of quiz completion</p>
          </div>
        </div>
      </div>

      {/* Available Quizzes */}
      <div className="grid grid-cols-1 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row justify-between items-start space-y-4 lg:space-y-0">
              {/* Quiz Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{quiz.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(quiz.status)}`}>
                    {quiz.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(quiz.difficulty)}`}>
                    {quiz.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{quiz.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>{quiz.subject}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{quiz.duration} minutes</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Target className="w-4 h-4 mr-2" />
                    <span>{quiz.questions} questions</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Due: {quiz.dueDate}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {quiz.topics.map((topic, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Attempts: {quiz.attempts}/{quiz.maxAttempts}</span>
                  {quiz.lastScore && (
                    <span className="font-medium text-green-600">Last Score: {quiz.lastScore}%</span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col space-y-3 min-w-[200px]">
                {quiz.status === 'available' && quiz.attempts < quiz.maxAttempts && (
                  <button 
                    onClick={() => startQuiz(quiz)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>Start Quiz</span>
                  </button>
                )}
                
                {quiz.status === 'completed' && (
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>View Results</span>
                  </button>
                )}
                
                {quiz.status === 'upcoming' && (
                  <button className="bg-gray-400 text-white px-6 py-3 rounded-lg cursor-not-allowed flex items-center justify-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>Coming Soon</span>
                  </button>
                )}
                
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>View Stats</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizPortal;