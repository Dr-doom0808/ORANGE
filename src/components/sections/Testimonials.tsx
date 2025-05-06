import React, { useState } from 'react';
import Container from '../ui/Container';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechVision Inc",
      avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Working with Orangecut Media has been transformative for our brand. Their ability to take our ideas and turn them into compelling visual stories is unmatched. The team's attention to detail and creative approach has helped us increase engagement across all our social channels.",
      rating: 5
    },
    {
      id: 2,
      name: "Mark Stevens",
      role: "Creative Director",
      company: "Innovate Studios",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "As a creative director, I have high standards for visual content. Orangecut Media not only met but exceeded these expectations. Their editing techniques are cutting-edge, and they have an innate understanding of storytelling that sets them apart from other agencies we've worked with.",
      rating: 5
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "CEO",
      company: "Elevate Brands",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "We hired Orangecut Media for our product launch campaign, and the results were outstanding. The quality of their video editing brought our product to life in ways we couldn't have imagined. The ROI on these videos has been incredible, with conversion rates up by 45%.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-zinc-900">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-zinc-400">
            Hear what our clients have to say about our video editing services and the results we've delivered.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="relative bg-zinc-800 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex mb-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <blockquote className="text-lg text-zinc-300 italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div>
                    <h4 className="text-white font-semibold">{testimonials[currentIndex].name}</h4>
                    <p className="text-indigo-400">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-indigo-600' : 'bg-zinc-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-zinc-800/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-indigo-500 mb-2">100+</div>
              <p className="text-white">Successful Projects</p>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-indigo-500 mb-2">95%</div>
              <p className="text-white">Client Satisfaction</p>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-indigo-500 mb-2">12+</div>
              <p className="text-white">Industry Awards</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;