import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const backends = [
  {
    name: 'NodeJs',
    icon: 'devicon-nodejs-plain',
  },
  {
    name: 'NestJs',
    icon: 'devicon-nestjs-plain',
  },
  {
    name: '.NET Core',
    icon: 'devicon-dotnetcore-plain',
  },
  {
    name: 'Grafana',
    icon: 'devicon-grafana-original',
  },
  {
    name: 'Prometheus',
    icon: 'devicon-prometheus-original',
  },
  {
    name: 'Kafka',
    icon: 'devicon-apachekafka-original',
  },
  {
    name: 'Socket.IO',
    icon: 'devicon-socketio-original',
  },
  {
    name: 'NGINX',
    icon: 'devicon-nginx-original',
  },
];

const frontends = [
  {
    name: 'HTML5',
    icon: 'devicon-html5-plain',
  },
  {
    name: 'CSS3',
    icon: 'devicon-css3-plain',
  },
  {
    name: 'Bootstrap',
    icon: 'devicon-bootstrap-plain',
  },
  {
    name: 'jQuery',
    icon: 'devicon-jquery-plain',
  },
  {
    name: 'MUI',
    icon: 'devicon-materialui-plain',
  },
  {
    name: 'Tailwind',
    icon: 'devicon-tailwindcss-plain',
  },
  {
    name: 'Angular',
    icon: 'devicon-angularjs-plain',
  },
  {
    name: 'React',
    icon: 'devicon-react-original',
  },
];

const databases = [
  {
    name: 'redis',
    icon: 'devicon-redis-plain',
  },
  {
    name: 'MongoDB',
    icon: 'devicon-mongodb-plain',
  },
  {
    name: 'Firebase',
    icon: 'devicon-firebase-plain',
  },
  {
    name: 'PostgreSQL',
    icon: 'devicon-postgresql-plain',
  },
  {
    name: 'MSSQL',
    icon: 'devicon-microsoftsqlserver-plain',
  },
  {
    name: 'MySQL',
    icon: 'devicon-mysql-plain',
  },
  {
    name: 'ORACLE',
    icon: 'devicon-oracle-plain',
  },
];

const devops = [
  {
    name: 'AWS',
    icon: 'devicon-amazonwebservices-original',
  },
  {
    name: 'Azure',
    icon: 'devicon-azure-plain',
  },
  {
    name: 'Google',
    icon: 'devicon-googlecloud-plain',
  },
  {
    name: 'Argo CD',
    icon: 'devicon-argocd-plain',
  },
  {
    name: 'Jenkins',
    icon: 'devicon-jenkins-plain',
  },
  {
    name: 'Docker',
    icon: 'devicon-docker-plain',
  },
  {
    name: 'Kubernetes',
    icon: 'devicon-kubernetes-plain',
  },
  {
    name: 'Vagrant',
    icon: 'devicon-vagrant-plain',
  },
];

const developerTools = [
  {
    name: 'Jira',
    icon: 'devicon-jira-plain',
  },
  {
    name: 'Adobe XD',
    icon: 'devicon-xd-plain',
  },
  {
    name: 'Figma',
    icon: 'devicon-figma-plain',
  },
  {
    name: 'Confluence',
    icon: 'devicon-confluence-original',
  },
  {
    name: 'Bitbucket',
    icon: 'devicon-bitbucket-original',
  },
  {
    name: 'GitHub',
    icon: 'devicon-github-original',
  },
  {
    name: 'GitLab',
    icon: 'devicon-gitlab-plain',
  },
  {
    name: 'Slack',
    icon: 'devicon-slack-plain',
  },
  {
    name: 'npm',
    icon: 'devicon-npm-original-wordmark',
  },
  {
    name: 'nuget',
    icon: 'devicon-nuget-original',
  },
  {
    name: 'VS Code',
    icon: 'devicon-vscode-plain',
  },
];

const programmingLanguages = [
  {
    name: 'JavaScript',
    icon: 'devicon-javascript-plain',
  },
  {
    name: 'TypeScript',
    icon: 'devicon-typescript-plain',
  },
  {
    name: 'C#',
    icon: 'devicon-csharp-plain',
  },
  {
    name: 'GoLang',
    icon: 'devicon-go-plain',
  },
  // {
  //   name: 'Rust',
  //   icon: 'devicon-rust-plain',
  // },
  // {
  //   name: 'Python',
  //   icon: 'devicon-python-plain',
  // },
];

const operatingSystems = [
  {
    name: 'Linux',
    icon: 'devicon-linux-plain',
  },
  {
    name: 'Windows',
    icon: 'devicon-windows8-original',
  },
];

const renderBox = (item: { name: string; icon: string }) => {
  return (
    <>
      <ScrollAnimation
        animateOnce={true}
        animateIn='animate__bounceIn'
        animateOut='animate__bounceOut'
      >
        <div className='flex flex-col items-center justify-center rounded-xl border border-slate-800/60 bg-slate-800/30 p-4 transition-all hover:scale-110 hover:shadow-xl'>
          <i className={`${item.icon} text-2xl`}></i>
          <span className='mt-2 text-xs font-normal'>{item.name}</span>
        </div>
      </ScrollAnimation>
    </>
  );
};

export const Skill: React.FC = () => {
  return (
    <>
      <div className='w-ful min-w-full'>
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
              Technical skills
            </span>
          </h2>
        </ScrollAnimation>
        <h4 className='mt-2 text-center font-semibold md:text-left'>Programming Languages</h4>
        <div className='my-6 grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8'>
          {programmingLanguages.map((item) => {
            return renderBox(item);
          })}
        </div>
        <h4 className='mt-2 text-center font-semibold md:text-left'>Front-End</h4>
        <div className='my-6 grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8'>
          {frontends.map((item) => {
            return renderBox(item);
          })}
        </div>
        <h4 className='mt-2 text-center font-semibold md:text-left'>Back-End</h4>
        <div className='my-6 grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8'>
          {backends.map((item) => {
            return renderBox(item);
          })}
        </div>
        <h4 className='mt-2 text-center font-semibold md:text-left'>Databases</h4>
        <div className='my-6 grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8'>
          {databases.map((item) => {
            return renderBox(item);
          })}
        </div>
        <h4 className='mt-2 text-center font-semibold md:text-left'>Developer tools</h4>
        <div className='my-6 grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8'>
          {developerTools.map((item) => {
            return renderBox(item);
          })}
        </div>
        <h4 className='mt-2 text-center font-semibold md:text-left'>DevOps and CI/CD</h4>
        <div className='my-6 grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8'>
          {devops.map((item) => {
            return renderBox(item);
          })}
        </div>
        <h4 className='mt-2 text-center font-semibold md:text-left'>Computer operating systems</h4>
        <div className='my-6 grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8'>
          {operatingSystems.map((item) => {
            return renderBox(item);
          })}
        </div>
      </div>
    </>
  );
};
