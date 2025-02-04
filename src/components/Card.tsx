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
      className="flex min-w-[300px] max-w-[380px] flex-col gap-[10px]
      rounded-lg border bg-gray-100 px-[30px]
      py-[20px]
      hover:border-gray-300 hover:shadow-lg
      hover:dark:border-gray-700
      "
    >
      <div className="mb-[10px] text-2xl italic hover:text-link-hover active:text-link-active">
        {data.frontMatter.title}
      </div>
      <div className="min-h-[80px] break-words text-sm text-gray-800">
        {excerpt}
      </div>
      <time className="flex justify-start pb-[8px] text-[10px] text-gray-600">
        {getDate(data.frontMatter.updatedDate, true, 'YYYY년 MM월 DD일')}
      </time>
    </div>
  );
};

export default Card;
