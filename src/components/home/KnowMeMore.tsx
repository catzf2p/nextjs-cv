import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { AgeCalculator } from '@/utils';
import { Title } from './Title';
import { SparklesIcon } from '@heroicons/react/24/outline';

export const KnowMeMore: React.FC = () => {
  return (
    <>
      <div className='w-ful min-w-full space-y-6'>
        <Title
          icon={<SparklesIcon />}
          text='Know Me More'
        />
        <ScrollAnimation
          animateOnce={true}
          animateIn='animate__zoomIn'
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
