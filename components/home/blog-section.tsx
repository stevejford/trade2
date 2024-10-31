"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Essential Home Maintenance Tasks",
    excerpt: "Keep your home in top condition with these maintenance tips.",
    date: "2024-03-20",
    image: "https://images.unsplash.com/photo-1593604340846-4fbe9763a8f3?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Choosing the Right Tradesperson",
    excerpt: "Tips for finding and hiring the best professional for your job.",
    date: "2024-03-18",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Home Renovation on a Budget",
    excerpt: "Smart ways to renovate your home without breaking the bank.",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=800&h=400&fit=crop",
  },
];

export function BlogSection() {
  return (
    <section className="w-full bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-sm text-muted-foreground">{post.date}</time>
                <h3 className="font-semibold text-lg mt-2 mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="text-primary hover:underline"
                >
                  Read more
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}