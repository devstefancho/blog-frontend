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

export default async function Home() {
  const fileList = await getFiles();
  return (
    <div className="flex justify-center mt-10 min-h-[100vh]">
      {fileList.map((file) => (
        <Link key={file.path} href={`/content/${file.name}`}>
          Go to {file.name}
        </Link>
      ))}
    </div>
  );
}
