import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { popularAreas } from "@/lib/data";

export function PopularAreasSection() {
  return (
    <section className="w-full bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Popular Areas</h2>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {popularAreas.map((area) => (
            <Link
              key={area.id}
              href={`/areas/${area.slug}`}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${area.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-4 sm:p-6 w-full">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white line-clamp-1">
                    {area.name}
                  </h3>
                </div>
                <p className="mt-1 text-sm text-gray-200">
                  {area.count} Professionals
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 sm:mt-10 text-center">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href="/popular-areas">View All Areas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}