import React, { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message
    alert('Thanks for your message! We\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-zinc-950">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-zinc-400 mb-8 text-base">
                Ready to bring your video project to life? Contact us today to discuss your needs and how we can help elevate your visual content.
              </p>
              
              <div className="space-y-4 mb-8 max-w-md">
                <a 
                  href="mailto:orangecutmedia@gmail.com" 
                  className="flex items-center bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-xl p-4 border border-zinc-800 hover:border-indigo-500/50 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-500 mr-4 group-hover:bg-indigo-500/30 transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-0.5">Email Us</h3>
                    <p className="text-zinc-400 text-sm">orangecutmedia@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/919405912659" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-xl p-4 border border-zinc-800 hover:border-indigo-500/50 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-500 mr-4 group-hover:bg-indigo-500/30 transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-0.5">WhatsApp Us</h3>
                    <p className="text-zinc-400 text-sm">+91 9405912659</p>
                  </div>
                </a>
                
                <a 
                  href="https://maps.google.com/?q=Mumbai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-xl p-4 border border-zinc-800 hover:border-indigo-500/50 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-500 mr-4 group-hover:bg-indigo-500/30 transition-colors flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-0.5">Visit Us</h3>
                    <p className="text-zinc-400 text-sm">Mumbai</p>
                  </div>
                </a>
              </div>
              
              <div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/50">
                <h3 className="text-white font-semibold mb-3">Project Inquiry</h3>
                <p className="text-zinc-400 mb-4 text-sm">
                  For faster response, please include details about your project type, timeline, and budget range.
                </p>
                <a 
                  href="/faq" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-all duration-200 group text-sm font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
                >
                  <span>View Our FAQ</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="bg-zinc-900 rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-1">
                      Service Interest
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="Commercial">Commercial Editing</option>
                      <option value="Social Media">Social Media Content</option>
                      <option value="Documentary">Documentary Films</option>
                      <option value="Motion Graphics">Motion Graphics</option>
                      <option value="Color Grading">Color Grading</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;