import spotify from '../assets/Images/Projects/spotify-clone.gif';
import dominos from '../assets/Images/Projects/dominos.png';

export default function ProjectsList() {
  const data = [
    {
      id: 1,
      title: 'Dominos App Clone',
      techStack: 'React Native, Typescript, Supabase',
      imageUrl: dominos,
      href: 'https://github.com/AbdulWasay2568/Dominos-Clone-Supabase',
    },
    {
      id: 2,
      title: 'Spotify Web Clone',
      techStack:
        'React.js, Typescript, Tailwind CSS',
        imageUrl: spotify,
        href: 'https://github.com/AbdulWasay2568/Spotify-Clone',
    },
    {
      id: 3,
      title: 'Amazon Clone',
      techStack:
        'NodeJs, Express, Mongoose, Next.js 13, Next Auth, React Hook Form, Typescript, Tailwind CSS',
      imageUrl: spotify,
      href: '#',
    },
    {
      id: 4,
      title: ' DALL·E Clone',
      techStack: 'OpenAI, Nodejs, Express, Mongoose, ReactJS, Tailwind CSS',
      imageUrl: spotify,
      href: '#',
    },
  ];
  
  
return (
<section className="grid gap-8 p-5 mt-5 md:p-1 lg:p-2">
  <div className="text-xl font-medium text-zinc-200">Projects</div>
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl::grid-cols-4 gap-5">
    {data.map((card) => (
    <a target="_blank" href={card.href || '/'}>
    <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
      <img
        src={card.imageUrl}
        alt="spotify"
        width={700}
        height={700}
        className="aspect-video object-cover"
      />
      <div className="flex flex-col px-4 py-2 h-24">
        <div className="flex font-bold">{card.title}</div>
        <div className="flex text-info text-xs">{card.techStack}</div>
      </div>
    </div>
  </a>
  ))}
  </div>
</section>
);
};
