import React from 'react';
import Container from '../ui/Container';
import { Camera, Film, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
      </div>

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-6"
          >
            About Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
          >
            Fresh Perspective in Video Production
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-lg leading-relaxed"
          >
            At Orangecut Media, we bring a fresh, innovative approach to video production. As an emerging creative agency, we combine cutting-edge techniques with passionate storytelling.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Camera className="w-12 h-12 text-orange-500" />,
              title: "Creative Innovation",
              description: "We bring fresh ideas and modern techniques to every project, ensuring your content stands out."
            },
            {
              icon: <Film className="w-12 h-12 text-orange-500" />,
              title: "Dedicated Service",
              description: "Personal attention and collaborative approach to bring your vision to life exactly as you imagine."
            },
            {
              icon: <Award className="w-12 h-12 text-orange-500" />,
              title: "Quality Focus",
              description: "Committed to delivering high-quality content that meets professional industry standards."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-zinc-800/50 rounded-xl group-hover:bg-orange-500/10 transition-colors duration-300">
                {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-white group-hover:text-orange-500 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "6+", label: "Months Experience" },
              { number: "20+", label: "Projects Completed" },
              { number: "15+", label: "Happy Clients" },
              { number: "2", label: "Expert Editors" }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;