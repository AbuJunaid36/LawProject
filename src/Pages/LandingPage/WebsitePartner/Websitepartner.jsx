import React from "react";
import { Link } from "react-router-dom";

const Websitepartner = () => {
  const hospitalPartners = [
    {
      name: "Bangladesh Specialized Hospital",
      logo: "/img/attorny-logo-1.jpg",
      link: "https://www.ldblegal.com/",
    },
    {
      name: "Chevron",
      logo: "/img/attorny-logo-1.jpg",
      link: "https://www.ldblegal.com/",
    },
    {
      name: "Popular",
      logo: "/img/attorny-logo-1.jpg",
      link: "https://www.ldblegal.com/",
    },
    {
      name: "Praava Health",
      logo: "/img/attorny-logo-1.jpg",
      link: "https://www.ldblegal.com/",
    },
    {
      name: "York Hospital",
      logo: "/img/attorny-logo-1.jpg",
      link: "https://www.ldblegal.com/",
    },
  ];

  return (
    <div>
      <section className="my-10 md:my-32 bg-white w-[80%] mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-6 md:mb-12">
            Law Farms
          </h2>
          <div className="overflow-x-auto">
            <div
              className="grid grid-cols-[repeat(5,minmax(0,1fr))] gap-6 min-w-max"
              style={{ width: "100%" }}
            >
              {hospitalPartners.map((partner, index) => (
                <Link
                  key={index}
                  to={partner.link} // This will use the link property from each partner
                  className="flex flex-col justify-center items-center p-6 w-48 h-48 border border-gray-300 rounded-lg shadow-lg bg-white"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="h-32 w-auto object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Websitepartner;
