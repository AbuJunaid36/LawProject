import React from "react";

const Packages = () => {
  return (
    <div className="hidden md:block">
      <section className="bg-blue-50 py-12 my-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 w-[80%]">
          {/* Left Side - Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/img/Projekt-bez-nazwy-22-removebg-preview.png" // Replace with your image URL
              alt="Family Illustration"
              className="rounded-lg shadow-lg w-full max-w-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1">
            <h2 className="text-3xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-8">
              Legal packages
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-6 md:mb-12">
              The Personal Legal Subscription Package offers unlimited
              consultations, document drafting, and emergency legal support.
              Ideal for individuals seeking affordable, ongoing legal
              assistance.
            </p>
            <button className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              View All Packages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
