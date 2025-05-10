import React, { useState } from 'react';
import Container from '../ui/Container';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import thumbnail1 from '../../assets/thumbnail/1.jpg';
import thumbnail2 from '../../assets/thumbnail/2.jpg';
import thumbnail3 from '../../assets/thumbnail/3.jpg';
import thumbnail4 from '../../assets/thumbnail/4.jpg';
import thumbnail5 from '../../assets/thumbnail/5.jpg';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  videoUrl?: string;
  isYoutube?: boolean;
}

const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('shorts');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['shorts', 'Motion graphics'];
  
  const projects: Project[] = [
    
    {
      id: 1,
      title: "Ali_Abdal style ",
      category: "shorts",
      image: thumbnail1,
      videoUrl: "https://youtube.com/embed/WVIBnrQdado?autoplay=1&mute=1",
      isYoutube: true
    },
    {
      id: 2,
      title: "Coaching",
      category: "shorts",
      image: thumbnail2,
      videoUrl: "https://youtube.com/embed/bUUM2q5fvhg?autoplay=1&mute=1",
      isYoutube: true
    },
    {
      id: 3,
      title: "Discipline",
      category: "shorts",
      image: thumbnail3,
      videoUrl: "https://youtube.com/embed/_DAZGBc_RiE?autoplay=1&mute=1",
      isYoutube: true
    },
    {
      id: 4,
      title: "Luke Belmar",
      category: "shorts",
      image: thumbnail4,
      videoUrl: "https://youtube.com/embed/So2KWZslFGg?autoplay=1&mute=1",
      isYoutube: true
    },
    {
      id: 5,
      title: "Realtor",
      category: "shorts",
      image: thumbnail5,
      videoUrl: "https://youtube.com/embed/IAkW00YKacQ?autoplay=1&mute=1",
      isYoutube: true
    },
    {
      id: 6,
      title: "Tech Industry Insights",
      category: "shorts",
      image: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg",
      videoUrl: "https://www.youtube.com/embed/eYnq28uiaO8?autoplay=1&mute=1",
      isYoutube: true
    },
    {
      id: 7,
      title: "Tech Industry Insights",
      category: "shorts",
      image: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg",
      videoUrl: "https://www.youtube.com/embed/eYnq28uiaO8?autoplay=1&mute=1",
      isYoutube: true
    },
    {
      id: 8,
      title: "Tech Industry Insights",
      category: "shorts",
      image: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg",
      videoUrl: "https://www.youtube.com/embed/eYnq28uiaO8?autoplay=1&mute=1",
      isYoutube: true
    },
    {
      id: 9,
      title: "Tech Industry Insights",
      category: "shorts",
      image: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg",
      videoUrl: "https://www.youtube.com/embed/eYnq28uiaO8?autoplay=1&mute=1",
      isYoutube: true
    },
    {
      id: 10,
      title: "Wildlife Series",
      category: "Motion graphics",
      image: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg",
      videoUrl: "https://youtube.com/embed/7jUK-Ez66Gw?autoplay=1&mute=1",
      isYoutube: true
    },
    {
      id: 11,
      title: "Product Launch Campaign",
      category: "Motion graphics",
      image: "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg",
      videoUrl: "https://youtube.com/embed/Pq7MFhjWJh8?autoplay=1&mute=1",
      isYoutube: true
    },
    {
      id: 12,
      title: "Fitness Journey",
      category: "Motion graphics",
      image: "https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg",
      videoUrl: "https://youtube.com/embed/EufMBX9afGg?autoplay=1&mute=1",
      isYoutube: true
    },
    {
      id: 13,
      title: "Fitness Journey",
      category: "Motion graphics",
      image: "https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg",
      videoUrl: "https://youtube.com/embed/EufMBX9afGg?autoplay=1&mute=1",
      isYoutube: true
    },
    {
      id: 14,
      title: "Fitness Journey",
      category: "Motion graphics",
      image: "https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg",
      videoUrl: "https://youtube.com/embed/EufMBX9afGg?autoplay=1&mute=1",
      isYoutube: true
    },
    {
      id: 15,
      title: "Fitness Journey",
      category: "Motion graphics",
      image: "https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg",
      videoUrl: "https://youtube.com/embed/EufMBX9afGg?autoplay=1&mute=1",
      isYoutube: true
    }
  ];
  

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Work</h2>
          <p className="text-zinc-400 mb-6 md:mb-8 text-sm md:text-base">
            Explore our portfolio of successful projects and see how we bring stories to life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  activeFilter === filter
                    ? 'bg-orange-500 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0"
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative group overflow-hidden rounded-lg cursor-pointer ${
                project.category === 'shorts' ? 'aspect-[9/16] max-w-[240px] mx-auto' : 'aspect-video'
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">{project.title}</h3>
                  <p className="text-orange-400 text-sm capitalize">{project.category}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-orange-500 flex items-center justify-center text-white"
                  >
                    <Play className="w-5 h-5 md:w-6 md:h-6 ml-1" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" 
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="w-full max-w-4xl relative"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute -top-10 md:-top-12 right-0 text-white hover:text-orange-500 transition-colors p-2"
                >
                  <X className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <div className={`relative ${
                  selectedProject.isYoutube ? 'aspect-video' : 
                  selectedProject.category === 'shorts' ? 'aspect-[9/16] max-w-[240px] mx-auto' : 'aspect-video'
                }`}>
                  {selectedProject.isYoutube ? (
                    <iframe
                      src={selectedProject.videoUrl}
                      title={selectedProject.title}
                      className="w-full h-full rounded-lg shadow-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video 
                      src={selectedProject.videoUrl} 
                      controls 
                      autoPlay 
                      className="w-full h-full object-cover rounded-lg shadow-2xl"
                    />
                  )}
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 md:mt-6 text-white text-center md:text-left"
                >
                  <h3 className="text-xl md:text-2xl font-semibold">{selectedProject.title}</h3>
                  <p className="text-orange-400 capitalize mt-1 md:mt-2">{selectedProject.category}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default Work;