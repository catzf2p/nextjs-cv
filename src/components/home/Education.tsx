import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const Education: React.FC = () => {
  return (
    <>
      <div className='w-ful min-w-full'>
        <ScrollAnimation
          animateOnce={true}
          animateIn='animate__fadeInUp'
          animateOut='animate__fadeOutUp'
        >
          <h2 className='inline-flex items-center text-3xl font-normal'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='mr-4'
              width='48'
              height='48'
              viewBox='0 0 24 24'
              strokeWidth='1'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              ></path>
              <path d='M22 9l-10 -4l-10 4l10 4l10 -4v6'></path>
              <path d='M6 10.6v5.4a6 3 0 0 0 12 0v-5.4'></path>
            </svg>
            <span className='bg-gradient-to-r from-purple-500 to-blue-700 bg-clip-text text-3xl font-bold text-transparent'>Education</span>
          </h2>
        </ScrollAnimation>
        <div className=''>
          <ol className='ml-6 mt-4 border-l border-slate-800/80'>
            <ScrollAnimation
              animateOnce={true}
              animateIn='animate__fadeInUp'
              animateOut='animate__fadeOutUp'
            >
              <li className='group relative mb-10 pl-6'>
                <div className='absolute top-1 -left-2 h-4 w-4 rounded-full bg-blue-600 group-hover:animate-ping'></div>
                <div className='absolute top-2 -left-1 h-2 w-2 rounded-full border-transparent bg-white ring-2 ring-blue-600/40 ring-offset-4 ring-offset-blue-600'></div>
                <time className='mb-1 text-sm font-normal leading-none text-slate-600'>March 2005</time>
                <h3 className='text-lg font-bold'>High School</h3>
                <p className='mb-4'>I graduated with a Sci-Math from Piyabut school</p>
              </li>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={true}
              animateIn='animate__fadeInUp'
              animateOut='animate__fadeOutUp'
            >
              <li className='group relative mb-10 pl-6'>
                <div className='absolute top-1 -left-2 h-4 w-4 rounded-full bg-blue-600 group-hover:animate-ping'></div>
                <div className='absolute top-2 -left-1 h-2 w-2 rounded-full border-transparent bg-white ring-2 ring-blue-600/40 ring-offset-4 ring-offset-blue-600'></div>
                <time className='mb-1 text-sm font-normal leading-none text-slate-600'>March 2009</time>
                <h3 className='text-lg font-bold'>Bachelor&apos;s degree</h3>
                <p className=''>I graduated with a Bachelor&apos;s degree(B. Sc.) from Thepsatri Rajabhat</p>
              </li>
            </ScrollAnimation>
          </ol>
        </div>
      </div>
    </>
  );
};
