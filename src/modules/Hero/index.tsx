import React, { useEffect, useState } from "react";
import test2 from "../../assets/test2.jpg";
import { Button } from "../../components/Button";
import { PORTFOLIO_DATA } from "../../constants";

export const Hero: React.FC = () => {
  const { hero } = PORTFOLIO_DATA;
  const heroBackground = test2;
  const [bgPosition, setBgPosition] = useState<string>("center");

  useEffect(() => {
    const update = () => {
      setBgPosition(window.innerWidth >= 1024 ? "center 40%" : "center");
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleScrollToPortfolio = () => {
    document
      .querySelector("#portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 text-white"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(6, 21, 17, 0.75), rgba(6, 21, 17, 0.6)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: bgPosition,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#061511]/80" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="flex flex-col items-start space-y-6 order-2 lg:order-1 max-w-xl">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#F6AE2D]">
            {hero.greeting}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] drop-shadow-lg">
            {hero.title}
          </h1>
          <p className="text-base md:text-lg text-gray-200 font-light whitespace-pre-line leading-relaxed border-l-4 border-[#F26419] pl-5">
            {hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
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
