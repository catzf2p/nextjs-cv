import CountUp from 'react-countup';
import PerfectScrollbar from 'react-perfect-scrollbar';
import React, { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { AgeCalculator } from 'src/utils/AgeCalculator';

export const Sidebar: React.FC = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    setAge(() => {
      const age = AgeCalculator(new Date(2009, 6, 22));
      return age;
    });
  }, []);

  return (
    <>
      <aside className='lg:fixed lg:top-0 lg:h-full lg:w-[300px]'>
        <PerfectScrollbar className='bg-red bg-red w-full p-6'>
          <div className='space-y-8'>
            <ScrollAnimation
              animateOnce={true}
              animateIn='animate__zoomIn'
              animateOut='animate__zoomOut'
            >
              <div className='flex flex-col items-center'>
                <div className='header-photo mt-6'>
                  <img
                    src='assets/avatar-nat.jpeg'
                    alt='Nat Mancharoen'
                    className='h-22 w-22 rounded-full border-4 border-slate-900 object-cover'
                  />
                </div>
                <h5 className='mt-4 text-xl font-medium'>Nat Mancharoen</h5>
                <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-xl font-medium text-transparent'>
                  Developer
                </span>
                <p className='mt-4'>
                  &emsp;I&apos;m senior developer specialist in front-end and back-end development for complex scalable apps.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={true}
              animateIn='animate__fadeIn'
              animateOut='animate__fadeOut'
            >
              <div className='flex justify-center rounded-xl border border-slate-800/60'>
                <div className='relative m-4 h-44 w-full'>
                  <div className='absolute top-1/2 left-1/2 -mt-3 h-28 w-28 -translate-x-1/2 -translate-y-1/2'>
                    <ScrollAnimation
                      animateOnce={true}
                      animateIn='animate__zoomIn'
                      animateOut='animate__zoomOut'
                    >
                      <div className='h-28 w-28 rounded-full bg-gradient-to-r from-blue-500 to-rose-500'></div>
                    </ScrollAnimation>
                  </div>
                  <div className='absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center'>
                    <div className='text-9xl font-bold drop-shadow-[8px_10px_0px_rgba(0,0,0,0.65)]'>
                      <ScrollAnimation
                        animateOnce={true}
                        animateIn='animate__flipInY'
                        animateOut='animate__flipOutY'
                      >
                        <CountUp
                          start={0}
                          end={age}
                          duration={1.5}
                        >
                          {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                      </ScrollAnimation>
                    </div>
                    <div className='text-xl font-semibold drop-shadow-[2px_4px_0px_rgba(0,0,0,0.65)]'>
                      <ScrollAnimation
                        animateOnce={true}
                        animateIn='animate__zoomIn'
                        animateOut='animate__zoomOut'
                      >
                        Years of Experiance
                      </ScrollAnimation>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={true}
              animateIn='animate__rubberBand'
            >
              <div className='flex justify-center'>
                <button
                  type='button'
                  className='grow rounded-lg bg-gradient-to-r from-purple-500 to-blue-700 px-6 py-4 lg:bg-none'
                >
                  <a
                    className='flex justify-center text-xl text-white'
                    href='assets/cv.pdf'
                    target='_blank'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='mr-2'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
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
                      <path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2'></path>
                      <polyline points='7 11 12 16 17 11'></polyline>
                      <line
                        x1='12'
                        y1='4'
                        x2='12'
                        y2='16'
                      ></line>
                    </svg>
                    <span>Download CV</span>
                  </a>
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </PerfectScrollbar>
      </aside>
    </>
  );
};
