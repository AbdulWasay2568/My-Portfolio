import dominos from './assets/Images/Projects/dominos.png';
import objectDetection from './assets/Images/Projects/object-detection.png';
// import eCommerce from './assets/Images/Projects/e-commerce.jpg';
import youtube from './assets/Images/Projects/youtube.jpg';
import whatsApp from './assets/Images/Projects/WhatsApp.jpg';
import givio from './assets/Images/Projects/logo3.png';
import regency from './assets/Images/Projects/regency.png';
import discord from './assets/Images/Projects/discord.png';
// import spotify from './assets/Images/Projects/spotify-clone.gif';

export interface ProjectData {
  title: string;
  tagline: string;
  techStack: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  overview: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  impact: string;
  gallery: string[];
  category: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; color: string }[];
}

export interface SocialLink {
  platform: string;
  link: string;
}

export const experienceData: Experience[] = [
  {
    company: "Ivation",
    role: "Backend Developer",
    location: "Onsite",
    period: "November 2025 – Present",
    description: [
      "Developed a high-performance Pizza Ordering Chatbot using Django and OpenAI, implementing RAG and autonomous tool-calling for intelligent restaurant management.",
      "Built a Discord bot for server-level message backup with advanced filters to PostgreSQL using SQLAlchemy ORM for scalable multi-user management.",
      "Developed a DailyBot-style automated check-in system for Mattermost using Django.",
      "Integrated outgoing Mattermost webhooks to process check-in replies, automate scheduled standups, and manage structured response tracking.",
      "Built a backend prototype using Express.js implementing LRU caching, message queues for concurrent API requests, and rate-limiting for high-load scenarios."
    ]
  },
  {
    company: "Rhodium Tech",
    role: "Software Development Intern",
    location: "Onsite",
    period: "July 2024 – August 2024",
    description: [
      "Developed the Social and Reservation screens for the company’s SnackOut mobile app using React Native, improving UI/UX and backend integration.",
      "Built the company’s official website with responsive design, optimized load performance, and a clean modern layout.",
      "Developed a full-stack Employee Portal with role-based access, employee management, and internal communication features using React.js, Express.js, Prisma, and PostgreSQL."
    ]
  }
];

export const educationData: Education[] = [
  {
    institution: "COMSATS University, Lahore",
    degree: "B.Sc. Computer Science",
    location: "Lahore",
    period: "2022 – 2026",
  },
  {
    institution: "KIPS College, Lahore",
    degree: "Intermediate",
    location: "Lahore",
    period: "2018 – 2020",
  },
  {
    institution: "Dar-e-Arqam School, Lahore",
    degree: "Matric",
    location: "Lahore",
    period: "2016 – 2018",
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", color: "border-yellow-400" },
      { name: "TypeScript", color: "border-blue-600" },
      { name: "Python", color: "border-blue-500" },
      { name: "Java", color: "border-orange-600" },
      { name: "C/C++", color: "border-blue-700" },
      { name: "SQL", color: "border-cyan-600" },
      { name: "HTML", color: "border-orange-500" },
      { name: "CSS", color: "border-blue-500" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React.js", color: "border-cyan-400" },
      { name: "React Native", color: "border-indigo-500" },
      { name: "Node.js", color: "border-green-600" },
      { name: "Express.js", color: "border-gray-500" },
      { name: "Django", color: "border-green-800" },
      { name: "Tailwind CSS", color: "border-teal-400" },
      { name: "NativeWind", color: "border-emerald-400" }
    ]
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Prisma ORM", color: "border-slate-500" },
      { name: "PostgreSQL", color: "border-blue-700" },
      { name: "MySQL", color: "border-orange-400" },
      { name: "MongoDB", color: "border-green-600" },
      { name: "Firebase", color: "border-yellow-500" },
      { name: "Supabase", color: "border-green-500" },
      { name: "RESTful APIs", color: "border-pink-500" },
      { name: "Discord API", color: "border-indigo-400" },
      { name: "RAG", color: "border-purple-400" }
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", color: "border-orange-600" },
      { name: "GitHub", color: "border-gray-400" },
      { name: "Vercel", color: "border-gray-300" },
      { name: "Render", color: "border-white" },
      { name: "Hostinger", color: "border-purple-600" }
    ]
  }
];

export const socialLinks: SocialLink[] = [
  { platform: "Instagram", link: "https://www.instagram.com/abdulwasaydogar/" },
  { platform: "Twitter", link: "https://twitter.com/AbdulWasaDogar" },
  { platform: "Linkedin", link: "https://www.linkedin.com/in/abdul-wasay-6013b0269/" },
  { platform: "Github", link: "https://github.com/AbdulWasay2568" }
];

export const projectsByDomain: { [domain: string]: ProjectData[] } = {
  web: [
    {
      title: 'Dominos Web Clone',
      tagline: 'Recreating modern food ordering experience',
      techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Express.js', 'Supabase', 'Prisma ORM', 'Redux', 'Cloudinary'],
      imageUrl: dominos,
      liveUrl: 'https://dominos-web-clone-frontend.vercel.app',
      githubUrl: 'https://github.com/AbdulWasay2568/Dominos-Clone-Supabase',
      overview: "A full-stack web application that replicates the core functionality of Domino's Pizza ordering system. Built with modern web technologies to provide a seamless user experience for browsing menu items, customizing orders, and processing payments.",
      features: [
        'User authentication and authorization',
        'Real-time menu browsing with categories',
        'Customizable pizza builder',
        'Shopping cart management',
        'Secure payment integration',
        'Order tracking and history'
      ],
      challenges: [
        'Managing complex state for pizza customization',
        'Implementing real-time order updates',
        'Consistent UI/UX across devices'
      ],
      solutions: [
        'Used Redux for centralized state management',
        'Implemented Supabase for backend services',
        'Reusable components for UI consistency'
      ],
      impact: 'Demonstrated ability to build production-ready e-commerce solutions with complex user flows.',
      gallery: [dominos, dominos, dominos],
      category: 'Full-Stack Web Application'
    },
    {
      title: 'E-Learning Platform',
      tagline: 'Comprehensive online learning platform',
      techStack: ['React.js', 'Tailwind CSS', 'Express.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      imageUrl: youtube, 
      liveUrl: 'https://github.com/AbdulWasay2568/E-Learning-Platform',
      githubUrl: 'https://github.com/AbdulWasay2568/E-Learning-Platform',
      overview: "A comprehensive online learning platform enabling course creation, video streaming, and progress tracking. Developed a responsive frontend with Redux for efficient global state management.",
      features: [
        'Course creation and instructor management',
        'Video streaming for lessons',
        'Progress tracking for students',
        'Authentication and Authorization',
        'Swagger documentation',
        'Efficient global state management'
      ],
      challenges: [
        'Managing video content delivery',
        'Relational data modeling for courses and enrollments',
        'Scalable API architecture'
      ],
      solutions: [
        'Implemented backend APIs using Express and Prisma',
        'Used Redux for user experience optimization',
        'Secured system with robust auth'
      ],
      impact: 'Provided a scalable solution for online education and peer learning.',
      gallery: [youtube, youtube, youtube],
      category: 'Full-Stack Web Application'
    },
    {
      title: 'Regency Suite Hotel Management System',
      tagline: 'Full-featured hotel management system',
      techStack: ['Django', 'MVT Architecture', 'SQLite', 'Hostinger'],
      imageUrl: regency,
      liveUrl: 'https://github.com/AbdulWasay2568/Regency-Suite',
      githubUrl: 'https://github.com/AbdulWasay2568/Regency-Suite',
      overview: "A full-featured hotel management system with dedicated Admin, Guest, Manager, and Front Desk portals. Implemented Room and Banquet booking, Loyalty points system, and role-based access control.",
      features: [
          'Dedicated portals for different user roles',
          'Room and Banquet booking system',
          'Loyalty points and reward system',
          'Role-based access control',
          'Modular MVT structure',
          'Secure user management'
      ],
      challenges: [
          'Designing complex role-based access',
          'Maintaining data integrity across bookings',
          'Modular architecture for scalability'
      ],
      solutions: [
          'Designed a modular MVT structure',
          'Used Django for secure management',
          'Deployed on Hostinger'
      ],
      impact: 'Streamlined hotel operations and improved guest booking experience.',
      gallery: [regency, regency, regency],
      category: 'Backend System'
    },
    {
      title: 'WhatsApp Web Clone',
      tagline: 'Real-time messaging platform',
      techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Socket.IO', 'Express.js', 'PostgreSQL', 'Prisma ORM'],
      imageUrl: whatsApp,
      liveUrl: 'https://github.com/AbdulWasay2568/WhatsApp-Web-Clone',
      githubUrl: 'https://github.com/AbdulWasay2568/WhatsApp-Web-Clone',
      overview: 'A full-stack real-time messaging platform with live chat and file sharing. Integrated Redux for efficient state management of chats, users, and socket connections.',
      features: [
        'Live chat with Socket.IO',
        'File sharing via Cloudinary',
        'Emoji reactions and message replies',
        'Presence indicators',
        'Secure authentication'
      ],
      challenges: [
        'Synchronizing real-time states across clients',
        'Large file upload management'
      ],
      solutions: [
        'Leveraged Socket.IO for real-time events',
        'Used Cloudinary for efficient media storage'
      ],
      impact: 'Demonstrated high proficiency in real-time communication systems and media integration.',
      gallery: [whatsApp, whatsApp, whatsApp],
      category: 'Full-Stack Web Application'
    }
  ],
  app: [
    {
      title: 'Givio - Donation System',
      tagline: 'React Native donation management ecosystem',
      techStack: ['React Native', 'TypeScript', 'NativeWind', 'Express.js', 'Prisma', 'Socket.IO'],
      imageUrl: givio,
      liveUrl: 'https://github.com/AbdulWasay2568/Givio',
      githubUrl: 'https://github.com/AbdulWasay2568/Givio',
      overview: "A React Native donation management ecosystem connecting donors and NGOs through real-time interaction. Built a shared cross-platform mobile app along with a web-based admin dashboard.",
      features: [
        'Real-time messaging between donors and NGOs',
        'Donation and verification tracking',
        'Mobile-first UX for on-the-go donation management',
        'Swagger API documentation',
        'Centralized error handling and logging'
      ],
      challenges: [
        'Implementing real-time interaction across mobile devices',
        'Managing complex donation verification workflows',
        'Ensuring smooth mobile UI/UX'
      ],
      solutions: [
        'Used React Native and Socket.IO for real-time features',
        'Implemented robust input validation and authorization',
        'Used NativeWind for consistent mobile styling'
      ],
      impact: 'Streamlined the donation process, making it easier for NGOs to receive help and for donors to track their contributions.',
      gallery: [givio, givio, givio],
      category: 'Mobile Application'
    },
    {
      title: 'Dominos App Clone',
      tagline: 'Cross-platform food ordering application',
      techStack: ['React Native', 'NativeWind', 'Supabase', 'Redux', 'Cloudinary'],
      imageUrl: dominos,
      liveUrl: 'https://github.com/AbdulWasay2568/Dominos-Clone-Supabase',
      githubUrl: 'https://github.com/AbdulWasay2568/Dominos-Clone-Supabase',
      overview: "A cross-platform mobile application replicating the Domino's Pizza ordering experience. Features a highly interactive UI with categories, pizza customization, and secure authentication.",
      features: [
        'Real-time menu synchronization',
        'Custom pizza builder',
        'Intuitive cart management',
        'User profile and order history',
        'Native-looking animations and transitions'
      ],
      challenges: [
        'Achieving native-like performance for animations',
        'Managing complex customization state on mobile screens'
      ],
      solutions: [
        'Optimized rendering with NativeWind',
        'Leveraged Redux for centralized state management',
        'Used Supabase for real-time backend updates'
      ],
      impact: 'Demonstrated proficiency in cross-platform mobile development and cloud-native backend integration.',
      gallery: [dominos, dominos, dominos],
      category: 'Mobile Application'
    }
  ],
  AI: [
    {
      title: 'Pizza Ordering Chatbot',
      tagline: 'High-performance AI agent for restaurant management',
      techStack: ['Django', 'OpenAI', 'Pinecone', 'PostgreSQL', 'Docker', 'Python', 'RAG'],
      imageUrl: discord, // Thematic for a bot
      liveUrl: 'https://github.com/AbdulWasay2568/Pizza-Chatbot-API',
      githubUrl: 'https://github.com/AbdulWasay2568/Pizza-Chatbot-API',
      overview: "A specialized restaurant management system featuring an autonomous AI agent integrated with OpenAI and Pinecone. The system handles intelligent customer interactions via RAG and function calling, while managing a complex menu engine.",
      features: [
        'RAG-based AI Assistant using Pinecone vector database',
        'Autonomous Function Calling for cart and order management',
        'Dynamic product configuration (Size, Crust, Toppings)',
        'Real-time pricing aggregation engine',
        'Dockerized deployment for easy scaling',
        'Performance monitoring middleware for response times and token analysis'
      ],
      challenges: [
        'Synchronizing vector embeddings with relational menu data',
        'Ensuring reliability of autonomous tool-calling in the LLM loop',
        'Optimizing response times for complex AI interactions'
      ],
      solutions: [
        'Developed background sync tasks for Pinecone indexing',
        'Implemented structured tool schemas and retry logic for GPT-4o',
        'Created performance tracking middleware for bottleneck analysis'
      ],
      impact: 'Demonstrated mastery in RAG architectures and autonomous AI integration in real-world business environments.',
      gallery: [discord, discord, discord],
      category: 'AI & Backend Development'
    },
    {
      title: 'Object Detection (YOLOv8)',
      tagline: 'Real-time AI-powered computer vision system',
      techStack: ['YOLOv8', 'Python', 'OpenCV'],
      imageUrl: objectDetection,
      liveUrl: 'https://github.com/AbdulWasay2568/Object-Detection-and-Classification',
      githubUrl: 'https://github.com/AbdulWasay2568/Object-Detection-and-Classification',
      overview: 'Implements real-time detection using Python and OpenCV with the YOLOv8 model. Features multi-class detection, confidence scoring, and real-time processing capabilities.',
      features: [
        'Real-time object detection',
        'Multi-class classification',
        'Confidence score visualization',
        'Video stream processing'
      ],
      challenges: [
        'Optimizing model inference speed',
        'Handling various lighting conditions'
      ],
      solutions: [
        'Implemented efficient video frame processing',
        'Used YOLOv8 for state-of-the-art accuracy'
      ],
      impact: 'Capable of being used in surveillance and autonomous systems.',
      gallery: [objectDetection, objectDetection, objectDetection],
      category: 'Machine Learning & AI'
    }
  ]
};

export const projects = Object.values(projectsByDomain).flat();

export const techStackIcons: { [key: string]: string } = {
  'React.js': '⚛️',
  'TypeScript': '🔷',
  'Tailwind CSS': '🎨',
  'Express.js': '🚀',
  'Supabase': '🗄️',
  'Prisma ORM': '🔧',
  'Redux': '🔄',
  'Cloudinary': '☁️',
  'Socket.IO': '🔌',
  'PostgreSQL': '🐘',
  'YOLOv8': '🤖',
  'Python': '🐍',
  'OpenCV': '👁️',
  'TensorFlow': '🧠',
  'Django': '🎸',
  'SQLite': '💾',
  'Prisma': '🔧',
  'Node.js': '🟢',
  'OpenAI': '🤖',
  'Pinecone': '🌲',
  'RAG': '🔍',
  'MongoDB': '🍃',
  'React Native': '📱',
  'NativeWind': '💨',
  'Docker': '🐳'
};

export default projects;
