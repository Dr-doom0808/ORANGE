import React from 'react';
import Container from '../ui/Container';
import { motion } from 'framer-motion';
import { Clock, Star, Zap, Shield, Users, Award } from 'lucide-react';
import { CardSpotlight } from '../ui/card-spotlight';

const features = [
  {
    icon: <Star className="w-6 h-6 text-orange-500" />,
    title: "Premium Quality",
    description: "We deliver exceptional video editing quality that meets professional standards and exceeds expectations."
  },
  {
    icon: <Clock className="w-6 h-6 text-orange-500" />,
    title: "Quick Turnaround",
    description: "Fast delivery without compromising on quality. We understand the importance of timely content."
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-500" />,
    title: "Creative Excellence",
    description: "Our team brings innovative ideas and creative solutions to make your content stand out."
  },
  {
    icon: <Shield className="w-6 h-6 text-orange-500" />,
    title: "Reliable Service",
    description: "Consistent, dependable service with clear communication and professional project management."
  },
  {
    icon: <Users className="w-6 h-6 text-orange-500" />,
    title: "Expert Team",
    description: "Skilled professionals with years of experience in video editing and motion graphics."
  },
  {
    icon: <Award className="w-6 h-6 text-orange-500" />,
    title: "Proven Results",
    description: "Track record of successful projects and satisfied clients across various industries."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
      </div>

      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-6"
          >
            Why Choose Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent leading-normal md:leading-normal"
          >
            Why Choose Orange Cut Media?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-lg leading-relaxed"
          >
            Experience the difference with our professional video editing services
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardSpotlight 
                className="bg-black p-8 rounded-2xl border border-zinc-700 h-full"
                color="rgba(255, 255, 255, 0.07)"
              >
                <div className="mb-6 p-3 bg-zinc-800 rounded-full w-fit transition-all duration-300 group-hover/spotlight:bg-zinc-700 group-hover/spotlight:scale-110 group-hover/spotlight:shadow-[0_0_15px_2px_rgba(255,255,255,0.1)]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover/spotlight:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs; 