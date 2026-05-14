import Image from "next/image";
import { Button } from "@headlessui/react";
import { ExternalLink } from "lucide-react";
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-black pt-27"
    >
      {/* Background image */}
      <Image
        src="/hero-bg.png"
        alt="Corte Barbershop interior"
        fill
        priority
        className="object-cover object-center opacity-40"
      />

      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/80" />

      {/* Metadata strip — top */}
      <div className="absolute top-24 left-0 right-0 px-6 md:px-10 flex justify-between items-center z-10">
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">
          Est. MMXXIV
        </span>
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30 hidden md:block">
          Barbershop · Manila, PH
        </span>
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">
          Vol. 01
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-10 pb-16 md:pb-24 container mx-auto">
        {/* Eyebrow */}
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/40 mb-6">
          — Chapter One : The Craft
        </p>

        {/* H1 */}
        <h1 className="font-serif text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-tight text-white mb-8 max-w-4xl font-semibold">
          Precision cuts.
          <br />
          Classic shaves.
        </h1>

        {/* Description */}
        <p className="font-sans font-light text-sm md:text-base text-white/50 max-w-sm leading-relaxed mb-12 tracking-wide">
          A quiet room for a sharp look. Six chairs. One standard. We take our
          time so you don&apos;t have to think about your hair for weeks.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Primary — filled white */}
          <Button
            as="a"
            href="#booking"
            className=" w-1/2 sm:w-auto text-nowrap inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase bg-white text-black px-6 py-3.5 hover:bg-white/90 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Book a chair
            <ExternalLink size={14} />
          </Button>

          {/* Ghost — outlined */}
          <Button
            as="a"
            href="#services"
            className="w-1/2 sm:w-auto text-nowrap inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-white border border-white/30 hover:border-white px-6 py-3.5 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Our services
          </Button>
        </div>

        {/* Bottom tagline */}
        <div className="absolute bottom-8 left-6 right-6 md:left-10 md:right-10 flex justify-between items-center max-w-7xl">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">
            Cut Sharp · Live Slow
          </span>
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30 hidden md:block">
            © {new Date().getFullYear()} Corte. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
}
