export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
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
