import TechnicalSkill from '@/models/TechnicalSkill';

const getList = (): Promise<TechnicalSkill[]> => {
  const items: TechnicalSkill[] = [
    {
      title: 'Programming Languages',
      items: [
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
      ],
    },
    {
      title: 'Front-End',
      items: [
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
      ],
    },
    {
      title: 'Back-End',
      items: [
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
      ],
    },
    {
      title: 'Databases',
      items: [
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
      ],
    },
    {
      title: 'Developer tools',
      items: [
        {
          name: 'Slack',
          icon: 'devicon-slack-plain',
        },
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
          name: 'GitHub',
          icon: 'devicon-github-original',
        },
        {
          name: 'GitLab',
          icon: 'devicon-gitlab-plain',
        },
        {
          name: 'Bitbucket',
          icon: 'devicon-bitbucket-original',
        },
        {
          name: 'Confluence',
          icon: 'devicon-confluence-original',
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
      ],
    },
    {
      title: 'DevOps and CI/CD',
      items: [
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
      ],
    },
    {
      title: 'Computer operating systems',
      items: [
        {
          name: 'Linux',
          icon: 'devicon-linux-plain',
        },
        {
          name: 'Windows',
          icon: 'devicon-windows8-original',
        },
      ],
    },
  ];

  return new Promise<TechnicalSkill[]>((resolve, reject) => {
    resolve(items);
    reject(null);
  });
};

const WhatIDoService = {
  getList,
};

export default WhatIDoService;
