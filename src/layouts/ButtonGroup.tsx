'use client';

import Link from 'next/link';
import { FC } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { SOCIAL_LINK } from '@/constants/social';

const GithubIcon: FC = () => {
  return (
    <Link href={SOCIAL_LINK.GIT_HUB} target="_blank">
      <i className="fa-brands fa-github icon"></i>
    </Link>
  );
};

const LinkedInIcon: FC = () => {
  return (
    <Link href={SOCIAL_LINK.LINKED_IN} target="_blank">
      <i className="fa-brands fa-linkedin icon"></i>
    </Link>
  );
};

const ThemeIcon: FC = () => {
  const { toggleTheme } = useTheme();
  const handleClick = () => {
    toggleTheme();
  };
  return <i className="fa-regular fa-lightbulb icon" onClick={handleClick}></i>;
};

const ButtonGroup: FC = () => {
  return (
    <>
      <div className="flex cursor-pointer items-center gap-[20px]">
        <ThemeIcon />
        <GithubIcon />
        <LinkedInIcon />
      </div>
    </>
  );
};

export default ButtonGroup;
