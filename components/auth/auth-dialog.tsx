"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignInForm } from "./sign-in-form";
import { SignUpForm } from "./sign-up-form";

interface AuthDialogProps {
  userType?: "homeowner" | "tradesperson";
}

export function AuthDialog({ userType }: AuthDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={userType ? "default" : "outline"} size={userType ? "lg" : "default"}>
          {userType === "tradesperson" 
            ? "Join as a Professional" 
            : userType === "homeowner"
            ? "Sign Up as Homeowner"
            : "Sign In"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle className="text-center">Welcome to TrustTrades</DialogTitle>
        <Tabs defaultValue={userType ? "signup" : "signin"} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SignInForm onSuccess={() => setOpen(false)} />
          </TabsContent>
          <TabsContent value="signup">
            <SignUpForm onSuccess={() => setOpen(false)} defaultUserType={userType} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}