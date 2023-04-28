import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  git,
  figma,
  trendmicro,
  accenture,
  favicon,
  alakShop,
  phonepirates,
  fdma,
  android,
  csharp,
  java,
  kotlin,
  php,
  unity,
  laravel,
  wordpress,
  bloodbank,
  adventurewolfy,
  darkness,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
  {
    title: "Laravel Developer",
    icon: laravel,
  },
  {
    title: "Wordpress Developer",
    icon: wordpress,
  },
  {
    title: "Java Developer",
    icon: java,
  },
  {
    title: ".Net Developer",
    icon: csharp,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

  {
    name: "android",
    icon: android,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Unity",
    icon: unity,
  },
];

const experiences = [
  {
    title: "Threathunter Intern",
    company_name: "Trend Micro Philippines",
    icon: trendmicro,
    iconBg: "#383E56",
    date: "August 2021 - November 2021",
    points: [
      "Gathered and analysed online sources of scams and malware to identify potential threats to internet users",
      "Marked and evaluated accurately potentially dangerous websites, verifying their threats safely",
      "Contributed to the protection of internet users from online threats",
    ],
  },
  {
    title: "Enterprise Asset Management Developer Intern",
    company_name: "Accenture Inc. Philippines",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "February 2022 - May 2022",
    points: [
      "Participated in daily scrum meetings and reports under the supervision of the Team Lead Developer",
      "Reviewed and helped improve the code of team members to ensure project quality and standards were met",
      "Developed and evaluated a code checker to increase team efficiency",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer and Designer",
    company_name: "Freelance",
    icon: favicon,
    iconBg: "#383E56",
    date: "October 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developed visually appealing and user-friendly websites for clients",
      "Managed multiple projects and delivered high-quality work on time and on budget",
      "Gathered and compiled client needs and developed solutions that met their business objectives",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      " Graduated Magna Cum Laude for Bachelor of Science in Computer Science major in Software Engineering",
    name: "Information and Communications Technology Academy",
    designation: "Makati",
    company: "Philippines",
  },
  {
    testimonial:
      "Academic Excellence from 2018-2022",
    name: "Information and Communications Technology Academy",
    designation: "Makati",
    company: "Philippines",
  },
  {
    testimonial:
      "1st honor Dean Lister From 2018-2022",
    name: "Information and Communications Technology Academy",
    designation: "Makati",
    company: "Philippines",
  },
];

const projects = [
  {
    name: "The AlakShop",
    description:
      "Web-based platform that allows users to search, put into cart, update cart and Checkout Alcoholic Drinks. This project is made to be my project for my seb programming subject in College.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: alakShop,
    source_code_link: "http://alakshop.shop/",
  },
  {
    name: "Phone Pirates",
    description:
      "A Java EE E-commerce website made using struts 2 framework made by Me and James Liam De Jesus. We also designed the web application that follows the GOF design patterns",
    tags: [
      {
        name: "JavaEE",
        color: "blue-text-gradient",
      },
      {
        name: "Struts2",
        color: "green-text-gradient",
      },
      {
        name: "GOFDesignPatterns",
        color: "pink-text-gradient",
      },
    ],
    image: phonepirates,
    source_code_link: "https://github.com/JC-Dulos10/My-Java-School-Projects/",
  },
  {
    name: "Fall Detector Mobile Application",
    description:
      "An Android mobile application integrated with Arduino project proposed by me and my team as our thesis project. An Internet of things device using android mobile application integrated with Arduino which is installed in a wheelchair.",
    tags: [
      {
        name: "AndroidStudio",
        color: "blue-text-gradient",
      },
      {
        name: "Arduino",
        color: "green-text-gradient",
      },
      {
        name: "IoT",
        color: "pink-text-gradient",
      },
    ],
    image: fdma,
    source_code_link: "https://github.com/JC-Dulos10/SEG31-CSTHES",
  },
  {
    name: "Blood Bank Management System",
    description:
      "A mini thesis that me and my group made for during my 2nd Year in iAcademy about a Management system to organize blood bank storages",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MVCModel",
        color: "green-text-gradient",
      },
      {
        name: "NetBeansIDE",
        color: "pink-text-gradient",
      },
    ],
    image: bloodbank,
    source_code_link: "https://github.com/JC-Dulos10/BloodBankManagement-Team-Yorme",
  },
  {
    name: "Adventure of Wolfy",
    description:
      "A simple personal 3D Infinite runner game project that I made in Unity to apply the lesson that I learned in my Unity class.",
    tags: [
      {
        name: "Unity3D",
        color: "blue-text-gradient",
      },
      {
        name: "GameDevelopment",
        color: "green-text-gradient",
      },
      {
        name: "InfiniteRunner",
        color: "pink-text-gradient",
      },
    ],
    image: adventurewolfy,
    source_code_link: "https://github.com/JC-Dulos10/InfiniteRunner",
  },
  {
    name: "Darkness",
    description:
      "A 3D game project that I made for my Unity 3D class which uses a lot of 3D components in a game. And I got the inspiration from the game slender man.",
    tags: [
      {
        name: "Unity3D",
        color: "blue-text-gradient",
      },
      {
        name: "Darkness",
        color: "green-text-gradient",
      },
      {
        name: "3DGameDevelopment",
        color: "pink-text-gradient",
      },
    ],
    image: darkness,
    source_code_link: "https://github.com/JC-Dulos10/Darkness",
  },
];

export { services, technologies, experiences, testimonials, projects };
