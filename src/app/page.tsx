import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center mt-10">
      <Link href="/content/test">Go to Test Content</Link>
    </div>
  );
}
