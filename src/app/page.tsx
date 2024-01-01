import Link from "next/link";

const baseUrl: string = process.env.API_BACKEND_BASE_URL ?? "";

async function getBlogList() {
  try {
    const result = await fetch(baseUrl + "/blog-list");
    return await result.json();
  } catch (e) {
    console.log(e);
    return [];
  }
}

async function getHello() {
  const result = await fetch(baseUrl).then((res) => res.text());
  return result;
}

export default async function Home() {
  const helloText = await getHello();
  const data: { path: string; name: string }[] = await getBlogList();
  return (
    <>
      <h1 className="flex justify-center mt-10">{helloText}</h1>
      <div className="flex justify-center mt-10 min-h-[100vh]">
        <div className="flex flex-col items-center">
          {data.map((file) => (
            <Link key={file.path} href={`/content/${file.name}`}>
              Go to {file.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
