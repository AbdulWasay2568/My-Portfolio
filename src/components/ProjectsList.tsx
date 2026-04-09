import { Link } from 'react-router-dom';
import { projects, projectsByDomain } from '../data';

export default function ProjectsList() {
  // flattened projects (for computing global index) and grouped projects
  const flat = projects;

  return (
    <section className="grid gap-8 p-5 mt-5 md:p-1 lg:p-2">
      <div className="text-xl font-medium text-zinc-200">Projects</div>

      {Object.entries(projectsByDomain).map(([domain, list]) => (
        <div key={domain} className="space-y-4">
          <div className="text-lg font-semibold text-zinc-200 capitalize">{domain === 'AI' ? 'AI' : domain.charAt(0).toUpperCase() + domain.slice(1)}</div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            {list.map((card) => {
              const index = flat.indexOf(card);
              return (
                <Link key={`${card.title}-${index}`} to={`/project/${index}`} state={{ project: card, index }}>
                  <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      width={700}
                      height={700}
                      className="object-cover h-48 w-full hover:scale-105 transition-transform duration-300 ease-in-out rounded-t-lg"
                    />
                    <div className="flex flex-col px-4 py-2 h-24">
                      <div className="flex font-bold">{card.title}</div>
                      <div className="flex text-info text-xs">{card.techStack.join(', ')}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
