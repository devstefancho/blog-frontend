import { HeadingNode } from "@/types/content";
import { FC } from "react";

interface PropTypes {
  headings: HeadingNode[];
}

const TableOfContents: FC<PropTypes> = ({ headings }) => {
  return (
    <>
      <ul className="fixed right-[130px] top-10">
        {headings.map((h) =>
          h.children.map((child, idx) => (
            <li
              key={idx}
              className={`pl-${(h.depth - 1) * 4}  hover:text-sky-400`}
            >
              <a href={`#${child.value.toLowerCase().replace(/ /g, "-")}`}>
                {child.value}
              </a>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default TableOfContents;
