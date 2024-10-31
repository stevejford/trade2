import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog | Find Trusted Tradespeople",
  description: "Read our latest articles about home maintenance, repairs, and finding the right tradespeople for your projects.",
  openGraph: {
    title: "Blog | Find Trusted Tradespeople",
    description: "Read our latest articles about home maintenance, repairs, and finding the right tradespeople for your projects.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Expert advice and insights about home maintenance and trade services
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <div
                className="aspect-video w-full bg-cover bg-center rounded-t-lg"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">
                  {formatDate(post.date)} • {post.readingTime} min read
                </div>
                <h2 className="text-xl font-semibold line-clamp-2">{post.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}