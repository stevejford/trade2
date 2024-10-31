"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";
import { RoleSelectorDialog } from "./role-selector-dialog";
import { UserRole } from "@/lib/types/auth";
import { ForgotPasswordDialog } from "./forgot-password-dialog";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

interface SignInFormProps {
  onSuccess: () => void;
  defaultRole?: UserRole;
}

export function SignInForm({ onSuccess, defaultRole }: SignInFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showRoleSelector, setShowRoleSelector] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [availableRoles, setAvailableRoles] = useState<UserRole[]>([]);
  const { signIn, checkExistingAccount, switchRole, signInWithGoogle } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const { exists, roles } = await checkExistingAccount(values.email);
      
      if (exists) {
        if (roles.length > 1) {
          setAvailableRoles(roles);
          setShowRoleSelector(true);
          return;
        }
        
        await signIn(values.email, values.password, roles[0]);
      } else {
        await signIn(values.email, values.password, defaultRole);
      }
      
      onSuccess();
    } catch (error: any) {
      toast.error(error.message || "Failed to sign in");
    } finally {
      setIsLoading(false);
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle(defaultRole);
      onSuccess();
    } catch (error: any) {
      toast.error(error.message || "Failed to sign in with Google");
    }
  };

  const handleRoleSelect = async (role: UserRole) => {
    try {
      await switchRole(role);
      onSuccess();
    } catch (error) {
      toast.error("Failed to switch roles");
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                    autoComplete="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                    autoComplete="current-password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="button"
            variant="link"
            className="px-0 font-normal"
            onClick={() => setShowForgotPassword(true)}
          >
            Forgot password?
          </Button>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </Form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
      >
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
        Sign in with Google
      </Button>

      <RoleSelectorDialog
        open={showRoleSelector}
        onClose={() => setShowRoleSelector(false)}
        onSelect={handleRoleSelect}
        availableRoles={availableRoles}
      />

      <ForgotPasswordDialog
        open={showForgotPassword}
        onClose={() => setShowForgotPassword(false)}
      />
    </>
  );
}