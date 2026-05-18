import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight, X } from "lucide-react";
import { hours, location } from "@/lib/data/hours";

function getIsOpenNow() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hoursIndex = day === 0 ? 6 : day - 1;
  const todayEntry = hours[hoursIndex];
  if (!todayEntry.open) return { open: false, label: "Closed today" };

  const [startStr, endStr] = todayEntry.time.split("–").map((s) => s.trim());
  const parseTime = (str: string) => {
    const [time, period] = str.split(" ");
    let [h, m] = time.split(":").map(Number);
    if (period === "PM" && h !== 12) h += 12;
    if (period === "AM" && h === 12) h = 0;
    return h * 60 + m;
  };
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const isOpen =
    currentMinutes >= parseTime(startStr) && currentMinutes < parseTime(endStr);
  return {
    open: isOpen,
    label: isOpen ? `Open · Closes ${endStr}` : `Closed · Opens ${startStr}`,
  };
}

export default function Location() {
  const status = getIsOpenNow();
  const todayIndex = new Date().getDay();
  const hoursIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="visit" className="w-full bg-black">
      {/* Full-bleed image top */}
      <div className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden">
        <Image
          src={location.exteriorPhoto}
          alt="Corte Barbershop exterior"
          fill
          className="object-cover object-center grayscale opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 linear-gradient-to-b from-black/20 via-transparent to-black" />

        {/* Open/closed pill — overlaid on image */}
        <div className="absolute inset-0 mx-auto max-w-7xl px-6 lg:px-10 pointer-events-none">
          <div className="absolute bottom-8 pointer-events-auto">
            <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/10 px-4 py-2">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  status.open ? "bg-white animate-pulse" : "bg-white/20"
                }`}
              />
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/70">
                {status.label}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content below image */}
      <div className="mx-auto container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — address + contact */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/30 mb-3">
                — Find Us
              </p>
              <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight text-white mb-6">
                Come in.
                <br />
                We&apos;re ready.
              </h2>
              <p className="font-sans font-light text-sm text-white/40 leading-relaxed max-w-sm">
                No walk-in chaos. Book ahead or call — we keep things calm and
                on schedule.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-9 h-9 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/40 transition-colors">
                  <MapPin
                    size={14}
                    strokeWidth={1.5}
                    className="text-white/40 group-hover:text-white transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-0.5 pt-1.5">
                  <span className="font-sans text-sm text-white/70 group-hover:text-white transition-colors leading-relaxed">
                    {location.addressLine1}
                    <br />
                    {location.addressLine2}
                  </span>
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/25 group-hover:text-white/50 transition-colors inline-flex items-center gap-1 mt-1">
                    Get directions <ArrowUpRight size={10} strokeWidth={1.5} />
                  </span>
                </div>
              </a>

              <a
                href={`tel:${location.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-9 h-9 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/40 transition-colors">
                  <Phone
                    size={14}
                    strokeWidth={1.5}
                    className="text-white/40 group-hover:text-white transition-colors"
                  />
                </div>
                <span className="font-sans text-sm text-white/70 group-hover:text-white transition-colors pt-1">
                  {location.phone}
                </span>
              </a>

              <a
                href={`mailto:${location.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-9 h-9 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/40 transition-colors">
                  <Mail
                    size={14}
                    strokeWidth={1.5}
                    className="text-white/40 group-hover:text-white transition-colors"
                  />
                </div>
                <span className="font-sans text-sm text-white/70 group-hover:text-white transition-colors pt-1">
                  {location.email}
                </span>
              </a>

              <a
                href={location.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-9 h-9 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/40 transition-colors">
                  <X
                    size={14}
                    strokeWidth={1.5}
                    className="text-white/40 group-hover:text-white transition-colors"
                  />
                </div>
                <span className="font-sans text-sm text-white/70 group-hover:text-white transition-colors pt-1">
                  @cortebarbershop
                </span>
              </a>
            </div>

            {/* CTA */}
            <a
              href="#booking"
              className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase bg-white text-black px-6 py-3.5 hover:bg-white/90 active:scale-[0.98] transition-all duration-200 w-fit"
            >
              Book a chair
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
          </div>

          {/* Right — hours */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/30 mb-6">
                — Hours
              </p>
              <div className="flex flex-col divide-y divide-white/6">
                {hours.map((entry, i) => {
                  const isToday = i === hoursIndex;
                  return (
                    <div
                      key={entry.day}
                      className={`flex justify-between items-center py-4 ${
                        isToday
                          ? "text-white"
                          : entry.open
                            ? "text-white/40"
                            : "text-white/15"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isToday && (
                          <span className="w-1 h-1 rounded-full bg-white shrink-0" />
                        )}
                        <span
                          className={`font-sans text-sm tracking-wide ${
                            isToday ? "ml-0" : "ml-4"
                          }`}
                        >
                          {entry.day}
                        </span>
                      </div>
                      <span className="font-sans text-sm tabular-nums">
                        {entry.time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Note */}
            <p className="font-sans text-[11px] tracking-wide text-white/20 leading-relaxed border-t border-white/6 pt-6">
              Walk-ins welcome based on availability. For guaranteed slots, book
              online or call ahead. Last appointment 30 mins before close.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
