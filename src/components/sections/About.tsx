import React from 'react';
import Container from '../ui/Container';
import { Camera, Film, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Fresh Perspective in Video Production
          </h2>
          <p className="text-gray-300 text-lg">
            At Orangecut Media, we bring a fresh, innovative approach to video production. As an emerging creative agency, we combine cutting-edge techniques with passionate storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Camera className="w-12 h-12 text-orange-500" />,
              title: "Creative Innovation",
              description: "We bring fresh ideas and modern techniques to every project, ensuring your content stands out."
            },
            {
              icon: <Film className="w-12 h-12 text-orange-500" />,
              title: "Dedicated Service",
              description: "Personal attention and collaborative approach to bring your vision to life exactly as you imagine."
            },
            {
              icon: <Award className="w-12 h-12 text-orange-500" />,
              title: "Quality Focus",
              description: "Committed to delivering high-quality content that meets professional industry standards."
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "6+", label: "Months Experience" },
              { number: "20+", label: "Projects Completed" },
              { number: "15+", label: "Happy Clients" },
              { number: "2", label: "Expert Editors" }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;