import { Certificate, Education, Experience, KnowMeMore, Skill, WhatIDo } from '@/components/home';
import { NextPage } from 'next';
import { Sidebar } from '../layouts/Sidebar';

const Index: NextPage = () => {
  return (
    <>
      <div className='relative bg-slate-900 font-thin text-[#E2E6EE]'>
        <div className='max-w-container mx-auto'>
          <Sidebar />
          <div className='space-y-10 p-6 lg:pl-[310px]'>
            <KnowMeMore />
            <WhatIDo />
            <Skill />
            <Education />
            <Experience />
            <Certificate />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
