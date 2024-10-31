"use client";

import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const FEATURED_TRADESPEOPLE = [
  {
    id: 1,
    name: "John Smith",
    profession: "Electrician",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    profession: "Plumber",
    rating: 4.8,
    reviews: 93,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Mike Wilson",
    profession: "Carpenter",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

export function FeaturedTradespeople() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Tradespeople</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_TRADESPEOPLE.map((person) => (
            <Card key={person.id} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-16 w-16">
                  <img src={person.image} alt={person.name} className="object-cover" />
                </Avatar>
                <div>
                  <h3 className="font-semibold">{person.name}</h3>
                  <p className="text-muted-foreground">{person.profession}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <span className="font-medium">{person.rating}</span>
                <span className="text-muted-foreground">({person.reviews} reviews)</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}