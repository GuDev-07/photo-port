import React from 'react';
import { PORTFOLIO_DATA } from '../../constants';
import { Quote } from 'lucide-react';

export const FeedbackSection: React.FC = () => {
  const { feedbacks } = PORTFOLIO_DATA;

  return (
    <section id="feedbacks" className="py-24 bg-[#0A231C] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#F6AE2D] mb-4">O que dizem</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Histórias contadas através de imagens e sentimentos compartilhados por quem viveu a experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((feedback) => (
            <div 
              key={feedback.id} 
              className="bg-[#0D2D24] p-8 rounded-3xl border border-white/5 hover:border-[#F26419]/30 transition-colors duration-300 flex flex-col h-full"
            >
              <Quote className="text-[#F26419] w-10 h-10 mb-6 opacity-50" />
              <p className="text-gray-300 leading-relaxed flex-grow italic mb-8">
                "{feedback.comment}"
              </p>
              <div className="mt-auto">
                <h4 className="font-bold text-lg text-white">{feedback.name}</h4>
                {feedback.role && (
                  <span className="text-sm text-[#F6AE2D]">{feedback.role}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
