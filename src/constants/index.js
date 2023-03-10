import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  niche,
  fgs,
  ccab,
  tacit,
  fifa,
  tumblr,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "NichePharma",
    icon: niche,
    iconBg: "#383E56",
    date: "Oct 2022 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Work on back-end & front-end development of core scripts using Angular/React/Redux/NodeJS/Express/MongoDB.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Automation Engineer Intern",
    company_name: "First Gulf Solutions",
    icon: fgs,
    iconBg: "#E6DEDD",
    date: "Aug 2022 – Sep 2022",
    points: [
      "Design and execute QA tests using scripts that automatically test functionality.",
      "Establish monitoring and quality assurance processes.",
      "Run tests for databases, systems, networks, applications, hardware, and software.",
      "Identify bugs & issues in development or business processes.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Codify College",
    icon: ccab,
    iconBg: "#383E56",
    date: "Jan 2021 – May 2022",
    points: [
      "Developing and designing front-end web architecture.",
      "Translate wireframes and PSD Designs into functional web applications.",
      "Creating RESTful services with Node.js.",
      "Test software to ensure efficiency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tacit-App",
    description:
      "Business analysis application for pharmaceutical companies. it is used to measure and analyze the performance of the company's representatives. It allows supervisors to generate reports such as KPI and visits rate.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tacit,
    source_code_link: "https://tacitapp.com/v1/dashboard/#/",
  },
  {
    name: "FIFA-Qatar",
    description:
      "This is an online automated ticket reservation system for football matches in FIFA World Cup Qatar 2022. The system allows a manager to create, manage, and maintain current and future matches. It also allows the customers to reserve specific seats for the matches they want to attend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: fifa,
    source_code_link: "https://github.com/ahmedayman1420/FIFA-Qatar-2022",
  },
  {
    name: "Tumblr4U",
    description:
      "A full mimic of Tumblr’s social media app. You can create a blog and post videos, photographs, and links to other websites.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tumblr,
    source_code_link: "https://github.com/ahmedayman1420/Tumblur4U",
  },
];

export { services, technologies, experiences, testimonials, projects };
