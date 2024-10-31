import { blogPosts } from '@/lib/blog-data';

export async function GET() {
  const baseUrl = 'https://trusttrades.com';

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>TrustTrades Blog</title>
    <link>${baseUrl}</link>
    <description>Expert advice and insights about home maintenance and trade services</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${blogPosts
      .map(
        (post) => `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${baseUrl}/blog/${post.slug}</link>
        <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
        <description><![CDATA[${post.excerpt}]]></description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <content:encoded><![CDATA[${post.content}]]></content:encoded>
        <dc:creator><![CDATA[${post.author}]]></dc:creator>
      </item>
    `
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}