"use client";

import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const POPULAR_AREAS = [
  { id: 1, name: "Sydney", count: 234 },
  { id: 2, name: "Melbourne", count: 189 },
  { id: 3, name: "Brisbane", count: 156 },
  { id: 4, name: "Perth", count: 123 },
  { id: 5, name: "Adelaide", count: 98 },
  { id: 6, name: "Gold Coast", count: 87 },
];

export function PopularAreas() {
  return (
    <section className="py-16 px-4 bg-primary/5">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {POPULAR_AREAS.map((area) => (
            <Card key={area.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">{area.name}</h3>
                </div>
                <span className="text-sm text-muted-foreground">{area.count} pros</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}