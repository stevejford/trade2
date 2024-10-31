import { Metadata } from "next";
import { SearchFilters } from "@/components/search/search-filters";
import { SearchResults } from "@/components/search/search-results";
import { tradespeople } from "@/lib/search-data";

export const metadata: Metadata = {
  title: "Search Tradespeople | Find Local Trade Services",
  description: "Search for verified tradespeople in your area. Filter by profession, location, and availability.",
  openGraph: {
    title: "Search Tradespeople | Find Local Trade Services",
    description: "Search for verified tradespeople in your area. Filter by profession, location, and availability.",
    type: "website",
  },
};

export default function SearchPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Find Tradespeople</h1>
      
      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <aside className="lg:sticky lg:top-8 lg:h-[calc(100vh-8rem)]">
          <SearchFilters />
        </aside>
        
        <main>
          <SearchResults tradespeople={tradespeople} />
        </main>
      </div>
    </div>
  );
}