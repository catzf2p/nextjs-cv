import { Card } from '@/models/WhatIDo';
import { CircularProgressBar } from '@/components/common';
import { Title } from '@/components/home/Title';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

type CardProps = {
  dataSource: Card;
};

const defaultValue: Card[] = [
  {
    title: 'Front-End',
    description:
      'Develop responsive web applications by using Javascript frameworks. Coding and testing program modules to meet design specifications. Prepare Technical documents and Perform knowledge transfer to customer.',
    percent: 88,
  },
  {
    title: 'Back-End',
    description:
      'Collaborating with the front-end developers and other team members to establish objectives and design more functional, cohesive codes to enhance the user experience. Participating in continuing education and training to remain current on best practices, learn new programming languages.',
    percent: 92,
  },
  {
    title: 'System Analyst',
    description:
      'Assist with the design and testing of systems and use requirement documents and solution design to come up with technical specifications document. Work closely with a team of product owners, designers, and other engineers to build class-leading experiences for our customers.',
    percent: 86,
  },
  {
    title: 'Team Management',
    description:
      'Maintain processes to ensure project management documentation, reports and plans are relevant, accurate, and complete. Track and report on project portfolio performance, provide a real-time, comprehensive, and prioritized view of all projects.',
    percent: 94,
  },
];

export const WhatIDo: React.FC = () => {
  const [cards] = useState(defaultValue);

  const Card = (props: CardProps) => {
    const { dataSource: item } = props;
    return (
      <>
        <ScrollAnimation
          animateOnce={true}
          animatePreScroll={true}
          animateIn='animate__zoomInDown'
        >
          <div className='flex flex-col rounded-xl border border-slate-800/60 bg-slate-800/30 p-2 transition-all hover:shadow-xl md:flex-row'>
            <div className='m-auto w-32 min-w-[13%] p-4'>
              <CircularProgressBar percent={item.percent} />
            </div>
            <div className='flex flex-col justify-center md:ml-2'>
              <h4 className='my-2 text-center text-xl font-semibold md:text-left'>{item.title}</h4>
              <p className='text-center md:text-left'>{item.description}</p>
            </div>
          </div>
        </ScrollAnimation>
      </>
    );
  };

  return (
    <>
      <div className='mt-6 grid gap-6'>
        <Title
          icon={<LightBulbIcon />}
          text='What I Do'
        />
        {cards.map((card) => {
          return (
            <>
              <Card dataSource={card} />
            </>
          );
        })}
      </div>
    </>
  );
};
