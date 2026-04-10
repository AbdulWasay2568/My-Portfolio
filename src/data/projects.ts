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
  "Mobile Apps": [
    {
      id: "givio",
      title: "Givio",
      description: "A secure donation platform with real-time impact tracking.",
      longDescription: "Givio is a comprehensive mobile application designed to bridge the gap between donors and charitable organizations. Built with React Native and Expo, it features a seamless donation flow, real-time tracking of donation impact, and a secure payment gateway integration. The app also includes features for NGOs to post updates and for donors to follow their favorite causes.",
      techStack: ["React Native", "Expo", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
      image: givio0,
      video: [donorAd, donorHistory, leaderBoard, ngoAd],
      gallery: [givio1],
      github: "https://github.com/Awd-07/Givio",
      website: "https://givio.app",
      tagline: "Empowering Charity through Transparency",
      overview: "Givio is a mobile platform that simplifies the donation process while providing donors with real-time updates on how their contributions are being used.",
      features: [
        "Real-time donation tracking",
        "Secure payment gateway integration",
        "NGO impact updates and stories",
        "User profile and donation history",
        "Automated tax receipts"
      ],
      category: "Mobile App"
    },
    {
      id: "dominos",
      title: "Dominos Clone",
      description: "Real-time pizza delivery app with interactive UI.",
      longDescription: "A feature-rich pizza ordering and delivery application that mimics the core functionality of the Dominos app. It includes a dynamic menu system, real-time order tracking, address management, and a smooth checkout process. The app emphasizes UI/UX with smooth animations and interactive elements.",
      techStack: ["React Native", "Redux", "Firebase", "TypeScript", "Tailwind CSS"],
      image: dominos0,
      video: [dominosVideo],
      gallery: [],
      github: "https://github.com/Awd-07/Dominos-Clone",
      tagline: "The Perfect Slice, Just a Tap Away",
      overview: "A comprehensive clone of the Dominos pizza ordering app, focusing on high-performance animations and real-time state management.",
      features: [
        "Interactive menu with customization",
        "Real-time order status tracking",
        "Firebase authentication",
        "Geolocation-based store finder",
        "Smooth cart and checkout flow"
      ],
      category: "Mobile App"
    },
    {
      id: "whatsapp",
      title: "WhatsApp Clone",
      description: "Real-time messaging application with end-to-end simulation.",
      longDescription: "A full-stack messaging application that replicates the WhatsApp user experience. Features include real-time chat using Socket.io, user authentication, status updates, and group chat capabilities. The project demonstrates advanced state management and real-time data synchronization.",
      techStack: ["React Native", "Node.js", "Socket.io", "MongoDB", "Express.js"],
      image: whatsapp0,
      video: [whatsappVideo],
      gallery: [],
      github: "https://github.com/Awd-07/Whatsapp-Clone",
      tagline: "Connecting People Instantly",
      overview: "A real-time communication platform demonstrating the power of WebSockets and mobile-first full-stack development.",
      features: [
        "Instant messaging with Socket.io",
        "Status updates and stories",
        "Group chat management",
        "User presence indicators",
        "Image and file sharing"
      ],
      category: "Mobile App"
    }
  ],
  "Web Development": [
    {
      id: "ecommerce",
      title: "E-commerce Platform",
      description: "A fully functional online marketplace with advanced filtering.",
      longDescription: "This e-commerce platform provides a complete shopping experience with product listings, a sophisticated filter system, user profiles, and a secure checkout. It features an administrative dashboard for inventory management and order tracking.",
      techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      image: ecommerce0,
      gallery: [],
      github: "https://github.com/Awd-07/E-commerce",
      website: "https://shop-next-gen.vercel.app",
      tagline: "Shop Smart, Shop Fast",
      overview: "A modern web-based marketplace built for scale, featuring advanced search, filtering, and admin controls.",
      features: [
        "Advanced product filtering",
        "User reviews and ratings",
        "Admin dashboard for inventory",
        "Secure checkout with Stripe",
        "Responsive design for all devices"
      ],
      category: "Web App"
    },
    {
      id: "regency",
      title: "Regency Estate",
      description: "Luxury real estate platform for property management.",
      longDescription: "Regency Estate is a high-end real estate portal that connects property buyers with luxury listings. It includes high-resolution image galleries, property comparison tools, and an integrated inquiry system for prospective buyers.",
      techStack: ["React.js", "Firebase", "Tailwind CSS", "JavaScript"],
      image: regency0,
      gallery: [],
      github: "https://github.com/Awd-07/Regency-Estate",
      tagline: "Find Your Dream Luxury Home",
      overview: "A premium real estate listing application designed with a focus on high-end visual presentation and lead generation.",
      features: [
        "High-definition image galleries",
        "Property comparison tools",
        "Contact agent integration",
        "Advanced location search",
        "Firebase real-time database"
      ],
      category: "Web App"
    },
    {
      id: "spotify",
      title: "Spotify Web Player",
      description: "Music streaming interface with interactive controls.",
      longDescription: "A web-based music player that integrates with the Spotify API. Users can browse their playlists, search for songs, and control playback directly from the interface. The design focuses on modern aesthetics and responsive layouts.",
      techStack: ["React.js", "Spotify API", "Tailwind CSS", "JavaScript"],
      image: spotify0,
      gallery: [],
      github: "https://github.com/Awd-07/Spotify-Clone",
      tagline: "Your Music, Your Way",
      overview: "A custom web player interface that leverages the Spotify Web API for a seamless listening experience.",
      features: [
        "Playlist browsing and search",
        "Custom playback controls",
        "Real-time track progress",
        "Responsive grid layout",
        "API rate-limit handling"
      ],
      category: "Web App"
    }
  ],
  "AI & Automation": [
    {
      id: "discord-bot",
      title: "Discord AI Bot",
      description: "Automated community moderator and utility bot.",
      longDescription: "A multi-purpose Discord bot that leverages AI for community management. It features automated moderation, custom command creation, and integration with various APIs to provide real-time information to server members.",
      techStack: ["Node.js", "Discord.js", "OpenAI API", "MongoDB"],
      image: discord0,
      gallery: [],
      github: "https://github.com/Awd-07/Discord-Bot",
      tagline: "Smater Servers with AI",
      overview: "An automated assistant for Discord communities that uses natural language processing to moderate and help users.",
      features: [
        "AI-powered moderation",
        "Automated welcome messages",
        "Custom command system",
        "External API integration",
        "User activity logging"
      ],
      category: "Automation"
    },
    {
      id: "object-detection",
      title: "AI Object Detector",
      description: "Real-time visual recognition using machine learning.",
      longDescription: "An AI-powered application that identifies objects in real-time through a camera feed. Built with TensorFlow.js, it can detect and label various objects with high accuracy, demonstrating the potential of on-device machine learning.",
      techStack: ["Python", "TensorFlow", "OpenCV", "React.js"],
      image: object0,
      gallery: [],
      github: "https://github.com/Awd-07/Object-Detection",
      tagline: "See the World through AI",
      overview: "A real-time computer vision project that brings the power of TensorFlow.js to the web browser.",
      features: [
        "Real-time object classification",
        "Webcam feed integration",
        "Bounding box visualization",
        "On-device inference",
        "Multi-object tracking"
      ],
      category: "Artificial Intelligence"
    }
  ]
};
