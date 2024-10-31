import { Card } from "@/components/ui/card";
import { UserPlus, Briefcase, MessageSquare, Calendar, ClipboardCheck, BadgeCheck } from "lucide-react";

export function BenefitsSection() {
  return (
    <section className="container py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <UserBenefits />
        <TradespeopleBenefits />
      </div>
    </section>
  );
}

function UserBenefits() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <UserPlus className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-semibold">For Homeowners</h2>
      </div>
      <div className="space-y-4">
        <BenefitItem
          icon={BadgeCheck}
          title="Access Verified Professionals"
          description="Browse through our network of vetted and reviewed tradespeople"
        />
        <BenefitItem
          icon={MessageSquare}
          title="Direct Communication"
          description="Message tradespeople directly and discuss your project details"
        />
        <BenefitItem
          icon={Calendar}
          title="Easy Booking"
          description="Schedule appointments and manage bookings in one place"
        />
      </div>
    </Card>
  );
}

function TradespeopleBenefits() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-semibold">For Tradespeople</h2>
      </div>
      <div className="space-y-4">
        <BenefitItem
          icon={ClipboardCheck}
          title="Manage Your Business"
          description="Create a professional profile and showcase your work portfolio"
        />
        <BenefitItem
          icon={MessageSquare}
          title="Connect with Clients"
          description="Receive inquiries and communicate with potential clients"
        />
        <BenefitItem
          icon={Calendar}
          title="Booking Management"
          description="Handle appointments and manage your work schedule efficiently"
        />
      </div>
    </Card>
  );
}

function BenefitItem({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-5 w-5 text-primary mt-1" />
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}