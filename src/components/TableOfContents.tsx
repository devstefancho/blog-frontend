import { HeadingNode } from '@/types/content';
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
      <ul className="relative mb-5 rounded-[12px] bg-white p-4 tocLarge:fixed tocLarge:right-[130px] tocLarge:top-[100px] tocLarge:max-w-[400px] dark:text-black">
        {headings.map((h) =>
          h.children.map((child) => {
            return (
              <li
                key={child.value}
                className={`${getPaddingLeft(h.depth)} hover:text-sky-400`}
              >
                <a href={`#${child.value.toLowerCase().replace(/ /g, '-')}`}>
                  {child.value}
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
