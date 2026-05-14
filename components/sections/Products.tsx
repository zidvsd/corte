"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { products } from "@/lib/data/products";

const tabs = ["Latest", "Hairstyling", "Hair Care"] as const;

export default function Products() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Latest");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  const featuredProduct = products.find((p) => p.featured);

  const filteredProducts = useMemo(() => {
    if (activeTab === "Latest") {
      return products.filter((p) => p.latest);
    }

    return products.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <section
      id="products"
      className="overflow-hidden bg-white py-24 text-black lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 lg:mb-24 lg:ml-auto lg:max-w-[72%]">
          <p className="mb-5 font-sans text-[11px] uppercase tracking-[0.35em] text-gray-mid">
            Our Products
          </p>

          <h2 className="mb-6 font-serif text-5xl leading-none lg:text-7xl">
            Corte’s in your hands.
          </h2>

          <p className="max-w-2xl font-sans text-sm leading-relaxed text-gray-mid lg:text-base">
            Premium hairstyling and hair care essentials curated for the modern
            gentleman — designed to keep your look sharp long after you leave
            the chair.
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
          {/* Featured */}
          {featuredProduct && (
            <div className="relative w-full overflow-hidden bg-black lg:max-w-[48%]">
              <div className="group relative aspect-[4/5] overflow-hidden">
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  fill
                  className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute left-0 top-8 flex flex-col items-start gap-5 px-6 lg:px-8">
                  <span className="bg-white px-4 py-2 font-sans text-[10px] uppercase tracking-[0.25em] text-black shadow-lg">
                    Featured Product
                  </span>

                  <div>
                    <h3 className="max-w-md font-serif text-4xl leading-tight text-white lg:text-5xl">
                      {featuredProduct.name}
                    </h3>

                    <p className="mt-3 font-sans text-sm uppercase tracking-[0.2em] text-white/70">
                      {featuredProduct.price}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8">
                  <button className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-6 py-4 font-sans text-[11px] uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black">
                    View Product
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Products */}
          <div className="flex w-full flex-col lg:max-w-[52%]">
            {/* Tabs */}
            <div className="mb-10 flex items-center justify-between border-b border-gray-light">
              <div className="flex overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`shrink-0 border-b px-6 pb-5 font-sans text-[11px] uppercase tracking-[0.28em] transition-all duration-300 ${
                      activeTab === tab
                        ? "border-black text-black"
                        : "border-transparent text-gray-mid hover:text-black"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Arrows */}
              <div className="hidden items-center gap-3 lg:flex">
                <button
                  onClick={() => emblaApi?.scrollPrev()}
                  className="flex h-11 w-11 items-center justify-center border border-gray-light transition-colors hover:bg-black hover:text-white"
                >
                  <ArrowLeft size={16} strokeWidth={1.5} />
                </button>

                <button
                  onClick={() => emblaApi?.scrollNext()}
                  className="flex h-11 w-11 items-center justify-center border border-gray-light transition-colors hover:bg-black hover:text-white"
                >
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-5">
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    className="group min-w-[78%] flex-[0_0_78%] md:min-w-[48%] md:flex-[0_0_48%] xl:min-w-[46%] xl:flex-[0_0_46%]"
                  >
                    <div className="flex h-full flex-col bg-white">
                      {/* Image */}
                      <div className="relative aspect-[3/4] overflow-hidden bg-off-white">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {product.latest && (
                          <div className="absolute left-3 top-3 bg-white px-3 py-1 shadow-md">
                            <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-black">
                              New
                            </span>
                          </div>
                        )}

                        {/* Hover CTA */}
                        <div className="absolute inset-x-4 bottom-4 hidden translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:block">
                          <button className="w-full bg-black px-4 py-4 font-sans text-[10px] uppercase tracking-[0.25em] text-white transition-colors hover:bg-gray-dark">
                            View Product
                          </button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col pt-5">
                        <h4 className="mb-3 min-h-[52px] font-serif text-2xl leading-tight">
                          {product.name}
                        </h4>

                        <div className="mt-auto flex items-center justify-between gap-4">
                          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-gray-mid">
                            {product.price}
                          </span>

                          {product.recentlyAdded && (
                            <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-black">
                              Recently Added
                            </span>
                          )}
                        </div>

                        <button className="mt-5 bg-black px-5 py-4 font-sans text-[10px] uppercase tracking-[0.25em] text-white lg:hidden">
                          View Product
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <button className="inline-flex items-center gap-3 bg-black px-10 py-5 font-sans text-[11px] uppercase tracking-[0.28em] text-white transition-all duration-300 hover:bg-gray-dark">
                Shop Our Products
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
