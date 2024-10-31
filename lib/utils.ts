import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function catchError(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unexpected error occurred";
}

export function generateSchema(data: {
  title: string;
  description: string;
  image?: string;
  type?: string;
  publishedTime?: string;
  authors?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": data.type || "WebPage",
    name: data.title,
    description: data.description,
    image: data.image,
    datePublished: data.publishedTime,
    author: data.authors?.map((author) => ({
      "@type": "Person",
      name: author,
    })),
  };
}

export function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}