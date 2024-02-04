import Education from '@/models/Education';

const getList = (): Promise<Education[]> => {
  const items: Education[] = [
    {
      start: 'March 2005',
      title: 'High School',
      description: 'I graduated with a Sci-Math from Piyabut school',
    },
    {
      start: 'March 2009',
      title: 'Bachelor&apos;s degree',
      description: 'I graduated with a Bachelor&apos;s degree(B. Sc.) from Thepsatri Rajabhat',
    },
  ];

  return new Promise<Education[]>((resolve, reject) => {
    resolve(items);
    reject(null);
  });
};

const EducationService = {
  getList,
};

export default EducationService;
