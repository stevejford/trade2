import { Card, CardContent } from "@/components/ui/card";
import { Shield, Star, Clock } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="container py-16 sm:py-20">
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          icon={Shield}
          title="Verified Professionals"
          description="All tradespeople are thoroughly vetted and verified"
        />
        <FeatureCard
          icon={Star}
          title="Trusted Reviews"
          description="Real reviews from verified customers"
        />
        <FeatureCard
          icon={Clock}
          title="Quick Response"
          description="Get quotes and responses within 24 hours"
          className="sm:col-span-2 lg:col-span-1"
        />
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description, className = "" }: {
  icon: any;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Card className={`transform transition-all hover:scale-105 ${className}`}>
      <CardContent className="flex flex-col items-center p-6 sm:p-8 text-center">
        <Icon className="h-12 w-12 text-primary" />
        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}