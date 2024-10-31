"use client";

import { useAuth } from "@/hooks/use-auth";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, BarChart, Settings } from "lucide-react";
import Link from "next/link";

export default function TradespersonDashboard() {
  const { user } = useAuth();

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back{user?.displayName ? `, ${user.displayName}` : ''}</h1>
          <p className="text-muted-foreground mt-1">Manage your business and client requests</p>
        </div>
        <Button asChild>
          <Link href="/profile/edit">Edit Profile</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <MessageSquare className="h-6 w-6 text-primary mb-4" />
          <h3 className="font-semibold mb-2">New Leads</h3>
          <p className="text-sm text-muted-foreground">View and respond to new inquiries</p>
        </Card>
        <Card className="p-6">
          <Calendar className="h-6 w-6 text-primary mb-4" />
          <h3 className="font-semibold mb-2">Schedule</h3>
          <p className="text-sm text-muted-foreground">Manage your appointments</p>
        </Card>
        <Card className="p-6">
          <BarChart className="h-6 w-6 text-primary mb-4" />
          <h3 className="font-semibold mb-2">Analytics</h3>
          <p className="text-sm text-muted-foreground">Track your performance</p>
        </Card>
        <Card className="p-6">
          <Settings className="h-6 w-6 text-primary mb-4" />
          <h3 className="font-semibold mb-2">Settings</h3>
          <p className="text-sm text-muted-foreground">Manage your business profile</p>
        </Card>
      </div>
    </div>
  );
}