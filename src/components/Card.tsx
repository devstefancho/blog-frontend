import { ContentsDataDto } from '@/types/content';
import { getDate } from '@/utils/date';
import { FC } from 'react';

interface PropTypes {
  data: ContentsDataDto[number];
}

const Card: FC<PropTypes> = ({ data }) => {
  return (
    <div className="flex h-[150px] min-w-[300px] rounded-lg border border-gray-300 p-[20px]">
      <div className="">
        <div className="mb-[10px] text-2xl italic">
          {data.slug.toUpperCase()}
        </div>
        <time className="block text-sm text-gray-600">
          Created: {getDate(data.frontMatter.createdDate, true)}
        </time>
        <time className="block text-sm text-gray-600">
          Updated: {getDate(data.frontMatter.updatedDate, true)}
        </time>
      </div>
    </div>
  );
};

export default Card;
