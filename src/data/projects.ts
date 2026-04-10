export interface ProjectData {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  video?: string[];
  gallery: string[];
  github: string;
  website?: string;
  overview?: string;
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  impact?: string;
  category?: string;
}

//givio
import donorAd from "../assets/projects/givio/videos/DonorAd.mp4";
import donorHistory from "../assets/projects/givio/videos/DonorHistory.mp4";
import leaderBoard from "../assets/projects/givio/videos/LeaderBoard.mp4";
import ngoAd from "../assets/projects/givio/videos/NGOAd.mp4";

import givio0 from "../assets/projects/givio/images/givio.png";
import givio1 from "../assets/projects/givio/images/logo3.png";

//dominos
import dominosVideo from "../assets/projects/dominos-app/videos/DominosApp.mp4";
import dominos0 from "../assets/projects/dominos-app/images/dominos.png";

//whatsapp
import whatsapp0 from "../assets/projects/whatsapp/images/WhatsApp.jpg";
import whatsappVideo from "../assets/projects/whatsapp/videos/WhatsappWeb.mp4";

import ecommerce0 from "../assets/projects/e-commerce/images/e-commerce.jpg";

import regency0 from "../assets/projects/regency/images/regency.png";

import spotify0 from "../assets/projects/spotify/images/spotify-clone.gif";

import discord0 from "../assets/projects/discord/images/discord.png";

import object0 from "../assets/projects/object-detection/images/object-detection.png";

export const techStackIcons: Record<string, string> = {
  "React.js": "react",
  "React Native": "react",
  "Node.js": "nodejs",
  "Express.js": "expressjs",
  "Django": "django",
  "PostgreSQL": "postgresql",
  "MongoDB": "mongodb",
  "Firebase": "firebase",
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "Tailwind CSS": "tailwindcss",
  "Prisma": "prisma",
  "Python": "python",
  "Java": "java",
  "SQL": "mysql",
  "HTML": "html5",
  "CSS": "css3",
  "Expo": "expo",
};

export const projectsByDomain: Record<string, ProjectData[]> = {
  "Web Development": [
    {
      id: "discord-bot",
      title: "Discord Bot",
      tagline: "Scalable Message Backup & Server Utility",
      description: "Discord bot for automated message backup and server data management.",
      longDescription: "Built a Discord bot for server-level message backup with advanced filtering capabilities, storing data in PostgreSQL using SQLAlchemy ORM. Designed for scalable multi-user environments with efficient data handling and structured storage.",
      techStack: ["Discord", "Python", "PostgreSQL", "SQLAlchemy"],
      image: discord0,
      gallery: [],
      github: "https://github.com/Awd-07/Discord-Bot",
      overview: "A scalable backend-focused Discord bot designed for structured message storage and efficient server data management.",
      features: [
        "Server-level message backup system",
        "Advanced filtering for messages (users, dates, content)",
        "PostgreSQL integration using SQLAlchemy ORM",
        "Scalable multi-user data handling"
      ],
      category: "Backend"
    },
    {
      id: "elearning",
      title: "E-Learning Platform",
      tagline: "Knowledge sharing made seamless",
      description: "Online learning platform for course creation and progress tracking.",
      longDescription: "Built a comprehensive online learning platform enabling course creation, video streaming, and progress tracking. Developed a responsive frontend with Redux for efficient global state management and user experience optimization. Implemented backend APIs for courses, users, enrollments, and instructor management. Integrated authentication, authorization, Swagger documentation for a secure and scalable system.",
      techStack: ["React.js", "Tailwind CSS", "Express.js", "TypeScript", "Prisma", "PostgreSQL", "Redux"],
      image: ecommerce0,
      gallery: [],
      github: "https://github.com/Awd-07/E-Learning",
      overview: "A professional educational portal designed for instructors to manage content and students to track their learning journey.",
      features: [
        "Course creation and video streaming",
        "Student progress and enrollment tracking",
        "Redux for optimized user experience",
        "Secure authentication and authorization",
        "Swagger API documentation"
      ],
      category: "Web App"
    },
    {
      id: "regency",
      title: "Regency Suite Hotel System",
      tagline: "Luxury Management for Modern Hospitality",
      description: "Full-featured hotel management system with multi-portal access.",
      longDescription: "Developed a full-featured hotel management system with dedicated Admin, Guest, Manager, and Front Desk portals. Implemented Room and Banquet booking, Loyalty points system, and role-based access control. Designed a modular MVT structure ensuring scalability, data integrity, and secure user management. Deployed on Hostinger for public access.",
      techStack: ["Django", "MVT Architecture", "SQLite", "Python", "Bootstrap"],
      image: regency0,
      gallery: [],
      github: "https://github.com/Awd-07/Regency-Estate",
      overview: "A modular hotel management ecosystem using Django's MVT architecture to handle complex booking flows and role-based permissions.",
      features: [
        "Admin, Guest, Manager, and Front Desk portals",
        "Room and Banquet booking system",
        "Customer loyalty points integration",
        "Modular MVT architecture for scalability",
        "Role-based access control (RBAC)"
      ],
      category: "Web App"
    },
    {
      id: "ecommerce",
      title: "E-commerce Platform",
      tagline: "Shop Smart, Shop Fast",
      description: "Full-stack e-commerce system with authentication and checkout.",
      longDescription: "Built a full-stack e-commerce platform using React.js, React Native, and Node.js. Features include user authentication, product catalogs, shopping cart functionality, and a payment checkout flow. Integrated Prisma with PostgreSQL for robust data management and consistent performance across web and mobile platforms.",
      techStack: ["React.js", "React Native", "Express.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      image: ecommerce0,
      gallery: [],
      github: "https://github.com/Awd-07/E-commerce",
      overview: "A unified commerce solution providing a seamless shopping experience through shared backend services for web and mobile clients.",
      features: [
        "Full-stack web and mobile integration",
        "Secure authentication and checkout",
        "Shopping cart and order management",
        "Database management with Prisma/PostgreSQL",
        "Responsive cross-platform design"
      ],
      category: "Web App"
    }
  ],
  "Mobile Apps": [
    {
      id: "givio",
      title: "Givio - Donation System",
      tagline: "Empowering Charity through Transparency",
      description: "A complete donation management ecosystem connecting donors and NGOs.",
      longDescription: "Built a complete donation management ecosystem connecting donors and NGOs through real-time interaction. Developed a mobile app for donors and NGOs along with a web-based admin dashboard featuring centralized state management. Implemented real-time messaging, donation and verification tracking, and deployed the backend on Vercel for scalable performance. Integrated robust input validation, authentication, authorization, Swagger API documentation, centralized error handling, and logging across all backend services.",
      techStack: ["Express.js", "TypeScript", "Prisma", "React Native", "React.js", "Tailwind CSS", "Redux", "Socket.IO", "WebRTC"],
      image: givio0,
      video: [donorAd, donorHistory, leaderBoard, ngoAd],
      gallery: [givio1],
      github: "https://github.com/Awd-07/Givio",
      website: "https://givio.app",
      overview: "Givio is a full-stack donation platform designed to bridge the gap between donors and charitable organizations with real-time tracking and verified interactions.",
      features: [
        "Real-time interaction between donors and NGOs",
        "Mobile app for donors/NGOs and Web Admin Dashboard",
        "Real-time messaging and donation tracking",
        "Swagger API documentation and centralized logging",
        "Vercel deployment for scalable backend"
      ],
      category: "Mobile App"
    },
    {
      id: "dominos",
      title: "Domino’s Clone",
      tagline: "The Perfect Slice, Just a Tap Away",
      description: "Domino’s-inspired web and mobile applications with dynamic menu and cart.",
      longDescription: "Developed Domino’s-inspired web and mobile applications featuring user authentication, dynamic menu browsing, and cart management. Implemented Redux for global state management to ensure a seamless and consistent user experience across devices. Ensured consistent UI/UX across platforms with reusable components and integrated Supabase for backend services.",
      techStack: ["React.js", "React Native", "TypeScript", "Supabase", "Express.js", "Prisma", "Tailwind CSS", "Redux"],
      image: dominos0,
      video: [dominosVideo],
      gallery: [],
      github: "https://github.com/Awd-07/Dominos-Clone",
      overview: "A cross-platform clone of the Domino's ordering system, focusing on high-performance animations and real-time state synchronization.",
      features: [
        "Dynamic menu browsing and cart management",
        "Redux for cross-device state management",
        "Consistent UI/UX with reusable components",
        "Supabase backend integration",
        "User authentication and profile management"
      ],
      category: "Mobile App"
    },
    {
      id: "whatsapp",
      title: "WhatsApp Web Clone",
      tagline: "Connecting People Instantly",
      description: "Full-stack real-time messaging platform with audio/video calling.",
      longDescription: "Developed a full-stack real-time messaging platform with live chat, audio/video calling, and file sharing. Integrated Redux for efficient state management of chats, users, and socket connections. Implemented modern messaging features like emoji reactions, message replies, presence indicators, and secure authentication. Integrated Socket.IO for live chat, WebRTC for peer-to-peer audio/video calling, and Cloudinary for file/image sharing.",
      techStack: ["React.js", "TypeScript", "Tailwind CSS", "Express.js", "Prisma", "PostgreSQL", "Socket.IO", "WebRTC", "Redux"],
      image: whatsapp0,
      video: [whatsappVideo],
      gallery: [],
      github: "https://github.com/Awd-07/Whatsapp-Clone",
      overview: "A sophisticated messaging clone implementing low-latency communication via WebSockets and peer-to-peer media streaming.",
      features: [
        "Real-time chat with Socket.IO",
        "P2P Audio/Video calling with WebRTC",
        "File/Image sharing with Cloudinary",
        "Emoji reactions and message replies",
        "Redux-based efficient state management"
      ],
      category: "Mobile App"
    }
  ],
  "AI": [
    {
      id: "object-detection",
      title: "AI Object Detector (YOLOv8)",
      tagline: "Real-time Detection at Scale",
      description: "Real-time visual recognition using machine learning.",
      longDescription: "Implemented real-time detection using YOLOv8, Python, and OpenCV. The application identifies objects in real-time through a camera feed, demonstrating high accuracy and performance on-device. Ideal for security monitoring and automated vision tasks.",
      techStack: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "React.js"],
      image: object0,
      gallery: [],
      github: "https://github.com/Awd-07/Object-Detection",
      overview: "A computer vision project focused on high-speed object identification using the state-of-the-art YOLOv8 architecture.",
      features: [
        "Real-time object detection with YOLOv8",
        "OpenCV-based camera feed processing",
        "High-accuracy labeling and tracking",
        "Efficient on-device vision inference",
        "Scalable for security/monitoring apps"
      ],
      category: "Artificial Intelligence"
    }
  ]
};
