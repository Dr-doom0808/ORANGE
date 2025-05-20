import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { Instagram, Youtube, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-white"
              >
                Orange Cut Media
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-zinc-400 text-sm leading-relaxed"
              >
                Transforming ideas into compelling visual stories through expert video editing and motion graphics.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex space-x-5"
              >
                {[
                  { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
                  { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com" },
                  { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-orange-500 transition-colors duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-white">Our Services</h3>
              <ul className="space-y-3">
                {[
                  "Video Editing",
                  "Motion Graphics",
                  "Color Grading",
                  "Sound Design"
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group"
                  >
                    <Link to="/services" className="text-zinc-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service}
                  </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", path: "/about" },
                  { name: "Showcase", path: "/showcase" },
                  { name: "Reviews", path: "/reviews" },
                  { name: "Contact", path: "/contact" }
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group"
                  >
                    <Link to={link.path} className="text-zinc-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                  </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-white">Contact Us</h3>
              <ul className="space-y-4">
                {[
                  { icon: <Mail className="w-4 h-4" />, text: "orangecutmedia@gmail.com" },
                  { icon: <Phone className="w-4 h-4" />, text: "+91 9405912659" },
                  { icon: <MapPin className="w-4 h-4" />, text: "Mumbai, Maharashtra, India" }
                ].map((contact, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-zinc-400 text-sm group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-orange-500 group-hover:scale-110 transition-transform duration-300">{contact.icon}</span>
                    <span className="group-hover:text-orange-500 transition-colors duration-300">{contact.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="border-t border-zinc-800 mt-16 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-zinc-400 text-sm">
                © {new Date().getFullYear()} Orange Cut Media. All rights reserved.
              </p>
              <div className="flex space-x-8">
                {[
                  { name: "Privacy Policy", path: "/privacy" },
                  { name: "Terms of Service", path: "/terms" }
                ].map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={link.path} className="text-zinc-400 hover:text-orange-500 transition-colors duration-300 text-sm">
                      {link.name}
                </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;