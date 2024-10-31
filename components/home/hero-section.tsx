"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { AuthDialog } from "@/components/auth/auth-dialog";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-primary/10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Trusted Tradespeople in Your Area
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with qualified professionals for your home improvement and repair needs
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Input 
                placeholder="Enter your location..." 
                className="h-12 pl-12"
              />
              <Search className="absolute left-4 top-3 text-muted-foreground h-6 w-6" />
            </div>
            <Button size="lg" className="h-12">
              Find Tradespeople
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}