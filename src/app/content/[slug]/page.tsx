import path from "path";
import fs from "fs/promises";
import { Suspense } from "react";
import matter from "gray-matter";
import { getDate } from "@/utils/date";
import { remark } from "remark";
import { visit } from "unist-util-visit";
import ScrollToHeading from "@/components/ScrollToHeading";
import { markedInstance } from "@/utils/marked";
import { HeadingNode, Frontmatter } from "@/types/content";
import TableOfContents from "@/components/TableOfContents";

async function getHeadings(markdownContent: string) {
  const headings: HeadingNode[] = [];

  const tree = remark().parse(markdownContent);
  visit(tree, "heading", (node) => {
    headings.push(node as HeadingNode);
  });

  return headings;
}

async function ExampleContent() {
  const filePath = path.join(process.cwd(), "example_content", "example.md");
  const fileContents = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(fileContents);
  const headings: HeadingNode[] = await getHeadings(content);
  const frontmatter = data as Frontmatter;
  const createdDate = getDate(frontmatter.createdDate);
  const updatedDate = getDate(frontmatter.updatedDate);
  const htmlContent = await markedInstance(content);

  return (
    <div
      className="flex justify-center mx-auto mt-[100px]"
      style={{ maxWidth: 620 }}
    >
      <div>
        <TableOfContents headings={headings} />
        <div className="mb-3">Slug: {frontmatter.slug}</div>
        <time className="text-sm block">Created: {createdDate}</time>
        <time className="text-sm block">Updated: {updatedDate}</time>
        <div
          className="mt-3"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}

export default async function Page({
  params: { username },
}: {
  params: { username: string };
}) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ExampleContent />
        <ScrollToHeading />
      </Suspense>
    </>
  );
}
