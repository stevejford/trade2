"use client";

import { useEffect, useRef, useState } from "react";
import { Tradesperson } from "@/lib/search-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle } from "lucide-react";
import { SearchSkeleton } from "@/components/search/search-skeleton";
import Image from "next/image";

interface SearchResultsProps {
  tradespeople: Tradesperson[];
}

export function SearchResults({ tradespeople: initialTradespeople }: SearchResultsProps) {
  const [tradespeople, setTradespeople] = useState(initialTradespeople);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, [page]);

  const loadMore = async () => {
    if (loading) return;
    setLoading(true);
    
    // Simulate API call with delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In a real app, you would fetch more data from the API
    // For now, we'll just duplicate the existing data
    setTradespeople((prev) => [...prev, ...initialTradespeople]);
    setPage((prev) => prev + 1);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      {tradespeople.map((person) => (
        <Card key={`${person.id}-${Math.random()}`} className="p-4">
          <div className="flex gap-4">
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-grow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    {person.name}
                    {person.verified && (
                      <CheckCircle className="h-4 w-4 text-primary" />
                    )}
                  </h3>
                  <p className="text-muted-foreground">{person.profession}</p>
                </div>
                <Badge variant="secondary">{person.availability}</Badge>
              </div>
              
              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="ml-1 font-medium">{person.rating}</span>
                </div>
                <span className="text-muted-foreground">
                  ({person.reviewCount} reviews)
                </span>
              </div>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {person.specialties.map((specialty) => (
                  <Badge key={specialty} variant="outline">
                    {specialty}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-4">
                <Button>View Profile</Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
      
      {loading && (
        <div className="space-y-4">
          <SearchSkeleton />
          <SearchSkeleton />
        </div>
      )}
      
      <div ref={loader} className="h-4" />
      
      {tradespeople.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No tradespeople found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}