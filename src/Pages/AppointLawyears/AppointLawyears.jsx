import React, { useEffect, useState } from "react";
import { FaRegCalendarAlt, FaStar } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi";

const doctors = [
  {
    id: 1,
    name: "Dr. Rezowana Afrin",
    qualifications: ["MBBS"],
    fee: "৳600",
    workplace: "Working in Shaheed Suhrawardy Medical College",
    image: "/img/1Y1A2377-Photo-scaled.jpg",
    rating: 5,
    specialty: "MBBS",
  },
  {
    id: 2,
    name: "Dr. John Doe",
    qualifications: ["MBBS", "Specialist"],
    fee: "৳800",
    workplace: "Apollo Hospital Dhaka",
    image: "/img/1Y1A2377-Photo-scaled.jpg",
    rating: 4,
    specialty: "Specialist",
  },
  {
    id: 3,
    name: "Dr. John Doe",
    qualifications: ["MBBS", "Specialist"],
    fee: "৳800",
    workplace: "Apollo Hospital Dhaka",
    image: "/img/1Y1A2377-Photo-scaled.jpg",
    rating: 4,
    specialty: "Specialist",
  },
];

const AppointLawyears = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedFields, setSelectedFields] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFieldSelection = (field) => {
    setSelectedFields((prev) =>
      prev.includes(field)
        ? prev.filter((item) => item !== field)
        : [...prev, field]
    );
  };

  const filteredDoctors = doctors.filter((doctor) => {
    return (
      (selectedRating ? doctor.rating === selectedRating : true) &&
      (selectedSpecialty === "All" || doctor.specialty === selectedSpecialty)
    );
  });

  return (
    <div className="mb-20 md:mb-0 w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-6">
      {/* Filter Button for Mobile */}
      <button
        className="md:hidden flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md w-full"
        onClick={() => setShowFilter(!showFilter)}
      >
        <FiFilter /> Filter
      </button>

      {/* Sidebar Filter */}
      <div
        className={`w-full md:w-1/4 p-4 bg-white shadow-md rounded-lg md:my-4 ${
          showFilter ? "block" : "hidden md:block"
        }`}
      >
        <h3 className="text-lg font-bold mb-4">Filters</h3>

        {/* Star Rating Filter */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Filter by Rating
          </label>
          {[5, 4, 3, 2, 1].map((star) => (
            <button
              key={star}
              className={`flex items-center gap-1 p-1 ${
                selectedRating === star ? "text-yellow-500" : "text-gray-400"
              }`}
              onClick={() =>
                setSelectedRating(star === selectedRating ? null : star)
              }
            >
              {[...Array(star)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </button>
          ))}
        </div>

        {/* Specialty Selection */}
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Specialty
          </label>
          <select
            className="w-full border p-2 rounded-md"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            <option value="All">All</option>
            <option value="MBBS">MBBS</option>
            <option value="Specialist">Specialist</option>
          </select>
        </div>

        {/* Specialized Fields Section */}
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Specialized Fields
          </label>
          {["Corporate Law", "Criminal Law", "Family Law", "Property Law"].map(
            (field) => (
              <div key={field} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedFields.includes(field)}
                  onChange={() => handleFieldSelection(field)}
                />
                <span>{field}</span>
              </div>
            )
          )}
        </div>

        {/* Apply Filter Button */}
        <button className="w-full bg-blue-600 text-white px-4 py-2 mt-4 rounded-md shadow-md">
          Apply Filters
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 md:my-4">
        <div className="text-xl md:text-3xl font-bold shadow-md rounded-xl p-4">
          <p>Appoint Lawyears</p>
        </div>
        <div className="mt-4">
          {doctors.map((doctor) => (
            <Link key={doctor.id} to="/LawyearDetails" className="block">
              <div className="bg-white shadow-lg rounded-xl p-4 md:p-6 flex flex-row items-center space-x-4 w-full border flex-wrap mb-4 cursor-pointer hover:shadow-xl transition">
                <div className="relative w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 flex-shrink-0">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-xl object-cover border-4"
                  />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {doctor.qualifications.join(" ")}
                  </p>
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-md inline-block mt-2">
                    Specality
                  </span>
                  <p className="text-gray-500 text-sm mt-2">
                    {doctor.workplace}
                  </p>
                  <p className="text-green-600 font-medium text-sm mt-2 flex items-center space-x-1">
                    <IoVideocamOutline className="text-xl" />{" "}
                    <span> Instant Video Call </span>
                  </p>
                </div>
                <div className="flex flex-col md:flex-col md:items-start md:space-y-2 items-end w-auto">
                  <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-md flex items-center space-x-1">
                    <FaRegCalendarAlt className="w-4 h-4" />{" "}
                    <span>Make an Appointment</span>
                  </span>
                  <div className="flex flex-row md:flex-col items-center md:items-start space-x-2 md:space-x-0 md:space-y-1 mt-4 md:mt-0">
                    <p className="text-blue-600 font-semibold text-2xl md:text-3xl">
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
    </div>
  );
};

export default AppointLawyears;
