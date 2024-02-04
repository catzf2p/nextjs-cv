import React, { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Title } from '@/components/home/Title';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import EducationService from '@/services/EducationService';
import EducationModel from '@/models/Education';

export const Education: React.FC = () => {
  const [items, setItems] = useState<EducationModel[]>([]);

  const getData = async () => {
    const data = await EducationService.getList();
    setItems(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='w-ful min-w-full space-y-6'>
        <Title
          icon={<AcademicCapIcon />}
          text='Education'
        />
        <ol className='ml-5 border-l border-slate-800/80'>
          {items.map((item) => {
            return (
              <>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn='animate__fadeIn'
                >
                  <li className='group relative mb-4 pl-4'>
                    <div className='absolute top-1 -left-2 h-4 w-4 rounded-full bg-blue-600 group-hover:animate-ping'></div>
                    <div className='absolute top-2 -left-1 h-2 w-2 rounded-full border-transparent bg-white ring-2 ring-blue-600/40 ring-offset-4 ring-offset-blue-600'></div>
                    <time className='mb-1 text-sm font-normal leading-none text-slate-600'>{item.start}</time>
                    <h3 className='text-lg font-bold'>{item.title}</h3>
                    <p className='mb-4'>{item.description}</p>
                  </li>
                </ScrollAnimation>
              </>
            );
          })}
        </ol>
      </div>
    </>
  );
};
