"use client";

import { Button } from "@/components/ui/button";
import { UserRole } from "@/lib/types/auth";
import { Briefcase, User } from "lucide-react";

interface RoleSelectionProps {
  onSelect: (role: UserRole) => void;
}

export function RoleSelection({ onSelect }: RoleSelectionProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Button
        variant="outline"
        className="h-32 flex flex-col gap-2"
        onClick={() => onSelect("user")}
      >
        <User className="h-8 w-8" />
        <div>
          <h3 className="font-semibold">I'm looking for a tradesperson</h3>
          <p className="text-sm text-muted-foreground">
            Find and connect with trusted professionals
          </p>
        </div>
      </Button>

      <Button
        variant="outline"
        className="h-32 flex flex-col gap-2"
        onClick={() => onSelect("tradesperson")}
      >
        <Briefcase className="h-8 w-8" />
        <div>
          <h3 className="font-semibold">I'm a tradesperson</h3>
          <p className="text-sm text-muted-foreground">
            List your services and grow your business
          </p>
        </div>
      </Button>
    </div>
  );
}