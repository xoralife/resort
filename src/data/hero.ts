export const HERO_CONTENT = {
  title: "Escape to",
  titleHighlight: "Paradise",
  subtitle:
    "Experience unparalleled luxury at our world-class resort destinations. Your dream vacation begins here.",
  primaryCta: "Explore Resorts",
  secondaryCta: "Watch Video",
};

export const FLOATING_CARDS = [
  {
    label: "5-Star Luxury",
    value: "Award-Winning",
    icon: "star",
    position: "top-right",
  },
  {
    label: "Best Rate",
    value: "20% OFF",
    icon: "discount",
    position: "bottom-left",
  },
  {
    label: "Happy Guests",
    value: "2,500+",
    icon: "users",
    position: "bottom-right",
  },
] as const;

export const DESTINATIONS = [
  { value: "maldives", label: "Maldives" },
  { value: "bali", label: "Bali, Indonesia" },
  { value: "santorini", label: "Santorini, Greece" },
  { value: "maui", label: "Maui, Hawaii" },
  { value: "dubai", label: "Dubai, UAE" },
] as const;
