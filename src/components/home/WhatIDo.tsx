import { CircularProgressBar } from '@/components/common';
import { Title } from '@/components/home/Title';
import WhatIDoService from '@/services/WhatIDoService';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import WhatIDoModel from '@/models/WhatIDo';

export const WhatIDo: React.FC = () => {
  const [items, setItems] = useState<WhatIDoModel[]>([]);

  const getData = async () => {
    const data = await WhatIDoService.getList();
    setItems(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='mt-6 grid min-w-full gap-6'>
        <Title
          icon={<LightBulbIcon />}
          text='What I Do'
        />
        {items.map((item) => {
          return (
            <>
              <ScrollAnimation
                animateOnce={true}
                animateIn='animate__fadeInUp'
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
        })}
      </div>
    </>
  );
};
