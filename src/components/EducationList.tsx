import { GraduationCap } from 'lucide-react';
import { educationData } from '../data';

export default function EducationList() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-2 text-xl font-medium text-zinc-200">
        <GraduationCap className="text-indigo-400" size={24} />
        <span>Education</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {educationData.map((edu, index) => (
          <div 
            key={index} 
            className="group flex flex-col bg-[#121212] border border-[#1f2937] p-6 rounded-2xl shadow-lg hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                <GraduationCap className="text-indigo-400" size={20} />
              </div>
              <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">
                {edu.period}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
              {edu.degree}
            </h3>
            <p className="text-zinc-400 text-sm mb-4">{edu.institution}</p>
            
            <div className="mt-auto flex items-center justify-between">
              <span className="text-zinc-500 text-xs">{edu.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
