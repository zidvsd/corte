"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";

const categories = ["All", "Hair", "Beard", "Extras"] as const;

const serviceImages = [
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=1200&auto=format&fit=crop",
];

export default function Services() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filteredServices = services.filter((service) => {
    if (active === "All") return true;

    if (active === "Hair") {
      return ["Haircut", "Skin Fade", "Cut & Beard"].includes(service.name);
    }

    if (active === "Beard") {
      return ["Beard Trim", "Cut & Beard"].includes(service.name);
    }

    if (active === "Extras") {
      return ["Hot Towel Shave", "Shape Up"].includes(service.name);
    }

    return true;
  });

  return (
    <section id="services" className="bg-off-white text-black py-28 lg:py-36">
      <div className="mx-auto container px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between mb-20">
          <div className="max-w-xl">
            <span className="mb-4 block font-sans text-[11px] uppercase tracking-[0.35em] text-gray-mid">
              The Menu
            </span>

            <h2 className="font-serif md:text-nowrap text-5xl leading-none lg:text-7xl">
              Every cut, considered.
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                type="button"
                className={`border-b pb-1 font-sans text-[11px] uppercase tracking-[0.28em] transition-all duration-300 pointer-events-auto cursor-pointer py-2 ${
                  active === category
                    ? "border-black text-black"
                    : "border-transparent text-gray-mid hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredServices.map((service, index) => (
            <article
              key={service.name}
              className="group overflow-hidden bg-white shadow-[0px_20px_50px_rgba(0,0,0,0.04)] transition-all duration-700 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={serviceImages[index % serviceImages.length]}
                  alt={service.name}
                  className="h-full w-full object-cover transition-transform duration-1600 ease-out group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 selection:bg-transparent">
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/90">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <h3 className="mb-3 font-serif text-3xl">{service.name}</h3>

                <p className="mb-8 font-sans text-sm leading-relaxed text-gray-mid">
                  {service.description}
                </p>

                <button className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.28em] text-black transition-all duration-300 group-hover:gap-4">
                  Reserve
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
