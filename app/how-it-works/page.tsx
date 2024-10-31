import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, UserCheck, Star, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | Find Local Trade Services",
  description: "Learn how our platform connects you with trusted local tradespeople in just a few simple steps.",
  openGraph: {
    title: "How It Works | Find Local Trade Services",
    description: "Learn how our platform connects you with trusted local tradespeople in just a few simple steps.",
    type: "website",
  },
};

const steps = [
  {
    icon: Search,
    title: "Search for Tradespeople",
    description: "Browse through our extensive network of verified tradespeople in your area. Filter by trade, location, and availability to find the perfect match for your project.",
  },
  {
    icon: UserCheck,
    title: "View Detailed Profiles",
    description: "Each tradesperson's profile includes verified reviews, qualifications, portfolio of work, and availability. Make an informed decision based on real customer experiences.",
  },
  {
    icon: Star,
    title: "Book and Review",
    description: "Contact your chosen tradesperson directly through our platform. After the job is complete, share your experience by leaving a review to help others in the community.",
  },
  {
    icon: Shield,
    title: "Peace of Mind",
    description: "All tradespeople on our platform are thoroughly vetted and must maintain high standards of workmanship and customer service to remain listed.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-xl text-muted-foreground">
          Find and book trusted tradespeople in your area in just a few simple steps
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12 mb-12">
        {steps.map((step, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <div className="inline-flex gap-4">
          <Button asChild size="lg">
            <Link href="/search">Find Tradespeople</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/claim-business">List Your Business</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}