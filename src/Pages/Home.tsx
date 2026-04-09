import ProfileSection from '../components/ProfileSection';
import NavBar from '../components/NavBar';
import ProjectsList from '../components/ProjectsList';
import SkillsList from '../components/SkillsList';
import ExperienceList from '../components/ExperienceList';
import EducationList from '../components/EducationList';
import ContactMe from '../components/ContactMe';

export default function Home() {
  return (
    <div className="bg-[#0f0f0f] text-white font-sans flex flex-col min-h-screen w-full scroll-smooth">
      <NavBar />

      <div className="flex flex-col items-center gap-6 px-4 py-6 mt-16 pb-20">
        <div className="w-full max-w-5xl flex flex-col gap-16">
          <section id="about">
            <ProfileSection />
          </section>

          <section id="experience">
            <ExperienceList />
          </section>

          <section id="projects">
            <ProjectsList />
          </section>

          <section id="skills">
            <SkillsList />
          </section>

          <section id="education">
            <EducationList />
          </section>

          <section id="contact">
            <ContactMe />
          </section>
        </div>
      </div>
    </div>
  );
}
