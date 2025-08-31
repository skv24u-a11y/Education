import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+16725599154';
  const defaultMessage = 'Hello! How can I get admission to your nursing academy?';

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                  <p className="text-gray-400 text-sm">Nursing Excellence</p>
                <p className="text-sm text-green-100">Nursing Admissions Support</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-4 bg-gray-50 max-h-64 overflow-y-auto">
            <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
              <p className="text-sm text-gray-700">
                👋 Hello! Welcome to Matipa College of Nursing - Leading online nursing education!
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
              <p className="text-sm text-gray-700">
                🏥 We offer comprehensive nursing programs including:
              </p>
              <ul className="text-xs text-gray-600 mt-2 space-y-1">
                <li>• Bachelor of Science in Nursing (BSN)</li>
                <li>• Registered Nurse (RN) Programs</li>
                <li>• Nurse Practitioner (NP) Specializations</li>
                <li>• Clinical Nursing Certifications</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-700">
                📱 Click below to chat with our nursing admissions team on WhatsApp for instant support!
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-4 bg-white border-t">
            <button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Get instant nursing admission guidance & support
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;