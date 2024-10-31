"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HomeIcon, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import { toast } from "sonner";

interface ExistingUserDialogProps {
  open: boolean;
  onClose: () => void;
  roles: string[];
  email: string;
}

export function ExistingUserDialog({
  open,
  onClose,
  roles,
  email,
}: ExistingUserDialogProps) {
  const router = useRouter();
  const { switchRole } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleRoleSelect = async (role: "user" | "tradesperson") => {
    setIsLoading(true);
    try {
      await switchRole(role);
      if (role === "user") {
        router.push("/homeowner/dashboard");
      } else {
        router.push("/tradesperson/dashboard");
      }
      onClose();
    } catch (error) {
      toast.error("Failed to switch roles. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Existing Account Found</DialogTitle>
          <DialogDescription>
            An account with {email} already exists. You can access your existing accounts:
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {roles.includes("user") && (
            <Button
              variant="outline"
              className="flex items-center justify-start gap-3 h-auto p-4"
              onClick={() => handleRoleSelect("user")}
              disabled={isLoading}
            >
              <HomeIcon className="h-5 w-5 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold">Homeowner Dashboard</div>
                <div className="text-sm text-muted-foreground">
                  Manage your projects and service requests
                </div>
              </div>
            </Button>
          )}
          {roles.includes("tradesperson") && (
            <Button
              variant="outline"
              className="flex items-center justify-start gap-3 h-auto p-4"
              onClick={() => handleRoleSelect("tradesperson")}
              disabled={isLoading}
            >
              <Wrench className="h-5 w-5 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold">Tradesperson Dashboard</div>
                <div className="text-sm text-muted-foreground">
                  Manage your business profile and leads
                </div>
              </div>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}