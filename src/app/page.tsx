import Link from 'next/link';
import Card from '@/components/Card';
import { getBlogList } from '@/services/content';
import { ContentsDataDto } from '@/types/content';
import AboutMe from '@/components/AboutMe';

export default async function Home() {
  const data: ContentsDataDto = await getBlogList();
  return (
    <div className="min-h-[80vh]">
      <div className="flex h-[30vh] items-center justify-center bg-[#363636] p-[20px] text-logo-text brightness-150">
        <h1>Hello Dev World</h1>
      </div>
      <div className="p-[20px]">
        <AboutMe />
        {/* UI 위치 잡으면 주석해제 */}
        {/* <VisitCounter /> */}

        <section className="mt-[30px] flex pl-[10px] pr-[10px] md:justify-center">
          <div className="flex flex-row flex-wrap gap-[20px] md:justify-center">
            {data.map((file) => (
              <Link key={file.path} href={`/content/${file.slug}`}>
                <Card data={file} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
