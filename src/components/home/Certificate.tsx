import React, { useEffect, useState } from 'react';
import { Title } from '@/components/home/Title';
import { CertificateService } from '@/services';
import { WrenchIcon } from '@heroicons/react/24/outline';
import ScrollAnimation from 'react-animate-on-scroll';
import CertificateModel from '@/models/Certificate';

export const Certificate: React.FC = () => {
  const [items, setItems] = useState<CertificateModel[]>([]);

  const getData = async () => {
    const data = await CertificateService.getList();
    setItems(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='w-ful min-w-full space-y-6'>
        <Title
          icon={<WrenchIcon />}
          text='Training'
        />
        {items.map((item) => {
          return (
            <>
              <ScrollAnimation
                animateOnce={true}
                animateIn='animate__bounce'
              >
                <div className='flex flex-col rounded-xl border border-slate-800/60 bg-slate-800/30 shadow-xl md:flex-row'>
                  <img
                    className='w-full rounded-t-xl md:w-1/4 md:rounded-l-xl md:rounded-r-none'
                    src={item.imageUrl}
                    alt=''
                  />
                  <div className='flex flex-col p-6'>
                    <h5 className='text-lg font-bold'>{item.title}</h5>
                    <p className='mt-2'>{item.description}</p>
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
