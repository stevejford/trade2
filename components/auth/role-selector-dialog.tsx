"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UserRole } from "@/lib/types/auth";
import { HomeIcon, Wrench } from "lucide-react";

interface RoleSelectorDialogProps {
  open: boolean;
  onClose: () => void;
  onSelect: (role: UserRole) => Promise<void>;
  availableRoles: UserRole[];
}

export function RoleSelectorDialog({
  open,
  onClose,
  onSelect,
  availableRoles,
}: RoleSelectorDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = async (role: UserRole) => {
    setIsLoading(true);
    try {
      await onSelect(role);
      onClose();
    } catch (error) {
      console.error("Error selecting role:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose Account Type</DialogTitle>
          <DialogDescription>
            Select which account you want to access
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          {availableRoles.includes("user") && (
            <Button
              variant="outline"
              className="flex items-center gap-2 h-auto p-4"
              onClick={() => handleSelect("user")}
              disabled={isLoading}
            >
              <HomeIcon className="h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold">Homeowner Account</div>
                <div className="text-sm text-muted-foreground">
                  Find and hire tradespeople
                </div>
              </div>
            </Button>
          )}
          {availableRoles.includes("tradesperson") && (
            <Button
              variant="outline"
              className="flex items-center gap-2 h-auto p-4"
              onClick={() => handleSelect("tradesperson")}
              disabled={isLoading}
            >
              <Wrench className="h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold">Tradesperson Account</div>
                <div className="text-sm text-muted-foreground">
                  Manage your business profile
                </div>
              </div>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}