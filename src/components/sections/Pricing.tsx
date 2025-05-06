import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Check } from 'lucide-react';

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ title, price, description, features, isPopular = false }) => {
  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-8px] ${
      isPopular ? 'bg-gradient-to-b from-indigo-900 to-indigo-800 border border-indigo-600' : 'bg-zinc-800'
    }`}>
      {isPopular && (
        <div className="bg-indigo-600 text-white text-sm font-medium py-1.5 text-center">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-white">{price}</span>
          {price !== 'Custom' && <span className="text-zinc-400 ml-1">/project</span>}
        </div>
        <p className="text-zinc-400 mb-6">{description}</p>
        <Button 
          variant={isPopular ? 'primary' : 'outline'} 
          className="w-full mb-8"
        >
          Get Started
        </Button>
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${isPopular ? 'text-indigo-400' : 'text-indigo-500'}`} />
              <span className="text-zinc-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const tiers = [
    {
      title: "Basic",
      price: "$499",
      description: "Perfect for simple social media videos and basic editing needs.",
      features: [
        "Up to 2 minutes of edited video",
        "Basic color correction",
        "2 rounds of revisions",
        "Stock music selection",
        "Basic text and titles",
        "Delivery in 5 business days",
        "Social media formats"
      ]
    },
    {
      title: "Professional",
      price: "$999",
      description: "Ideal for commercial content and more complex editing projects.",
      features: [
        "Up to 5 minutes of edited video",
        "Advanced color grading",
        "4 rounds of revisions",
        "Premium stock music",
        "Custom motion graphics",
        "Sound design & mixing",
        "Delivery in 7 business days",
        "Multiple export formats"
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Full-service solution for ongoing video production needs.",
      features: [
        "Custom video length",
        "Cinematic color grading",
        "Unlimited revisions",
        "Custom soundtrack options",
        "Advanced motion graphics",
        "Professional sound design",
        "Priority delivery timeline",
        "All file formats & assets included",
        "Dedicated project manager"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing Plans</h2>
          <p className="text-zinc-400">
            Flexible pricing options designed to fit your specific video editing needs and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-zinc-900 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Need a custom solution?</h3>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
            We offer tailored video editing packages for businesses with specific requirements or ongoing needs. Contact us to discuss your project.
          </p>
          <Button variant="secondary">Contact Sales</Button>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;