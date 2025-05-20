import React from 'react';
import Container from '../components/ui/Container';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Clock, Target, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Team from '../components/sections/Team';

const AboutPage = () => {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              About Orange Cut Media
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-6 md:mb-8">
              We are a creative video production company passionate about bringing stories to life through compelling visual content.
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
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400 text-sm md:text-base">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                <span>Quick Delivery</span>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-20 bg-zinc-950">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center px-4"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Our Mission</h2>
            <p className="text-zinc-400 mb-6 md:mb-8 text-sm md:text-base">
              At Orange Cut Media, we strive to create engaging and high-quality video content that helps businesses and individuals connect with their audience. Our mission is to transform ideas into compelling visual stories that leave a lasting impact.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: <Target className="w-8 h-8 text-orange-500" />,
                  title: "Our Vision",
                  description: "To be the leading creative force in video production, setting new standards in visual storytelling."
                },
                {
                  icon: <Heart className="w-8 h-8 text-orange-500" />,
                  title: "Our Values",
                  description: "Creativity, excellence, and client satisfaction drive everything we do."
                },
                {
                  icon: <Award className="w-8 h-8 text-orange-500" />,
                  title: "Our Promise",
                  description: "Delivering exceptional quality and service that exceeds expectations."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-orange-500/10 rounded-lg">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Team Section */}
      <Team />

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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Ready to Create Something Amazing?</h2>
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

export default AboutPage;