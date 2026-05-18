"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function PromoBar() {
  const [visible, setVisible] = useState(true);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.pageYOffset ?? 0;
      const delta = currentY - lastScrollY.current;

      if (delta > 4 && currentY > 80) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }

      lastScrollY.current = currentY <= 0 ? 0 : currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[90] w-full h-11 bg-white text-black flex items-center justify-center"
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.3s ease",
        willChange: "transform",
      }}
    >
      <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-center leading-tight px-10 sm:px-0">
        <span className="md:hidden">
          Call us:&nbsp;
          <a href="tel:+63289278667" className="underline underline-offset-4">
            (02) 8927-8667
          </a>
        </span>
        <span className="hidden md:inline">
          Prefer a call?
          <span className="text-black/40 mx-2">—</span>
          <a
            href="tel:+63289278667"
            className="underline underline-offset-4 decoration-black/30 hover:decoration-black transition-all"
          >
            Speak with our barber directly
          </a>
          <span className="text-black/40 mx-2">—</span>
          (02) 8927-8667
        </span>
      </p>

      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40 hover:text-black transition-colors duration-200 cursor-pointer"
      >
        <X size={14} strokeWidth={1.5} />
      </button>
    </div>
  );
}
