export default function SkillsList() {
  const techColors: Record<string, string> = {
    HTML: "border-orange-500",
    CSS: "border-blue-500",
    JavaScript: "border-yellow-400",
    "React.js": "border-cyan-400",
    "Next.js": "border-gray-400",
    Redux: "border-purple-500",
    "Tailwind CSS": "border-teal-400",
    TypeScript: "border-blue-600",

    "Node.js": "border-green-600",
    "Express.js": "border-gray-500",
    "Prisma ORM": "border-slate-500",
    "REST API": "border-pink-500",
    "Socket.IO": "border-gray-400",
    WebRTC: "border-lime-500",

    PostgreSQL: "border-blue-700",
    MySQL: "border-orange-400",
    "MS SQL": "border-red-500",
    Firebase: "border-yellow-500",
    Supabase: "border-green-500",

    Cloudinary: "border-sky-500",
    Vercel: "border-gray-300",
    Netlify: "border-cyan-500",

    "React Native": "border-indigo-500",
    NativeWind: "border-emerald-400",
  };

  const skills = {
    "Web Development": {
      Frontend: [
        "HTML", "CSS", "JavaScript", "React.js", "Next.js", "Redux", "Tailwind CSS", "TypeScript"
      ],
      Backend: [
        "Node.js", "Express.js", "Prisma ORM", "REST API", "Socket.IO", "WebRTC"
      ],
      Database: [
        "PostgreSQL", "MySQL", "MS SQL", "Firebase", "Supabase"
      ],
      Cloud: [
        "Cloudinary", "Vercel"
      ]
    },
    "App Development": {
      Frontend: [
        "React Native", "TypeScript", "NativeWind", "Redux"
      ],
      Backend: [
        "Node.js", "Express.js", "Prisma ORM", "REST API", "Socket.IO", "WebRTC"
      ],
      Database: [
        "PostgreSQL", "MySQL", "MS SQL", "Firebase", "Supabase"
      ],
      Cloud: [
        "Cloudinary", "Vercel"
      ]
    },
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      <p className="text-2xl font-bold text-indigo-400 border-b border-[#1f2937] pb-2 w-fit mx-auto">
        What I Know
      </p>

      {Object.entries(skills).map(([category, sections]) => (
        <div key={category} className="mt-10 flex justify-center">
          <div className="bg-[#121212] border border-[#1f2937] p-6 rounded-2xl w-full max-w-6xl shadow-lg">
            <h2 className="text-xl font-semibold text-indigo-300 text-center mb-6">{category}</h2>

            <div className="flex flex-wrap justify-center gap-6">
              {Object.entries(sections).map(([section, technologies]) => (
                <div
                  key={section}
                  className="bg-[#18181b] border border-[#1f2937] p-4 rounded-xl w-[320px] lg:w-[180px] shadow-md"
                >
                  <h3 className="text-indigo-400 font-medium mb-3 text-center">{section}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {technologies.map((tech) => (
                      <div
                        key={tech}
                        className={`border ${techColors[tech] || "border-gray-600"} px-3 py-1 rounded-lg text-xs font-medium hover:scale-105 transition-transform duration-200 hover:shadow-[0_0_10px_currentColor] cursor-pointer`}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
