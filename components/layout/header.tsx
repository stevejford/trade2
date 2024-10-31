"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="font-bold text-xl">
          TrustTrades
        </Link>

        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
          <Link
            href="/search"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Find Tradespeople
          </Link>
          <Link
            href="/popular-areas"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Popular Areas
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Blog
          </Link>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button asChild>
            <Link href="/claim-business">List Your Business</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}