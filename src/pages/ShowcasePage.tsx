import React from 'react';
import Container from '../components/ui/Container';
import Work from '../components/sections/Work';
import { ArrowRight, Play, Star, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ShowcasePage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent" />
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center relative z-10 px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Our Creative Portfolio
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-6 md:mb-8">
              Discover our collection of compelling video content that brings stories to life through creative storytelling and technical excellence.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12"
            >
              <div className="flex items-center gap-2 text-zinc-400 text-sm md:text-base">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400 text-sm md:text-base">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                <span>Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400 text-sm md:text-base">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                <span>Quick Delivery</span>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Featured Video Preview */}
      <section className="py-12 md:py-20 bg-zinc-950">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-4 md:px-0"
          >
            <div className="aspect-video rounded-xl md:rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <img 
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg" 
                alt="Featured Work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-500 flex items-center justify-center text-white transform transition-transform group-hover:scale-110">
                  <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" />
                </div>
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 z-20">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 md:mb-2">Featured Work</h3>
                <p className="text-orange-400 text-sm md:text-base">Watch our latest masterpiece</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Main Work Section */}
      <Work />

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-zinc-950">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center px-4"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-zinc-400 mb-6 md:mb-8 text-sm md:text-base">
              Let's collaborate on your next video project. Our team is ready to bring your vision to life with professional editing and creative storytelling.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium transition-all duration-300 shadow-lg shadow-orange-500/20"
              >
                Get Started <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default ShowcasePage;