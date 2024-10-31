import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { jobPostings } from "@/lib/careers-data";
import { formatDate } from "@/lib/utils";

interface JobParams {
  id: string;
}

export async function generateStaticParams(): Promise<JobParams[]> {
  return jobPostings.map((job) => ({
    id: job.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: JobParams }): Promise<Metadata> {
  const job = jobPostings.find((job) => job.id.toString() === params.id);
  
  if (!job) {
    return {
      title: "Job Not Found",
      description: "The requested job posting could not be found.",
    };
  }

  return {
    title: `${job.title} | Careers`,
    description: job.description,
    openGraph: {
      title: `${job.title} | Careers`,
      description: job.description,
      type: "website",
    },
  };
}

export default function JobPage({ params }: { params: JobParams }) {
  const job = jobPostings.find((job) => job.id.toString() === params.id);

  if (!job) {
    notFound();
  }

  return (
    <div className="container py-12">
      <Button
        variant="ghost"
        asChild
        className="mb-8 hover:bg-transparent hover:text-primary"
      >
        <Link href="/careers" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Careers
        </Link>
      </Button>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-4xl font-bold">{job.title}</h1>
            <Badge variant="secondary" className="text-base px-4 py-1">
              {job.type}
            </Badge>
          </div>

          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <p>📍 {job.location}</p>
            <p>👥 {job.department}</p>
            <p>📅 Posted {formatDate(job.postedDate)}</p>
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>About the Role</h2>
          <p>{job.description}</p>

          <h2>Requirements</h2>
          <ul>
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>

          <h2>Benefits</h2>
          <ul>
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <Button size="lg" className="w-full md:w-auto">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}