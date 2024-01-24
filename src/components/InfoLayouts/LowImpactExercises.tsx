import Image from 'next/image';
import motherImage from '@/assets/images/mother.png';

export const LowImpactExercises = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-full h-[230px] max-w-[400px] mb-4 md:mb-6 '>
        <Image src={motherImage} fill alt='Mother' />
      </div>
      <p className='text-center mb-6 md:mb-4'>
        Keep in mind that it only takes <strong>15 minutes</strong> of focused
        daily physical activity to give long-lasting results.
      </p>
      <p className='text-center'>
        Let’s continue with creating your personalized meal plan portfolio!
      </p>
    </div>
  );
};
