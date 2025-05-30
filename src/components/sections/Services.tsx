import React from 'react';
import { Film, Video, Headphones, Share2, PenTool, Megaphone, Layout, Image, Code } from 'lucide-react';
import Container from '../ui/Container';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-zinc-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-[30px] border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1 relative overflow-hidden"
      style={{
        boxShadow: '15px 15px 30px rgb(25, 25, 25), -15px -15px 20px rgb(35, 35, 35)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-zinc-800/50 rounded-xl group-hover:bg-orange-500/10 transition-colors duration-300"
               style={{
                 boxShadow: '8px 8px 16px rgb(25, 25, 25), -8px -8px 10px rgb(35, 35, 35)'
               }}>
        {icon}
      </div>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-center mb-3 text-white group-hover:text-orange-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-zinc-400 text-center text-sm sm:text-base mb-6">
          {description}
        </p>
        <ul className="space-y-3">
        {features.map((feature, index) => (
            <li key={index} className="text-zinc-400 flex items-center text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Film className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />,
      title: "Video Editing",
      description: "Professional video editing services that bring your content to life with precision and creativity.",
      features: [
        "Commercial video editing",
        "Documentary editing",
        "Color grading and correction",
        "Sound design and mixing",
        "Motion graphics integration"
      ]
    },
    {
      icon: <Video className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />,
      title: "Short/Reel Editing",
      description: "Engaging short-form content optimized for social media platforms.",
      features: [
        "Instagram Reels editing",
        "YouTube Shorts creation",
        "TikTok video editing",
        "Quick-paced transitions",
        "Trending effects and styles"
      ]
    },
    {
      icon: <Headphones className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />,
      title: "Podcast Editing",
      description: "Professional podcast editing services to ensure crystal clear audio quality.",
      features: [
        "Audio cleanup and enhancement",
        "Noise reduction",
        "Music and sound effects",
        "Episode formatting",
        "Show notes creation"
      ]
    },
    {
      icon: <Share2 className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />,
      title: "Social Media Management",
      description: "Comprehensive social media management across multiple platforms.",
      features: [
        "Instagram content strategy",
        "Facebook page management",
        "LinkedIn professional content",
        "Content calendar planning",
        "Analytics and reporting"
      ]
    },
    {
      icon: <PenTool className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />,
      title: "Content Writing",
      description: "Engaging and SEO-optimized content that resonates with your audience.",
      features: [
        "Social media captions",
        "Blog post writing",
        "Website content",
        "Email newsletters",
        "Brand storytelling"
      ]
    },
    {
      icon: <Megaphone className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />,
      title: "Advertisement",
      description: "Creative advertising solutions to boost your brand's visibility.",
      features: [
        "Social media ads",
        "Video advertisements",
        "Display ads creation",
        "Ad campaign strategy",
        "Performance tracking"
      ]
    },
    {
      icon: <Layout className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />,
      title: "Motion Graphics",
      description: "Dynamic and engaging motion graphics that bring your message to life.",
      features: [
        "Animated logos and intros",
        "Lower thirds and titles",
        "Infographic animations",
        "Social media animations",
        "Custom motion effects"
      ]
    },
    {
      icon: <Image className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />,
      title: "Thumbnail Designing",
      description: "Eye-catching thumbnails that increase click-through rates and engagement.",
      features: [
        "YouTube thumbnails",
        "Social media thumbnails",
        "Custom graphics",
        "Brand consistency",
        "A/B testing designs"
      ]
    },
    {
      icon: <Code className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />,
      title: "Web Designing",
      description: "Modern and responsive website designs that convert visitors into customers.",
      features: [
        "Responsive design",
        "UI/UX optimization",
        "E-commerce solutions",
        "Portfolio websites",
        "Landing pages"
      ]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-black">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Our Services
            </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
              Comprehensive digital content creation and management services to help your brand stand out in the digital space.
          </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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