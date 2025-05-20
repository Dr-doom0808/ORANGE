import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Play, X } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Container from '../ui/Container';
import styles from './ProjectSlider.module.css';
import thumbnail1 from '../../assets/thumbnail/1.jpg';
import thumbnail2 from '../../assets/thumbnail/2.jpg';

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  videoUrl: string;
  isYoutube: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ali_Abdal style",
    image: thumbnail1,
    category: "Shorts",
    videoUrl: "https://youtube.com/embed/WVIBnrQdado?autoplay=1&mute=1",
    isYoutube: true
  },
  {
    id: 2,
    title: "Coaching",
    image: thumbnail2,
    category: "Shorts",
    videoUrl: "https://youtube.com/embed/bUUM2q5fvhg?autoplay=1&mute=1",
    isYoutube: true
  },
  {
    id: 3,
    title: "Product Showcase",
    image: "https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg",
    category: "Commercial",
    videoUrl: "https://youtube.com/embed/WVIBnrQdado?autoplay=1&mute=1",
    isYoutube: true
  },
  {
    id: 4,
    title: "Corporate Branding",
    image: "https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg",
    category: "Branding",
    videoUrl: "https://youtube.com/embed/bUUM2q5fvhg?autoplay=1&mute=1",
    isYoutube: true
  },
  {
    id: 5,
    title: "Social Media Content",
    image: "https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg",
    category: "Social",
    videoUrl: "https://youtube.com/embed/WVIBnrQdado?autoplay=1&mute=1",
    isYoutube: true
  },
  {
    id: 6,
    title: "Event Coverage",
    image: "https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg",
    category: "Event",
    videoUrl: "https://youtube.com/embed/bUUM2q5fvhg?autoplay=1&mute=1",
    isYoutube: true
  },
  {
    id: 7,
    title: "Documentary Series",
    image: "https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg",
    category: "Documentary",
    videoUrl: "https://youtube.com/embed/WVIBnrQdado?autoplay=1&mute=1",
    isYoutube: true
  }
];

const ProjectSlider: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const swiperRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const lastMoveTime = useRef<number>(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!swiperRef.current || !swiperRef.current.swiper || isMobile) return;

    const now = Date.now();
    if (now - lastMoveTime.current < 500) return; // Add delay between movements
    lastMoveTime.current = now;

    const slider = e.currentTarget;
    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const center = rect.width / 2;
    const threshold = 0.3; // Reduced from 0.5 to make scrolling less sensitive

    if (x < center - threshold) {
      swiperRef.current.swiper.slidePrev();
    } else if (x > center + threshold) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="py-8 bg-zinc-950">
      <Container>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2 text-white">Latest Projects</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm">
            Check out our recent work showcasing creative storytelling and technical excellence.
          </p>
        </div>

        <div 
          className="relative"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Swiper
            ref={swiperRef}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={isMobile ? 1 : 'auto'}
            spaceBetween={isMobile ? 20 : 30}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            threshold={20}
            touchRatio={1.5}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className={styles['project-slider']}
          >
            {projects.map((project) => (
              <SwiperSlide 
                key={project.id} 
                className="w-[220px] h-[280px] relative cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className={`absolute inset-0 ${styles['gradient-overlay']} opacity-80 transition-all duration-300 group-hover:opacity-100`}>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">{project.title}</h3>
                    <p className="text-orange-400 text-sm">{project.category}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className={`w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white transform transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-600 ${styles['play-button']}`}>
                      <Play className="w-5 h-5 ml-0.5" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>

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
    </section>
  );
};

export default ProjectSlider; 