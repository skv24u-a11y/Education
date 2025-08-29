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
      <div className="bg-seafoamBlue-500 text-white py-2">
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
                className="bg-navyBlue-800 hover:bg-navyBlue-900 px-4 py-1 rounded text-sm font-medium transition-colors"
              >
                Student Portal
              </Link>
              <Link
                to="/onboarding"
                className="bg-white text-seafoamBlue-500 hover:bg-warmGray-50 px-4 py-1 rounded text-sm font-medium transition-colors"
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
         <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img
              src="https://i.ibb.co/pv1FfsPt/log-removebg-preview.png"
              alt="Matipa College of Nursing Logo"
              className="w-16 h-16 object-contain"
            />
  <div>
              <h1 className="text-2xl font-bold text-seafoamBlue-500">
      Matipa College of Nursing
    </h1>
    <p className="text-sm text-navyBlue-800 font-medium">
      Empowering African Excellence
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
                    ? 'text-seafoamBlue-500 bg-seafoamBlue-50'
                    : 'text-navyBlue-800 hover:text-seafoamBlue-500 hover:bg-seafoamBlue-50'
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
              className="bg-seafoamBlue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-seafoamBlue-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-navyBlue-800 hover:text-seafoamBlue-500 hover:bg-seafoamBlue-50"
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
                      ? 'text-seafoamBlue-500 bg-seafoamBlue-50'
                      : 'text-navyBlue-800 hover:text-seafoamBlue-500 hover:bg-seafoamBlue-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                <Link
                  to="/portal"
                  className="w-full bg-navyBlue-800 hover:bg-navyBlue-900 text-white px-4 py-2 rounded text-sm font-medium transition-colors block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Student Portal
                </Link>
                <Link
                  to="/onboarding"
                  className="w-full bg-seafoamBlue-500 text-white px-4 py-2 rounded font-medium hover:bg-seafoamBlue-600 transition-all block text-center shadow-lg"
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