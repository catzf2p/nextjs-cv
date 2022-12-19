import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const Certificate: React.FC = () => {
    return (
        <>
            <ScrollAnimation
                animateOnce={true}
                animateIn='animate__fadeInUp'
                animateOut='animate__fadeOutUp'
            >
                <h2 className='flex items-center text-3xl font-normal'>
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
                        <circle
                            cx='15'
                            cy='15'
                            r='3'
                        ></circle>
                        <path d='M13 17.5v4.5l2 -1.5l2 1.5v-4.5'></path>
                        <path d='M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73'></path>
                        <line
                            x1='6'
                            y1='9'
                            x2='18'
                            y2='9'
                        ></line>
                        <line
                            x1='6'
                            y1='12'
                            x2='9'
                            y2='12'
                        ></line>
                        <line
                            x1='6'
                            y1='15'
                            x2='8'
                            y2='15'
                        ></line>
                    </svg>
                    <span className='bg-gradient-to-r from-purple-500 to-blue-700 bg-clip-text text-3xl font-bold text-transparent'>
                        Training
                    </span>
                </h2>
            </ScrollAnimation>
            <div className='mt-6'>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__flipInX'
                    animateOut='animate__flipOutX'
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
                                Agility is constrained by Technical Agility. The 5-day development practice course is 70% hands-on and 30%
                                lecture and has three main focuses: Large-Scale Scrum, technical practices, and authentic team dynamics.
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
                <div className='mt-6'></div>
            </div>
            <div className='mt-6'>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__flipInX'
                    animateOut='animate__flipOutX'
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
                                Find out what are the updates and how it affects the individual and all businesses (small and large). Also
                                discover what are the first steps to become compliant. Finally, through case studies learn from mistakes
                                made by others and take steps to prevent them from happening to you.
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
                <div className='mt-6'></div>
            </div>
        </>
    );
};
