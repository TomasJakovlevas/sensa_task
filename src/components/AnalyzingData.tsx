import Link from 'next/link';

export const AnalyzingData = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-10 px-6 py-4'>
      <h1 className='text-[20px] font-semibold md:text-[32px]'>
        Analyzing your data...
      </h1>
      <div className='w-full max-w-[350px] h-[4px] bg-gray overflow-hidden bg-accent md:max-w-[500px]'>
        <div className='h-full bg-primary animate-loading-bar'></div>
      </div>

      <Link className='text-accent hover:text-primary' href={'/'}>
        Cancel
      </Link>
    </div>
  );
};
