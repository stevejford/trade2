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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ExistingUserDialog } from "./existing-user-dialog";
import { Separator } from "@/components/ui/separator";
import { GoogleAuthButton } from "./google-auth-button";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .regex(emailRegex, "Please enter a valid email address")
    .trim()
    .toLowerCase(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(72, "Password must not exceed 72 characters"),
  confirmPassword: z
    .string()
    .min(6, "Password must be at least 6 characters"),
  userType: z.enum(["client", "tradesperson"]),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

interface SignUpFormProps {
  onSuccess: () => void;
  defaultUserType?: "homeowner" | "tradesperson";
}

export function SignUpForm({ onSuccess, defaultUserType }: SignUpFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showExistingUserDialog, setShowExistingUserDialog] = useState(false);
  const [existingRoles, setExistingRoles] = useState<string[]>([]);
  const [currentEmail, setCurrentEmail] = useState("");
  const { signUp, checkExistingAccount } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      userType: defaultUserType === "tradesperson" ? "tradesperson" : "client",
    },
  });

  const handleEmailCheck = async (email: string) => {
    if (!email || !emailRegex.test(email)) {
      setExistingRoles([]);
      return;
    }

    try {
      const normalizedEmail = email.trim().toLowerCase();
      const { exists, roles } = await checkExistingAccount(normalizedEmail);
      
      if (exists) {
        setExistingRoles(roles);
        setCurrentEmail(normalizedEmail);
        setShowExistingUserDialog(true);
        form.setError("email", {
          type: "manual",
          message: "This email is already registered",
        });
      } else {
        setExistingRoles([]);
        form.clearErrors("email");
      }
    } catch (error: any) {
      if (error?.code !== "auth/invalid-email") {
        toast.error("Error checking email. Please try again.");
      }
      setExistingRoles([]);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!emailRegex.test(values.email)) {
      form.setError("email", {
        type: "manual",
        message: "Please enter a valid email address",
      });
      return;
    }

    setIsLoading(true);
    try {
      const normalizedEmail = values.email.trim().toLowerCase();
      await signUp(normalizedEmail, values.password, {
        role: values.userType === "client" ? "user" : "tradesperson",
      });
      toast.success("Account created successfully!");
      onSuccess();
    } catch (error: any) {
      if (error?.code === "auth/email-already-in-use") {
        handleEmailCheck(values.email);
      } else {
        toast.error(
          error?.message || "Failed to create account. Please try again."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const userType = form.watch("userType");

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {existingRoles.length > 0 && !showExistingUserDialog && (
            <Alert>
              <AlertDescription>
                You already have an account with the following roles:{" "}
                {existingRoles.join(", ")}
              </AlertDescription>
            </Alert>
          )}

          <FormField
            control={form.control}
            name="userType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>I am a:</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-4"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="client" />
                      </FormControl>
                      <FormLabel className="font-normal">Homeowner</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="tradesperson" />
                      </FormControl>
                      <FormLabel className="font-normal">Tradesperson</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                    onChange={(e) => {
                      const value = e.target.value.trim().toLowerCase();
                      field.onChange(value);
                      if (emailRegex.test(value)) {
                        handleEmailCheck(value);
                      }
                    }}
                    onBlur={(e) => {
                      const value = e.target.value.trim().toLowerCase();
                      field.onBlur();
                      if (emailRegex.test(value)) {
                        handleEmailCheck(value);
                      }
                    }}
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
                    autoComplete="new-password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm your password"
                    {...field}
                    autoComplete="new-password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create Account"}
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

      <GoogleAuthButton
        onSuccess={onSuccess}
        role={userType === "client" ? "user" : "tradesperson"}
        isLoading={isLoading}
      />

      <ExistingUserDialog
        open={showExistingUserDialog}
        onClose={() => setShowExistingUserDialog(false)}
        roles={existingRoles}
        email={currentEmail}
      />
    </>
  );
}