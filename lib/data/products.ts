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
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1556228578-dd6c7f7d2a20?q=80&w=1200&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
    latest: false,
    featured: false,
    recentlyAdded: true,
  },
] as const;
