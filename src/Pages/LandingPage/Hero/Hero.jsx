import React from "react";

const hero = () => {
  return (
    <div>
      <section className=" pt-5  rounded-lg">
        {/* Search Bar */}
        <div className="mb-6  mx-auto w-[90%] md:w-[80%]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name/code or section"
              className="w-full py-3 pl-4 pr-12 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button className="absolute top-1/2 right-4 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 7.5 7.5a7.5 7.5 0 0 0 9.15 9.15z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex-1">
          <div className="relative w-[90%] md:w-[80%] h-36 md:h-80 lg:h-[450px] mx-auto">
            <img
              src="img/Untitled-1.jpg"
              alt="App Screenshot"
              className=" w-full h-full  rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default hero;
