import React, { useState } from "react";
import "../../../App.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const Lawyearlist = () => {
  const [visibleCards, setVisibleCards] = useState(4); // Initially show 4 cards

  const doctors = [
    {
      name: "Dr. Joysree Karmaker",
      qualification: "MSBS.FCPS (Pediatrics)",
      price: "$500",
      vat: "Inc.VAT",
      image: "/img/Jpg-349-1024x683.png",
    },
    {
      name: "Dr. Tahmida Ferdousi",
      qualification: "MSBS.FCPS (Pediatrics)",
      price: "$350",
      vat: "Inc.VAT",
      image: "/img/Jpg-349-1024x683.png",
    },
    {
      name: "Dr. Md. Zahidul Islam",
      qualification: "MSBS.MD (Pediatrics)",
      price: "$600",
      vat: "Inc.VAT",
      image: "/img/Jpg-349-1024x683.png",
    },
    {
      name: "Dr. Shafkat Hasan",
      qualification: "MSBS.DDV (Dermatology)",
      price: "$490",
      vat: "Inc.VAT",
      image: "/img/Jpg-349-1024x683.png",
    },
    {
      name: "Dr. John Doe",
      qualification: "MSBS.FCPS (Cardiology)",
      price: "$450",
      vat: "Inc.VAT",
      image: "/img/Jpg-349-1024x683.png",
    },
    {
      name: "Dr. Jane Smith",
      qualification: "MSBS.MD (Neurology)",
      price: "$550",
      vat: "Inc.VAT",
      image: "/img/Jpg-349-1024x683.png",
    },
    {
      name: "Dr. Alice Johnson",
      qualification: "MSBS.FCPS (Orthopedics)",
      price: "$400",
      vat: "Inc.VAT",
      image: "/img/Jpg-349-1024x683.png",
    },
    {
      name: "Dr. Bob Brown",
      qualification: "MSBS.DDV (Dermatology)",
      price: "$480",
      vat: "Inc.VAT",
      image: "/img/Jpg-349-1024x683.png",
    },
    // Add more doctors as needed
  ];

  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4); // Load 4 more cards
  };

  return (
    <div className="mx-auto w-[90%] md:w-[80%] custom-scrollbar mb-8">
      <div className="flex items-center justify-between mb-2 md:mb-4">
        <h2 className="text-2xl md:text-6xl font-bold text-gray-800  flex justify-center">
          Popular Lawyears
        </h2>
        <Link to="/AllLawyears">
          <p className="flex items-center md:gap-1 text-blue-600 hover:text-blue-800 cursor-pointer transition">
            See All <IoIosArrowRoundForward className="text-xl" />
          </p>
        </Link>
      </div>
      {/* Container for the cards */}
      <div className="grid grid-cols-2 gap-3 sm:flex sm:overflow-x-auto sm:gap-4 sm:pb-4 md:px-1 pt-4">
        {(window.innerWidth >= 1024
          ? doctors
          : doctors.slice(0, visibleCards)
        ).map((doctor, index) => (
          <Link
            to="/LawyearDetails"
            className="bg-white p-1 rounded-lg shadow-[0_3px_5px_rgb(0,0,0,0.1)] sm:min-w-[200px] sm:flex-shrink-0 lg:min-w-[300px] lg:p-6 block"
          >
            <div className="flex flex-col items-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-24 rounded lg:h-36"
              />
              <div className="text-center">
                <h3 className="text-md font-semibold lg:text-lg">
                  {doctor.name}
                </h3>
                <p className="text-xs text-gray-600 lg:text-sm">
                  {doctor.qualification}
                </p>
              </div>
              <div className="mt-2 text-center">
                <p className="text-md font-semibold lg:text-lg">
                  {doctor.price}{" "}
                  <span className="text-xs text-gray-600 lg:text-sm">
                    {doctor.vat}
                  </span>
                </p>
                <button className="mt-1 bg-blue-500 text-white px-5 py-2 rounded-lg text-xs w-full font-bold lg:text-sm lg:px-6 lg:py-3">
                  Book Appointment
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* See More Button */}
      {visibleCards < doctors.length && window.innerWidth < 1024 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMoreCards}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold lg:px-6 lg:py-3 lg:text-md"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Lawyearlist;
