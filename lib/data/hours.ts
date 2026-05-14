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
  phone: "(02) 8927-8667",
  email: "hello@cortebarbershop.ph",
  instagram: "https://instagram.com/cortebarbershop",
  googleMapsUrl: "https://maps.google.com/?q=Mabitac,Laguna",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.0!2d121.43!3d14.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI1JzEyLjAiTiAxMjHCsDI1JzQ4LjAiRQ!5e0!3m2!1sen!2sph!4v1620000000000!5m2!1sen!2sph",
} as const;
