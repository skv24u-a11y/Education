import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Policies', href: '/policies' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Donation', href: '/donation' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>033762485/ 034485514</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <span>info@matipaacademy.online</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link 
                to="/portal"
                className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded text-sm font-medium transition-colors"
              >
                Student Portal
              </Link>
              <Link
                to="/onboarding"
                className="bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded text-sm font-medium transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 hover:scale-105 transition-all duration-300 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img
                src="https://i.ibb.co/393rK7nD/generated-image.png"
                alt="Matipa College of Nursing Logo"
                className="relative w-16 h-16 object-contain rounded-xl shadow-2xl border-2 border-white/20 group-hover:border-orange-300 transition-all duration-300"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:via-red-500 group-hover:to-yellow-500 transition-all duration-300">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:from-teal-500 group-hover:via-cyan-500 group-hover:to-blue-500 transition-all duration-300">
                Matipa College of Nursing
              </h1>
              <p className="text-sm font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                🌍 Empowering African Excellence
              </p>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/onboarding"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-lg font-medium hover:from-teal-600 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-teal-50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                <Link
                  to="/portal"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Student Portal
                </Link>
                <Link
                  to="/onboarding"
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded font-medium hover:from-teal-600 hover:to-cyan-700 transition-all block text-center shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        )}
      
      </div>
    </header>
  );
};

export default Header;