import path from "path";
import fs from "fs/promises";
import { Suspense } from "react";
import matter from "gray-matter";
import { marked } from "marked";
import { getDate } from "@/utils/date";

interface Frontmatter {
  id: string; // atomic-habits
  slug: string; // atomic-habits
  createdDate: string; // 2023-11-06
  updatedDate: string; // 2023-12-25
}

async function ExampleContent() {
  const filePath = path.join(process.cwd(), "example_content", "example.md");
  const fileContents = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(fileContents);
  const frontmatter = data as Frontmatter;
  const htmlContent = await marked(content);
  const createdDate = getDate(frontmatter.createdDate);
  const updatedDate = getDate(frontmatter.updatedDate);

  return (
    <div
      className="flex justify-center mx-auto mt-[100px]"
      style={{ maxWidth: 620 }}
    >
      <div>
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
      </Suspense>
    </>
  );
}
