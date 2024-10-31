import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { tradespeople } from '@/lib/search-data';
import { popularAreas } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trusttrades.com';

  // Static pages
  const staticPages = [
    '',
    '/search',
    '/popular-areas',
    '/latest',
    '/blog',
    '/contact',
    '/how-it-works',
    '/faq',
    '/careers',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Tradespeople profiles
  const tradespeopleRoutes = tradespeople.map((person) => ({
    url: `${baseUrl}/tradespeople/${person.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Area pages
  const areaRoutes = popularAreas.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogRoutes, ...tradespeopleRoutes, ...areaRoutes];
}