import { location, hours } from "@/lib/data/hours";
import { navs } from "@/lib/data/navs";
import { MapPin, Phone, Mail, ArrowUpRight, X } from "lucide-react";

const services = [
  "Haircut",
  "Skin Fade",
  "Beard Trim",
  "Hot Towel Shave",
  "Shape Up",
  "Cut & Beard",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const todayIndex = new Date().getDay();
  const todayHoursIndex = todayIndex === 0 ? 6 : todayIndex - 1;
  const todayHours = hours[todayHoursIndex];

  return (
    <footer className="bg-black border-t border-white/10 pt-8 pb-10">
      <div className="mx-auto container ">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 lg:mb-20">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <div>
              <a
                href="#hero"
                className="font-serif text-3xl tracking-[0.3em] text-white uppercase block mb-3"
              >
                Corte
              </a>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/30">
                Barbershop · Est. MMXXIV
              </p>
            </div>

            <p className="font-sans font-light text-sm text-white/50 leading-relaxed max-w-55">
              A quiet room for a sharp look. One standard, every time.
            </p>

            {/* Today's hours pill */}
            <div className="inline-flex items-center gap-2 border border-white/10 px-4 py-2 w-fit">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  todayHours.open ? "bg-white" : "bg-white/20"
                }`}
              />
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/50">
                {todayHours.open
                  ? `Open today · ${todayHours.time}`
                  : "Closed today"}
              </span>
            </div>

            {/* Social */}
            <a
              href={location.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors duration-200 group"
            >
              <X size={14} strokeWidth={1.5} />
              @cortebarbershop
              <ArrowUpRight
                size={12}
                strokeWidth={1.5}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-4">
              {navs.map((nav) => (
                <a
                  key={nav.href}
                  href={nav.href}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-200 group inline-flex items-center gap-1.5"
                >
                  {nav.label}
                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.5}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
              <a
                href="#booking"
                className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-200 group inline-flex items-center gap-1.5"
              >
                Book a Chair
                <ArrowUpRight
                  size={12}
                  strokeWidth={1.5}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </nav>
          </div>

          {/* Col 3 — Services */}
          <div className="flex flex-col gap-6">
            <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">
              Services
            </h3>
            <nav className="flex flex-col gap-4">
              {services.map((s) => (
                <a
                  key={s}
                  href="#services"
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 4 — Contact & Hours */}
          <div className="flex flex-col gap-6">
            <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">
              Find Us
            </h3>

            <div className="flex flex-col gap-5">
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MapPin
                  size={14}
                  strokeWidth={1.5}
                  className="text-white/30 mt-0.5 shrink-0 group-hover:text-white transition-colors"
                />
                <span className="font-sans text-sm text-white/60 group-hover:text-white transition-colors leading-relaxed">
                  {location.address}
                </span>
              </a>

              <a
                href={`tel:${location.phone}`}
                className="flex items-center gap-3 group"
              >
                <Phone
                  size={14}
                  strokeWidth={1.5}
                  className="text-white/30 shrink-0 group-hover:text-white transition-colors"
                />
                <span className="font-sans text-sm text-white/60 group-hover:text-white transition-colors">
                  {location.phone}
                </span>
              </a>

              <a
                href={`mailto:${location.email}`}
                className="flex items-center gap-3 group"
              >
                <Mail
                  size={14}
                  strokeWidth={1.5}
                  className="text-white/30 shrink-0 group-hover:text-white transition-colors"
                />
                <span className="font-sans text-sm text-white/60 group-hover:text-white transition-colors">
                  {location.email}
                </span>
              </a>
            </div>

            {/* Hours list */}
            <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
              {hours.map((h, i) => (
                <div
                  key={h.day}
                  className={`flex justify-between items-center font-sans text-[11px] tracking-wide ${
                    i === todayHoursIndex
                      ? "text-white"
                      : h.open
                        ? "text-white/40"
                        : "text-white/20"
                  }`}
                >
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/20">
            © {currentYear} Corte Barbershop. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/20 hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/20 hover:text-white/50 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
