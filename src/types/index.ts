export interface Resort {
  id: string;
  name: string;
  slug: string;
  description: string;
  location: string;
  country: string;
  city: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  images: string[];
  amenities: string[];
  isFeatured: boolean;
  isActive: boolean;
  latitude?: number;
  longitude?: number;
}

export interface Room {
  id: string;
  resortId: string;
  name: string;
  description: string;
  capacity: number;
  pricePerNight: number;
  images: string[];
  amenities: string[];
  available: boolean;
}

export interface SearchParams {
  location?: string;
  checkIn?: Date;
  checkOut?: Date;
  guests?: number;
}
