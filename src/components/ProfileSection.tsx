import abdulwasay from '../assets/Images/abdulwasay.jpg';

export default function ProfileSection() {
  return (
    <div className="flex flex-col bg-[#0f0f0f] rounded-2xl p-4 lg:p-8 shadow-lg border border-[#1f2937]">
      <div className="flex flex-col sm:flex-row lg:flex-row bg-[#1f2937] rounded-2xl items-center">
        {/* Profile Picture and Name */}
        <div className="flex flex-col items-center p-4 lg:p-8">
          <img className="rounded-full w-32 sm:w-80 lg:w-96" src={abdulwasay} alt="Profile Picture" />
          <p className="mt-4 text-lg text-white text-center font-semibold">Abdul Wasay</p>
        </div>

        {/* Profile Description */}
        <div className="flex flex-col m-2 lg:ml-6">
          <p className="font-bold text-2xl text-[#6366F1] text-center lg:text-left">Full-Stack Developer</p>
          <p className="text-zinc-300 mt-3 text-sm lg:text-base text-center lg:text-left">
            Passionate Full-Stack Developer experienced in building production-ready web and mobile applications.
            Skilled in designing scalable backend architectures and intuitive frontend interfaces.
            Strong focus on clean, maintainable code and delivering high quality software solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
