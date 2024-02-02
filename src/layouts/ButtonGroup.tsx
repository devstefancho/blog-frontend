'use client';

import { FC, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';
import { SOCIAL_LINK } from '@/constants/social';

const GithubIcon: FC = () => {
  return (
    <Link href={SOCIAL_LINK.GIT_HUB} target="_blank">
      <i className="fa-brands fa-github px-2 py-1 text-[20px]"></i>
    </Link>
  );
};

const LinkedInIcon: FC = () => {
  return (
    <Link href={SOCIAL_LINK.LINKED_IN} target="_blank">
      <i className="fa-brands fa-linkedin px-2 py-1 text-[20px]"></i>
    </Link>
  );
};

const ThemeIcon: FC = () => {
  const { toggleTheme } = useTheme();
  const handleClick = () => {
    toggleTheme();
  };
  return (
    <i
      className="fa-regular fa-lightbulb px-2 py-1 text-[20px]"
      onClick={handleClick}
    ></i>
  );
};

const DropDown: FC = () => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div>
      <i
        className={`fa-solid fa-caret-${
          isExpand ? 'up' : 'down'
        } hidden p-2 md:block`}
        onClick={() => {
          setIsExpand((prev) => !prev);
        }}
      ></i>
      {isExpand && (
        <div
          className="absolute right-[10px] top-[50px] flex gap-[20px]
        rounded-md border-[1px] bg-white p-2 shadow-lg
        dark:border-white dark:bg-black"
        >
          <ThemeIcon />
          <GithubIcon />
          <LinkedInIcon />
        </div>
      )}
    </div>
  );
};

const ButtonGroup: FC = () => {
  return (
    <>
      <div className="flex cursor-pointer items-center gap-[20px]">
        <DropDown />
        <div className="flex cursor-pointer items-center gap-[20px] md:hidden">
          <ThemeIcon />
          <GithubIcon />
          <LinkedInIcon />
        </div>
      </div>
    </>
  );
};

export default ButtonGroup;
