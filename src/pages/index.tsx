import { Certificate, Education, Experience, KnowMeMore, Skill, WhatIDo } from '@/components/home';
import { NextPage } from 'next';
import { Sidebar } from '../layouts/Sidebar';

const Index: NextPage = () => {
    return (
        <>
            <div className='relative min-h-screen w-full bg-slate-900 font-thin text-[#E2E6EE]'>
                <div className='max-w-container mx-auto'>
                    <Sidebar />
                    <main className='space-y-10 p-6 pl-[310px]'>
                        <div className=''>
                            <KnowMeMore />
                        </div>
                        <div className=''>
                            <WhatIDo />
                        </div>
                        <div className=''>
                            <Skill />
                        </div>
                        <div className=''>
                            <Education />
                        </div>
                        <div className=''>
                            <Experience />
                        </div>
                        <div className=''>
                            <Certificate />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Index;
