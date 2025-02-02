'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface PropTypes {}

const Logo: FC<PropTypes> = () => {
  const { push } = useRouter();
  const handleClick = () => {
    push('/');
  };

  return (
    <div
      className="cursor-pointer p-[10px] dark:text-white"
      onClick={handleClick}
    >
      <Image src="logo.svg" alt="logo" width={40} height={40} />
    </div>
  );
};

export default Logo;
