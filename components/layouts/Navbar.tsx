"use client";

import { useState, useEffect, useRef } from "react";
import { navs } from "@/lib/data/navs";
import { Button } from "@headlessui/react";
import { ExternalLink } from "lucide-react";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 20);

      if (currentY > lastScrollY.current && currentY > 100) {
        setHidden(true);
      } else if (currentY < lastScrollY.current) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-black ${
          scrolled ? "border-b border-white/10" : ""
        }`}
        style={{
          top: "44px",
          transform:
            hidden && !menuOpen ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.3s ease",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Wordmark */}
            <a
              href="#hero"
              className="font-serif text-xl md:text-2xl tracking-[0.25em] text-white uppercase"
            >
              Corte
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navs.map((nav) => (
                <a
                  key={nav.href}
                  href={nav.href}
                  className="font-sans text-xs tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors duration-200"
                >
                  {nav.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="#booking"
              className="hidden lg:inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-white border border-white/40 hover:border-white hover:bg-white hover:text-black px-5 py-2.5 transition-all duration-200"
            >
              Reserve
              <ExternalLink size={14} />
            </a>

            {/* Mobile hamburger */}
            <Button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50 gap-1.25"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  menuOpen ? "w-0 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </Button>
          </div>
        </div>

        {/* Thin bottom border */}
        <div className="h-px w-full bg-white/10" />
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col justify-center px-8 transition-all duration-500 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Metadata strip */}
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30 mb-16">
          Est. MMXXIV &nbsp;·&nbsp; Barbershop
        </p>

        {/* Mobile links */}
        <nav className="flex flex-col gap-8">
          {navs.map((nav, i) => (
            <a
              key={nav.href}
              href={nav.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-5xl text-white/90 hover:text-white transition-colors duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              {nav.label}
            </a>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="mt-16">
          <Button
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-white border border-white/40 px-6 py-3"
          >
            <a href="">Reserve a chair</a>
            <ExternalLink size={14} />
          </Button>
        </div>
      </div>
    </>
  );
}
