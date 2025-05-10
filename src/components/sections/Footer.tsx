import React from 'react';
import Container from '../ui/Container';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-12 md:pt-20 pb-6 md:pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Orange Cut Media</h3>
            <p className="text-zinc-400 text-sm">
              Creating compelling video content that tells your story and connects with your audience.
            </p>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-orange-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-orange-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Link to="/" className="block text-zinc-400 hover:text-orange-500 transition-colors text-sm">Home</Link>
                <Link to="/about" className="block text-zinc-400 hover:text-orange-500 transition-colors text-sm">About</Link>
                <Link to="/showcase" className="block text-zinc-400 hover:text-orange-500 transition-colors text-sm">Showcase</Link>
              </div>
              <div className="space-y-2">
                <Link to="/services" className="block text-zinc-400 hover:text-orange-500 transition-colors text-sm">Services</Link>
                <Link to="/contact" className="block text-zinc-400 hover:text-orange-500 transition-colors text-sm">Contact</Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Link to="/services" className="block text-zinc-400 hover:text-orange-500 transition-colors text-sm">Video Editing</Link>
                <Link to="/services" className="block text-zinc-400 hover:text-orange-500 transition-colors text-sm">Motion Graphics</Link>
                <Link to="/services" className="block text-zinc-400 hover:text-orange-500 transition-colors text-sm">Social Media</Link>
              </div>
              <div className="space-y-2">
                <Link to="/services" className="block text-zinc-400 hover:text-orange-500 transition-colors text-sm">Content Creation</Link>
                <Link to="/services" className="block text-zinc-400 hover:text-orange-500 transition-colors text-sm">Brand Videos</Link>
                <Link to="/services" className="block text-zinc-400 hover:text-orange-500 transition-colors text-sm">YouTube</Link>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-zinc-400 text-sm">Email: info@orangecutmedia.com</p>
              <p className="text-zinc-400 text-sm">Phone: +91 1234567890</p>
              <p className="text-zinc-400 text-sm">Location: Mumbai, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 md:mt-12 pt-6 md:pt-8">
          <p className="text-center text-zinc-400 text-sm">
            © {new Date().getFullYear()} Orange Cut Media. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 