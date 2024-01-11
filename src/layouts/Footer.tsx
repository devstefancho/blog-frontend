import { FC } from 'react';

interface PropTypes {}

const Footer: FC<PropTypes> = () => {
  return (
    <section className="p-[64px] pl-[20px] pr-[20px]">
      <p className="flex items-center justify-center pt-[48px] text-center text-xs">
        © 2020-present Sungjin Cho. <br className="hidden sm:block" />
        All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
