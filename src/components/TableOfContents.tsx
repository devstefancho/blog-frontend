import { FC } from 'react';
import { HeadingNode } from '@/types/content';
import { getHeadingText } from '@/utils/marked';

interface PropTypes {
  headings: HeadingNode[];
}

const getPaddingLeft = (depth: number) => {
  switch (depth) {
    case 1:
      return 'pl-0';
    case 2:
      return 'pl-4';
    default:
      return 'pl-8';
  }
};

const TableOfContents: FC<PropTypes> = ({ headings }) => {
  return (
    <>
      <ul className="relative mb-5 list-inside rounded-[8px] bg-gray-300 p-[20px] text-gray-600 tocLarge:fixed tocLarge:right-[130px] tocLarge:top-[100px] tocLarge:max-w-[400px] dark:text-black">
        <div className="text-lg font-bold">목차</div>
        {headings.map((h) =>
          h.children.map((child) => {
            const headingText = getHeadingText(child);
            return (
              <li
                key={headingText}
                className={`${getPaddingLeft(
                  h.depth
                )} hover:text-link-hover active:text-link-active`}
              >
                <a href={`#${headingText.toLowerCase().replace(/ /g, '-')}`}>
                  {headingText}
                </a>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default TableOfContents;
