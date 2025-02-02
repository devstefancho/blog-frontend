import Link from 'next/link';
import Card from '@/components/Card';
import { getBlogList } from '@/services/content';
import { ContentsDataDto } from '@/types/content';
import AboutMe from '@/components/AboutMe';

export default async function Home() {
  const data: ContentsDataDto = await getBlogList();
  const postCountText = `All Posts (${data.length}개)`;
  return (
    <div className="min-h-[80vh] p-[40px] md:p-[10px]">
      <h1 className="flex rounded-[8px] bg-logo-bg p-[20px] text-logo-text md:justify-center">
        {'>'} DevStefanCho
      </h1>
      <AboutMe />
      <h2 className="mt-[50px] flex md:justify-center">{postCountText}</h2>

      {/* UI 위치 잡으면 주석해제 */}
      {/* <VisitCounter /> */}

      <section className="flex pl-[10px] pr-[10px] md:justify-center">
        <div className="flex flex-row flex-wrap gap-[20px] md:justify-center">
          {data.map((file) => (
            <Link key={file.path} href={`/content/${file.slug}`}>
              <Card data={file} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
