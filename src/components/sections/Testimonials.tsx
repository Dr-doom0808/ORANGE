import React, { useState } from 'react';
import Container from '../ui/Container';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    content: "Orange Cut Media transformed my raw footage into a masterpiece. Their attention to detail and creative approach exceeded my expectations. The final product was exactly what I envisioned and more!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content: "Working with Orange Cut Media was a game-changer for our brand. Their video editing skills brought our vision to life in ways we couldn't have imagined. Professional, timely, and incredibly talented!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content: "The team at Orange Cut Media consistently delivers high-quality work. Their ability to understand our brand and translate it into compelling video content is remarkable. A true partner in our success!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
      </div>
      
      <Container className="relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-6"
            >
              Client Testimonials
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-400"
            >
              Don't just take our word for it - hear from some of our satisfied clients
            </motion.p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-zinc-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-zinc-800"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {testimonials[currentIndex].image && (
                    <div className="flex-shrink-0">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-orange-500/50"
                      />
                    </div>
                  )}
                  <div className="flex-grow text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-orange-500/50 mb-4 mx-auto md:mx-0" />
                    <p className="text-zinc-300 text-lg mb-6">
                      {testimonials[currentIndex].content}
                    </p>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-orange-500">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-orange-500' : 'bg-zinc-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;