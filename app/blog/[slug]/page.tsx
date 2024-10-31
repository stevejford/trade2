import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog-data";
import { formatDate, generateSchema } from "@/lib/utils";

interface BlogPostParams {
  slug: string;
}

export async function generateStaticParams(): Promise<BlogPostParams[]> {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: BlogPostParams }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPost({ params }: { params: BlogPostParams }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Blog post not found</h1>
          <p className="mt-4 text-muted-foreground">
            The blog post you're looking for doesn't exist.
          </p>
          <Button asChild className="mt-8">
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Find related articles based on category and tags
  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        (p.category === post.category ||
          p.tags.some((tag) => post.tags.includes(tag)))
    )
    .slice(0, 3);

  // Generate structured data
  const structuredData = generateSchema({
    title: post.title,
    description: post.excerpt,
    image: post.image,
    type: "Article",
    publishedTime: post.date,
    authors: [post.author],
  });

  return (
    <article className="container py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Button
        variant="ghost"
        asChild
        className="mb-8 hover:bg-transparent hover:text-primary"
      >
        <Link href="/blog" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <div
        className="aspect-video w-full rounded-xl bg-cover bg-center mb-8"
        style={{ backgroundImage: `url(${post.image})` }}
      />

      <div className="mx-auto max-w-3xl">
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
          <div className="mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <div
                      className="aspect-video w-full bg-cover bg-center rounded-t-lg"
                      style={{ backgroundImage: `url(${relatedPost.image})` }}
                    />
                    <div className="p-4">
                      <div className="text-sm text-muted-foreground mb-2">
                        {formatDate(relatedPost.date)}
                      </div>
                      <h3 className="font-semibold line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}