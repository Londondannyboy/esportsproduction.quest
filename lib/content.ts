import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ContentMeta {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  date: string;
  last_updated: string;
  hero_image: string;
  hero_alt: string;
  slug: string;
}

export interface ContentPage {
  meta: ContentMeta;
  content: string;
}

export function getAllContentSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(contentDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''));
  } catch {
    return [];
  }
}

export function getAllContent(): ContentMeta[] {
  const slugs = getAllContentSlugs();
  return slugs.map((slug) => {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      ...data,
      slug,
    } as ContentMeta;
  });
}

export async function getContentBySlug(slug: string): Promise<ContentPage | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(content);

    const contentHtml = processedContent.toString();

    return {
      meta: {
        ...data,
        slug,
      } as ContentMeta,
      content: contentHtml,
    };
  } catch {
    return null;
  }
}
