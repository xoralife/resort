export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  resort: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    location: "New York, USA",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    rating: 5,
    text: "An absolutely transcendent experience. From the moment we arrived, every detail was anticipated and exceeded. The overwater villa was beyond dreams, and the staff anticipated our every need. This is not just a stay — it's a memory that will last a lifetime.",
    resort: "Azure Paradise Resort",
  },
  {
    id: "2",
    name: "James Chen",
    location: "Singapore",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
    text: "We've traveled to over 40 countries and this was hands-down the most luxurious experience we've ever had. The cliffside villa at sunset was pure magic. The private chef prepared the most exquisite meals using local ingredients. Perfection.",
    resort: "Serenity Cliffs Estate",
  },
  {
    id: "3",
    name: "Elena Rossi",
    location: "Milan, Italy",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
    text: "The underwater suite at Crystal Sands is an engineering marvel. Sleeping surrounded by the Arabian Gulf's marine life was surreal. The butler service was impeccable, and the private beach felt like our own slice of paradise. We're already planning our return.",
    resort: "Crystal Sands Resort",
  },
];

export const STATS_DATA = [
  { value: "150+", label: "Luxury Resorts" },
  { value: "50K+", label: "Happy Guests" },
  { value: "4.9", label: "Average Rating" },
  { value: "99%", label: "Satisfaction Rate" },
];
