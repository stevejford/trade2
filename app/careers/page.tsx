import { Metadata } from "next";
import { jobPostings } from "@/lib/careers-data";
import { JobCard } from "@/components/careers/job-card";

export const metadata: Metadata = {
  title: "Careers | Find Trusted Tradespeople",
  description: "Join our team and help build the future of trade services. Browse our open positions and apply today.",
  openGraph: {
    title: "Careers | Find Trusted Tradespeople",
    description: "Join our team and help build the future of trade services. Browse our open positions and apply today.",
    type: "website",
  },
};

export default function CareersPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl text-muted-foreground">
          Help us build the future of trade services and make a difference in the industry
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobPostings.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {jobPostings.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No open positions at the moment. Please check back later!
          </p>
        </div>
      )}
    </div>
  );
}