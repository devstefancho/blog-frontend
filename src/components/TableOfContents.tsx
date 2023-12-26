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
      return "pl-2";
    case 3:
      return "pl-4";
    case 4:
      return "pl-6";
    case 5:
      return "pl-8";
    case 6:
      return "pl-10";
    default:
      return "pl-0";
  }
};

const TableOfContents: FC<PropTypes> = ({ headings }) => {
  return (
    <>
      <ul className="fixed right-[130px] top-10">
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
