import { Frontmatter } from '@/types/content';
import { getDate } from './date';

export const getFrontMatterTableList = (frontMatter: Frontmatter) => {
  const {
    // published,
    // id,
    // slug,
    // title,
    // summary,
    // toc,
    // tags,
    // categories,
    createdDate,
    updatedDate,
  } = frontMatter;
  return [
    { label: 'Created', value: getDate(createdDate, true) },
    { label: 'Updated', value: getDate(updatedDate, true) },
  ];
};
