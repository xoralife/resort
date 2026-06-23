export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  resortCount: number;
  rating: number;
}

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
    resortCount: 24,
    rating: 4.9,
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    resortCount: 31,
    rating: 4.7,
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    resortCount: 18,
    rating: 4.8,
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    resortCount: 45,
    rating: 4.8,
  },
  {
    id: "amalfi",
    name: "Amalfi Coast",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1612698092825-cf8cb3ff5dd2?w=800&q=80",
    resortCount: 22,
    rating: 4.7,
  },
  {
    id: "bora-bora",
    name: "Bora Bora",
    country: "French Polynesia",
    image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80",
    resortCount: 12,
    rating: 4.9,
  },
];

export const EXPERIENCES = [
  {
    id: "sunset-cruise",
    title: "Private Sunset Cruise",
    description: "Sail into the horizon on a private yacht with champagne and canapés as the sky ignites.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
  {
    id: "spa-ritual",
    title: "Ancient Spa Rituals",
    description: "Journey through centuries-old wellness traditions with treatments using rare, natural ingredients.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  },
  {
    id: "underwater-dining",
    title: "Underwater Dining",
    description: "Dine surrounded by marine life in an exclusive submerged glass pavilion, a feast for all senses.",
    image: "https://images.unsplash.com/photo-1560624051-eb18e3c3a0e3?w=800&q=80",
  },
  {
    id: "helicopter",
    title: "Helicopter Tours",
    description: "Soar above breathtaking landscapes and hidden coves accessible only by air, with champagne picnics on private beaches.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
  },
];
