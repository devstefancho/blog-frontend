import { FC } from 'react';
import Logo from './Logo';
import ThemeButton from './ThemeButton';
import AlgoliaSearchBox from '@/components/search/AlgoliaSearchBox';

interface PropTypes {}

const appId = process.env.ALGOLIA_API_ID;
const apiKey = process.env.ALGOLIA_API_KEY;
const indexName = process.env.ALGOLIA_INDEX_NAME;

const NavBar: FC<PropTypes> = () => {
  return (
    <header
      className="
      sticky top-0 z-10  border-b border-gray-300
      bg-gray-200 bg-opacity-80 pb-[16px] pl-[20px] pr-[20px] pt-[16px]
      backdrop-blur-[5px] backdrop-saturate-[180%] dark:border-gray-700
      dark:bg-black dark:bg-opacity-80"
    >
      <nav
        className="
        flex w-full flex-row flex-wrap
        items-center justify-between
        "
      >
        <Logo />
        <div className="flex gap-[20px]">
          {appId && apiKey && indexName && (
            <AlgoliaSearchBox
              appId={appId}
              apiKey={apiKey}
              indexName={indexName}
            />
          )}
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
