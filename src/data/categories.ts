export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  resortCount: number;
}

export const CATEGORIES: Category[] = [
  {
    id: "beach",
    title: "Beachfront",
    description: "Wake up to the sound of waves",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    resortCount: 42,
  },
  {
    id: "mountain",
    title: "Mountain Retreat",
    description: "Escape to serene highlands",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
    resortCount: 28,
  },
  {
    id: "overwater",
    title: "Overwater Villas",
    description: "Float above crystal waters",
    image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80",
    resortCount: 19,
  },
  {
    id: "urban",
    title: "Urban Luxury",
    description: "Sophistication in the city",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    resortCount: 35,
  },
  {
    id: "desert",
    title: "Desert Oasis",
    description: "Luxury amidst the dunes",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    resortCount: 14,
  },
  {
    id: "wellness",
    title: "Wellness & Spa",
    description: "Rejuvenate body and soul",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    resortCount: 31,
  },
];
