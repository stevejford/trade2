"use client";

import { Search, Calendar, Star, CheckCircle } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Search",
    description: "Find trusted tradespeople in your area",
  },
  {
    icon: Calendar,
    title: "Book",
    description: "Schedule a convenient time for your service",
  },
  {
    icon: CheckCircle,
    title: "Complete",
    description: "Get your job done by a qualified professional",
  },
  {
    icon: Star,
    title: "Review",
    description: "Share your experience with the community",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <step.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}