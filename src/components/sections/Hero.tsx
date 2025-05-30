import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import { Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import myShortVideo from '../../assets/video4.mp4';
import workVideo from '../../assets/work.mp4';
import { BackgroundBeamsWithCollision } from '../ui/background-beam';
import FloatingParticle from '../ui/FloatingParticle';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 1 };

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [-10, 10]), springConfig); // Tilt up/down
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [10, -10]), springConfig);  // Tilt left/right

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !heroRef.current) return;
    const { clientX, clientY } = event;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const xPct = (clientX - left) / width;
    const yPct = (clientY - top) / height;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    mouseX.set(0.5); // Reset to center
    mouseY.set(0.5);
  };
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showShowreel, setShowShowreel] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768; // Tailwind's 'md' breakpoint
      setIsMobile(mobile);
      if (mobile) {
        // Reset mouse positions to prevent elements from being stuck in a tilted state
        mouseX.set(0.5);
        mouseY.set(0.5);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex text-white overflow-hidden min-h-screen sm:min-h-[85svh] md:min-h-[70vh]"
      style={{ perspective: isMobile ? 'none' : '1500px' }} // Add perspective to the parent for 3D children
    >
      {/* Floating Particles Layer */}
      <div className="absolute inset-0 z-10 overflow-hidden" style={{ perspective: isMobile ? 'none' : '1000px' }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <FloatingParticle 
            key={`particle-${i}`}
            initialX={`${Math.random() * 100}%`}
            initialY={`${Math.random() * 100}%`}
            initialZ={Math.random() * 400 - 200} // -200px to 200px
            size={Math.random() * 2 + 2} // 2px to 4px
            color={`rgba(255, 255, 255, ${Math.random() * 0.2 + 0.3})`} // White color, opacity 0.3 to 0.5
            durationRange={[10, 20]}
            floatRange={30 + Math.random() * 20}
          />
        ))}
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-zinc-900/50 to-zinc-900/70 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src={workVideo} 
            type="video/mp4" 
          />
        </video>
      </div>
      
      {/* Background Beams */}
      <div className="absolute inset-0 z-10">
        <BackgroundBeamsWithCollision className="h-full bg-transparent">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-zinc-900/50 to-zinc-900/70" />
        </BackgroundBeamsWithCollision>
      </div>
      
      <Container className="relative z-30 pt-16 sm:pt-12 md:pt-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 w-full">
          {/* Left Column: Text Content */}
          <div className="md:w-1/2 lg:w-3/5 text-center md:text-left" style={{ transformStyle: isMobile ? 'flat' : 'preserve-3d' }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-4 md:mb-6"
            >
              Premium Video Editing Services
            </motion.div>

                        <motion.div style={{ transformStyle: 'preserve-3d' }}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={!isMobile ? {
                rotateX,
                rotateY,
                z: 50, // Make the text pop out a bit
                transformStyle: 'preserve-3d'
              } : {}}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 leading-tight"
            >
              Transform Your <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Vision</span> Into Captivating <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Stories</span>
            </motion.h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 mb-4 md:mb-8 max-w-2xl"
              style={!isMobile ? {
                rotateX,
                rotateY,
                z: 20, // Make the paragraph pop out slightly less than buttons
                transformStyle: 'preserve-3d'
              } : {}}
            >
              Professional video editing that elevates your brand. From commercials to social media content, we bring your creative vision to life.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start"
              style={!isMobile ? {
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center -50px' // Adjust origin for better depth
              } : {}}
            >
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [1, 0.85, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm md:text-base py-2 md:py-3 px-4 sm:px-5 md:px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>

              <button 
                className="w-full sm:w-auto border border-orange-500 text-orange-400 hover:bg-orange-500/10 text-xs sm:text-sm md:text-base py-2 md:py-3 px-4 sm:px-5 md:px-6 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                onClick={() => setShowShowreel(true)}
              >
                <Play className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110" /> 
                Watch Showreel
              </button>
            </motion.div>
          </div>

          {/* Right Column: 3D Video Card */}
          <div className="md:w-1/2 lg:w-2/5 w-full flex justify-center mt-12 md:mt-0">
            <motion.div
              className="relative w-full max-w-[200px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[240px] aspect-[9/16] rounded-xl shadow-2xl shadow-orange-500/30 overflow-hidden cursor-pointer group"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
              initial={{ opacity: 0, y: 50, rotateY: -30, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateY: -15, rotateX: 5 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
              whileHover={{ rotateY: -5, rotateX: 2, scale: 1.05, z: 10, boxShadow: "0px 20px 40px rgba(249, 115, 22, 0.4)" }}
            >
              <div className="absolute inset-0 bg-zinc-800 rounded-xl border-2 border-zinc-700 group-hover:border-orange-500/50 transition-colors"></div>
              <video
                src={myShortVideo} 
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl opacity-20 group-hover:opacity-10 transition-opacity" style={{background: 'linear-gradient(to top right, rgba(255,255,255,0.15), transparent, rgba(255,255,255,0.05))'}}></div>
            </motion.div>
          </div>
        </div>
      </Container>
      


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
              className="absolute -top-10 md:-top-12 right-0 text-white hover:text-orange-400 transition-colors p-1.5 md:p-2"
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