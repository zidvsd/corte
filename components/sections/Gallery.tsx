"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "motion";
import Image from "next/image";
import { gallery } from "@/lib/data/gallery";
import { ExternalLink } from "lucide-react";
export default function Gallery() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!gridRef.current) return;

    // 2. Fixed: querySelectorAll handles standard Elements.
    // Typecast explicitly to HTMLDivElement[] to help animate match props.
    const items = Array.from(
      gridRef.current.querySelectorAll<HTMLDivElement>(".gallery-item"),
    );

    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // 3. Fixed: passing options matching motion-react's DOM animate signature
        animate(
          items,
          {
            opacity: [0, 1],
            // motion-react accepts flat shorthand layout properties like 'y' instead of complex transform strings
            y: [20, 0],
          },
          {
            delay: stagger(0.08),
            duration: 0.6,
            ease: "easeOut", // Changed "ease-out" to "easeOut" standard casing
          },
        );

        observer.disconnect(); // run once
      },
      { threshold: 0.2 },
    );

    observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <section id="gallery" className="w-full bg-black py-24 md:py-32">
      <div className="mx-auto container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/30 mb-3">
              — The Work
            </p>
            <h2 className="font-serif text-5xl leading-none lg:text-7xl">
              Every cut,
              <br />a statement.
            </h2>
          </div>
          <p className="font-sans font-light text-sm text-white/40 max-w-xs leading-relaxed md:text-right">
            No filters. No retouching. Just clean work — straight from the
            chair.
          </p>
        </div>

        {/* Grid — desktop: 3-col masonry-style, tablet: 2-col, mobile: 1-col */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[280px]"
          ref={gridRef}
        >
          {gallery.map((item) => (
            <div
              key={item.id}
              className={`gallery-item opacity-0 relative overflow-hidden group bg-white/5 ${
                item.span === "tall" ? "sm:row-span-2" : "row-span-1"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500 pointer-events-none" />

              {/* Caption — appears on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/80">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 flex justify-between items-center">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/20">
            {gallery.length} works shown
          </span>
          <a
            href="https://instagram.com/cortebarbershop"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
          >
            More on Instagram
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
