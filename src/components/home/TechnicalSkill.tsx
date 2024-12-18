import React, { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { CpuChipIcon } from '@heroicons/react/24/outline';
import { Title } from '@/components/home/Title';
import TechnicalSkillService from '@/services/TechnicalSkillService';
import TechnicalSkillModel from '@/models/TechnicalSkill';

export const TechnicalSkill: React.FC = () => {
  const [items, setItems] = useState<TechnicalSkillModel[]>([]);

  const getData = async () => {
    const data = await TechnicalSkillService.getList();
    setItems(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='w-ful min-w-full space-y-6'>
        <Title
          icon={<CpuChipIcon />}
          text='Technical skills'
        />
        {items.map((item) => {
          return (
            <>
              <h4 className='mt-2 text-center font-normal md:text-left'>{item.title}</h4>
              <div className='my-6 grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8'>
                {item.items.map((item) => {
                  return (
                    <>
                      <ScrollAnimation
                        animateOnce={true}
                        animateIn='animate__bounceIn'
                      >
                        <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                          <i className={`${item.icon} text-3xl`}></i>
                          <span className='mt-2 text-xs font-normal'>{item.name}</span>
                        </div>
                      </ScrollAnimation>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
