"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/data/testimonials";
import { Star } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="w-full bg-off-white py-24 md:py-32">
      <div className="mx-auto container lg:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-black/30 mb-3">
            — What Clients Say
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-tight text-black">
            Straight from
            <br />
            the chair.
          </h2>
        </div>

        {/* Featured quote block */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start">
          {/* Left — quote */}
          <div className="flex flex-col gap-10">
            {/* Stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  strokeWidth={1.5}
                  className="fill-black text-black"
                />
              ))}
            </div>

            {/* The quote */}
            <blockquote
              key={active.id}
              className="font-serif font-light text-[clamp(1.5rem,4vw,3rem)] leading-[1.2] tracking-tight text-black max-w-3xl"
            >
              &ldquo;{active.quote}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 overflow-hidden">
                <Image
                  src={active.avatar}
                  alt={active.name}
                  fill
                  className="object-cover object-center grayscale"
                  sizes="48px"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-sm tracking-wide text-black">
                  {active.name}
                </span>
                <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-black/40">
                  {active.role}
                </span>
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-black/15 mx-2 hidden sm:block" />

              {/* Google Reviews badge */}
              <div className="hidden sm:flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#000"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#000"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#000"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#000"
                    fillOpacity="0.4"
                  />
                </svg>
                <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-black/30">
                  Google Review
                </span>
              </div>
            </div>
          </div>

          {/* Right — selector tabs */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(i)}
                className={`shrink-0 flex items-center gap-3 px-4 py-3 border transition-all duration-200 text-left group ${
                  i === activeIndex
                    ? "border-black bg-black text-white"
                    : "border-black/15 bg-transparent text-black hover:border-black/40"
                }`}
              >
                <div className="relative w-8 h-8 overflow-hidden shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className={`object-cover grayscale ${
                      i === activeIndex ? "opacity-80" : "opacity-50"
                    }`}
                    sizes="32px"
                  />
                </div>
                <div className="hidden lg:flex flex-col gap-0.5 min-w-35">
                  <span
                    className={`font-sans text-xs tracking-wide ${
                      i === activeIndex ? "text-white" : "text-black/70"
                    }`}
                  >
                    {t.name}
                  </span>
                  <span
                    className={`font-sans text-[10px] tracking-widest uppercase ${
                      i === activeIndex ? "text-white/50" : "text-black/30"
                    }`}
                  >
                    {t.role}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-black/10 flex flex-wrap gap-10">
          {[
            { value: "500+", label: "Clients served" },
            { value: "4.9", label: "Google rating" },
            { value: "98%", label: "Return rate" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-serif text-4xl text-black leading-none">
                {stat.value}
              </span>
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-black/30">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
