import WhatIDo from '@/models/WhatIDo';

const getList = (): Promise<WhatIDo[]> => {
  const items: WhatIDo[] = [
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

  return new Promise<WhatIDo[]>((resolve, reject) => {
    resolve(items);
    reject(null);
  });
};

const WhatIDoService = {
  getList,
};

export default WhatIDoService;
