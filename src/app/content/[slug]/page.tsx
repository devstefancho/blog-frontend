import { Suspense } from 'react';
import ScrollToHeading from '@/components/ScrollToHeading';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import { getHeadings } from '@/utils/marked';
import { getBlog } from '@/services/content';
import { getDate } from '@/utils/date';
import { getFrontMatterTableList } from '@/utils/frontmatter';

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

async function ExampleContent({ slug }: { slug: string }) {
  const data = await getBlog(slug);
  const headings = await getHeadings(data.content);
  return (
    <div className="mx-[15px] mb-[100px] mt-[50px] flex justify-center">
      <div
        className="mx-auto flex flex-col"
        style={{ maxWidth: 'min(100%, 620px)' }}
      >
        <table className="mb-[30px]">
          <tbody>
            {getFrontMatterTableList(data.frontmatter).map(
              ({ label, value }) => (
                <tr key={label}>
                  <th className="w-[120px] text-left">{label}</th>
                  <td>{value}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <TableOfContents headings={headings} />
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
