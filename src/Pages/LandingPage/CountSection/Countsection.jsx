import React from "react";
import { PiClockCountdownLight } from "react-icons/pi";
import { PiShootingStarLight } from "react-icons/pi";
import { PiVideoConferenceLight } from "react-icons/pi";
import { TbStars } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";

const Countsection = () => {
  const cardData = [
    {
      icon: <PiClockCountdownLight className="text-6xl text-blue-500" />,
      title: "10 Minutes",
      description: "Average consultation waiting time",
    },
    {
      icon: <PiShootingStarLight className="text-6xl text-pink-500" />,
      title: "4M+",
      description: "People under healthcare coverage",
    },
    {
      icon: <PiVideoConferenceLight className="text-6xl text-green-400" />,
      title: "561K+",
      description: "Video consultation successfully completed",
    },
    {
      icon: <TbStars className="text-6xl text-yellow-500" />,
      title: "95%",
      description: "Customers gave 5-star rating",
    },
    {
      icon: <FiDownload className="text-6xl text-blue-500" />,
      title: "1+ Million",
      description: "App download on Playstore",
    },
  ];

  return (
    <div>
      <div className="bg-blue-50 py-12 md:py-20 px-4 overflow-x-auto my-10 md:my-20">
        <div className="flex justify-between space-x-12 w-[80%] mx-auto">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-md text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countsection;
