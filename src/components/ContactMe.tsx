import React, { useState, FormEvent } from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { socialLinks } from "../data";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

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
    <div
      id="contact"
      className="bg-[#0f0f0f] text-white p-6 rounded-2xl shadow-lg border border-[#1f2937] max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-indigo-400 mb-6 text-center">
        Contact Me
      </h2>
      <p className="text-center text-gray-400 mb-8">
        Have a question or want to work together? Fill out the form below and
        I'll get back to you soon.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#18181b] border border-[#1f2937] rounded-lg focus:outline-none focus:border-indigo-400 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#18181b] border border-[#1f2937] rounded-lg focus:outline-none focus:border-indigo-400 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#18181b] border border-[#1f2937] rounded-lg focus:outline-none focus:border-indigo-400 transition-colors"
            ></textarea>
          </div>

          <div className="text-center lg:text-left">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/20"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Social Connect Section */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-white mb-6 text-center lg:text-left">
            Let's Connect
          </h3>
          <p className="text-gray-400 mb-8 text-center lg:text-left">
            You can also find me on these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#18181b] border border-[#1f2937] rounded-xl hover:border-indigo-500/50 hover:bg-[#222226] transition-all duration-300 group"
              >
                <div className="text-2xl text-zinc-400 group-hover:text-indigo-400 transition-colors">
                  {getIcon(social.platform)}
                </div>
                <span className="font-medium text-zinc-300 group-hover:text-white transition-colors">
                  {social.platform}
                </span>
              </a>
            ))}
          </div>
          
          <div className="mt-10 p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl">
            <p className="text-sm text-indigo-300/80 text-center italic">
              "Building the future, one line of code at a time."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
