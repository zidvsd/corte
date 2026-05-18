"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import { products } from "@/lib/data/products";

type Product = (typeof products)[number];

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Scroll lock — adds overflow:hidden + padding compensation to prevent layout shift
  useEffect(() => {
    if (!product) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.documentElement.style.overflow = "";
      document.documentElement.style.paddingRight = "";
    };
  }, [product]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      {/* Backdrop — must be a sibling of the panel, not a parent */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-4xl bg-white flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute cursor-pointer top-5 right-5 z-20 w-9 h-9 flex items-center justify-center border border-black/10 text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200"
        >
          <X size={14} strokeWidth={1.5} />
        </button>

        {/* Image */}
        <div className="relative w-full md:w-[48%] aspect-square md:aspect-auto md:min-h-130 bg-off-white shrink-0 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {product.latest && (
            <div className="absolute top-4 left-4 bg-black px-3 py-1.5">
              <span className="font-sans text-[9px] font-medium tracking-[0.25em] uppercase text-white">
                New
              </span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between p-8 md:p-10 w-full overflow-y-auto">
          <div className="flex flex-col gap-8">
            {/* Category — smallest, dimmest */}
            <div>
              <p className="font-sans text-[10px] font-normal tracking-[0.3em] uppercase text-black/60 mb-3">
                {product.category}
              </p>

              {/* Product name — dominant */}
              <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.05] tracking-tight text-black mb-3">
                {product.name}
              </h2>

              {/* Price — secondary, medium weight */}
              <p className="font-sans text-lg font-medium tracking-wide text-black tabular-nums">
                {product.price}
              </p>
            </div>

            <div className="h-px w-full bg-black/8" />

            {/* Description */}
            <div className="flex flex-col gap-2">
              <p className="font-sans text-[10px] font-normal tracking-[0.25em] uppercase  text-neutral-600">
                About this product
              </p>
              <p className="font-sans  text-sm text-black/70 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Details strip */}
            <div className="flex flex-col">
              {[
                { label: "Category", value: product.category },
                { label: "Availability", value: "In stock" },
                { label: "Origin", value: "Manila, PH" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center py-3.5 border-b border-black/6"
                >
                  {/* Label — lightest */}
                  <span className="font-sans text-[10px] font-normal tracking-[0.2em] uppercase text-black/70">
                    {row.label}
                  </span>
                  {/* Value — readable but not dominant */}
                  <span className="font-sans text-xs font-medium text-black/80">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2 mt-10">
            <button className="w-full inline-flex items-center justify-center gap-2 bg-black text-white font-sans text-[11px] font-medium tracking-[0.25em] uppercase px-6 py-4 hover:bg-gray-dark active:scale-[0.98] transition-all duration-200">
              Add to Cart
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </button>
            <button
              onClick={onClose}
              className="w-full font-sans text-[10px] font-normal tracking-[0.2em] uppercase text-black/50 hover:text-black/60 py-3 transition-colors duration-200"
            >
              Continue browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
