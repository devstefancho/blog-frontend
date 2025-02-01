import Link from 'next/link';
import Card from '@/components/Card';
import { getBlogList } from '@/services/content';
import { ContentsDataDto } from '@/types/content';

export default async function Home() {
  const data: ContentsDataDto = await getBlogList();
  return (
    <div className="min-h-[80vh] p-[40px] md:p-[10px]">
      <h1 className="flex md:justify-center">Dev Stefan Cho</h1>
      <h2 className="mt-[50px] flex md:justify-center">All Posts</h2>

      {/* UI 위치 잡으면 주석해제 */}
      {/* <VisitCounter /> */}

      <section className="flex pl-[10px] pr-[10px] md:justify-center">
        <div className="flex max-w-[940px] flex-col gap-[20px] md:justify-center">
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
