import React from 'react';
import Container from '../ui/Container';
import { FileVideo, ClipboardEdit, Zap, Rocket } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, number, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500 relative">
          {icon}
          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">
            {number}
          </span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-zinc-400">{description}</p>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  const steps = [
    {
      icon: <FileVideo className="w-7 h-7" />,
      number: 1,
      title: "Project Briefing",
      description: "We start by understanding your vision, goals, and target audience to ensure our editing aligns perfectly with your needs."
    },
    {
      icon: <ClipboardEdit className="w-7 h-7" />,
      number: 2,
      title: "Raw Footage Review",
      description: "Our team analyzes your footage, identifying the best shots and sequences to tell your story effectively."
    },
    {
      icon: <Zap className="w-7 h-7" />,
      number: 3,
      title: "Editing & Post-Production",
      description: "We craft your story through professional editing, color grading, sound design, and motion graphics to create a polished final product."
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      number: 4,
      title: "Delivery & Support",
      description: "We deliver your project in multiple formats optimized for your distribution channels, with revisions as needed until you're completely satisfied."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-zinc-400">
            Our streamlined workflow ensures your project moves from concept to completion efficiently without sacrificing quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        
        <div className="mt-20 bg-zinc-800/50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Ready to Start Your Project?</h3>
              <p className="text-zinc-400 mb-6">
                Let's create something amazing together. Our team is ready to bring your vision to life with our professional video editing services.
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-5 rounded-md transition-colors">
                Get in Touch
              </button>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Video editing process" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;