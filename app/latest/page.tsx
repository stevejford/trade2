import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { featuredTradespeople } from "@/lib/data";

export const metadata = {
  title: "Latest Additions",
  description: "Recently joined tradespeople in your area",
};

export default function LatestAdditions() {
  return (
    <div className="container py-12">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">Latest Additions</h1>
        <p className="text-muted-foreground">
          Recently joined tradespeople ready to help with your projects
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredTradespeople.map((person) => (
          <Card key={person.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{person.name}</h3>
                  <p className="text-sm text-muted-foreground">{person.trade}</p>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="ml-1 text-sm font-medium">{person.rating}</span>
                </div>
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                {person.description}
              </p>
              <div className="mt-4">
                <Button variant="outline" asChild className="w-full">
                  <Link href={`/tradespeople/${person.slug}`}>View Profile</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}