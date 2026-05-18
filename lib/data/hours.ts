export const hours = [
  { day: "Monday", time: "9:00 AM – 7:00 PM", open: true },
  { day: "Tuesday", time: "9:00 AM – 7:00 PM", open: true },
  { day: "Wednesday", time: "9:00 AM – 7:00 PM", open: true },
  { day: "Thursday", time: "9:00 AM – 7:00 PM", open: true },
  { day: "Friday", time: "9:00 AM – 8:00 PM", open: true },
  { day: "Saturday", time: "8:00 AM – 8:00 PM", open: true },
  { day: "Sunday", time: "Closed", open: false },
] as const;

export const location = {
  name: "Corte Barbershop",
  address: "218 Bedford Ave, Mabitac, Laguna",
  addressLine1: "218 Bedford Ave",
  addressLine2: "Mabitac, Laguna 4015",
  phone: "(02) 8927-8667",
  email: "hello@cortebarbershop.ph",
  instagram: "https://instagram.com/cortebarbershop",
  // Opens Google Maps directions in a new tab — no iframe needed
  googleMapsUrl: "https://maps.google.com/?q=Mabitac+Laguna+Philippines",
  // Static exterior/street photo — replace with your actual shop exterior
  exteriorPhoto:
    "https://images.unsplash.com/photo-1633121050918-ab208f1508b7?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
} as const;

export type HoursEntry = (typeof hours)[number];
