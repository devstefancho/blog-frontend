import { Metadata } from 'next';
import ScrollToHeading from '@/components/ScrollToHeading';
import TableOfContents from '@/components/TableOfContents';
import { getHeadings } from '@/utils/marked';
import { getBlog } from '@/services/content';
import { getFrontMatterTableList } from '@/utils/frontmatter';
import styles from '@/styles/Content.module.css';

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

async function ContentContainer({ slug }: { slug: string }) {
  const data = await getBlog(slug);
  const headings = await getHeadings(data.content);
  const metadata = getFrontMatterTableList(data.frontmatter)
    .map(({ label, value }) => `${label} : ${value}`)
    .join(' | ');
  return (
    <div className="mx-[15px] mb-[100px] mt-[50px] flex justify-center">
      <div
        className="mx-auto flex flex-col"
        style={{ maxWidth: 'min(100%, 720px)' }}
      >
        <TableOfContents headings={headings} />
        <div className="mb-[10px] text-xs text-gray-500">{metadata}</div>
        {data?.html && (
          <div className={styles.container}>
            <div
              className="mt-3"
              dangerouslySetInnerHTML={{ __html: data.html }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default async function Page({ params: { slug } }: Params) {
  return (
    <div className="min-h-[75vh]">
      <ContentContainer slug={slug} />
      <ScrollToHeading />
    </div>
  );
}
