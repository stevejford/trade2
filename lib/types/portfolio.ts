export interface PortfolioItem {
  id: string;
  tradesPersonId: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  completionDate: string;
  location: string;
  testimonial?: {
    clientName: string;
    comment: string;
    rating: number;
  };
  tags: string[];
}