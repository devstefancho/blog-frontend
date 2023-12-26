import { HeadingNode } from "@/types/content";
import { FC } from "react";

interface PropTypes {
  headings: HeadingNode[];
}

const getPaddingLeft = (depth: number) => {
  switch (depth) {
    case 1:
      return "pl-0";
    case 2:
      return "pl-6";
    case 3:
      return "pl-12";
    case 4:
      return "pl-18";
    default:
      return "pl-0";
  }
};

const TableOfContents: FC<PropTypes> = ({ headings }) => {
  return (
    <>
      <ul className="relative rounded-[12px] p-4 bg-white mb-5 tocLarge:fixed tocLarge:right-[130px] tocLarge:top-10 tocLarge:max-w-[400px] dark:text-black">
        {headings.map((h) =>
          h.children.map((child) => {
            return (
              <li
                key={child.value}
                className={`${getPaddingLeft(h.depth)} hover:text-sky-400`}
              >
                <a href={`#${child.value.toLowerCase().replace(/ /g, "-")}`}>
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
