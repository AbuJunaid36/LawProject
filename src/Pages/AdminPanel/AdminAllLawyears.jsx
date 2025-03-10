import React, { useState, useEffect, useRef } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";

const adminalllawyears = () => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const [selectedSection, setSelectedSection] = useState("BS");
  const [activeDropdown, setActiveDropdown] = useState(null); // State to track active dropdown

  // Ref for the dropdown menu
  const dropdownRef = useRef(null);


  const lawyers = [
    {
      id: 1,
      image: "/img/1Y1A2377-Photo-scaled.jpg",
      name: "John Doe",
      totalClients: 120,
      totalEarned: "$50,000",
      paid: "$45,000",
    },
    {
      id: 2,
      image: "/img/1Y1A2377-Photo-scaled.jpg",
      name: "Jane Smith",
      totalClients: 95,
      totalEarned: "$40,000",
      paid: "$38,000",
    },
    {
      id: 3,
      image: "/img/1Y1A2377-Photo-scaled.jpg",
      name: "Jane Smith",
      totalClients: 95,
      totalEarned: "$40,000",
      paid: "$38,000",
    },
  ];

  const toggleDropdown = (id) => {
    // Toggle the dropdown for the clicked row
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="px-4 py-8 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl text-gray-800 font-bold text-center md:text-left">
          ALL LAWYERS
        </h1>
        <div className="flex text-gray-500 w-full md:w-auto gap-2 md:gap-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border rounded-lg w-[70%] md:w-auto"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg w-[30%] md:w-auto flex  justify-center">
            Searchr
          </button>
        </div>
      </div>

       {/* Table */}
       <div className="overflow-x-auto mt-8">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Lawyer</th>
              <th className="py-3 px-6 text-center">Total Clients</th>
              <th className="py-3 px-6 text-center">Total Earned</th>
              <th className="py-3 px-6 text-center">Paid</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {lawyers.map((lawyer) => (
              <tr
                key={lawyer.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-6 text-left flex items-center">
                  <img
                    className="w-10 h-10 rounded mr-3"
                    src={lawyer.image}
                    alt={lawyer.name}
                  />
                  <span>{lawyer.name}</span>
                </td>
                <td className="py-3 px-6 text-center">{lawyer.totalClients}</td>
                <td className="py-3 px-6 text-center">{lawyer.totalEarned}</td>
                <td className="py-3 px-6 text-center">{lawyer.paid}</td>

                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => toggleDropdown(lawyer.id)} // Toggle the dropdown
                    className="text-blue-500 text-xl px-3 py-1"
                  >
                    <SlOptionsVertical />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === lawyer.id && (
                    <div
                      ref={dropdownRef}
                      className="absolute bg-white border shadow-lg rounded-md mt-1 right-0 w-40 z-10 mr-12"
                    >
                      <ul className="text-gray-700">
                        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                          <Link to="/">View details</Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                          <Link to="/">Option 2</Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                          <Link to="/">Option 3</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default adminalllawyears;
