import spotify from '../assets/Images/Projects/spotify-clone.gif';
import dominos from '../assets/Images/Projects/dominos.png';
import objectDetection from '../assets/Images/Projects/object-detection.png';
import eCommerce from '../assets/Images/Projects/e-commerce.jpg'
import youtube from '../assets/Images/Projects/youtube.jpg';
import whatsApp from '../assets/Images/Projects/WhatsApp.jpg';

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
        href: 'https://spotify-clone-black-two.vercel.app/',
    },
    {
      id: 3,
      title: 'WhatsApp Clone',
      techStack: 'React.js, TypeScript, Tailwind CSS, Socket.IO, WebRTC, Express.js, PostgreSQL, Prisma ORM',
      imageUrl: whatsApp,
      href: 'https://github.com/AbdulWasay2568/WhatsApp-Web-Clone',
    },
    {
      id: 4,
      title: 'Object Detection and Classification',
      techStack:
        'YOLO v8',
      imageUrl: objectDetection,
      href: 'https://github.com/AbdulWasay2568/Object-Detection-and-Classification',
    },
    {
      id: 5,
      title: ' Eccomerce Website',
      techStack: 'React.js, Typescript, Tailwind CSS, Express.js, Postgre SQL, Prisma ORM',
      imageUrl: eCommerce,
      href: 'https://github.com/AbdulWasay2568/Ecommerce-Full-Stack',
    },
    {
      id: 6,
      title: ' YouTube Web Clone',
      techStack: 'React.js, Typescript, Tailwind CSS',
      imageUrl: youtube,
      href: 'https://github.com/AbdulWasay2568/YouTube-Clone',
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
        className="object-cover h-48 w-full hover:scale-105 transition-transform duration-300 ease-in-out rounded-t-lg"
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
