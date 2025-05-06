import React, { useState } from 'react';
import Container from '../ui/Container';
import { Play, X } from 'lucide-react';
import workVideo from '../../assets/work.mp4';
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
    <section className="py-20 bg-zinc-950">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Our Work</h2>
          <p className="text-zinc-400 mb-8">
            Explore our portfolio of successful projects and see how we bring stories to life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  activeFilter === filter
                    ? 'bg-orange-500 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`relative group overflow-hidden rounded-lg cursor-pointer ${
                project.category === 'shorts' ? 'aspect-[9/16]' : 'aspect-video'
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-orange-400 text-sm capitalize">{project.category}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
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
              <div className={`relative ${
                selectedProject.isYoutube ? 'aspect-video' : 
                selectedProject.category === 'shorts' ? 'aspect-[9/16]' : 'aspect-video'
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
              <div className="mt-6 text-white">
                <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
                <p className="text-orange-400 capitalize mt-2">{selectedProject.category}</p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Work;