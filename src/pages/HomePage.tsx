import React, { useState } from 'react';
import Hero from '../components/sections/Hero';
import { ArrowRight, Play, Film, Users, Star, X } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import thumbnail1 from '../assets/thumbnail/1.jpg';
import thumbnail2 from '../assets/thumbnail/2.jpg';
import ProjectSlider from '../components/sections/ProjectSlider';
import { AnimatedTestimonials } from '../components/sections/animated-testimonials';
import { motion } from 'framer-motion';
import { TracingBeam } from '../components/ui/tracing-beam';

interface Project {
  title: string;
  category: string;
  image: string;
  videoUrl: string;
  isYoutube: boolean;
}

const testimonials = [
  {
    quote: "Orange Cut Media transformed our brand's video content. Their creative approach and attention to detail is outstanding!",
    name: "Sarah Johnson",
    designation: "Marketing Director",
    src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
  },
  {
    quote: "Working with Orange Cut Media was a game-changer for our social media presence. Their editing skills are exceptional!",
    name: "Michael Chen",
    designation: "Content Creator",
    src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    quote: "The team's professionalism and creativity exceeded our expectations. They delivered our project on time and with exceptional quality.",
    name: "Emma Rodriguez",
    designation: "Social Media Manager",
    src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  }
];

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const latestProjects: Project[] = [
    {
      title: "Ali_Abdal style",
      category: "Shorts",
      image: thumbnail1,
      videoUrl: "https://youtube.com/embed/WVIBnrQdado?autoplay=1&mute=1",
      isYoutube: true
    },
    {
      title: "Coaching",
      category: "Shorts",
      image: thumbnail2,
      videoUrl: "https://youtube.com/embed/bUUM2q5fvhg?autoplay=1&mute=1",
      isYoutube: true
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="relative">
      {/* Desktop/Tablet View with TracingBeam */}
      <div className="hidden md:block">
        <TracingBeam>
      <Hero />
      
      {/* Latest Projects with Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
            className="py-16 md:py-24"
      >
        <ProjectSlider />
      </motion.div>

      {/* Animated Testimonials */}
      <motion.section 
            className="py-16 md:py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
        </div>
        <Container className="relative">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-zinc-400 text-base max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <AnimatedTestimonials 
              testimonials={testimonials} 
              autoplay={true}
            />
          </div>
        </Container>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
            className="py-16 md:py-24 bg-black relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent" />
        <Container>
              <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Why Choose Orangecut Media?
              </h2>
                  <p className="text-zinc-400 mb-8 text-lg">
                As a fresh voice in video production, we bring innovative ideas and personalized attention to every project.
              </p>
                  <div className="space-y-6">
                {[
                  {
                    icon: <Film className="w-6 h-6 text-orange-500" />,
                    title: "Creative Excellence",
                    description: "Fresh perspective and modern editing techniques"
                  },
                  {
                    icon: <Users className="w-6 h-6 text-orange-500" />,
                    title: "Personal Attention",
                    description: "Direct communication and collaborative approach"
                  },
                  {
                    icon: <Star className="w-6 h-6 text-orange-500" />,
                    title: "Quality Focus",
                    description: "Commitment to exceptional results"
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                        className="flex gap-6 p-6 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-zinc-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.img 
                src="https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg"
                alt="Video production team"
                className="rounded-lg shadow-2xl shadow-orange-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-orange-500 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm">Happy Clients</div>
              </motion.div>
            </div>
          </div>
        </Container>
      </motion.section>

          {/* Video Modal */}
          {selectedProject && (
            <div 
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" 
              onClick={() => setSelectedProject(null)}
            >
              <div className="max-w-4xl w-full relative">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <div className="relative aspect-video">
                  <iframe
                    src={selectedProject.videoUrl}
                    title={selectedProject.title}
                    className="w-full h-full rounded-lg shadow-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-6 text-white">
                  <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
                  <p className="text-orange-400 capitalize mt-2">{selectedProject.category}</p>
                </div>
              </div>
            </div>
          )}
        </TracingBeam>
      </div>

      {/* Mobile View without TracingBeam */}
      <div className="block md:hidden">
        <Hero />
        
        {/* Latest Projects with Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-16 md:py-24"
        >
          <ProjectSlider />
        </motion.div>

        {/* Animated Testimonials */}
        <motion.section 
          className="py-16 md:py-24 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
          </div>
          <Container className="relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-zinc-400 text-base max-w-2xl mx-auto">
                Don't just take our word for it - hear from some of our satisfied clients
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <AnimatedTestimonials 
                testimonials={testimonials} 
                autoplay={true}
              />
            </div>
          </Container>
        </motion.section>

        {/* Why Choose Us */}
      <motion.section 
          className="py-16 md:py-24 bg-black relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent" />
        <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Why Choose Orangecut Media?
            </h2>
                <p className="text-zinc-400 mb-8 text-lg">
                  As a fresh voice in video production, we bring innovative ideas and personalized attention to every project.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Film className="w-6 h-6 text-orange-500" />,
                      title: "Creative Excellence",
                      description: "Fresh perspective and modern editing techniques"
                    },
                    {
                      icon: <Users className="w-6 h-6 text-orange-500" />,
                      title: "Personal Attention",
                      description: "Direct communication and collaborative approach"
                    },
                    {
                      icon: <Star className="w-6 h-6 text-orange-500" />,
                      title: "Quality Focus",
                      description: "Commitment to exceptional results"
                    }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex gap-6 p-6 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                        <p className="text-zinc-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <motion.img 
                  src="https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg"
                  alt="Video production team"
                  className="rounded-lg shadow-2xl shadow-orange-500/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-orange-500 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-sm">Happy Clients</div>
                </motion.div>
              </div>
          </div>
        </Container>
      </motion.section>

      {/* Video Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" 
          onClick={() => setSelectedProject(null)}
        >
          <div className="max-w-4xl w-full relative">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative aspect-video">
              <iframe
                src={selectedProject.videoUrl}
                title={selectedProject.title}
                className="w-full h-full rounded-lg shadow-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-6 text-white">
              <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
              <p className="text-orange-400 capitalize mt-2">{selectedProject.category}</p>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default HomePage;