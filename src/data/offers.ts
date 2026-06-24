export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  code: string;
  image: string;
  validUntil: string;
  highlights: string[];
}

export const OFFERS: Offer[] = [
  {
    id: "early-bird",
    title: "Early Bird Escape",
    description:
      "Book 60 days in advance and enjoy exclusive savings on your dream resort stay.",
    discount: "25% OFF",
    code: "EARLY25",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80",
    validUntil: "Dec 31, 2026",
    highlights: [
      "Non-refundable booking",
      "Minimum 3-night stay",
      "Valid on all resorts",
    ],
  },
  {
    id: "honeymoon",
    title: "Honeymoon Paradise",
    description:
      "Celebrate your love with complimentary upgrades, champagne, and a private dinner on the beach.",
    discount: "20% OFF",
    code: "LOVE20",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    validUntil: "Dec 31, 2026",
    highlights: [
      "Free room upgrade",
      "Complimentary champagne",
      "Private beach dinner",
    ],
  },
  {
    id: "spa-wellness",
    title: "Spa & Wellness Retreat",
    description:
      "Rejuvenate body and mind with daily spa treatments, yoga sessions, and healthy cuisine.",
    discount: "30% OFF",
    code: "WELL30",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    validUntil: "Nov 15, 2026",
    highlights: [
      "Daily spa treatment",
      "Morning yoga classes",
      "Healthy meal plan",
    ],
  },
  {
    id: "family",
    title: "Family Getaway",
    description:
      "Bring the whole family! Kids stay and eat free, plus complimentary activities for children.",
    discount: "Kids Free",
    code: "FAMILY",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    validUntil: "Sep 30, 2026",
    highlights: [
      "Kids stay free",
      "Kids eat free",
      "Free kids activities",
    ],
  },
  {
    id: "last-minute",
    title: "Last Minute Luxury",
    description:
      "Spontaneous getaway? Book within 14 days and save big on remaining luxury suites.",
    discount: "40% OFF",
    code: "LAST40",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    validUntil: "Ongoing",
    highlights: [
      "Book within 14 days",
      "Select suites only",
      "Non-refundable",
    ],
  },
  {
    id: "long-stay",
    title: "Extended Stay",
    description:
      "Stay longer and save more. Enjoy a complimentary night for every seven nights booked.",
    discount: "1 Free Night",
    code: "STAY7",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    validUntil: "Dec 31, 2026",
    highlights: [
      "1 free night per 7 booked",
      "Includes all amenities",
      "Flexible cancellation",
    ],
  },
];
