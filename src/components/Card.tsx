import { ContentsDataDto } from '@/types/content';
import { getDate } from '@/utils/date';
import { FC } from 'react';

interface PropTypes {
  data: ContentsDataDto[number];
}

const Card: FC<PropTypes> = ({ data }) => {
  return (
    <div className="flex min-w-[300px] rounded-lg">
      <div className="">
        <time className="text-sm text-gray-600">
          {getDate(data.frontMatter.updatedDate, true)}
        </time>
        <div className="mb-[10px] text-2xl italic hover:text-blue-600 active:text-blue-600">
          {data.frontMatter.title}
        </div>
      </div>
    </div>
  );
};

export default Card;
