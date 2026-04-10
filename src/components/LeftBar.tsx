import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { socialLinks } from "../data/socials";

export default function LeftBar() {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram": return <FaInstagram />;
      case "twitter": return <FaTwitter />;
      case "linkedin": return <FaLinkedin />;
      case "github": return <FaGithub />;
      default: return null;
    }
  };

  return (
    <div className="hidden lg:flex w-1/4 flex-col items-center">
      <div className="sticky top-24 w-full flex flex-col items-center gap-6">
        {/* Profile Card Summary (Minimal) */}
        <div className="bg-[#121212] border border-[#1f2937] rounded-3xl p-6 w-full shadow-xl">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-[2px] mb-4">
              <div className="w-full h-full rounded-2xl bg-[#0f0f0f] flex items-center justify-center text-2xl font-bold text-white">
                AW
              </div>
            </div>
            <h2 className="text-white font-bold text-lg">Abdul Wasay</h2>
            <p className="text-zinc-500 text-sm mt-1">Full-Stack Developer</p>
          </div>

          <div className="mt-8 space-y-3">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-all duration-300"
                title={social.platform}
              >
                <div className="text-xl text-zinc-400 group-hover:text-indigo-400 transition-colors">
                  {getIcon(social.platform)}
                </div>
                <span className="text-zinc-400 group-hover:text-white text-sm font-medium transition-colors">
                  {social.platform}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#1f2937]">
            <a 
              href="#contact" 
              className="block w-full text-center py-3 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-xl text-sm font-bold transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
