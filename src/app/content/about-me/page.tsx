import { Metadata } from 'next';
import { getBlog } from '@/services/content';
import styles from '@/styles/AboutMe.module.css';

/** Disable Vercel Data Cache */
export const fetchCache = 'force-no-store';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About Me',
  };
}

async function ContentContainer() {
  const slug = 'about-me';
  const data = await getBlog(slug);
  return (
    <div className="mx-[15px] mb-[100px] mt-[50px] flex justify-center">
      <div
        className="mx-auto flex flex-col"
        style={{ maxWidth: 'min(100%, 720px)' }}
      >
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

export default async function Page() {
  return (
    <div className="min-h-[75vh]">
      <ContentContainer />
    </div>
  );
}
