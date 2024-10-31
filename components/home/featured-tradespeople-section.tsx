import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import { featuredTradespeople } from "@/lib/data";

export function FeaturedTradespeopleSection() {
  return (
    <section className="container py-16 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Featured Tradespeople</h2>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredTradespeople.map((person) => (
          <Card key={person.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
            <Link href={`/tradespeople/${person.slug}`}>
              <CardContent className="p-4 sm:p-6">
                <div className="flex gap-4">
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 overflow-hidden rounded-xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url(${person.image})` }}
                    />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <h3 className="text-lg sm:text-xl font-semibold truncate group-hover:text-primary transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">{person.trade}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(person.rating) ? "text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium">{person.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground line-clamp-2">
                  {person.description}
                </p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  <span>Available in your area</span>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
      <div className="mt-8 sm:mt-10 text-center">
        <Button asChild size="lg" className="rounded-xl px-8">
          <Link href="/latest">View Latest Additions</Link>
        </Button>
      </div>
    </section>
  );
}