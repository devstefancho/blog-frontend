import { notFound } from 'next/navigation';
import { Frontmatter } from '@/types/content';

const baseUrl: string = process.env.API_BACKEND_BASE_URL ?? '';

export async function getBlog(slug: string): Promise<{
  html: string;
  frontmatter: Frontmatter;
  content: string;
}> {
  const result = await fetch(
    `${process.env.API_BACKEND_BASE_URL}/content/${slug}`
  );

  if (!result.ok) {
    notFound();
  }

  return await result.json();
}

export async function getBlogList() {
  try {
    const result = await fetch(baseUrl + '/contents?excerpt_size=100', {
      cache: 'no-cache',
    });
    return await result.json();
  } catch (e) {
    console.log(e);
    return [];
  }
}
