import * as shortid from 'shortid';
import IJob from '@/types/Job';
import React, { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { JobService } from '@/services';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { Title } from '@/components/home/Title';

export const Experience: React.FC = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);

  useEffect(() => {
    JobService.getList().then((value: IJob[]) => {
      setJobs([...value]);
    });
  }, []);

  return (
    <>
      <div className='w-ful min-w-full space-y-6'>
        <Title
          icon={<ComputerDesktopIcon />}
          text='Experience'
        />
        <ol className='relative ml-6 border-l border-slate-800/80'>
          {jobs?.map((job: IJob) => {
            return (
              <>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn='animate__fadeInUp'
                >
                  <li className='group relative mb-10 pl-6'>
                    <div className='absolute top-1 -left-2 h-4 w-4 rounded-full bg-blue-600 group-hover:animate-ping'></div>
                    <div className='absolute top-2 -left-1 h-2 w-2 rounded-full border-transparent bg-white ring-2 ring-blue-600/40 ring-offset-4 ring-offset-blue-600'></div>
                    <time className='mb-1 text-sm font-normal leading-none text-slate-600'>
                      {job.startAt} - {job.endAt} | {job.company}
                    </time>
                    <h3 className='my-1 text-lg font-bold'>{job.position}</h3>
                    <ul>
                      {job.responsibilities.map((responsibility: string) => {
                        return (
                          <li key={shortid.generate()}>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='-ml-2 inline text-blue-600'
                              width='24'
                              height='24'
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
                              <circle
                                cx='12'
                                cy='12'
                                r='4'
                              ></circle>
                            </svg>
                            <span className='align-middle'>{responsibility}</span>
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
