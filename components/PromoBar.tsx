export default function PromoBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-60 w-full h-11 bg-white text-black flex items-center justify-center">
      <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-center leading-tight px-10 sm:px-0">
        <span className="md:hidden">
          Call:&nbsp;
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
    </div>
  );
}
