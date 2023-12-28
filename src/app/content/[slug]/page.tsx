import path from "path";
import fsPromise from "fs/promises";
import { Suspense } from "react";
import matter from "gray-matter";
import { getDate } from "@/utils/date";
import { remark } from "remark";
import { visit } from "unist-util-visit";
import ScrollToHeading from "@/components/ScrollToHeading";
import { markedInstance } from "@/utils/marked";
import { HeadingNode, Frontmatter } from "@/types/content";
import TableOfContents from "@/components/TableOfContents";
import { Metadata } from "next";
import recursive from "recursive-readdir";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = params.slug;

  return {
    title: `Content | ${slug.slice(0, 1).toUpperCase()}${slug.slice(1)}`,
  };
}

async function getHeadings(markdownContent: string) {
  const headings: HeadingNode[] = [];

  const tree = remark().parse(markdownContent);
  visit(tree, "heading", (node) => {
    headings.push(node as HeadingNode);
  });

  return headings;
}

async function ExampleContent({ slug }: { slug: string }) {
  const fileListJson = await fsPromise.readFile(
    path.join(process.cwd(), "json/file_list.json"),
    "utf8"
  );
  const fileList: { path: string; name: string }[] = JSON.parse(fileListJson);
  const matchFile = fileList.find((file) => file.name === slug);

  if (!matchFile) {
    return <div>Not found</div>;
  }

  const filePath = matchFile.path;
  const fileContents = await fsPromise.readFile(filePath, "utf8");
  const { content, data } = matter(fileContents);
  const headings: HeadingNode[] = await getHeadings(content);
  const frontmatter = data as Frontmatter;
  const createdDate = getDate(frontmatter.createdDate);
  const updatedDate = getDate(frontmatter.updatedDate);
  const htmlContent = await markedInstance(content);

  return (
    <div className="flex justify-center mt-[50px] mb-[100px] mx-[15px]">
      <div
        className="flex flex-col mx-auto"
        style={{ maxWidth: "min(100%, 620px)" }}
      >
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

export default async function Page({ params: { slug } }: Params) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ExampleContent slug={slug} />
        <ScrollToHeading />
      </Suspense>
    </>
  );
}
