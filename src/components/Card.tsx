import { ContentsDataDto } from '@/types/content';
import { getDate } from '@/utils/date';
import { FC } from 'react';

interface PropTypes {
  data: ContentsDataDto[number];
}

const Card: FC<PropTypes> = ({ data }) => {
  return (
    <div className="flex min-w-[300px] max-w-[380px] flex-col rounded-lg">
      <time className="text-sm text-gray-600">
        {getDate(data.frontMatter.updatedDate, true)}
      </time>
      <div className="mb-[10px] text-2xl italic hover:text-link-hover active:text-link-active">
        {data.frontMatter.title}
      </div>
      <div className="break-words text-sm text-gray-600">{data.excerpt}</div>
    </div>
  );
};

export default Card;
