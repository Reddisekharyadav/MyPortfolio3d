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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  java,
  python,
  nextjs,
  prisma,
  mysql,
  firebase,
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
    title: "Software Developer",
    company_name: "AppNexus Pvt. Ltd.",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2024 – Present",
    points: [
      "Built full-stack app with Next.js and Prisma.",
      "Improved backend API efficiency and added reusable UI components.",
      "Followed Git-based version control and Agile process.",
    ],
  },
  {
    title: "Full Stack Web Developer Intern",
    company_name: "Prayana Electric",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2024 – Present",
    points: [
      "Developed admin dashboard, integrated backend APIs.",
      "Improved frontend UX and deployed updates weekly.",
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
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    description: "Comprehensive understanding of cloud services and Azure platform fundamentals.",
  },
  {
    name: "Hacktoberfest 2024",
    issuer: "DigitalOcean",
    date: "2024",
    description: "Successfully contributed to open-source projects during Hacktoberfest.",
  },
  {
    name: "Python Essential Training",
    issuer: "LinkedIn Learning",
    date: "2024",
    description: "Mastered Python programming fundamentals and best practices.",
  },
  {
    name: "Software Project Management",
    issuer: "Coursera",
    date: "2024",
    description: "Learned agile methodologies and project management techniques.",
  },
  {
    name: "Code Crunch",
    issuer: "VIT-AP",
    date: "2024",
    description: "Participated in competitive coding competition.",
  },
  {
    name: "GeeksforGeeks Core Member Certificate",
    issuer: "GeeksforGeeks VIT-AP Chapter",
    date: "2024",
    description: "Recognition for active participation and technical mentorship.",
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
  {
    name: "ParkPlaze",
    description:
      "Full-stack parking slot booking platform offering prebooking, location filtering, and additional services like fuel/cleaning. Built with Next.js, React.js, MongoDB cloud and Render deployment.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
    ],
    image: "/parkplaza.png",
    source_code_link: "https://github.com/Reddisekharyadav/ParkPlaze",
    live_url: "https://parkplaza-main.vercel.app/",
  },
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
  {
    name: "AI-Shopping",
    description:
      "AI-powered automated retail stores (AIPARS) leveraging artificial intelligence to enhance the shopping experience with NLP, Machine Learning, React frontend, and cloud services.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "ai", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: "/springboot.png",
    source_code_link: "https://github.com/Reddisekharyadav/AI-Shopping-E-Commerce-Application",
  },
];

export { services, technologies, experiences, activities, certifications, projects };
