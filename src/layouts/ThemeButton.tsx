'use client';
import { FC } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface PropTypes {}

const ThemeButton: FC<PropTypes> = () => {
  const { toggleTheme, theme } = useTheme();
  const handleClick = () => {
    toggleTheme();
  };
  return (
    <>
      <div className="flex cursor-pointer items-center" onClick={handleClick}>
        {theme === 'light' ? (
          <i className="fa-solid fa-lightbulb"></i>
        ) : (
          <i className="fa-regular fa-lightbulb"></i>
        )}
      </div>
    </>
  );
};

export default ThemeButton;
