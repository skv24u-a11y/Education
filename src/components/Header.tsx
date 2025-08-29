import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Policies', href: '/policies' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Donation', href: '/donation' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-seafoam-400 to-seafoam-600 rounded-lg blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <img
                src="https://i.ibb.co/393rK7nD/generated-image.png"
                alt="Matipa College of Nursing Logo"
                className="relative w-16 h-16 object-contain rounded-lg shadow-lg border-2 border-seafoam-200 group-hover:scale-105 transition-transform"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-seafoam-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-seafoam-600 to-seafoam-700 bg-clip-text text-transparent group-hover:from-seafoam-500 group-hover:to-seafoam-600 transition-all">
                Matipa College of Nursing
              </h1>
              <p className="text-sm text-seafoam-600 font-medium group-hover:text-seafoam-700 transition-colors">
                Empowering African Excellence 🌍
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-seafoam-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/onboarding"
              className="bg-gradient-to-r from-seafoam-600 to-seafoam-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-seafoam-700 hover:to-seafoam-800 transition-all transform hover:scale-105"
            >
              Apply Now
            </Link>
            <Link
              to="/portal"
              className="border-2 border-seafoam-600 text-seafoam-600 px-6 py-2 rounded-lg font-semibold hover:bg-seafoam-50 transition-colors"
            >
              Student Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-seafoam-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link
                  to="/onboarding"
                  className="bg-gradient-to-r from-seafoam-600 to-seafoam-700 text-white px-6 py-2 rounded-lg font-semibold text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Apply Now
                </Link>
                <Link
                  to="/portal"
                  className="border-2 border-seafoam-600 text-seafoam-600 px-6 py-2 rounded-lg font-semibold text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Student Portal
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