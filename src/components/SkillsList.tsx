export default function SkillsList() {
  const skills = {
    "Web Development": {
      Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      Backend: ['Node.js', 'Express.js', 'Prisma ORM'],
      Database: ['PostgreSQL', 'MySQL', 'MS SQL', 'Firebase', 'Supabase'],
    //   Devops: ['Git']
    },
    "App Development": {
      Frontend: ['React Native', 'TypeScript', 'NativeWind'],
      Backend: ['Node.js', 'Express.js', 'Prisma ORM'],
      Database: ['PostgreSQL', 'MySQL', 'MS SQL', 'Firebase', 'Supabase'],
    //   Devops: ['Git']
    },
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      <p className="text-2xl font-bold text-indigo-400 border-b border-[#1f2937] pb-2 w-fit mx-auto">What I Know</p>

      {Object.entries(skills).map(([category, sections]) => (
        <div key={category} className="mt-10 flex justify-center">
          <div className="bg-[#121212] border border-[#1f2937] p-6 rounded-2xl w-full max-w-6xl shadow-lg">
            <h2 className="text-xl font-semibold text-indigo-300 text-center mb-6">{category}</h2>

            <div className="flex flex-wrap justify-center gap-6">
              {Object.entries(sections).map(([section, technologies]) => (
                <div key={section} className="bg-[#18181b] border border-[#1f2937] p-4 rounded-xl w-[320px] lg:w-[180px] shadow-md">
                  <h3 className="text-indigo-400 font-medium mb-3 text-center">{section}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {technologies.map((tech) => (
                      <div
                        key={tech}
                        className="bg-[#27272a] border border-[#1f2937] text-white text-xs px-3 py-1 rounded-lg hover:bg-[#6366F1] hover:text-black transition duration-200"
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
