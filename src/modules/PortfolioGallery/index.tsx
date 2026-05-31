import React, { useState } from "react";
import { Button } from "../../components/Button";
import { PORTFOLIO_DATA } from "../../constants";

type FilterType = "all" | "family" | "couples" | "individual";

const CATEGORY_LABELS: Record<Exclude<FilterType, "all">, string> = {
  family: "Família",
  couples: "Casais",
  individual: "Ensaio",
};

export const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const { gallery } = PORTFOLIO_DATA;

  const filteredItems = gallery.items.filter(
    (item) => activeFilter === "all" || item.category === activeFilter,
  );

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-24 bg-[#F7F8F9] text-[#0A231C]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-14">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Staggered Images (Featured) */}
          <div className="relative hidden md:block h-112.5 w-full">
            {gallery.items.slice(0, 2).map((item, index) => (
              <div
                key={item.id}
                className={`absolute w-[62%] max-w-77.5 aspect-4/4 rounded-2xl overflow-hidden shadow-xl shadow-black/15 ring-1 ring-black/5 backdrop-blur bg-white ${
                  index === 0 ? "top-4 left-3 z-10" : "bottom-4 right-0 z-20"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-104"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>

          {/* Right: Philosophy Text */}
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
            <div className="flex flex-wrap items-center gap-4 pt-2"></div>
          </div>
        </div>

        {/* Filters */}
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
            Ensaios
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-4/5 rounded-xl overflow-hidden bg-gray-100 border border-black/5 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.35)]"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <div className="text-white space-y-1">
                  <span className="inline-flex px-3 py-1 text-xs uppercase tracking-wide bg-white/15 backdrop-blur rounded-full border border-white/20">
                    {CATEGORY_LABELS[item.category]}
                  </span>
                  <p className="text-sm font-medium leading-snug">{item.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
