import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  starbucks,
  java,
  python,
  nextjs,
  prisma,
  mysql,
  firebase,
  githubRepoImage,
  zadenorLogo,
  appnexusLogo,
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
    id: "publications",
    title: "Publications",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software & Full-Stack Developer",
    icon: web,
  },
  {
    title: "Backend & API Development",
    icon: backend,
  },
  {
    title: "UI / Frontend Engineering",
    icon: mobile,
  },
  {
    title: "DevOps & Deployment",
    icon: creator,
  },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Next.js", icon: nextjs },
  { name: "Prisma", icon: prisma },
  { name: "Node JS", icon: nodejs },
  { name: "Git", icon: git },
  { name: "PostgreSQL / MySQL", icon: mysql },
  { name: "MongoDB", icon: mongodb },
  { name: "Firebase", icon: firebase },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Docker", icon: docker },
];

const experiences = [
  {
    title: "Junior Developer (Freelance)",
    company_name: "ZadeNor AI Remote",
    icon: zadenorLogo,
    iconBg: "#E6DEDD",
    date: "Feb 2024 – Feb 2026",
    points: [
      "Engineered an Electron-based financial database system with secure data handling and modular system design.",
      "Designed and deployed a Docker-based Redis-PostgreSQL orchestration setup, improving data retrieval performance and enabling automated deployment pipelines.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "AppNexus Pvt. Ltd. Remote",
    icon: appnexusLogo,
    iconBg: "#383E56",
    date: "Dec 2024 – Jun 2025",
    points: [
      "Developed scalable full-stack applications using Next.js and Prisma ORM, optimizing backend queries and improving API response efficiency.",
      "Implemented structured SDLC practices and version control workflows to enhance maintainability and deployment reliability.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Prayana Electric - VIT-AP IIEC Incubated Startup, Amaravati, India",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Nov 2024 – Jun 2025",
    points: [
      "Built secure REST APIs and admin dashboards, integrating database management and authentication mechanisms.",
      "Collaborated in Agile sprints, contributing to feature planning, debugging, and performance optimization.",
    ],
  },
  {
    title: "Technical Lead",
    company_name: "Pregrad",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2025 – Present",
    points: [
      "Managed small development team.",
      "Guided interns on feature design and task management.",
    ],
  },
  {
    title: "Java Intern",
    company_name: "InternPe",
    icon: meta,
    iconBg: "#383E56",
    date: "Apr – May 2024",
    points: [
      "Worked on basic Java applications.",
      "Collaborated on peer-reviewed software modules.", 
    ],
  },
];

const activities = [
  {
    role: "Outreach Team Lead",
    organization: "VIT-AP Newspaper Club",
    points: [
      "Led outreach initiatives and content strategy for university newspaper.",
      "Coordinated with teams to publish engaging campus stories and event coverage.",
    ],
  },
  {
    role: "Core Member",
    organization: "GeeksforGeeks VIT-AP Chapter",
    points: [
      "Participated in organizing coding events and hackathons.",
      "Helped students with technical mentorship and competitive programming.",
    ],
  },
  {
    role: "Marketing Member",
    organization: "MathClub VIT-AP",
    points: [
      "Promoted math-related events and workshops across campus.",
    ],
  },
  {
    role: "Member",
    organization: "Rotaract Club of VIT-AP",
    points: [
      "Participated in community service and social responsibility initiatives.",
    ],
  },
];

const certifications = [
  {
    name: "MATLAB Onramp",
    issuer: "MathWorks Academy",
    date: "2024",
    description: "Completed foundational MATLAB workflows and scripting fundamentals.",
    links: [
      {
        label: "Certificate",
        url: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=0568e052-20a2-49d0-a0ab-8ed16df3ef2e&",
      },
    ],
  },
  {
    name: "Image Processing Onramp",
    issuer: "MathWorks Academy",
    date: "2024",
    description: "Covered image enhancement and processing techniques in MATLAB.",
    links: [
      {
        label: "Certificate",
        url: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=2814a321-5c77-499b-9a44-4f77fa859eba&",
      },
    ],
  },
  {
    name: "JavaScript Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Validated JavaScript fundamentals for modern web development.",
    links: [
      {
        label: "Certificate",
        url: "https://www.credly.com/badges/63b001cf-f1be-46c2-8d81-4d23e2951fe9/linked_in_profile",
      },
    ],
  },
  {
    name: "Programming with Python Professional Certificate",
    issuer: "OpenEDG Python Institute",
    date: "Jan 2024",
    description: "Completed professional-level Python curriculum and practical exercises.",
    links: [
      {
        label: "Certificate",
        url: "https://www.linkedin.com/learning/certificates/9c96bd77c604125bc0ce4bced576bfc5c22b98aa36ca5de1ef39329e0045e044",
      },
    ],
  },
  {
    name: "Python Practice: Object-Oriented Programming",
    issuer: "LinkedIn Learning",
    date: "2024",
    description: "Focused on applied OOP patterns and object modeling in Python.",
    links: [
      {
        label: "Certificate",
        url: "https://www.linkedin.com/learning/certificates/a466c8ca6c98b6388a28f850019d8e8233b8f5897870e5ac12cd3b0802d6c066",
      },
    ],
  },
  {
    name: "Python Object-Oriented Programming",
    issuer: "LinkedIn Learning",
    date: "2024",
    description: "Covered class design, inheritance, abstraction, and reusable components.",
    links: [
      {
        label: "Certificate",
        url: "https://www.linkedin.com/learning/certificates/e11c8e78f193abd12e5a9eae236bc9f1a9ee91b4e31d781217152f1e8ba5fea4",
      },
    ],
  },
  {
    name: "Raspberry Pi Essential Training",
    issuer: "LinkedIn Learning",
    date: "Jan 2024",
    description: "Practical training on Raspberry Pi setup and device-oriented workflows.",
    links: [
      {
        label: "Certificate",
        url: "https://www.linkedin.com/learning/certificates/c0ac20d9fb31411196d253d1e49a2052e6e807f84382ed700eae0aff8e892d79?trk=share_certificate",
      },
    ],
  },
];

const publications = [
  {
    title: "Minimizing Return Rates in Online Fashion through Personalized Avatar-Based Fitting",
    venue: "IEEE SCIS 2025 (Accepted)",
    description:
      "Research focused on computer vision pipelines, image processing, and performance-aware deployment for personalized avatar-based virtual try-on systems.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Reddisekharyadav/Personalized-Avatar-Fitting",
      },
    ],
  },
  {
    title: "Speech Emotion Recognition using Hybrid CNN-BiLSTM and Attention Mechanism",
    venue: "IEEE IATMSI 2026 (Accepted)",
    description:
      "Designed and evaluated a hybrid deep learning approach for robust speech emotion recognition in practical settings.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Reddisekharyadav/Enhanced-Speech-Emotion-Recognition-SER-System",
      },
      {
        label: "Live Demo",
        url: "https://mrs-emotiondetector-ai.streamlit.app/",
      },
    ],
  },
];

const technicalActivities = [
  {
    title: "Sea Creature Classification using Deep Learning",
    description:
      "Presented a poster at a National Conference (Acharya N.G. Ranga Agricultural University); abstract published.",
    links: [
      {
        label: "Abstract",
        url: "https://www.researchgate.net/publication/397179361_ACHARYA_NG_RANGA_AGRICULTURAL_UNIVERSITY_GUIDELINES_ON_CONDUCT_DISCIPLINE_AND_WELFARE_MEASURES_FOR_STUDENTS_ACHARYA_NG_RANGA_AGRICULTURAL_UNIVERSITY",
      },
      {
        label: "GitHub",
        url: "https://github.com/Reddisekharyadav/Sea-Creature-Classification",
      },
    ],
  },
  {
    title: "Android X Gemini Hackathon 2025",
    description: "Participated and delivered solution concepts under hackathon constraints.",
    links: [
      {
        label: "Certificate",
        url: "https://credsverse.com/credentials/0cc975d5-11fd-4803-823c-e637cee08462",
      },
    ],
  },
  {
    title: "GFG VIT-AP Hacktoberfest",
    description: "Contributed through open-source activities and collaboration tasks.",
    links: [
      {
        label: "Certificate",
        url: "https://credsverse.com/credentials/6e3ffb2d-2c33-400c-9646-de942780e260",
      },
    ],
  },
  {
    title: "Unstop E-Commerce Challenge",
    description: "Competed in product and strategy challenge tracks for e-commerce scenarios.",
    links: [
      {
        label: "Certificate",
        url: "https://unstop.com/certificate-preview/80fd3c80-75bf-4946-a489-c1f306c270cb?utm_campaign=",
      },
    ],
  },
  {
    title: "GFG Code Crunch",
    description: "Participated in coding challenge rounds and algorithmic problem solving.",
    links: [
      {
        label: "Certificate",
        url: "https://certificate.givemycertificate.com/c/983a75b8-45ee-4ae1-acd1-c4b446fbdef1",
      },
    ],
  },
  {
    title: "Microsoft Learn - Git/GitHub Workshop",
    description: "Completed workshop on collaborative version control workflows.",
    links: [
      {
        label: "Certificate",
        url: "https://certificate.givemycertificate.com/c/c06363e8-525e-45a5-8762-8120d50e6e23",
      },
    ],
  },
];

const projects = [
  {
    name: "TroubleShooters Compressor Toolkit",
    description:
      "Compression tool kit for compressing images, videos, and documents with improved quality. Built with Next.js and Cloudinary integration for seamless file processing.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "cloudinary", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: "/compresser.png",
    source_code_link: "https://github.com/Reddisekharyadav/TroubleShooters-Compressor-Toolkit",
  },
  {
    name: "My AI Assistant",
    description:
      "Voice-based assistant for web search, weather, automation. Uses Python, Speech Recognition, Text-to-Speech (TTS), OpenAI API for natural language interaction.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "openai", color: "green-text-gradient" },
      { name: "speech-recognition", color: "pink-text-gradient" },
    ],
    image: "/myasistent.png",
    source_code_link: "https://github.com/Reddisekharyadav/My-AI-Assistant",
  },

  {
    name: "MANACUSTOMCHOCO",
    description:
      "A beautiful Next.js application for showcasing custom chocolate wrappers with admin functionality, late-night pricing, and interactive gallery features.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "vercel", color: "pink-text-gradient" },
    ],
    image: "/manacuston.png",
    source_code_link: "https://github.com/Reddisekharyadav/MANACUSTOMCHOCO",
    live_url: "https://manacustomchoco.vercel.app/",
  },
  {
    name: "Fire & Gas Detection System",
    description:
      "Next-Gen Home Safety! Fire and LPG Gas Detection System with Video Alerts and Telegram Integration delivers real-time protection with instant notifications sent directly to your phone.",
    tags: [
      { name: "iot", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "telegram", color: "pink-text-gradient" },
    ],
    image: "/fire and gas.png",
    source_code_link: "https://github.com/Reddisekharyadav/Fire-Gas-Detection-System",
  },
  // {
  //   name: "ParkPlaze",
  //   description:
  //     "Full-stack parking slot booking platform offering prebooking, location filtering, and additional services like fuel/cleaning. Built with Next.js, React.js, MongoDB cloud and Render deployment.",
  //   tags: [
  //     { name: "nextjs", color: "blue-text-gradient" },
  //     { name: "mongodb", color: "green-text-gradient" },
  //     { name: "react", color: "pink-text-gradient" },
  //   ],
  //   image: "/parkplaza.png",
  //   source_code_link: "https://github.com/Reddisekharyadav/ParkPlaze",
  //   live_url: "https://parkplaza-main.vercel.app/",
  // },
  {
    name: "Enhanced Speech Emotion Recognition",
    description:
      "An advanced Speech Emotion Recognition system for real-time and file-based emotion analysis, featuring a modern GUI, AI-powered chat responses, and robust model training and evaluation.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "machine-learning", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: "/ser.png",
    source_code_link: "https://github.com/Reddisekharyadav/Enhanced-Speech-Emotion-Recognition",
  },
  // {
  //   name: "AI-Shopping",
  //   description:
  //     "AI-powered automated retail stores (AIPARS) leveraging artificial intelligence to enhance the shopping experience with NLP, Machine Learning, React frontend, and cloud services.",
  //   tags: [
  //     { name: "react", color: "blue-text-gradient" },
  //     { name: "ai", color: "green-text-gradient" },
  //     { name: "mongodb", color: "pink-text-gradient" },
  //   ],
  //   image: "/springboot.png",
  //   source_code_link: "https://github.com/Reddisekharyadav/AI-Shopping-E-Commerce-Application",
  // },
  {
    name: "ParkPlaze - Smart Parking Platform",
    description:
      "Designed a scalable location-based booking system with centralized database management and RESTful APIs, ensuring secure authentication and optimized slot allocation logic.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "rest-api", color: "green-text-gradient" },
      { name: "database", color: "pink-text-gradient" },
    ],
    image: "/parkplaza.png",
    source_code_link: "https://github.com/Reddisekharyadav/Smart-Parking-Management-System-fullstack-application",
    live_url: "https://parkplaza-main.vercel.app/",
  },
  {
    name: "NextGenKart - 3D Shopping Web Application",
    description:
      "Built a full-stack e-commerce system using Spring Boot and MySQL with modular backend architecture, dynamic cart management, and secure transaction handling.",
    tags: [
      { name: "spring-boot", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "full-stack", color: "pink-text-gradient" },
    ],
    image: "/springboot.png",
    source_code_link: "https://github.com/Reddisekharyadav/AI-Shopping-E-Commerce-Application",
  },
  {
    name: "GitHub Documentation Generator",
    description:
      "Developed an automated Python-based documentation generator to parse repositories and generate structured technical documentation, improving development workflow efficiency.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "automation", color: "green-text-gradient" },
      { name: "github", color: "pink-text-gradient" },
    ],
    image: githubRepoImage,
    source_code_link: "https://github.com/Reddisekharyadav",
  },
  {
    name: "Wristband IoT Health Monitoring System",
    description:
      "ESP32 ECG prototype for real-time health monitoring data with preprocessing; addressed latency, memory limits, and signal noise handling in a real-time pipeline.",
    tags: [
      { name: "esp32", color: "blue-text-gradient" },
      { name: "iot", color: "green-text-gradient" },
      { name: "real-time", color: "pink-text-gradient" },
    ],
    image: "/ser.png",
    source_code_link: "https://github.com/Reddisekharyadav",
  },
];

export {
  services,
  technologies,
  experiences,
  activities,
  certifications,
  publications,
  technicalActivities,
  projects,
};
