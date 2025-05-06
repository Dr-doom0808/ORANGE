import React from 'react';
import { Film, Code, Pencil, Share, Wand2, Volume2 } from 'lucide-react';
import Container from '../ui/Container';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-zinc-900 p-8 rounded-xl hover:bg-zinc-800 transition-all duration-300 group">
      <div className="w-14 h-14 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-500 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-zinc-400 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-zinc-500 flex items-center">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Film className="w-7 h-7" />,
      title: "Video Editing",
      description: "Professional editing services that bring your content to life with precision and creativity.",
      features: [
        "Short-form content optimization",
        "Professional color grading",
        "Sound design and mixing"
      ]
    },
    {
      icon: <Wand2 className="w-7 h-7" />,
      title: "Motion Graphics",
      description: "Dynamic visual elements that enhance your message and captivate your audience.",
      features: [
        "Custom animations",
        "Brand identity animations",
        "Animated infographics"
      ]
    },
    {
      icon: <Pencil className="w-7 h-7" />,
      title: "Content Writing",
      description: "Compelling storytelling that resonates with your target audience.",
      features: [
        "Script writing",
        "Social media copy",
        "Brand storytelling"
      ]
    },
    {
      icon: <Share className="w-7 h-7" />,
      title: "Social Media Management",
      description: "Strategic content management to grow your online presence.",
      features: [
        "Content strategy",
        "Platform-specific optimization",
        "Analytics and reporting"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-zinc-400">
            Comprehensive video production and content creation services to help your brand stand out in the digital space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;