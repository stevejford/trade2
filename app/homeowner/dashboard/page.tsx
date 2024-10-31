"use client";

import { useAuth } from "@/hooks/use-auth";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Clock, Star, Settings } from "lucide-react";
import Link from "next/link";

export default function HomeownerDashboard() {
  const { user } = useAuth();

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back{user?.displayName ? `, ${user.displayName}` : ''}</h1>
          <p className="text-muted-foreground mt-1">Manage your projects and find trusted professionals</p>
        </div>
        <Button asChild>
          <Link href="/search">Find Tradespeople</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <Search className="h-6 w-6 text-primary mb-4" />
          <h3 className="font-semibold mb-2">Find Tradespeople</h3>
          <p className="text-sm text-muted-foreground">Search and connect with verified professionals</p>
        </Card>
        <Card className="p-6">
          <Clock className="h-6 w-6 text-primary mb-4" />
          <h3 className="font-semibold mb-2">Active Projects</h3>
          <p className="text-sm text-muted-foreground">Track your ongoing projects</p>
        </Card>
        <Card className="p-6">
          <Star className="h-6 w-6 text-primary mb-4" />
          <h3 className="font-semibold mb-2">Reviews</h3>
          <p className="text-sm text-muted-foreground">Rate and review tradespeople</p>
        </Card>
        <Card className="p-6">
          <Settings className="h-6 w-6 text-primary mb-4" />
          <h3 className="font-semibold mb-2">Settings</h3>
          <p className="text-sm text-muted-foreground">Manage your account preferences</p>
        </Card>
      </div>
    </div>
  );
}