import React from "react";
// Inside your media.jsx file
import "../../../App.css";

const Availablelawyear = () => {
  const cardsData = [
    {
      title: "Civil Lawyers",
      description:
        "Cold, flu, fever, vomiting, infections, headaches, or any other general issues",
      image: "/img/32721de9dacf880dc9c00d14726d9315.jpg",
    },
    {
      title: "Criminal Lawyers",
      description:
        "Children's health-related issues including physical, behavioral, and developmental problems",
      image: "/img/32721de9dacf880dc9c00d14726d9315.jpg",
    },
    {
      title: "Land Law Specalist",
      description:
        "Women's health-related issues including pregnancy, menstruation, and related concerns",
      image: "/img/32721de9dacf880dc9c00d14726d9315.jpg",
    },
    {
      title: "Tax Lawyers",
      description:
        "Women's health-related issues including pregnancy, menstruation, and related concerns",
      image: "/img/32721de9dacf880dc9c00d14726d9315.jpg",
    },
    {
      title: "Immigration Lawyers",
      description:
        "Women's health-related issues including pregnancy, menstruation, and related concerns",
      image: "/img/32721de9dacf880dc9c00d14726d9315.jpg",
    },
    // Add more objects as needed
  ];

  return (
    <div>
      <div className="bg-gray-100 py-4 md:py-12 px-4 my-10 ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
          {/* Left Content */}
          <div className=" md:w-1/3">
            <p className="text-blue-500 text-xl font-semibold">
              Available specialties
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mt-2 text-gray-800">
              Explore Lawyers from special areas
            </h2>
          </div>

          {/* Right Content */}

          <div className="overflow-x-auto lg:overflow-x-hidden custom-scrollbar  w-full p-4">
            <div className="flex lg:grid lg:grid-cols-3 lg:gap-6 md:w-max min-w-full gap-6">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-4 md:p-6 hover:border-blue-500 border transition w-64 flex-shrink-0 lg:flex-shrink"
                >
                  <div className="flex justify-center mb-4">
                    <img src={card.image} alt={card.title} className="h-20" />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-center mt-2 text-sm">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availablelawyear;
