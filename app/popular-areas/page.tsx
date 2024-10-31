import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { popularAreas } from "@/lib/data";

export const metadata = {
  title: "Popular Areas",
  description: "Find trusted tradespeople in popular areas across Australia",
};

export default function PopularAreas() {
  return (
    <div className="container py-12">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">Popular Areas</h1>
        <p className="text-muted-foreground">
          Browse trusted tradespeople in these popular locations
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {popularAreas.map((area) => (
          <Card key={area.id} className="overflow-hidden">
            <Link href={`/areas/${area.slug}`}>
              <div
                className="aspect-video w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${area.image})` }}
              />
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">{area.name}</h2>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {area.count} Professionals Available
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}