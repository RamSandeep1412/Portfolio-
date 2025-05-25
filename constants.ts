
import { NavLinkItem, Project, Skill, AboutData, HomeData, StudyEntry } from './types';

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

export const HOME_DATA: HomeData = {
  name: "Ram Sandeep Donga",
  title: "Fullstack Developer(DotNet,React)",
  summary: "Fullstack Developer with over 3 years of experience designing, \ndeveloping, and deploying scalable web applications and RESTful APIs, \nwith expertise in .NET Core and React.js. Key achievements include \nengineering a full-stack web application improving data processing \nspeed by 20% and achieving 90% code coverage with MSTest, \nsignificantly reducing regression bugs. Eager to leverage \ncomprehensive .NET and React expertise to contribute to innovative \ntechnology solutions and challenging projects.",
  imageUrl: '/Profile.jpeg',
};

export const ABOUT_DATA: AboutData = {
  bio: "I'm a lifelong learner, constantly exploring new technologies and creative avenues. My journey into web development started with a fascination for how interactive digital experiences are crafted, and it has grown into a fulfilling career.",
  study: [
    {
      institution: "Sriniva Institute of Engineering and Techology",
      degree: "B.Tech Mechanical Engineering",
      details: [
        "CGPA : 7.4",
        "Passed : 2021"
      ]
    },
    {
      institution: "Sriniva Institute of Engineering and Techology",
      degree: "Diploma Mechanical Engineering",
      details: [
        "CGPA : 7.8",
        "Passed : 2018"
      ]
    }
  ],
  hobbies: [
    "Landscape Photography: Capturing the beauty of nature.",
    "Generative Art: Exploring code as a creative medium.",
    "Hiking & Backpacking: Finding inspiration outdoors.",
    "Playing cricket",
    "Traveling"
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'E-Commerce Platform  Enhancement ',
    title: 'Software Developer ',
    description: 'Redesigned and optimized core modules for order processing and inventory management using .NET Framework, ASP.NET MVC, Web API, and React.js, improving system performance and frontend usability.Enhanced API efficiency, refactored legacy code into modular React components, and improved UI responsiveness, resulting in faster load times and increased user task efficiency.',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*VsfOU78JZ2XyMEp-cgj-iQ.jpeg',
    technologies: ['React', 'C#', 'AsP.NET Web API', 'Entity Framework'],
    responsibilities: [
      'Contributed to the design and enhancement of core modules, including order processing and inventory management, using .NET Framework, ASP.NET MVC, and React.js.',
      'Boosted data retrieval performance and enabled seamless frontend feature integration by developing new ASP.NET Web API endpoints and optimizing existing ones.',
      'Reduced page load times by 10% and enhanced code maintainability through refactoring legacy frontend code into modular, reusable React components.',
      'Leveraged Git for source control and Azure DevOps to manage tasks, track progress, and conduct thorough peer code reviews.'
    ],
  },
  {
    id: 'project2',
    title: 'Europa',
    description: 'Developed and delivered a full-stack web application using C# and .NET Core Web API, designing secure RESTful APIs that improved data processing speed by 20% and boosted system scalability. Built efficient backend logic and data access layers with Entity Framework Core and SQL Server, reducing query latency by 25%, and ensured code quality through comprehensive MSTest unit testing.',
    imageUrl: 'https://www.cromacampus.com/public/uploads/Blog/2022/12/week_3/Dot-NET-Full-Stack-Developer.webp',
    technologies: ['Next.js', 'TypeScript', 'GraphQL', 'Gemini API'],
    responsibilities: [
      ' Engineered and delivered a full-stack web application utilizing C#, .NET Core Web API for backend services.',
      ' Designed and implemented RESTful APIs for secure data exchange, resulting in a 20% improvement in data processing speed and enhanced system scalability',
      ' Implemented thorough unit tests using MSTest to ensure the quality of newly developed backend modules',
      ' Implemented robust backend logic and data access layers using Entity Framework Core with SQL Server, optimizing database queries to reduce latency by 25%'
    ],
  },
  // {
  //   id: 'project3',
  //   title: 'Smart Home Dashboard',
  //   description: 'A responsive dashboard for controlling and monitoring smart home devices, with real-time data visualization.',
  //   imageUrl: 'https://picsum.photos/seed/project3/400/300',
  //   technologies: ['Vue.js', 'D3.js', 'Node.js', 'WebSocket'],
  //   responsibilities: [
  //     'Built real-time data visualizations using D3.js.',
  //     'Implemented WebSocket communication for live updates.',
  //     'Ensured responsive design across various devices.',
  //   ],
    
  // },
  //  {
  //   id: 'project4',
  //   title: 'Minimalist Task Manager',
  //   description: 'A clean and focused task management app designed for productivity and simplicity.',
  //   imageUrl: 'https://picsum.photos/seed/project4/400/300',
  //   technologies: ['Svelte', 'Tailwind CSS', 'Local Storage'],
  //   responsibilities: [
  //     'Designed the minimalist UI focusing on user experience.',
  //     'Utilized Svelte for a lightweight and performant application.',
  //     'Implemented state management using local storage for offline access.',
  //   ],
  // },
];

export const SKILLS_DATA: Skill[] = [
  { id: 'skill1', name: 'C#', level: 95 },
  { id: 'skill2', name: 'ASP.NET Web API', level: 90 },
  { id: 'skill3', name: 'Enitity Framework', level: 95 },
  { id: 'skill4', name: 'ASP MVC', level: 95 },
  { id: 'skill5', name: 'React', level: 95 },
  { id: 'skill6', name: 'JavaScript (ES6+)', level: 95 },
  { id: 'skill7', name: 'BootStrap', level: 98 },
  { id: 'skill8', name: 'Node.js', level: 75 },
  { id: 'skill9', name: 'Azure', level: 85 },
  { id: 'skill10', name: 'Git & GitHub', level: 90 },
  { id: 'skill11', name: 'REST APIs', level: 88 },
  { id: 'skill12', name: 'MySql', level: 70 },
  { id: 'skill13', name: 'Sonar Lint', level: 80 },
];

export const NAVBAR_HEIGHT = 72; // Approximate height of the navbar in pixels
