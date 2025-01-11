import ProjectsList from '../components/ProjectsList'
import LeftBar from '../components/LeftBar';
import NavBar from '../components/NavBar';

export default function Projects() {
  return (
    <div className="bg-black text-white font-semibold flex flex-col justify-between min-h-screen w-full">
      <NavBar />

      <div className="flex flex-col lg:flex-row gap-4 px-4 py-2 mt-16">
        <LeftBar/>

        <div className="w-full lg:w-3/4 flex justify-center">
          <ProjectsList />
        </div>

      </div>
    </div>
  );
}
