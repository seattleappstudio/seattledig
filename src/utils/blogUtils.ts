import { BlogPost, BlogCategory } from '../types/blog';

// Import all blog posts
import automationStrategies from '../data/blog/posts/automation-strategies-2025.json';
import contentMarketingGuide from '../data/blog/posts/content-marketing-guide.json';
import microappTrends from '../data/blog/posts/microapp-development-trends.json';
import technicalDocs from '../data/blog/posts/technical-documentation-best-practices.json';
import noCodeTrends from '../data/blog/posts/no-code-website-trends.json';
import automationROI from '../data/blog/posts/business-automation-roi.json';
import professionalBlogWriting from '../data/blog/posts/professional-blog-writing-guide.json';
import marketingContentCreation from '../data/blog/posts/marketing-content-creation.json';
import brandVoiceOnBudget from '../data/blog/posts/brand-voice-on-budget.json';
import contentRepurposingStrategy from '../data/blog/posts/content-repurposing-strategy.json';
import blogContentManagement from '../data/blog/posts/blog-content-management.json';
import outsourcingBlogVoice from '../data/blog/posts/outsourcing-blog-voice.json';
import publishingVsPromoting from '../data/blog/posts/publishing-vs-promoting.json';
import aiChatbotCaseStudy from '../data/blog/posts/ai-chatbot-case-study.json';
import automationToolsComparison from '../data/blog/posts/automation-tools-comparison.json';
import chatbotCaseStudy from '../data/blog/posts/chatbot-case-study.json';
import appWebsiteMaintenance from '../data/blog/posts/app-website-maintenance.json';
import whyWebsitesBreak from '../data/blog/posts/why-websites-break.json';
import maintenanceChecklist from '../data/blog/posts/maintenance-checklist.json';
import reactVsWordpressGuide from '../data/blog/posts/react-vs-wordpress-guide.json';
import whenNoCodeBestCode from '../data/blog/posts/when-no-code-best-code.json';
import joePerezWritesLikeYouTalk from '../data/blog/posts/joe-perez-writes-like-you-talk.json';
import notTechSavvyWhatToLearn from '../data/blog/posts/not-tech-savvy-what-to-learn.json';
import howMuchSeoShouldYouKnow from '../data/blog/posts/how-much-seo-should-you-know.json';
import careerWebsitePortfolio from '../data/blog/posts/career-website-portfolio.json';
import howIUseAi from '../data/blog/posts/how-i-use-ai.json';
import behindTheBuild from '../data/blog/posts/behind-the-build.json';
import executiveResumeLinkedinProfile from '../data/blog/posts/executive-resume-linkedin-profile.json';
import startBlogBuildCareer from '../data/blog/posts/start-blog-build-career.json';

// Import categories
import categoriesData from '../data/blog/categories.json';

// All blog posts
export const allBlogPosts: BlogPost[] = [
  automationStrategies,
  contentMarketingGuide,
  microappTrends,
  technicalDocs,
  noCodeTrends,
  automationROI,
  professionalBlogWriting,
  marketingContentCreation,
  brandVoiceOnBudget,
  contentRepurposingStrategy,
  blogContentManagement,
  outsourcingBlogVoice,
  publishingVsPromoting,
  aiChatbotCaseStudy,
  automationToolsComparison,
  chatbotCaseStudy,
  appWebsiteMaintenance,
  whyWebsitesBreak,
  maintenanceChecklist,
  reactVsWordpressGuide,
  whenNoCodeBestCode,
  joePerezWritesLikeYouTalk,
  notTechSavvyWhatToLearn,
  howMuchSeoShouldYouKnow,
  careerWebsitePortfolio,
  howIUseAi,
  behindTheBuild,
  executiveResumeLinkedinProfile,
  startBlogBuildCareer,
] as BlogPost[];

// Categories
export const blogCategories: Record<string, BlogCategory> = categoriesData;

// Get all posts sorted by date (newest first)
export const getAllPosts = (): BlogPost[] => {
  return allBlogPosts.sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
};

// Get featured posts
export const getFeaturedPosts = (): BlogPost[] => {
  return getAllPosts().filter(post => post.featured);
};

// Get posts by category
export const getPostsByCategory = (categoryId: string): BlogPost[] => {
  return getAllPosts().filter(post => 
    post.categories.includes(categoryId)
  );
};

// Get post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return allBlogPosts.find(post => post.slug === slug);
};

// Search posts
export const searchPosts = (query: string): BlogPost[] => {
  const searchTerm = query.toLowerCase();
  return getAllPosts().filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    (post.content && post.content.toLowerCase().includes(searchTerm)) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

// Get related posts (same categories, excluding current post)
export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return getAllPosts()
    .filter(post => 
      post.id !== currentPost.id &&
      post.categories.some(cat => currentPost.categories.includes(cat))
    )
    .slice(0, limit);
};

// Format date for display
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Load markdown content from file
export const loadMarkdownContent = async (filename: string): Promise<string> => {
  try {
    const response = await fetch(`/src/data/blog/posts/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown content:', error);
    return '';
  }
};

// Enhanced markdown parser with better code block handling
export const parseMarkdown = (content: string): string => {
  return content
    // Code blocks (must be processed before inline code)
    .replace(/```(\w+)?\n([\s\S]*?)```/gim, (match, language, code) => {
      const lang = language ? ` data-language="${language}"` : '';
      return `<pre${lang}><code>${escapeHtml(code.trim())}</code></pre>`;
    })
    .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
    // Headers
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Inline code (after code blocks)
    .replace(/`([^`\n]*)`/gim, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Blockquotes
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    // Unordered lists
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    // Tables (basic support)
    .replace(/\|(.+)\|/gim, (match, content) => {
      const cells = content.split('|').map((cell: string) => cell.trim());
      const cellTags = cells.map((cell: string) => `<td>${cell}</td>`).join('');
      return `<tr>${cellTags}</tr>`;
    })
    // Line breaks (convert double line breaks to paragraphs)
    .replace(/\n\n/gim, '</p><p>')
    .replace(/^(.+)$/gim, '<p>$1</p>')
    // Clean up extra paragraph tags around other elements
    .replace(/<p>(<h[1-6]>.*?<\/h[1-6]>)<\/p>/gim, '$1')
    .replace(/<p>(<pre>.*?<\/pre>)<\/p>/gims, '$1')
    .replace(/<p>(<blockquote>.*?<\/blockquote>)<\/p>/gim, '$1')
    .replace(/<p>(<ul>.*?<\/ul>)<\/p>/gims, '$1')
    .replace(/<p>(<ol>.*?<\/ol>)<\/p>/gims, '$1')
    .replace(/<p>(<table>.*?<\/table>)<\/p>/gims, '$1')
    // Single line breaks
    .replace(/\n/gim, '<br>');
};

// Helper function to escape HTML in code blocks
const escapeHtml = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

// Get category color
export const getCategoryColor = (categoryId: string): string => {
  return blogCategories[categoryId]?.color || '#1CA9C9';
};

// Get category name
export const getCategoryName = (categoryId: string): string => {
  return blogCategories[categoryId]?.name || categoryId;
};