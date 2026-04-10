import { skillsData } from '../data/skills';

export default function SkillsList() {
  return (
    <div className="bg-[#0f0f0f] text-white py-10">
      <div className="text-xl font-medium text-zinc-200 mb-8 border-b border-[#1f2937] pb-2 w-fit">
        Technical Skills
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category) => (
          <div 
            key={category.category} 
            className="bg-[#121212] border border-[#1f2937] p-6 rounded-2xl shadow-lg hover:border-indigo-500/30 transition-colors"
          >
            <h2 className="text-lg font-semibold text-indigo-400 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              {category.category}
            </h2>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`border ${skill.color} px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-all duration-200 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] cursor-default bg-[#18181b]`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
