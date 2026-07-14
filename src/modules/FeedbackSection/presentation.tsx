import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import React from "react";
import { PORTFOLIO_DATA } from "../../constants";
import { useCarousel, useScrollAnimation } from "../../hooks";

export const FeedbackSection: React.FC = () => {
  const { feedbacks } = PORTFOLIO_DATA;
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const { current, next, prev, goTo, setPaused } = useCarousel({
    total: feedbacks.length,
  });

  return (
    <section
      ref={ref}
      id="feedbacks"
      className={`py-24 pt-8 bg-[#0A231C] text-white animate-fade-up ${isVisible ? "visible" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#F6AE2D] mb-4">
            O que dizem sobre mim
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada foto carrega uma história. Veja o que meus clientes sentiram ao
            reviver os momentos que capturamos juntos
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-[#0D2D24] p-8 rounded-3xl border border-white/5 hover:border-[#F26419]/30 transition-colors duration-300 flex flex-col h-full"
            >
              <Quote className="text-[#F26419] w-10 h-10 mb-6 opacity-50" />
              <p className="text-gray-300 leading-relaxed italic mb-8 grow">
                "{feedback.comment}"
              </p>
              <div className="mt-auto">
                <h4 className="font-bold text-lg text-white">
                  {feedback.name}
                </h4>
                {feedback.role && (
                  <span className="text-sm text-[#F6AE2D]">
                    {feedback.role}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div
            className="bg-[#0D2D24] p-8 rounded-3xl border border-white/5 flex flex-col min-h-64
              transition-opacity duration-400"
          >
            <Quote className="text-[#F26419] w-10 h-10 mb-6 opacity-50" />
            <p className="text-gray-300 leading-relaxed italic mb-8 grow">
              "{feedbacks[current].comment}"
            </p>
            <div className="mt-auto">
              <h4 className="font-bold text-lg text-white">
                {feedbacks[current].name}
              </h4>
              {feedbacks[current].role && (
                <span className="text-sm text-[#F6AE2D]">
                  {feedbacks[current].role}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              type="button"
              onClick={prev}
              className="cursor-pointer p-2 rounded-full border border-white/20 hover:border-[#F26419]/60 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="flex gap-2">
              {feedbacks.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-[#F26419] w-5" : "bg-white/30"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="cursor-pointer p-2 rounded-full border border-white/20 hover:border-[#F26419]/60 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
