import { WrenchIcon } from '@heroicons/react/24/outline';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Title } from '@/components/home/Title';

export const Certificate: React.FC = () => {
  return (
    <>
      <div className='w-ful min-w-full space-y-6'>
        <Title
          icon={<WrenchIcon />}
          text='Training'
        />
        <ScrollAnimation
          animateOnce={true}
          animateIn='animate__zoomInUp'
        >
          <div className='flex flex-col rounded-xl border border-slate-800/60 bg-slate-800/30 shadow-xl md:flex-row'>
            <img
              className='w-full rounded-t-xl md:w-1/4 md:rounded-l-xl md:rounded-r-none'
              src='assets/bg-agile.jpeg'
              alt=''
            />
            <div className='flex flex-col p-6'>
              <h5 className='text-lg font-bold'>LeSS in Action: Scrum Developer</h5>
              <p className='mt-2'>
                Agility is constrained by Technical Agility. The 5-day development practice course is 70% hands-on and 30% lecture and has
                three main focuses: Large-Scale Scrum, technical practices, and authentic team dynamics.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn='animate__zoomInUp'
        >
          <div className='flex flex-col rounded-xl border border-slate-800/60 bg-slate-800/30 shadow-xl md:flex-row'>
            <img
              className='w-full rounded-t-xl md:w-1/4 md:rounded-l-xl md:rounded-r-none'
              src='assets/bg-pdpa.jpeg'
              alt=''
            />
            <div className='flex flex-col p-6'>
              <h5 className='text-lg font-bold'>PDPA In Action : IT Management & Governance for IT</h5>
              <p className='mt-2'>
                Find out what are the updates and how it affects the individual and all businesses (small and large). Also discover what are
                the first steps to become compliant. Finally, through case studies learn from mistakes made by others and take steps to
                prevent them from happening to you.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};
