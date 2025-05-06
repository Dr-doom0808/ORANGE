import React, { useState } from 'react';
import Container from '../ui/Container';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What types of video content do you create?",
      answer: "We specialize in creating various types of video content including talking head videos, social media shorts (9:16 ratio), podcasts, documentaries, and marketing videos. Each project is tailored to meet your specific needs and goals."
    },
    {
      question: "How long does a typical video project take?",
      answer: "Project timelines vary depending on complexity and scope. A typical social media video might take 3-5 business days, while more complex projects like documentaries can take several weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide raw footage after the project?",
      answer: "Yes, we can provide raw footage upon request. However, this should be discussed and agreed upon before the project begins, as it may affect the project's pricing."
    },
    {
      question: "What is your revision policy?",
      answer: "We offer multiple rounds of revisions to ensure you're completely satisfied with the final product. The specific number of revision rounds will be outlined in your project agreement."
    },
    {
      question: "Can you help with script writing and storyboarding?",
      answer: "Yes, we offer comprehensive pre-production services including script writing, storyboarding, and creative direction to ensure your video tells the right story."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-zinc-950">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-zinc-400">
              Find answers to common questions about our video production services.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-white font-medium">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-zinc-400">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-zinc-400">
              Still have questions? {" "}
              <a href="#contact" className="text-orange-500 hover:text-orange-400">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;