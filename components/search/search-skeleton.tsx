import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SearchSkeleton() {
  return (
    <Card className="p-4">
      <div className="flex gap-4">
        <Skeleton className="h-24 w-24 rounded-lg" />
        <div className="flex-grow space-y-2">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-6 w-24" />
          </div>
          <Skeleton className="h-4 w-36" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
          </div>
          <Skeleton className="h-9 w-28" />
        </div>
      </div>
    </Card>
  );
}