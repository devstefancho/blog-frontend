import { Suspense } from 'react';
import ScrollToHeading from '@/components/ScrollToHeading';
import { Metadata } from 'next';
import { Frontmatter } from '@/types/content';
import TableOfContents from '@/components/TableOfContents';
import { getHeadings } from '@/utils/marked';

type Params = {
  params: {
    slug: string;
  };
};

/** Disable Vercel Data Cache */
export const fetchCache = 'force-no-store';

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = params.slug;

  return {
    title: `Content | ${slug.slice(0, 1).toUpperCase()}${slug.slice(1)}`,
  };
}

async function getBlog(slug: string): Promise<{
  html: string;
  frontmatter: Frontmatter;
  content: string;
}> {
  const result = await fetch(
    `${process.env.API_BACKEND_BASE_URL}/markdown/${slug}` // TODO 여기 open-wiki에 대해서 가져오도록 고쳐야함, 지금은 mock data 가져오는 api 사용중임
  );
  return await result.json();
}

async function ExampleContent({ slug }: { slug: string }) {
  const data = await getBlog(slug);
  const headings = await getHeadings(data.content);
  return (
    <div className="mx-[15px] mb-[100px] mt-[50px] flex justify-center">
      <div
        className="mx-auto flex flex-col"
        style={{ maxWidth: 'min(100%, 620px)' }}
      >
        <TableOfContents headings={headings} />
        <div className="mb-3">Slug: {data.frontmatter?.slug}</div>
        <time className="block text-sm">
          Created: {data.frontmatter?.createdDate}
        </time>
        <time className="block text-sm">
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
