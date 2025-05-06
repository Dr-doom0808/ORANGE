import React from 'react';
import Container from '../components/ui/Container';
import Work from '../components/sections/Work';
import { ArrowRight, Play, Star, Users, Clock } from 'lucide-react';

const ShowcasePage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent" />
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Our Creative Portfolio
            </h1>
            <p className="text-xl text-zinc-400 mb-8">
              Discover our collection of compelling video content that brings stories to life through creative storytelling and technical excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-zinc-400">
                <Star className="w-5 h-5 text-orange-500" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Users className="w-5 h-5 text-orange-500" />
                <span>Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>Quick Delivery</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Video Preview */}
      <section className="py-20 bg-zinc-950">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <img 
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg" 
                alt="Featured Work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-white transform transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <h3 className="text-2xl font-semibold text-white mb-2">Featured Work</h3>
                <p className="text-orange-400">Watch our latest masterpiece</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Work Section */}
      <Work />

      {/* Call to Action */}
      <section className="py-20 bg-zinc-950">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-zinc-400 mb-8">
              Let's collaborate on your next video project. Our team is ready to bring your vision to life with professional editing and creative storytelling.
            </p>
            <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ShowcasePage;