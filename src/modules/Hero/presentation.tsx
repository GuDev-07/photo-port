import React from "react";
import { heroBackground } from "../../assets/images";
import { Button } from "../../components/Button/presentation";
import { TypewriterText } from "../../components/TypewriterText/presentation";
import { PORTFOLIO_DATA } from "../../constants";

export const Hero: React.FC = () => {
  const { hero } = PORTFOLIO_DATA;
  const bgPosition = window.innerWidth >= 1024 ? "center 40%" : "center";

  const handleScrollToPortfolio = () => {
    document
      .querySelector("#portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-24 text-white animate-fade-in visible"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(6, 21, 17, 0.75), rgba(6, 21, 17, 0.6)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: bgPosition,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-[#061511]/80" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-start space-y-6 order-2 lg:order-1 max-w-xl">
          <p
            className="text-sm md:text-base uppercase tracking-[0.3em] text-[#F6AE2D] animate-fade-up visible"
            style={{ transitionDelay: "0ms" }}
          >
            {hero.greeting}
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] drop-shadow-lg animate-fade-up visible"
            style={{ transitionDelay: "150ms" }}
          >
            <TypewriterText text={hero.title} />
          </h1>
          <p
            className="text-base md:text-lg text-gray-200 font-light whitespace-pre-line leading-relaxed border-l-4 border-[#F26419] pl-5 animate-fade-up visible"
            style={{ transitionDelay: "300ms" }}
          >
            {hero.subtitle}
          </p>
          <div
            className="flex flex-wrap gap-4 pt-4 animate-fade-up visible"
            style={{ transitionDelay: "450ms" }}
          >
            <Button
              variant="primary"
              onClick={handleScrollToPortfolio}
              className="cursor-pointer text-base md:text-lg px-8 py-3 shadow-xl shadow-[#F26419]/30"
            >
              {hero.ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
