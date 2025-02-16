import React from "react";
import { MdOutlineAreaChart } from "react-icons/md";

const Whyus = () => {
  const features = [
    {
      icon: <MdOutlineAreaChart />,
      iconBg: "bg-blue-100 text-blue-600",
      text: "Access any GP or specialist doctor you need at any time from anywhere.",
    },
    {
      icon: <MdOutlineAreaChart />,
      iconBg: "bg-green-100 text-green-600",
      text: "Access to online prescriptions, medicine delivery, and diagnostic tests.",
    },
    {
      icon: <MdOutlineAreaChart />,
      iconBg: "bg-red-100 text-red-600",
      text: "Access to online prescriptions, medicine delivery, and diagnostic tests.",
    },
  ];

  return (
    <div>
      <div className="bg-white my-14 md:my-20 mx-auto w-[80%] ">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-10">
          {/* Left Image Section */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-full w-20 h-20">
              <img
                src="/img/istockphoto-1179944175-612x612-removebg-preview.png"
                alt="Icon"
                className="opacity-70"
              />
            </div>
            <div className="">
              <img
                src="img/hero.jpg"
                alt="Doctor interacting"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-2 md:mb-4">
              Why Us?
            </h3>
            <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-8">
              Country's leading healthcare app for yourself & your family
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className={`${feature.iconBg} p-4 rounded-full text-[20px]`}
                  >
                    {feature.icon}
                  </div>
                  <p className="text-gray-700 sm:text-xl">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
