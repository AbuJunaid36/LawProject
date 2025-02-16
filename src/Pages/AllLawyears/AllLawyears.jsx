import React, { useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. Rezowana Afrin",
    qualifications: [
      "MBBS",
      "BCS (Health)",
      "MRCOG (Gynae & Obs) (UK)",
      "MCPS (Gynae & Obs)",
      "FCPS (Gynae & Obs)",
    ],
    fee: "৳600",
    workplace: "Working in Shaheed Suhrawardy Medical College",
    image: "/img/1Y1A2377-Photo-scaled.jpg",
  },
  {
    id: 2,
    name: "Dr. Rezowana Afrin",
    qualifications: [
      "MBBS",
      "BCS (Health)",
      "MRCOG (Gynae & Obs) (UK)",
      "MCPS (Gynae & Obs)",
      "FCPS (Gynae & Obs)",
    ],
    fee: "৳600",
    workplace: "Working in Shaheed Suhrawardy Medical College",
    image: "/img/1Y1A2377-Photo-scaled.jpg",
  },
  {
    id: 3,
    name: "Dr. Rezowana Afrin",
    qualifications: [
      "MBBS",
      "BCS (Health)",
      "MRCOG (Gynae & Obs) (UK)",
      "MCPS (Gynae & Obs)",
      "FCPS (Gynae & Obs)",
    ],
    fee: "৳600",
    workplace: "Working in Shaheed Suhrawardy Medical College",
    image: "/img/1Y1A2377-Photo-scaled.jpg",
  },
];

const AllLawyears = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="text-2xl md:text-4xl font-bold w-[90%] md:w-[80%] mx-auto mt-4  shadow-[0_3px_5px_rgb(0,0,0,0.1)] rounded-xl p-4">
        <p>Lawyears</p>
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto mt-4">
        {doctors.map((doctor) => (
          <Link to="/LawyearDetails" className="block">
            <div className="bg-white shadow-lg rounded-xl p-4 md:p-6 flex flex-row items-center space-x-4 w-full border flex-wrap mb-4 cursor-pointer hover:shadow-xl transition">
              {/* Doctor Image */}
              <div className="relative w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 flex-shrink-0">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-xl object-cover border-4"
                />
              </div>

              {/* Doctor Information */}
              <div className="flex-1 text-left">
                <h3 className="text-lg md:text-xl font-semibold">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-tight">
                  {doctor.qualifications.join(" ")}
                </p>
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-md inline-block mt-2">
                  Specality
                </span>
                <p className="text-gray-500 text-sm mt-2">{doctor.workplace}</p>
                <p className="text-green-600 font-medium text-sm mt-2 flex items-center space-x-1">
                  <IoVideocamOutline className="text-xl" />{" "}
                  <span> Instant Video Call </span>
                </p>
              </div>

              {/* Consultation Fee & Status */}
              <div className="flex flex-col md:flex-col md:items-start md:space-y-2 items-end w-auto">
                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-md flex items-center space-x-1">
                  <FaRegCalendarAlt className="w-4 h-4" />
                  <span>Make an Appointment</span>
                </span>
                <div className="flex flex-row md:flex-col items-center md:items-start space-x-2 md:space-x-0 md:space-y-1 mt-4 md:mt-0">
                  <p className="text-blue-600 font-semibold text-xl">
                    {doctor.fee}
                  </p>
                  <p className="text-gray-500 text-sm">
                    (Inc. VAT) Per Consultation
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllLawyears;
