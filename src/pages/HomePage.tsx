import { useState } from 'react';
import Hero from '../components/sections/Hero';
import Container from '../components/ui/Container';

import ProjectSlider from '../components/sections/ProjectSlider';
import { AnimatedTestimonials } from '../components/sections/animated-testimonials';
import { motion } from 'framer-motion';
import { CardSpotlight } from "../components/ui/card-spotlight";
import WhyChooseUs from '../components/sections/WhyChooseUs';

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  return (
    <div className="relative bg-zinc-900 text-white">
      {/* Desktop/Tablet View with TracingBeam (class removed for mobile visibility) */}
      <div>
      <Hero />
      
      {/* Latest Projects with Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
            className="w-full"
      >
        <ProjectSlider />
      </motion.div>

      {/* Animated Testimonials */}
      <motion.section 
            className="pb-20 md:pb-28 w-full relative overflow-hidden"
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
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

      <WhyChooseUs />

{/* About Us Preview Section */}
<motion.section
  className="py-16 md:py-24 bg-black relative overflow-hidden"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
  </div>
  <Container className="relative text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent leading-normal md:leading-normal"
    >
      Discover Our Story
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8"
    >
      At Orange Cut Media, we're more than just editors; we're visual storytellers passionate about transforming raw footage into compelling narratives. We believe every frame has a purpose, every cut an impact. Dive into our world where creativity meets precision, and discover how we bring visions to life, one project at a time.
    </motion.p>
    <motion.a
      href="/about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
    >
      Discover More
    </motion.a>
  </Container>
</motion.section>

{/* Services Preview Section */}
<motion.section
  className="py-16 md:py-24 bg-black relative overflow-hidden"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
  </div>
  <Container className="relative text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent leading-normal md:leading-normal"
    >
      Our Media Services
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8"
    >
      From dynamic video production and razor-sharp editing to engaging motion graphics and comprehensive content strategy, explore the spectrum of media services we offer to elevate your brand and captivate your audience.
    </motion.p>
    <motion.a
      href="/services"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
    >
      View Services
    </motion.a>
  </Container>
</motion.section>

{/* FAQs Preview Section */}
<motion.section
  className="py-16 md:py-24 bg-black relative overflow-hidden"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
  </div>
  <Container className="relative text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent leading-normal md:leading-normal"
    >
      Frequently Asked Questions
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8"
    >
      Have questions? Find answers to common inquiries about our process, pricing, turnaround times, and more.
    </motion.p>

    {/* Sample FAQs */}
    <motion.div 
      className="text-left max-w-xl mx-auto space-y-4 mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <CardSpotlight color="rgba(234, 88, 12, 0.4)" className="block">
        <details className="group bg-black p-6 rounded-xl border border-white/[0.15] cursor-pointer relative z-20 group-hover/spotlight:bg-zinc-900 transition-colors duration-300 ease-in-out overflow-hidden">
          <summary className="font-semibold text-orange-400 list-none flex justify-between items-center group-hover/spotlight:text-orange-300 transition-colors">
            What are your turnaround times?
            <span className="text-xl text-orange-400 transform transition-all duration-300 group-open:rotate-45 group-hover/spotlight:text-orange-300 group-open:text-orange-500">+</span>
          </summary>
          <div className="max-h-0 group-open:max-h-[500px] overflow-hidden transition-all duration-500 ease-in-out">
            <p className="text-zinc-300 mt-4 pt-4 border-t border-zinc-700/70 text-sm leading-relaxed group-hover/spotlight:text-zinc-200 transition-colors">Turnaround times vary based on project complexity, but we always aim for efficient delivery without compromising quality. We'll provide a clear timeline upfront.</p>
          </div>
        </details>
      </CardSpotlight>
      <CardSpotlight color="rgba(234, 88, 12, 0.4)" className="block">
        <details className="group bg-black p-6 rounded-xl border border-white/[0.15] cursor-pointer relative z-20 group-hover/spotlight:bg-zinc-900 transition-colors duration-300 ease-in-out overflow-hidden">
          <summary className="font-semibold text-orange-400 list-none flex justify-between items-center group-hover/spotlight:text-orange-300 transition-colors">
            Can you work with footage from any camera?
            <span className="text-xl text-orange-400 transform transition-all duration-300 group-open:rotate-45 group-hover/spotlight:text-orange-300 group-open:text-orange-500">+</span>
          </summary>
          <div className="max-h-0 group-open:max-h-[500px] overflow-hidden transition-all duration-500 ease-in-out">
            <p className="text-zinc-300 mt-4 pt-4 border-t border-zinc-700/70 text-sm leading-relaxed group-hover/spotlight:text-zinc-200 transition-colors">Yes, we are equipped to handle footage from a wide range of professional cameras and consumer devices. Just send it our way!</p>
          </div>
        </details>
      </CardSpotlight>
    </motion.div>

    <motion.a
      href="/faq"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
    >
      Read FAQs
    </motion.a>
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
                  <span className="w-5 h-5">×</span>
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