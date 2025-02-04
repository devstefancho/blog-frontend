import { FC } from 'react';
import Link from 'next/link';

const AboutMe: FC = () => {
  return (
    <div>
      <p
        className="flex w-[fit-content] cursor-pointer rounded-full border-2  border-blue-100 bg-blue-100 px-[20px] py-[10px]
      text-sm font-medium text-blue-800 hover:border-blue-900 hover:bg-blue-300 active:border-blue-900 active:bg-blue-400 md:justify-center"
      >
        <Link href="/content/about-me">About Me</Link>
      </p>
    </div>
  );
};

export default AboutMe;
