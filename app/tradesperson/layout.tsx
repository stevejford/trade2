"use client";

import { useAuth } from "@/hooks/use-auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function TradespersonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && (!user || user.role !== "tradesperson")) {
      redirect("/");
    }
  }, [user, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
}