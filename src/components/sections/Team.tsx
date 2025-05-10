import React from 'react';
import Container from '../ui/Container';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  social?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Aditya Jadhav",
      role: "Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      name: "Chirag Parihar",
      role: "Co-founder",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    },
    {
      name: "Shlok Singh",
      role: "Social Media/Developer Head",
      image: "https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg"
    },
    {
      name: "Tarun",
      role: "Data/Scripting Head",
      image: "https://images.pexels.com/photos/2379007/pexels-photo-2379007.jpeg"
    },
    {
      name: "Biswajit",
      role: "Editing Team",
      image: "https://images.pexels.com/photos/2379008/pexels-photo-2379008.jpeg"
    },
    {
      name: "Mainak Sen",
      role: "Editing Team",
      image: "https://images.pexels.com/photos/2379009/pexels-photo-2379009.jpeg"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-zinc-950">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center mb-8 md:mb-12 px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Team</h2>
          <p className="text-zinc-400 text-sm md:text-base">
            Meet the creative minds behind Orange Cut Media
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex justify-center gap-3">
                      {member.social?.linkedin && (
                        <motion.a 
                          whileHover={{ scale: 1.1 }}
                          href={member.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-white hover:text-orange-500 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.social?.instagram && (
                        <motion.a 
                          whileHover={{ scale: 1.1 }}
                          href={member.social.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-white hover:text-orange-500 transition-colors"
                        >
                          <Instagram className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.social?.twitter && (
                        <motion.a 
                          whileHover={{ scale: 1.1 }}
                          href={member.social.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-white hover:text-orange-500 transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-sm md:text-base font-semibold text-white mb-0.5">{member.name}</h3>
                <p className="text-orange-400 text-xs md:text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team; 