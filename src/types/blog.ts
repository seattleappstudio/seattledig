export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishDate: string;
  categories: string[];
  tags: string[];
  readingTime: number;
  featured: boolean;
  image: string;
  seo: {
    metaDescription: string;
    keywords: string[];
  };
  content?: string; // For backward compatibility
  contentFile?: string; // New field for markdown files
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface BlogSearchFilters {
  query: string;
  categories: string[];
  tags: string[];
}