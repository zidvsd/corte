export const gallery = [
  {
    id: 1,
    alt: "Clean skin fade, sharp hairline",
    span: "tall", // row-span-2
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    alt: "Scissor cut, textured finish",
    span: "normal",
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    alt: "Low fade with beard shape up",
    span: "normal",
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    alt: "High fade, slicked back top",
    span: "normal",
    src: "https://images.unsplash.com/photo-1640301133543-41fe25ad6450?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    alt: "Barber at work, detail shot",
    span: "tall", // row-span-2
    src: "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    alt: "Mid fade with defined part",
    span: "normal",
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    alt: "Beard trim, natural outline",
    span: "normal",
    src: "https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    alt: "Textured crop with skin fade",
    span: "normal",
    src: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    alt: "Shape up, edges and neckline",
    span: "normal",
    src: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=800&auto=format&fit=crop",
  },
] as const;

export type GalleryItem = (typeof gallery)[number];
