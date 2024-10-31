export interface Tradesperson {
  id: string;
  name: string;
  profession: string;
  location: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  image: string;
  specialties: string[];
  availability: string;
}

export const tradespeople: Tradesperson[] = [
  {
    id: "1",
    name: "John Smith",
    profession: "Electrician",
    location: "Sydney CBD",
    rating: 4.9,
    reviewCount: 127,
    verified: true,
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=500&h=500&fit=crop",
    specialties: ["Residential", "Commercial", "Emergency Repairs"],
    availability: "Available Now"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    profession: "Plumber",
    location: "Melbourne",
    rating: 4.8,
    reviewCount: 93,
    verified: true,
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=500&h=500&fit=crop",
    specialties: ["Emergency Plumbing", "Bathroom Renovation", "Gas Fitting"],
    availability: "Next Week"
  }
];