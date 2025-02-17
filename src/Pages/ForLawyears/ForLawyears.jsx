import React from "react";

const ForLawyears = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 text-left text-gray-800">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-blue-600">
          Are You A Qualified Lawyer?
        </h1>
        <h2 className="mt-4 text-xl md:text-2xl font-medium text-teal-600">
          Join the forefront of digital legal services
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-700">
          Join our network and create your virtual law chamber to provide legal
          consultancy via video call and expand your services.
        </p>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Enroll yourself in just minutes!
        </p>
        <a href="/SignupLawyear">
          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300">
            Sign up now
          </button>
        </a>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 md:flex justify-center hidden">
        <img
          src="/img/1Y1A2377-Photo-scaled.jpg"
          alt="Qualified Lawyer"
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-8 border-blue-600 shadow-xl"
        />
      </div>
    </div>
  );
};

export default ForLawyears;
