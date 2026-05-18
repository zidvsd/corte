export const products = [
  // =========================
  // Hairstyling
  // =========================
  {
    id: 1,
    name: "Matte Clay Pomade",
    category: "Hairstyling",
    description: "Strong hold with a natural matte finish for textured styles.",
    price: "₱650",
    image:
      "https://images.unsplash.com/photo-1775126251009-45be1acaf903?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    latest: true,
    featured: true,
    recentlyAdded: true,
  },
  {
    id: 2,
    name: "Classic Shine Pomade",
    category: "Hairstyling",
    description: "Medium hold pomade with a polished finish for slick styles.",
    price: "₱580",
    image:
      "https://images.unsplash.com/photo-1775126250995-8d2364537089?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    latest: false,
    featured: false,
    recentlyAdded: false,
  },
  {
    id: 3,
    name: "Sea Salt Texture Spray",
    category: "Hairstyling",
    description: "Lightweight spray that adds volume and effortless texture.",
    price: "₱520",
    image:
      "https://images.unsplash.com/photo-1550572017-4b7a301b9d81?q=80&w=1041&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    latest: true,
    featured: false,
    recentlyAdded: true,
  },

  // =========================
  // Hair Care
  // =========================
  {
    id: 4,
    name: "Daily Repair Shampoo",
    category: "Hair Care",
    description: "Gentle cleansing shampoo formulated for everyday freshness.",
    price: "₱720",
    image:
      "https://images.unsplash.com/photo-1701992678972-d5a053ad0fb0?q=80&w=657&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    latest: false,
    featured: false,
    recentlyAdded: true,
  },
  {
    id: 5,
    name: "Hydrating Conditioner",
    category: "Hair Care",
    description:
      "Moisture-rich conditioner designed to soften and strengthen hair.",
    price: "₱690",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop",
    latest: true,
    featured: false,
    recentlyAdded: false,
  },
  {
    id: 6,
    name: "Scalp & Beard Oil",
    category: "Hair Care",
    description:
      "Nourishing oil blend for healthy scalp care and beard conditioning.",
    price: "₱480",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    latest: false,
    featured: false,
    recentlyAdded: true,
  },
] as const;
