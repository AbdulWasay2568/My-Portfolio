import ProfileSection from '../components/ProfileSection';
import LeftBar from '../components/LeftBar';
import NavBar from '../components/NavBar';
import ProjectsList from '../components/ProjectsList';
import SkillsList from '../components/SkillsList';

export default function Home() {
  return (
    <div className="bg-[#0f0f0f] text-white font-sans flex flex-col min-h-screen w-full">
      {/* Top Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 px-4 py-6 mt-16">
        {/* Left Sidebar */}
        <LeftBar />

        {/* Central Content */}
        <div className="w-full lg:w-3/4 flex flex-col gap-10">
          <ProfileSection />
          <ProjectsList />
          <SkillsList />
        </div>
      </div>
    </div>
  );
}
