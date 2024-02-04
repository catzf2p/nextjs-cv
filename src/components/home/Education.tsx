import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Title } from '@/components/home/Title';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

export const Education: React.FC = () => {
  return (
    <>
      <div className='w-ful min-w-full space-y-6'>
        <Title
          icon={<AcademicCapIcon />}
          text='Education'
        />
        <ol className='ml-6 mt-4 border-l border-slate-800/80'>
          <ScrollAnimation
            animateOnce={true}
            animateIn='animate__fadeInUp'
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
    </>
  );
};
