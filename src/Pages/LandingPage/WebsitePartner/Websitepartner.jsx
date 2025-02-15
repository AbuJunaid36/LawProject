import React from "react";

const Websitepartner = () => {
  const hospitalPartners = [
    {
      name: "Bangladesh Specialized Hospital",
      logo: "/img/attorny-logo-1.jpg",
    },
    {
      name: "Chevron",
      logo: "/img/attorny-logo-1.jpg",
    },
    {
      name: "Popular",
      logo: "/img/attorny-logo-1.jpg",
    },
    {
      name: "Praava Health",
      logo: "/img/attorny-logo-1.jpg",
    },
    {
      name: "York Hospital",
      logo: "/img/attorny-logo-1.jpg",
    },
  ];

  return (
    <div>
      <section className="my-10 md:my-32 bg-white w-[80%] mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-12">
            Law Farms
          </h2>
          <div className="overflow-x-auto">
            <div
              className="grid grid-cols-[repeat(5,minmax(0,1fr))] gap-6 min-w-max"
              style={{ width: "100%" }}
            >
              {hospitalPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center p-6 w-48 h-48 border border-gray-300 rounded-lg shadow-lg bg-white"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="h-32 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Websitepartner;
