'use client';

import { useContext } from 'react';
import { QuizContext } from '../lib/providers';
import { useRouter } from 'next/navigation';
import MotherWithBabyIcon from '@/assets/icons/mother_with_baby.svg';
import { Button } from '@/components/Button';

export default function Home() {
  const router = useRouter();
  const data = useContext(QuizContext);

  const startQuiz = () => {
    if (!data) return;

    router.push('quiz/' + data.questions[0]?.id);
  };

  return (
    <main className='min-h-screen px-6 py-4 flex flex-col items-center gap-8 md:flex-row-reverse md:px-28'>
      <div className='w-full h-[320px] md:w-1/2 lg:h-full'>
        <MotherWithBabyIcon className='w-full h-full max-w-[640px]' />
      </div>
      <div className='flex flex-col gap-6 w-full md:w-fit'>
        <h1 className='text-3xl leading-none font-bold text-center md:text-left lg:text-[40px] 2xl:text-[80px]'>
          Get back in shape
        </h1>

        <div className='md:max-w-[260px]'>
          <Button
            disabled={!data?.questions.length}
            onClick={startQuiz}
            title=' Start The Quiz'
          />
        </div>
      </div>
    </main>
  );
}
