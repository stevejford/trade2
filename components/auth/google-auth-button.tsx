"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";
import { UserRole } from "@/lib/types/auth";

interface GoogleAuthButtonProps {
  onSuccess?: () => void;
  role?: UserRole;
  isLoading?: boolean;
  className?: string;
}

export function GoogleAuthButton({ 
  onSuccess, 
  role = "user", 
  isLoading,
  className 
}: GoogleAuthButtonProps) {
  const [localLoading, setLocalLoading] = useState(false);
  const { signInWithGoogle } = useAuth();

  const checkPopupBlocker = useCallback((): boolean => {
    const popup = window.open(
      "about:blank",
      "popup_test",
      "width=100,height=100,menubar=no,toolbar=no,location=no,status=no"
    );
    
    const isBlocked = !popup || popup.closed || typeof popup.closed === "undefined";
    
    if (popup) {
      popup.close();
    }
    
    return isBlocked;
  }, []);

  const handleGoogleAuth = async () => {
    if (localLoading || isLoading) return;

    try {
      setLocalLoading(true);

      // Check for popup blocker
      if (checkPopupBlocker()) {
        toast.error("Popup Blocked", {
          description: "Please allow popups for this site to continue with Google sign in",
          duration: 5000,
        });
        return;
      }

      await signInWithGoogle(role);
      toast.success("Successfully signed in with Google");
      onSuccess?.();
    } catch (error: any) {
      console.error("Google sign in error:", error);
      
      if (error.code === "auth/popup-blocked") {
        toast.error("Popup Blocked", {
          description: "Please allow popups and try again",
          duration: 5000,
        });
      } else if (error.code === "auth/popup-closed-by-user") {
        toast.error("Sign in cancelled", {
          description: "You closed the Google sign in window",
          duration: 3000,
        });
      } else {
        toast.error("Sign in failed", {
          description: "Please try again or use email sign in",
          duration: 5000,
        });
      }
    } finally {
      setLocalLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      className={`w-full relative ${className}`}
      onClick={handleGoogleAuth}
      disabled={isLoading || localLoading}
      type="button"
    >
      {(isLoading || localLoading) && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50">
          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <div className="flex items-center justify-center">
        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        {localLoading ? "Signing in..." : "Continue with Google"}
      </div>
    </Button>
  );
}