import { Suspense } from "react";
import { remark } from "remark";
import { visit } from "unist-util-visit";
import ScrollToHeading from "@/components/ScrollToHeading";
import { HeadingNode, Frontmatter } from "@/types/content";
import { Metadata } from "next";

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

async function getBlog(slug: string): Promise<{
  html: string;
  frontmatter: Frontmatter;
}> {
  const result = await fetch(
    `${process.env.API_BACKEND_BASE_URL}/markdown/${slug}` // TODO 여기 open-wiki에 대해서 가져오도록 고쳐야함, 지금은 mock data 가져오는 api 사용중임
  );
  return await result.json();
}

async function ExampleContent({ slug }: { slug: string }) {
  const data = await getBlog(slug);
  return (
    <div className="flex justify-center mt-[50px] mb-[100px] mx-[15px]">
      <div
        className="flex flex-col mx-auto"
        style={{ maxWidth: "min(100%, 620px)" }}
      >
        {/* <TableOfContents headings={headings} /> */}
        {/* <div className="mb-3">Slug: {frontmatter.slug}</div> */}
        {/* <time className="text-sm block">Created: {createdDate}</time> */}
        {/* <time className="text-sm block">Updated: {updatedDate}</time> */}
        {/* <div */}
        {/*   className="mt-3" */}
        {/*   dangerouslySetInnerHTML={{ __html: htmlContent }} */}
        {/* /> */}
        <div className="mb-3">Slug: {data.frontmatter?.slug}</div>
        <time className="text-sm block">
          Created: {data.frontmatter?.createdDate}
        </time>
        <time className="text-sm block">
          Updated: {data.frontmatter?.updatedDate}
        </time>
        {data?.html && (
          <div
            className="mt-3"
            dangerouslySetInnerHTML={{ __html: data.html }}
          />
        )}
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
