import Experience from '@/models/Experience';

const getList = (): Promise<Experience[]> => {
  const items: Experience[] = [
    {
      company: 'B2C Activation Co., Ltd.',
      position: 'Web Developer',
      startAt: '2010',
      endAt: '2014',
      responsibilities: [
        'Interacted with users to gather the business requirements.',
        'Designed and implemented the 3-Tier architecture.',
        'Used ASP.NET AJAX server Control and toolkit to asynchronously retrieve data from server for a better performance and an increase in interactive animation on web pages.',
        'Used ADO.NET objects such as Data Reader, Dataset and Data Adapter to retrieve and store the input information in database.',
        'Used Master Page and User Controls to increase code reusability.',
        'Used Grid Views, Repeaters and Data Lists to retrieve and display the data in the required format.',
        'Utilized Session Objects and Cookies to store the application state.',
      ],
    },
    {
      company: 'Silkspan Co., Ltd.',
      position: 'Web Developer',
      startAt: '2014',
      endAt: '2015',
      responsibilities: [
        'Analyzed the Functional Requirements Specifications and System Design Specifications and interacted with the team.',
        'Rebuilt and enhanced existing Financial and Insurance site with .NET Technology.',
        'Developed the application using agile methodology and actively participated in Scrum meetings.',
        'Designed and implemented the 3-Tier architecture.',
        'Designed and implemented modules to retrieve data using AJAX calls through jQuery methods.',
        'Trained the end users on the functionality of the new module.',
        'Involved in the Unit and Integration testing.',
        'Used Visual SourceSafe and SVN for Version Control.',
      ],
    },
    {
      company: 'Kiatnakin Phatra Bank Pub Co., Ltd.',
      position: 'Software Engineer',
      startAt: '2015',
      endAt: '2018',
      responsibilities: [
        'Analyzed the Functional Requirements Specifications and System Design Specifications and interacted with the team.',
        'Rebuilt and enhanced existing Financial and Insurance site with JavaScript and .NET Technology.',
        'Involved in a full Software development life-cycle (SDLC) followed by agile methodologies to produce high quality software models using N-Tier Architecture.',
        'Involved in writing SQL and Stored Procedures for handling complex queries with help of TOAD and accessing them through .NET Programs from Oracle Database.',
        'Designed and implemented the N-Tier architecture.',
        'Designed and implemented Web Applications using ASP.NET MVC, HTML5, CSS3, Bootstrap and jQuery.',
        'Designed and implemented Web Services using C#.NET.',
        'Developed SSIS packages to automate data imports between the databases.',
        'Developed WCF services for gateways, by creating Service Contracts, Data Contracts and Message Contracts to get/save the data for transaction details.',
        'Developed reports using MSSQL Reporting Services and Crystal Reports.',
        'Developed unit test scenarios and tested test scenarios using XUnit.',
        'Performed code reviews to ensure it met the coding standards and guidelines.',
        'Reviewed system test scenarios & test cases.',
        'Involved in the Unit and Integration testing.',
        'Used SVN and Git for Version Control.',
      ],
    },
    {
      company: 'Ookbee Co., Ltd.',
      position: 'Software Engineer',
      startAt: '2016',
      endAt: '2021',
      responsibilities: [
        'Involved in the full Life Cycle of the project including Architecture, Analysis Design, Development, Debugging, Testing and Deployment.',
        'Involved in full Software development life-cycle (SDLC) followed by agile methodologies to produce high quality software model using N-Tier Architecture.',
        'Rebuilt and enhanced existing Web Applications and Web Services with JavaScript and .NET Technology.',
        'Designed and implemented Web Applications using HTML5, CSS3, Angular, React, TypeScript and TailwindCSS',
        'Designed and implemented Web Services using C#.NET, .NET Core, .NET 6 and Node.js.',
        'Designed and implemented Kafka streams as a message-bus and developed data pipelines to ingest data to Redis, mongoDb and PostgreSQL.',
        'Designed and implemented a WebSocket with Socket.io in Node.js and SignalR in C#.NET for adding real-time functionality to applications.',
        'Developed unit test cases for the applications using XUnit and Moq.',
        'Developed Locust scripts for load testing.',
        'Created Dockerfile, docker-compose.yml and script to deploy images in Docker containers.',
        'Created Git repos and Jenkins jobs for the build and deployment of Microservices in Docker containers.',
        'Created RESTful endpoints to Cache application specific data in in-memory data clusters like Redis and exposed them with RESTful endpoints by using Redis Cache.',
        'Worked with Grafana to visualize the data by creating dashboards.',
        'Monitor cpu, mem, http status, network traffic and other important metrics of API.',
        'Built a team of developers from scratch by interviewing, training and mentoring them.',
        'Reviewed system test scenarios & test cases.',
        'Used Git for Version Control.',
      ],
    },
    {
      company: 'G-ABLE Pub Co., Ltd.',
      position: 'System Analyst',
      startAt: '2022',
      endAt: '2022',
      responsibilities: [
        'Collect and assess customer needs with the Presales team in order to create a clear scope of work and meet customer expectations.',
        'Participate in preparing, evaluating work and resources required for developing work systems in order to prepare appropriate proposals and quotations.',
        'Analyze requirements and summarize as a Workflow or Data Flow or Business Functions document to be able to clearly see the overview of the work system.',
        'Evaluate the resources required to develop the work system. and plan work together with relevant parties in order to be able to deliver the work system in time according to the needs of customers.',
        'Supervise and give advice on work systems and development techniques to get an efficient work system and meet the needs of customers.',
        'Provide technical support to end-users and troubleshoot any issues that may arise.',
        'Support production incidents together with developer and operation team.',
        'Ensure that the software systems are efficient and able to perform their tasks quickly and accurately.',
        'Ensure document software systems can be easily understood and maintained.',
        'Plan sprint timeline and task with team.',
        'Coordinate closely with developer during system development.',
        'Lead and manage outsource to achieve deliverable & assignment.',
        'Work with QA and software testing teams.',
        'Suggest and help to guide team for technical skills.',
      ],
    },
    {
      company: 'SkillLane Co., Ltd.',
      position: 'Software Engineer',
      startAt: '2023',
      endAt: '2023',
      responsibilities: [
        'Working with an agile team to develop, test and maintain applications and services in accordance with established standards.',
        'Adhering to high-quality development principles while delivering solutions/features on-time.',
        'Design and implement end-to-end system structure and solution to support business needs.',
        'Establish appropriate infrastructure for each applications/services.',
        'Package and support deployment of application releases.',
        'Participate in Agile events, e.g. Daily Scrum, Sprint Planning, Backlog Refinement, Sprint Review, Sprint retrospective etc.',
        'Preparing reports, manuals and other documents to support operations.',
        'Participating in peer-reviews of solution designs and related code.',
        'Analyze and resolve technical application problems.',
        'Cooperate with customer support, operation and marketing teams to support end-users.',
        'Coach other team members.',
      ],
    },
  ];

  return new Promise<Experience[]>((resolve, reject) => {
    resolve(items);
    reject(null);
  });
};

const ExperienceService = {
  getList,
};

export default ExperienceService;
