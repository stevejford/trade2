export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readingTime: number;
  image: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "essential-home-maintenance-tasks",
    title: "10 Essential Home Maintenance Tasks Every Homeowner Should Know",
    excerpt: "Keep your home in top condition with these crucial maintenance tips from professional tradespeople.",
    content: "Regular home maintenance is key to preserving your property's value...",
    author: "John Smith",
    date: "2024-03-20",
    readingTime: 8,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    category: "Maintenance",
    tags: ["home maintenance", "DIY", "property care", "seasonal maintenance"]
  },
  {
    id: 2,
    slug: "choosing-right-electrician",
    title: "How to Choose the Right Electrician for Your Project",
    excerpt: "Learn what to look for when hiring an electrician and ensure your electrical work is done safely.",
    content: "When it comes to electrical work, safety should be your top priority...",
    author: "Sarah Johnson",
    date: "2024-03-18",
    readingTime: 6,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e",
    category: "Electrical",
    tags: ["electrician", "hiring tips", "electrical safety", "home improvement"]
  },
  {
    id: 3,
    slug: "plumbing-emergency-tips",
    title: "Emergency Plumbing Tips: What to Do Before the Plumber Arrives",
    excerpt: "Quick actions you can take to minimize damage during a plumbing emergency.",
    content: "Plumbing emergencies can happen at any time...",
    author: "Mike Brown",
    date: "2024-03-15",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c",
    category: "Plumbing",
    tags: ["plumbing", "emergency repairs", "water damage", "DIY"]
  }
];