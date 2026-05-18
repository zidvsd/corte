export const testimonials = [
  {
    id: 1,
    quote:
      "Best fade I've had in Manila. Clean lines, no rushing — they actually take their time. Walked out looking sharper than I have in years.",
    name: "Marco Reyes",
    role: "Creative Director",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    quote:
      "The hot towel shave alone is worth the trip. Feels like a different era in the best way. Nothing rushed, nothing cheap.",
    name: "Adrian Lim",
    role: "Architect",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 3,
    quote:
      "Minimal, calm, no loud music or chaos. Just good work done quietly. My kind of place. I've been coming here every two weeks.",
    name: "Miguel Santos",
    role: "Founder, Sols Studio",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 4,
    quote:
      "Been going here for six months. Consistent every single time. That's rare — most shops are great once then fall off. Not Corte.",
    name: "Nico Villanueva",
    role: "Brand Strategist",
    avatar:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 5,
    quote:
      "The attention to detail is unreal. They noticed things about my hair structure my last barber never even acknowledged. That's the difference.",
    name: "Paolo Dela Cruz",
    role: "Product Designer",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    featured: false,
  },
] as const;

export type Testimonial = (typeof testimonials)[number];
