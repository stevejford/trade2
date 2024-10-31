import { JobPosting } from "@/lib/careers-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

interface JobCardProps {
  job: JobPosting;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{job.department}</p>
          </div>
          <Badge variant="secondary">{job.type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>📍 {job.location}</p>
          <p>📅 Posted {formatDate(job.postedDate)}</p>
        </div>
        <p className="mt-4">{job.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/careers/${job.id}`}>View Position</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}