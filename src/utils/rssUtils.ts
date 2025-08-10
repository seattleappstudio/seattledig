import { BlogPost } from '../types/blog';
import { getAllPosts, formatDate } from './blogUtils';

// Generate RSS feed XML
export const generateRSSFeed = (): string => {
  const posts = getAllPosts().slice(0, 20); // Latest 20 posts
  const siteUrl = 'https://seattledigitalstudio.com';
  const feedUrl = `${siteUrl}/rss.xml`;
  const lastBuildDate = new Date().toUTCString();
  
  const rssItems = posts.map(post => {
    const postUrl = `${siteUrl}/blog/${post.slug}`;
    const pubDate = new Date(post.publishDate).toUTCString();
    
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>hello@seattledigitalstudio.com (${post.author})</author>
      <category><![CDATA[${post.categories.join(', ')}]]></category>
      ${post.image ? `<enclosure url="${post.image}" type="image/jpeg" />` : ''}
    </item>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Seattle Digital Studio Blog</title>
    <description>Expert insights on digital transformation, content strategy, automation, and modern business solutions from Seattle Digital Studio.</description>
    <link>${siteUrl}/blog</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <managingEditor>hello@seattledigitalstudio.com (Joe Perez)</managingEditor>
    <webMaster>hello@seattledigitalstudio.com (Joe Perez)</webMaster>
    <image>
      <url>${siteUrl}/images/seattle-digital-studio-logo1.png</url>
      <title>Seattle Digital Studio</title>
      <link>${siteUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    <category>Technology</category>
    <category>Business</category>
    <category>Digital Marketing</category>
    <category>Automation</category>
    <category>Content Strategy</category>
    ${rssItems}
  </channel>
</rss>`.trim();
};

// Download RSS feed as file
export const downloadRSSFeed = (): void => {
  const rssContent = generateRSSFeed();
  const blob = new Blob([rssContent], { type: 'application/rss+xml' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'rss.xml';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};

// Copy RSS feed to clipboard
export const copyRSSToClipboard = async (): Promise<boolean> => {
  try {
    const rssContent = generateRSSFeed();
    await navigator.clipboard.writeText(rssContent);
    return true;
  } catch (error) {
    console.error('Failed to copy RSS feed to clipboard:', error);
    return false;
  }
};