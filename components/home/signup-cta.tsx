"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HomeIcon, Wrench } from "lucide-react";
import { AuthDialog } from "@/components/auth/auth-dialog";

export function SignupCTA() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <HomeIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Homeowners</h3>
              <p className="text-muted-foreground mb-6">
                Find trusted professionals for your home improvement projects and maintenance needs
              </p>
              <AuthDialog userType="homeowner" />
            </div>
          </Card>
          <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Tradespeople</h3>
              <p className="text-muted-foreground mb-6">
                Grow your business by connecting with customers in your area
              </p>
              <AuthDialog userType="tradesperson" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}