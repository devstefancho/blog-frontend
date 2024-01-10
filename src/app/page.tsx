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

export default async function Home() {
  const data: { path: string; name: string; slug: string }[] =
    await getBlogList();
  return (
    <>
      <h1 className="mt-10 flex justify-center">Dev Stefan Cho</h1>
      <div className="mt-10 flex min-h-[100vh] justify-center">
        <div className="flex flex-col items-center">
          {data.map((file) => (
            <Link key={file.path} href={`/content/${file.slug}`}>
              Go to {file.slug}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
