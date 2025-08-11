import React, { useState, FormEvent } from "react";

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

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name */}
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
            className="w-full px-4 py-2 bg-[#18181b] border border-[#1f2937] rounded-lg focus:outline-none focus:border-indigo-400"
          />
        </div>

        {/* Email */}
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
            className="w-full px-4 py-2 bg-[#18181b] border border-[#1f2937] rounded-lg focus:outline-none focus:border-indigo-400"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#18181b] border border-[#1f2937] rounded-lg focus:outline-none focus:border-indigo-400"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-lg font-semibold text-white transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
