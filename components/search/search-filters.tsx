"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const professions = [
  "Electrician",
  "Plumber",
  "Carpenter",
  "Painter",
  "Builder",
];

const locations = [
  "Sydney CBD",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
];

export function SearchFilters() {
  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  return (
    <Card className="p-4">
      <div className="space-y-6">
        <div>
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search by name or keyword..."
            className="mt-2"
          />
        </div>

        <div>
          <h3 className="font-semibold mb-3">Profession</h3>
          <div className="space-y-2">
            {professions.map((profession) => (
              <div key={profession} className="flex items-center space-x-2">
                <Checkbox
                  id={profession}
                  checked={selectedProfessions.includes(profession)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedProfessions([...selectedProfessions, profession]);
                    } else {
                      setSelectedProfessions(
                        selectedProfessions.filter((p) => p !== profession)
                      );
                    }
                  }}
                />
                <Label htmlFor={profession}>{profession}</Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Location</h3>
          <div className="space-y-2">
            {locations.map((location) => (
              <div key={location} className="flex items-center space-x-2">
                <Checkbox
                  id={location}
                  checked={selectedLocations.includes(location)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedLocations([...selectedLocations, location]);
                    } else {
                      setSelectedLocations(
                        selectedLocations.filter((l) => l !== location)
                      );
                    }
                  }}
                />
                <Label htmlFor={location}>{location}</Label>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full">Apply Filters</Button>
      </div>
    </Card>
  );
}