export interface SkillCategory {
  category: string;
  skills: { name: string; color: string }[];
}

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
