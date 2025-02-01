import { marked } from 'marked';
import { remark } from 'remark';
import { visit } from 'unist-util-visit';
import { HeadingNode, ChildrenNode } from '@/types/content';

function getMarkedInstance(): typeof marked {
  const renderer = {
    heading(text: string, level: number) {
      const escapedText = text.toLowerCase().replace(/ /g, '-');
      return `<h${level} id="${escapedText}">${text}</h${level}>`;
    },
  };

  const markedWithId = marked.use({ renderer });
  return markedWithId;
}

export const markedInstance = getMarkedInstance();

export async function getHeadings(markdownContent: string) {
  const headings: HeadingNode[] = [];

  const tree = remark().parse(markdownContent);
  visit(tree, 'heading', (node) => {
    headings.push(node as HeadingNode);
  });

  return headings;
}

export function getHeadingText(childrenNode: ChildrenNode): string {
  let headingText = childrenNode.value;

  /**
   * @example
   * ## [heading text](link)
   * ## [heading text][link reference]
   */
  if (childrenNode.type === 'linkReference' || childrenNode.type === 'link') {
    headingText = childrenNode?.children?.[0].value ?? '';
  }
  return headingText || '';
}
