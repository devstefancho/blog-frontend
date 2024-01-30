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
    <nav className="flex w-full flex-row flex-wrap items-center justify-between pb-[16px] pl-[20px] pr-[20px] pt-[16px]">
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
  );
};

export default NavBar;
