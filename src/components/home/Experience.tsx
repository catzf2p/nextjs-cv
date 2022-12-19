import * as shortid from 'shortid';
import IJob from '@/types/Job';
import React, { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { JobService } from '@/services';

export const Experience: React.FC = () => {
    const [jobs, setJobs] = useState<IJob[]>([]);

    useEffect(() => {
        JobService.getList().then((value: IJob[]) => {
            setJobs([...value]);
        });
    }, []);

    return (
        <>
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
                        <line
                            x1='3'
                            y1='19'
                            x2='21'
                            y2='19'
                        ></line>
                        <rect
                            x='5'
                            y='6'
                            width='14'
                            height='10'
                            rx='1'
                        ></rect>
                    </svg>
                    <span className='bg-gradient-to-r from-purple-500 to-blue-700 bg-clip-text text-3xl font-bold text-transparent'>
                        Experience
                    </span>
                </h2>
            </ScrollAnimation>
            <div className=''>
                <ol className='relative ml-6 mt-4 border-l border-slate-800/80'>
                    {jobs?.map((job: IJob) => {
                        return (
                            <li
                                className='group relative mb-10 pl-6'
                                key={shortid.generate()}
                            >
                                <ScrollAnimation
                                    key={shortid.generate()}
                                    animateOnce={true}
                                    animateIn='animate__fadeInUp'
                                    animateOut='animate__fadeOutUp'
                                >
                                    <div className='absolute top-1 -left-2 h-4 w-4 rounded-full bg-blue-600 group-hover:animate-ping'></div>
                                    <div className='absolute top-2 -left-1 h-2 w-2 rounded-full border-transparent bg-white ring-2 ring-blue-600/40 ring-offset-4 ring-offset-blue-600'></div>
                                    <time className='mb-1 text-sm font-normal leading-none text-slate-600'>
                                        {job.startAt} - {job.endAt} | {job.company}
                                    </time>
                                    <h3 className='text-lg font-bold'>{job.position}</h3>
                                </ScrollAnimation>
                                <ul>
                                    {job.responsibilities.map((responsibility: string) => {
                                        return (
                                            <li key={shortid.generate()}>
                                                <ScrollAnimation
                                                    animateOnce={true}
                                                    animateIn='animate__fadeInUp'
                                                    animateOut='animate__fadeOutUp'
                                                >
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
                                                </ScrollAnimation>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </>
    );
};
