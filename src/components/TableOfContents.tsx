import { HeadingNode } from '@/types/content';
import { getHeadingText } from '@/utils/marked';
import { FC } from 'react';

interface PropTypes {
  headings: HeadingNode[];
}

const getPaddingLeft = (depth: number) => {
  switch (depth) {
    case 1:
      return 'pl-0';
    case 2:
      return 'pl-6';
    default:
      return 'pl-12';
  }
};

const TableOfContents: FC<PropTypes> = ({ headings }) => {
  return (
    <>
      <ul className="relative mb-5 list-none rounded-[12px] bg-white p-4 tocLarge:fixed tocLarge:right-[130px] tocLarge:top-[100px] tocLarge:max-w-[400px] dark:text-black">
        {headings.map((h) =>
          h.children.map((child) => {
            const headingText = getHeadingText(child);
            return (
              <li
                key={headingText}
                className={`${getPaddingLeft(h.depth)} hover:text-sky-400`}
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
