import React from "react";

const Buyonline = () => {
  return (
    <div>
      <section className="py-4 md:py-12 px-4 my-10 md:my-20">
        <div className="mx-auto w-[80%] md:gap-8 flex flex-col md:flex-row items-center justify-between">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/img/5.jpg" // Replace with your image URL
              alt="Medicine Delivery"
              className="w-full max-w-2xl rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="text-2xl md:text-6xl font-bold text-gray-800 mb-4 md:mb-8">
              Buy Land from <br /> Buyers
            </h2>
            <p className="text-gray-700 text-lg md:text-2xl mt-4 mb-6  md:mb-12">
              Authentic medicines with discounts & free home delivery within
              Dhaka city
            </p>
            <p className="text-sm text-gray-500 mb-4">*Conditions apply</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-500 transition">
              Buy Land
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buyonline;
