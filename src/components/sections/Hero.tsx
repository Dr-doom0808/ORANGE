import React, { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showShowreel, setShowShowreel] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
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
      
      <Container className="relative z-20 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            Premium Video Editing Services
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your <span className="text-indigo-400">Vision</span> Into Captivating <span className="text-indigo-400">Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Professional video editing that elevates your brand. From commercials to social media content, we bring your creative vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">Get Started</Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => setShowShowreel(true)}
            >
              <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" /> Watch Showreel
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Showreel Modal */}
      {showShowreel && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" 
          onClick={() => setShowShowreel(false)}
        >
          <div className="max-w-4xl w-full relative">
            <button 
              onClick={() => setShowShowreel(false)}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative aspect-video">
              <iframe
                src="https://youtube.com/embed/WVIBnrQdado?autoplay=1&mute=1"
                title="Showreel"
                className="w-full h-full rounded-lg shadow-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;