'use client';
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
      devstefancho
    </div>
  );
};

export default Logo;
