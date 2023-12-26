import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center mt-10 min-h-[100vh]">
      <Link href="/content/example">Go to Example Content</Link>
    </div>
  );
}
