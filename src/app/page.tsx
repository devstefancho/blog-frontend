import Link from "next/link";
import path from "path";
import fsPromise from "fs/promises";

async function getFiles() {
  const fileListJson = await fsPromise.readFile(
    path.join("json/file_list.json"),
    "utf8"
  );
  const fileList: { path: string; name: string }[] = JSON.parse(fileListJson);
  return fileList;
}

async function getHello() {
  const result = await fetch("https://nestjs-test.up.railway.app/").then(
    (res) => res.text()
  );
  return result;
}

export default async function Home() {
  const fileList = await getFiles();
  const helloText = await getHello();
  return (
    <>
      <h1 className="flex justify-center mt-10">{helloText}</h1>
      <div className="flex justify-center mt-10 min-h-[100vh]">
        <div className="flex flex-col items-center">
          {fileList.map((file) => (
            <Link key={file.path} href={`/content/${file.name}`}>
              Go to {file.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
