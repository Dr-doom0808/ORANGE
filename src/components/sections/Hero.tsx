import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import { Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showShowreel, setShowShowreel] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="relative min-h-[90vh] md:min-h-screen flex items-center text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-32807-large.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>
      
      <Container className="relative z-20 pt-12 md:pt-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-4 md:mb-6"
          >
            Premium Video Editing Services
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
          >
            Transform Your <span className="text-indigo-400">Vision</span> Into Captivating <span className="text-indigo-400">Stories</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-zinc-300 mb-6 md:mb-8 max-w-2xl mx-auto"
          >
            Professional video editing that elevates your brand. From commercials to social media content, we bring your creative vision to life.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <button 
                className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white text-sm md:text-base py-2 md:py-3 px-5 md:px-6 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get Started
              </button>
            </Link>
            <button 
              className="w-full sm:w-auto border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 text-sm md:text-base py-2 md:py-3 px-5 md:px-6 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              onClick={() => setShowShowreel(true)}
            >
              <Play className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110" /> 
              Watch Showreel
            </button>
          </motion.div>
        </div>
      </Container>
      
      {/* Scroll indicator - Hidden on mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:block"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </motion.div>

      {/* Showreel Modal */}
      {showShowreel && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" 
          onClick={() => setShowShowreel(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-4xl relative"
          >
            <button 
              onClick={() => setShowShowreel(false)}
              className="absolute -top-10 md:-top-12 right-0 text-white hover:text-indigo-400 transition-colors p-1.5 md:p-2"
            >
              <X className="w-5 h-5 md:w-8 md:h-8" />
            </button>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://youtube.com/embed/WVIBnrQdado?autoplay=1&mute=1"
                title="Showreel"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;