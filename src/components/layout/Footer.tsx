import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Container from '../ui/Container';
import logo from '../../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 pt-16 pb-8">
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
              <li><a href="#" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-orange-400 transition-colors">Our Work</a></li>
              <li><a href="#process" className="hover:text-orange-400 transition-colors">Process</a></li>
              <li><a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Commercial Editing</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Social Media Content</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Documentary Films</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Wedding Videos</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Motion Graphics</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Color Grading</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>123 Creative St, Media City, Mumbai</span>
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