import { Node as UnistNode } from 'unist';

export interface Frontmatter {
  id: string; // atomic-habits
  slug: string; // atomic-habits
  createdDate: string; // 2023-11-06
  updatedDate: string; // 2023-12-25
}

export interface ChildrenNode extends UnistNode {
  value: string;
}

export interface HeadingNode {
  type: string;
  depth: number;
  children: ChildrenNode[];
}
