import { FC } from 'react';
import Link from 'next/link';

const AboutMe: FC = () => {
  return (
    <div>
      <Link href="/content/about-me">
        <p
          className="flex cursor-pointer text-lg font-bold text-blue-500 underline
      hover:text-blue-700 md:justify-center"
        >
          About Me 읽기
        </p>
      </Link>
    </div>
  );
};

export default AboutMe;
