import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Container from '../ui/Container';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 pt-16 pb-8 relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img src={logo} alt="Orangecut Media Logo" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold tracking-tight text-white">Orangecut Media</span>
            </div>
            <p className="mb-6">
              Premium video editing services tailored to elevate your brand and captivate your audience.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/orangecutmedia/" className="text-zinc-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">About</Link></li>
              <li><Link to="/showcase" className="hover:text-orange-400 transition-colors">Showcase</Link></li>
              <li><Link to="/services" className="hover:text-orange-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-orange-400 transition-colors">Video Editing</Link></li>
              <li><Link to="/services" className="hover:text-orange-400 transition-colors">Motion Graphics</Link></li>
              <li><Link to="/services" className="hover:text-orange-400 transition-colors">Social Media</Link></li>
              <li><Link to="/services" className="hover:text-orange-400 transition-colors">Content Creation</Link></li>
              <li><Link to="/services" className="hover:text-orange-400 transition-colors">Brand Videos</Link></li>
              <li><Link to="/services" className="hover:text-orange-400 transition-colors">YouTube</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0 mt-0.5" />
                <span> Mumbai</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0" />
                <span>+91 6397489467</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0" />
                <span>hello@orangecutmedia.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} OrangecutMedia. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;