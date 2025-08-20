import React, { useState } from 'react';
import { Bell, X, CheckCircle, AlertCircle, Info, Calendar, MessageSquare } from 'lucide-react';

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'assignment',
      title: 'Assignment Due Tomorrow',
      message: 'Database Design Project is due tomorrow at 11:59 PM',
      time: '2 hours ago',
      read: false,
      icon: AlertCircle,
      color: 'text-red-600'
    },
    {
      id: 2,
      type: 'grade',
      title: 'Grade Posted',
      message: 'Your grade for Machine Learning Quiz has been posted: 85/100',
      time: '4 hours ago',
      read: false,
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'class',
      title: 'Class Reminder',
      message: 'Software Engineering class starts in 30 minutes',
      time: '6 hours ago',
      read: true,
      icon: Calendar,
      color: 'text-blue-600'
    },
    {
      id: 4,
      type: 'announcement',
      title: 'New Course Material',
      message: 'New lecture notes have been uploaded for Advanced Algorithms',
      time: '1 day ago',
      read: true,
      icon: Info,
      color: 'text-purple-600'
    },
    {
      id: 5,
      type: 'message',
      title: 'Message from Instructor',
      message: 'Dr. Johnson has sent you a message regarding your project proposal',
      time: '2 days ago',
      read: false,
      icon: MessageSquare,
      color: 'text-orange-600'
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const unreadCount = notifications.filter(notif => !notif.read).length;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Bell className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">Notifications</h3>
          {unreadCount > 0 && (
            <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Mark all as read
          </button>
        )}
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-xl border transition-all hover:shadow-md ${
              notification.read 
                ? 'bg-gray-50 border-gray-200' 
                : 'bg-blue-50 border-blue-200'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <notification.icon className={`w-5 h-5 ${notification.color} mt-1`} />
                <div className="flex-1">
                  <h4 className={`font-semibold ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                    {notification.title}
                  </h4>
                  <p className={`text-sm ${notification.read ? 'text-gray-600' : 'text-gray-700'} mt-1`}>
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    Mark as read
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(notification.id)}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="text-center py-8">
          <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No notifications</p>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;