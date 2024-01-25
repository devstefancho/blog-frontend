import { Node as UnistNode } from 'unist';

export interface Frontmatter {
  published: boolean;
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  categories: string[];
  createdDate: string;
  updatedDate: string;
}

export interface ChildrenNode extends UnistNode {
  value: string;
}

export interface HeadingNode {
  type: string;
  depth: number;
  children: ChildrenNode[];
}

/** Dto */
export type ContentsDataDto = {
  path: string;
  name: string;
  slug: string;
  frontMatter: Frontmatter;
}[];
