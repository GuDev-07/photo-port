import React, { useState } from "react";
import { Button } from "../../components/Button/presentation";
import { ImageLightbox } from "../../components/ImageLightbox/presentation";
import { PORTFOLIO_DATA } from "../../constants";
import { useScrollAnimation } from "../../hooks";

type FilterType = "all" | "family" | "couples" | "individual";

export const PortfolioGallery: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    delay: 100,
    rootMargin: "0px",
    threshold: 0.05,
  });
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    category: string;
  } | null>(null);
  const { gallery } = PORTFOLIO_DATA;

  const filteredItems = gallery.items.filter(
    (item) => activeFilter === "all" || item.category === activeFilter,
  );

  const openImage = (src: string, alt: string, category: string) => {
    setSelectedImage({ src, alt, category });
  };

  return (
    <section
      ref={ref}
      id="portfolio"
      className={`animate-fade-up pt-16 md:pt-24 ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative hidden md:block h-112.5 w-full">
            {gallery.featuredItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openImage(item.src, item.alt, item.category)}
                className={`absolute w-[62%] max-w-77.5 aspect-4/4 cursor-pointer rounded-2xl overflow-hidden shadow-xl shadow-black/15 ring-1 ring-black/5 backdrop-blur bg-white ${
                  index === 0 ? "top-4 left-3 z-10" : "bottom-4 right-0 z-20"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain bg-[#F7F8F9] transition-transform duration-700 hover:scale-104"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-[#E87A3C]">
              Portfólio
            </p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-[#0A231C]">
              {gallery.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
              {gallery.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5 sm:gap-10 mt-8 sm:mt-10">
          <Button
            variant={activeFilter === "all" ? "primary" : "outline"}
            onClick={() => setActiveFilter("all")}
            className="px-7"
          >
            Todos
          </Button>
          <Button
            variant={activeFilter === "family" ? "primary" : "outline"}
            onClick={() => setActiveFilter("family")}
            className="px-7"
          >
            Família
          </Button>
          <Button
            variant={activeFilter === "couples" ? "primary" : "outline"}
            onClick={() => setActiveFilter("couples")}
            className="px-7"
          >
            Casais
          </Button>
          <Button
            variant={activeFilter === "individual" ? "primary" : "outline"}
            onClick={() => setActiveFilter("individual")}
            className="px-7"
          >
            Individual
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openImage(item.src, item.alt, item.category)}
              className="group relative aspect-4/5 cursor-pointer rounded-xl overflow-hidden bg-gray-100 border border-black/5 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.35)]"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain bg-[#F7F8F9] transition-transform duration-700 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </button>
          ))}
        </div>

      </div>

      {selectedImage && (
        <ImageLightbox
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};
