import React from "react";

const Partner = () => {
  return (
    <div>
      <section className="bg-white my-20">
        <div className="container mx-auto flex flex-col lg:flex-row  gap-8 w-[80%]">
          {/* Right Side - Content */}
          <div className="flex-1 text-center lg:text-left order-last lg:order-none">
            <p className="text-blue-600 font-semibold text-xl mb-2">
              Become a Corporate Partner
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-8">
              Empower your legal team with seamless Legal Support Solutions.
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-6 md:mb-12">
              Ensure the success of your legal team with our comprehensive legal
              support platform, offering tailored packages that include online
              consultations, case management, document drafting, and
              personalized legal assistance.
            </p>
            <button className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Read More
            </button>
          </div>

          {/* Left Side - Images */}
          <div className="flex-1 flex flex-wrap justify-center gap-4 order-first lg:order-none">
            <img
              src="/img/hero.jpg"
              alt="Doctor Consultation"
              className="rounded-lg shadow-md w-full max-w-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
