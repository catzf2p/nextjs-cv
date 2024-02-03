import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { AgeCalculator } from '@/utils';

export const KnowMeMore: React.FC = () => {
  return (
    <>
      <ScrollAnimation
        animateOnce={true}
        animateIn='animate__fadeInUp'
        animateOut='animate__fadeOutUp'
        offset={0}
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
            <path d='M16.95 9.01c3.02 .739 5.05 2.123 5.05 3.714c0 2.367 -4.48 4.276 -10 4.276s-10 -1.909 -10 -4.276c0 -1.59 2.04 -2.985 5.07 -3.724'></path>
            <path d='M7 9c0 1.105 2.239 2 5 2s5 -.895 5 -2v-.035c0 -2.742 -2.239 -4.965 -5 -4.965s-5 2.223 -5 4.965v.035'></path>
            <path d='M15 17l2 3'></path>
            <path d='M8.5 17l-1.5 3'></path>
            <path d='M12 14h.01'></path>
            <path d='M7 13h.01'></path>
            <path d='M17 13h.01'></path>
          </svg>
          <span className='bg-gradient-to-r from-purple-500 to-blue-700 bg-clip-text text-3xl font-bold text-transparent'>
            Know Me More
          </span>
        </h2>
      </ScrollAnimation>
      <div className=''>
        <ScrollAnimation
          animateOnce={true}
          animateIn='animate__fadeInUp'
          animateOut='animate__fadeOutUp'
        >
          <div className='mt-6 grid grid-cols-3 gap-6'>
            <div className='col-span-3 xl:col-span-2'>
              <p>
                &emsp;Hello! I’m Nat Mancharoen. Senior Full Stack Developer specializing in front end development. Experienced with all
                stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including
                JavaScript, SQL, and C#.NET. Strong background in project management and customer relations.
              </p>
            </div>
            <div className='col-span-3 grid grid-cols-1 gap-4 xl:col-span-1 xl:gap-0'>
              <div className='flex leading-none'>
                <span className='w-24 font-medium'>Age:</span>
                <span>{AgeCalculator(new Date(1984, 6, 22))} (June, 1984)</span>
              </div>
              <div className='flex leading-3'>
                <span className='w-24 font-medium leading-3'>Address:</span>
                <span className='leading-3'>Tha Chang Sing Buri 16140</span>
              </div>
              <div className='flex leading-3'>
                <span className='w-24 font-medium leading-3'>E-Mail:</span>
                <span className='leading-3'>monzgamez@gmail.com</span>
              </div>
              <div className='flex leading-none'>
                <span className='w-24 font-medium leading-3'>Phone:</span>
                <span className='leading-3'>088-020-2322</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};
