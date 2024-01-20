import Card from '@/components/Card';
import { ContentsDataDto } from '@/types/content';
import Link from 'next/link';

const baseUrl: string = process.env.API_BACKEND_BASE_URL ?? '';

async function getBlogList() {
  try {
    const result = await fetch(baseUrl + '/contents', {
      cache: 'no-cache',
    });
    return await result.json();
  } catch (e) {
    console.log(e);
    return [];
  }
}

async function getVisitorCount() {
  try {
    const result = await fetch(baseUrl + '/visit/count', {
      cache: 'no-cache',
    });
    return await result.json();
  } catch (e) {
    console.log(e);
  }
}

export default async function Home() {
  const data: ContentsDataDto = await getBlogList();
  const counter = await getVisitorCount();
  return (
    <>
      <h1 className="mt-[100px] flex justify-center">Dev Stefan Cho</h1>
      <div className="flex justify-center">
        <p>Total visitors: {counter.count || 0}</p>
      </div>
      <h2 className="mt-[150px] flex justify-center">All Posts</h2>
      <section className="mt-10 flex justify-center">
        <div className="mt-10 flex max-w-[940px] flex-wrap justify-center gap-[20px]">
          {data.map((file) => (
            <Link key={file.path} href={`/content/${file.slug}`}>
              <Card data={file} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
