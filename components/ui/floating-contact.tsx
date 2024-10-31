"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <Button
      variant="default"
      size="icon"
      className="fixed bottom-6 left-6 z-50 rounded-full shadow-lg"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="sr-only">Contact Support</span>
    </Button>
  );
}