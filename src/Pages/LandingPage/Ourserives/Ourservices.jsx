import React from "react";

const OurServices = () => {
  const services = [
    {
      title: "Live Consultation",
      description: "",
      imgSrc: "./img/1.jpg",
    },
    {
      title: "Appoint Lawyers",
      description: "",
      imgSrc: "./img/2.png",
    },
    {
      title: "Document Check",
      description: "",
      imgSrc: "./img/3.png",
    },
    {
      title: "Fact-check of your case",
      description: "",
      imgSrc: "./img/4.png",
    },
    {
      title: "Legal IT Services",
      description: "",
      imgSrc:
        "./img/law-firm-services-with-justice-legal-advice-judgement-and-lawyer-consultant-in-flat-cartoon-poster-hand-drawn-templates-illustration-vector.jpg",
    },
  ];

  return (
    <div className="bg-white my-10 md:my-20 mx-auto w-full md:w-[83%]">
      <h2 className="text-center text-4xl md:text-6xl font-bold text-gray-800 md:mb-8">
        Legal Services
      </h2>

      <div className="flex justify-between lg:grid-cols-5 overflow-y-hidden custom-scrollbar space-x-6 p-8 ">
        {services.map((service, index) => (
          <a
            href="/"
            key={index}
            className="relative group min-w-[140px] md:w-[300px] h-[150px] sm:h-[200px] md:h-[300px] bg-center bg-cover rounded-lg shadow-sm border border-gray-200 hover:border-blue-500 transition-all duration-500"
            style={{ backgroundImage: `url(${service.imgSrc})` }}
          >
            {/* Text Content */}
            <div className="absolute bottom-0 flex flex-col items-center justify-center text-center bg-white/80 sm:group-hover:bg-white p-3 rounded-b-lg transition-all duration-500 ease-in-out transform sm:group-hover:translate-y-0 sm:group-hover:pb-[30px] w-full">
              <h3 className="text-lg font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm font-normal mt-2">{service.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
