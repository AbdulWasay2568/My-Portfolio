import React from 'react';
import abdulwasay from '../assets/Images/abdulwasay.jpg';

export default function ProfileSection() {
  return (
    <div className="flex flex-col bg-gray-950 rounded-lg p-4 lg:p-8">
      <div className="flex flex-col sm:flex-row lg:flex-row bg-gray-950 items-center rounded-lg">
        {/* Profile Picture and Name */}
        <div className="flex flex-col items-center p-4 lg:p-8">
          <img className="rounded-full w-32 sm:w-80 lg:w-96" src={abdulwasay} alt="Profile Picture" />
          <p className="mt-4 text-lg text-zinc-200 text-center">Abdul Wasay</p>
        </div>

        {/* Profile Description */}
        <div className="flex flex-col m-2 lg:ml-6">
          <p className="font-bold text-2xl text-center lg:text-left">Software Engineer</p>
          <p className="text-zinc-300 mt-3 text-sm lg:text-base text-center lg:text-left">
            Enthusiastic and motivated Computer Science student with a keen interest in Artificial Intelligence and Software Development. 
            Demonstrates exceptional problem-solving abilities and a robust proficiency in programming, algorithms, and data structures.
          </p>
        </div>
      </div>
    </div>
  );
}
