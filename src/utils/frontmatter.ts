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
    { label: '생성일', value: getDate(createdDate, true, 'YYYY년 MM월 DD일') },
    {
      label: '업데이트일',
      value: getDate(updatedDate, true, 'YYYY년 MM월 DD일'),
    },
  ];
};
