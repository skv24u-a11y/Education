import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://i.ibb.co/pv1FfsPt/log-removebg-preview.png"
                alt="MA Logo"
                className="w-12 h-12 object-contain"
              />
              <div className="bg-gradient-to-r from-seafoamBlue-500 to-seafoamBlue-600 p-2 rounded-lg hidden">
                <span className="text-white font-bold text-lg">MA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Matipa College of Nursing</h3>
                <p className="text-gray-400 text-sm">Empowering Nursing Excellence</p>
              </div>
            </div>
            <p className="text-gray-400">
              Empowering nursing students with world-class nursing education and innovative clinical learning experiences since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/admissions" className="text-gray-400 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/policies" className="text-gray-400 hover:text-white transition-colors">Policies</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li>BSc Nursing</li>
              <li>State Registered Nurse (SRN)</li>
              <li>Community Health Nursing</li>
              <li>Midwifery Nursing</li>
              <li>Psychiatric Nursing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-400">Freetown, Sierra Leone</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-400">033762485 / 034485514</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-400">info@matipaacademy.online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Matipa College of Nursing. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;