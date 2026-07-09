import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage?: string;
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        content,
        date: data.date,
        author: data.author,
        category: data.category,
        tags: data.tags || [],
        featuredImage: data.featuredImage,
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      date: data.date,
      author: data.author,
      category: data.category,
      tags: data.tags || [],
      featuredImage: data.featuredImage,
    } as BlogPost;
  } catch {
    return null;
  }
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

export function getAllCategories(): string[] {
  const allPosts = getAllBlogPosts();
  return Array.from(new Set(allPosts.map((post) => post.category))).sort();
}

export function getAllTags(): string[] {
  const allPosts = getAllBlogPosts();
  const allTags = allPosts.flatMap((post) => post.tags);
  return Array.from(new Set(allTags)).sort();
}
