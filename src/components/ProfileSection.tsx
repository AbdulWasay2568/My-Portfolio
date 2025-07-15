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
          <p className="font-bold text-2xl text-[#6366F1] text-center lg:text-left">Software Developer</p>
          <p className="text-zinc-300 mt-3 text-sm lg:text-base text-center lg:text-left">
            Enthusiastic and motivated Computer Science student with a keen interest in Artificial Intelligence and Software Development. 
            Demonstrates exceptional problem-solving abilities and a robust proficiency in programming, algorithms, and data structures.
          </p>
        </div>
      </div>
    </div>
  );
}
