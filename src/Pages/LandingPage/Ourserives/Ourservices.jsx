import React from "react";
import { Link } from "react-router-dom";

const OurServices = () => {
  const services = [
    {
      title: "Waiting Room",
      description: "",
      imgSrc: "./img/1.jpg",
      link: "/WaitingRoom",
    },
    {
      title: "Consult With Lawyers",
      description: "",
      imgSrc: "./img/2.png",
      link: "/AppointLawyears",
    },
    {
      title: "Document Check",
      description: "",
      imgSrc: "./img/3.png",
      link: "/DocumentCheck",
    },
    {
      title: "Fact-check of your case",
      description: "",
      imgSrc: "./img/4.png",
      link: "/FactCheck",
    },
    {
      title: "Any Legal Help",
      description: "",
      imgSrc:
        "./img/law-firm-services-with-justice-legal-advice-judgement-and-lawyer-consultant-in-flat-cartoon-poster-hand-drawn-templates-illustration-vector.jpg",
      link: "/Legal_Help",
    },
    {
      title: "Appoint Lawyers",
      description: "",
      imgSrc: "./img/2.png",
      link: "/AppointLawyears",
    },
    {
      title: "Land Documents Check",
      description: "",
      imgSrc: "./img/4.png",
      link: "/Land_Document_Check",
    },
  ];

  return (
    <div className="bg-white my-5 md:my-20 mx-auto w-full md:w-[83%]">
      <h2 className="text-center text-2xl md:text-6xl font-bold text-gray-800 mb-2 md:mb-4">
        Legal Services
      </h2>

      <div className="overflow-x-auto lg:overflow-x-hidden p-4">
        <div className="flex gap-4 sm:gap-6 lg:grid lg:grid-cols-5">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="flex-shrink-0 w-[160px] md:w-[200px] lg:w-auto relative group h-[150px] md:h-[250px] lg:h-[300px] bg-center bg-cover rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-500 transition-all duration-500 ease-in-out transform hover:scale-105"
              style={{ backgroundImage: `url(${service.imgSrc})` }}
            >
              {/* Text Content */}
              <div className="absolute bottom-0 flex flex-col items-center justify-center text-center bg-white/50 backdrop-blur-md sm:group-hover:bg-white/70 p-2 sm:p-4 rounded-b-2xl transition-all duration-500 ease-in-out transform sm:group-hover:translate-y-0 sm:group-hover:pb-[30px] w-full">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 drop-shadow-md">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm font-normal mt-1 text-gray-700">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
