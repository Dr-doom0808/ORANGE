import React from 'react';
import Hero from '../components/sections/Hero';
import { ArrowRight, Play, Film, Users, Star } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      {/* Featured Work Preview */}
      <section className="py-24 bg-zinc-950">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Latest Projects</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Check out our recent work showcasing creative storytelling and technical excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Video Preview Cards */}
            {[
              {
                title: "Brand Story",
                category: "Motion Graphics",
                image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg"
              },
              {
                title: "Social Campaign",
                category: "Shorts",
                image: "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg",
                isVertical: true
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-lg ${
                  project.isVertical ? 'aspect-[9/16]' : 'aspect-video'
                }`}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-orange-400">{project.category}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-16 h-16 text-orange-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/showcase">
              <Button variant="outline" size="lg" className="group">
                View All Work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Orangecut Media?</h2>
              <p className="text-zinc-400 mb-8">
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
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-zinc-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg"
                alt="Video production team"
                className="rounded-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-6 rounded-lg">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-950">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-zinc-400 mb-8">
              Let's collaborate on your next video project. Contact us today for a free consultation.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;