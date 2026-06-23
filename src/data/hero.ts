export const HERO = {
  tagline: "Luxury Resort Collection",
  title: "Escape to",
  highlight: "Paradise",
  subtitle:
    "Immerse yourself in breathtaking landscapes, world-class amenities, and unforgettable experiences crafted for the discerning traveler.",
  cta: {
    primary: "Explore Resorts",
    secondary: "Watch Film",
  },
} as const;

export const SEARCH_FIELDS = {
  destinations: [
    { value: "maldives", label: "Maldives" },
    { value: "bali", label: "Bali, Indonesia" },
    { value: "santorini", label: "Santorini, Greece" },
    { value: "bora-bora", label: "Bora Bora, French Polynesia" },
    { value: "dubai", label: "Dubai, UAE" },
    { value: "maui", label: "Maui, Hawaii" },
    { value: "amalfi", label: "Amalfi Coast, Italy" },
  ],
  guests: [1, 2, 3, 4, 5, 6, 7, 8],
} as const;

export const STATS = [
  {
    value: "4.9",
    label: "Average Rating",
    sublabel: "2,500+ reviews",
    icon: "star",
  },
  {
    value: "20%",
    label: "Best Rate Guarantee",
    sublabel: "Book direct & save",
    icon: "shield",
  },
  {
    value: "150+",
    label: "Luxury Resorts",
    sublabel: "Worldwide destinations",
    icon: "building",
  },
] as const;
