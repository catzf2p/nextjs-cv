import ScrollAnimation from 'react-animate-on-scroll';
import { CircularProgressBar } from '../common/CircularProcessBar';

export const WhatIDo: React.FC = () => {
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
            <path d='M3.604 7.197l7.138 -3.109a0.96 .96 0 0 1 1.27 .527l4.924 11.902a1.004 1.004 0 0 1 -.514 1.304l-7.137 3.109a0.96 .96 0 0 1 -1.271 -.527l-4.924 -11.903a1.005 1.005 0 0 1 .514 -1.304z'></path>
            <path d='M15 4h1a1 1 0 0 1 1 1v3.5'></path>
            <path d='M20 6c.264 .112 .52 .217 .768 .315a1 1 0 0 1 .53 1.311l-2.298 5.374'></path>
          </svg>
          <span className='bg-gradient-to-r from-purple-500 to-blue-700 bg-clip-text text-3xl font-bold text-transparent'>What I Do</span>
        </h2>
      </ScrollAnimation>
      <div className='mt-6 grid gap-6'>
        <ScrollAnimation
          animateOnce={true}
          animateIn='animate__flipInX'
          animateOut='animate__flipOutX'
        >
          <div className='flex flex-col rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:shadow-xl md:flex-row'>
            <div className='p-4'>
              <div className='m-auto w-[80px]'>
                <CircularProgressBar percent={94} />
              </div>
            </div>
            <div className='md:ml-4'>
              <h4 className='mt-2 text-center font-semibold md:text-left'>Back-End</h4>
              <p className='text-center md:text-left'>
                Collaborating with the front-end developers and other team members to establish objectives and design more functional,
                cohesive codes to enhance the user experience. Participating in continuing education and training to remain current on best
                practices, learn new programming languages.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn='animate__flipInX'
          animateOut='animate__flipOutX'
        >
          <div className='flex flex-col rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:shadow-xl md:flex-row'>
            <div className='p-4'>
              <div className='m-auto w-[80px]'>
                <CircularProgressBar percent={92} />
              </div>
            </div>
            <div className='md:ml-4'>
              <h4 className='mt-2 text-center font-semibold md:text-left'>Front-End</h4>
              <p className='text-center md:text-left'>
                Develop responsive web applications by using Javascript frameworks. Coding and testing program modules to meet design
                specifications. Prepare Technical documents and Perform knowledge transfer to customer.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn='animate__flipInX'
          animateOut='animate__flipOutX'
        >
          <div className='flex flex-col rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:shadow-xl md:flex-row'>
            <div className='p-4'>
              <div className='m-auto w-[80px]'>
                <CircularProgressBar percent={84} />
              </div>
            </div>
            <div className='md:ml-4'>
              <h4 className='mt-2 text-center font-semibold md:text-left'>System Analyst</h4>
              <p className='text-center md:text-left'>
                Assist with the design and testing of systems and use requirement documents and solution design to come up with technical
                specifications document. Work closely with a team of product owners, designers, and other engineers to build class-leading
                experiences for our customers.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn='animate__flipInX'
          animateOut='animate__flipOutX'
        >
          <div className='flex flex-col rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:shadow-xl md:flex-row'>
            <div className='p-4'>
              <div className='m-auto w-[80px]'>
                <CircularProgressBar percent={86} />
              </div>
            </div>
            <div className='md:ml-4'>
              <h4 className='mt-2 text-center font-semibold md:text-left'>Team Management</h4>
              <p className='text-center md:text-left'>
                Maintain processes to ensure project management documentation, reports and plans are relevant, accurate, and complete. Track
                and report on project portfolio performance, provide a real-time, comprehensive, and prioritized view of all projects.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};
