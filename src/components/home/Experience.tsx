import { Title } from '@/components/home/Title';
import ExperienceModel from '@/models/Experience';
import { ExperienceService } from '@/services';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import * as shortid from 'shortid';

export const Experience: React.FC = () => {
  const [items, setItems] = useState<ExperienceModel[]>([]);

  const getData = async () => {
    const data = await ExperienceService.getList();
    setItems(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='w-ful min-w-full space-y-6'>
        <Title
          icon={<ComputerDesktopIcon />}
          text='Experience'
        />
        <ol className='ml-5 border-l border-slate-800/80'>
          {items?.map((experience) => {
            return (
              <>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn='animate__fadeIn'
                >
                  <li className='group relative mb-4 pl-4'>
                    <div className='absolute top-1 -left-2 h-4 w-4 rounded-full bg-blue-600 group-hover:animate-ping'></div>
                    <div className='absolute top-2 -left-1 h-2 w-2 rounded-full border-transparent bg-white ring-2 ring-blue-600/40 ring-offset-4 ring-offset-blue-600'></div>
                    <time className='mb-1 text-sm font-normal leading-none text-slate-600'>
                      {experience.startAt} - {experience.endAt} | {experience.company}
                    </time>
                    <h3 className='my-1 text-lg font-bold'>{experience.position}</h3>
                    <ul>
                      {experience.responsibilities.map((responsibility: string) => {
                        return (
                          <li key={shortid.generate()}>
                            <span className='align-middle'>- {responsibility}</span>
                          </li>
                        );
                      })}
                    </ul>
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
