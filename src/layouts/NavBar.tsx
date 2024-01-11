import { FC } from 'react';
import Logo from './Logo';
import ThemeButton from './ThemeButton';

interface PropTypes {}

const NavBar: FC<PropTypes> = () => {
  return (
    <nav className="flex w-full flex-row flex-wrap items-center justify-between pb-[16px] pl-[20px] pr-[20px] pt-[16px]">
      <Logo />
      <div className="flex gap-[20px]">
        <input
          placeholder="search..."
          type="text"
          className="p-[10px] text-black sm:hidden"
        />
        <i className="fa-solid fa-magnifying-glass m-auto hidden cursor-pointer sm:block"></i>
        <ThemeButton />
      </div>
    </nav>
  );
};

export default NavBar;
