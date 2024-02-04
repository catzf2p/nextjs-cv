import Certificate from '@/models/Certificate';

const getList = (): Promise<Certificate[]> => {
  const items: Certificate[] = [
    {
      title: 'LeSS in Action: Scrum Developer',
      description:
        'Agility is constrained by Technical Agility. The 5-day development practice course is 70% hands-on and 30% lecture and has three main focuses: Large-Scale Scrum, technical practices, and authentic team dynamics.',
      imageUrl: 'assets/bg-agile.jpeg',
    },
    {
      title: 'PDPA In Action : IT Management & Governance for IT',
      description:
        'Find out what are the updates and how it affects the individual and all businesses (small and large). Also discover what are the first steps to become compliant. Finally, through case studies learn from mistakes made by others and take steps to prevent them from happening to you.',
      imageUrl: 'assets/bg-pdpa.jpeg',
    },
  ];

  return new Promise<Certificate[]>((resolve, reject) => {
    resolve(items);
    reject(null);
  });
};

const CertificateService = {
  getList,
};

export default CertificateService;
