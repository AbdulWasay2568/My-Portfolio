import { Briefcase } from 'lucide-react';
import { experienceData } from '../data';

export default function ExperienceList() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-2 text-xl font-medium text-zinc-200">
        <Briefcase className="text-indigo-400" size={24} />
        <span>Experience</span>
      </div>

      <div className="space-y-8 mt-2">
        {experienceData.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-[#1f2937] last:border-l-0">
            {/* Dot on the line */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#0f0f0f]" />
            
            <div className="flex flex-col bg-[#121212] border border-[#1f2937] p-6 rounded-2xl shadow-lg hover:border-indigo-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="text-indigo-400 font-medium">{exp.company} – {exp.location}</div>
                </div>
                <div className="text-zinc-400 text-sm md:text-base font-medium px-3 py-1 bg-[#1f2937] rounded-full w-fit">
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-zinc-300 text-sm lg:text-base leading-relaxed flex gap-3">
                    <span className="text-indigo-500 mt-1.5 flex-shrink-0">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
