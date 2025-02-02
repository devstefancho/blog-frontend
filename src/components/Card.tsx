import { FC } from 'react';
import { getDate } from '@/utils/date';
import { ContentsDataDto } from '@/types/content';

interface PropTypes {
  data: ContentsDataDto[number];
}

const Card: FC<PropTypes> = ({ data }) => {
  const excerpt = data.excerpt + '...';
  return (
    <div
      className="flex min-w-[300px] max-w-[380px] flex-col rounded-lg
      border border-solid border-black
      px-[30px] py-[20px]"
    >
      <time className="flex justify-end pb-[8px] text-xs text-gray-600">
        {getDate(data.frontMatter.updatedDate, true, 'YYYY년 MM월 DD일')}
      </time>
      <div className="mb-[10px] text-2xl italic hover:text-link-hover active:text-link-active">
        {data.frontMatter.title}
      </div>
      <div className="min-h-[80px] break-words text-sm text-gray-800">
        {excerpt}
      </div>
    </div>
  );
};

export default Card;
