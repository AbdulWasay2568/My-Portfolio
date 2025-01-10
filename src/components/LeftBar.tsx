import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function LeftBar() {
  const socialMedia = [
    { platform: "Instagram", link: "https://www.instagram.com/abdulwasaydogar/", icon: <FaInstagram /> },
    { platform: "Twitter", link: "https://twitter.com/AbdulWasaDogar", icon: <FaTwitter /> },
    { platform: "Linkedin", link: "https://www.linkedin.com/in/abdul-wasay-6013b0269/", icon: <FaLinkedin /> },
    { platform : "GithUb" , link: "https://github.com/AbdulWasay2568" , icon: <FaGithub/>}
  ];

  return (
    <div className="text-white min-h-screen min-w-72 flex flex-col">
      <div className="bg-[#121212] rounded-lg mx-1 mt-2 flex flex-col gap-4">
        <div className="px-4 pb-4">
          {socialMedia.map((social, index) => (
            <div
              key={index}
              className="flex items-center p-3 cursor-pointer mb-4 hover:bg-[#223434] mt-5 rounded-lg transition duration-300 "
            >
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full"
              >
                <div className="w-14 h-14 mr-4flex items-center justify-center p-2 flex-row">
                  {/* Dynamic icons based on platform */}
                  {social.icon}
                  <p className="">{social.platform}</p>
                </div>

              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
