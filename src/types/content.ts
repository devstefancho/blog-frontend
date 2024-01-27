import { Node as UnistNode } from 'unist';

export interface Frontmatter {
  published: boolean;
  id: string;
  slug: string;
  title: string;
  summary: string;
  toc: boolean;
  tags: string[];
  categories: string[];
  createdDate: string;
  updatedDate: string;
}

export interface ChildrenNode extends UnistNode {
  value: string;
  /** children exist when heading text has a link */
  children?: Array<{
    type: string;
    value: string;
    position: any;
  }>;
}

export interface HeadingNode {
  type: string; // text | link | linkReference
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
