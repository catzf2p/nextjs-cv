import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const Skill: React.FC = () => {
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
                        <path d='M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1'></path>
                        <path d='M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2'></path>
                        <path d='M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2'></path>
                        <path d='M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z'></path>
                        <path d='M16.746 16.726a3 3 0 1 0 .252 -5.555'></path>
                    </svg>
                    <span className='bg-gradient-to-r from-purple-500 to-blue-700 bg-clip-text text-3xl font-bold text-transparent'>
                        Skills
                    </span>
                </h2>
            </ScrollAnimation>
            <div className='mt-6 grid grid-cols-7 gap-6 text-sm'>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[40px]'
                            src='assets/logo-html5.png'
                        />
                        <span className='mt-2'>HTML5</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[30px]'
                            src='assets/logo-css3.png'
                        />
                        <span className='mt-2'>CSS3</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[46px]'
                            src='assets/logo-tailwind.png'
                        />
                        <span className='mt-2'>Tailwind</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-angular.svg'
                        />
                        <span className='mt-2'>Angular</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[40px]'
                            src='assets/logo-react.png'
                        />
                        <span className='mt-2'>React</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[40px]'
                            src='assets/logo-restful.png'
                        />
                        <span className='mt-2'>RESTful</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[40px] rounded-full bg-white p-1'
                            src='assets/logo-websocket.png'
                        />
                        <span className='mt-2'>Websocket</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[34px]'
                            src='assets/logo-typescript.png'
                        />
                        <span className='mt-2'>TypeScript</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-nodejs.png'
                        />
                        <span className='mt-2'>NodeJS</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[40px]'
                            src='assets/logo-nestjs.svg'
                        />
                        <span className='mt-2'>NestJs</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-typeorm.png'
                        />
                        <span className='mt-2'>TypeORM</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-dotnet.png'
                        />
                        <span className='mt-2'>.NET</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px] rounded-full'
                            src='assets/logo-efcore.png'
                        />
                        <span className='mt-2'>EF Core</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-sentry.png'
                        />
                        <span className='mt-2'>Sentry</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[66px]'
                            src='assets/logo-oracle.png'
                        />
                        <span className='mt-2'>Oracle</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-sql-server.png'
                        />
                        <span className='mt-2'>SQL Server</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-postgresql.png'
                        />
                        <span className='mt-2'>PostgreSQL</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-mongodb.png'
                        />
                        <span className='mt-2'>mongoDB</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-redis.png'
                        />
                        <span className='mt-2'>Redis</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-elasticsearch.png'
                        />
                        <span className='mt-2'>elasticsearch</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-kafka.png'
                        />
                        <span className='mt-2'>Kafka</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-grafana.png'
                        />
                        <span className='mt-2'>Grafana</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-git.png'
                        />
                        <span className='mt-2'>Git</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-docker.png'
                        />
                        <span className='mt-2'>Docker</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-nginx.svg'
                        />
                        <span className='mt-2'>NGINX</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-azure.svg'
                        />
                        <span className='mt-2'>Azure</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[56px]'
                            src='assets/logo-tencent-cloud.png'
                        />
                        <span className='mt-2'>Tencent</span>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn='animate__bounceIn'
                    animateOut='animate__bounceOut'
                >
                    <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
                        <img
                            className='mt-2 w-[36px]'
                            src='assets/logo-linux.png'
                        />
                        <span className='mt-2'>Linux</span>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    );
};
