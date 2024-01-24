import { useRouter } from 'next/navigation';
import Arrow from '@/assets/icons/arrow.svg';

type QuizNavigationProps = {
  page: {
    current: number;
    total: number;
  };
};

export const QuizNavigation = ({ page }: QuizNavigationProps) => {
  const percentage = ((page.current * 100) / page.total).toFixed() || 0;
  const router = useRouter();

  return (
    <div className='flex flex-col'>
      <div className='p-4 flex justify-between text-sm container mx-auto lg:py-6 lg:text-base'>
        <div
          className='flex items-center gap-2 cursor-pointer'
          onClick={() => router.back()}
        >
          <div className='w-[24px] h-[24px] flex items-center justify-center'>
            <Arrow />
          </div>
          <span className='font-bold leading-normal'>Back</span>
        </div>
        <div>
          <span className='font-bold leading-normal'>{page.current}</span> of{' '}
          {page.total}
        </div>
      </div>
      <div className='h-[2px] bg-accent w-full '>
        <div
          style={{ width: `${percentage}%` }}
          className={`bg-primary h-full `}
        ></div>
      </div>
    </div>
  );
};
