import React, { useState, useEffect } from "react";

const appointmentData = {

  paymentDetails: {
    title: "📜 Payment Details",
    items: [
      { label: "Consultation Fee", amount: "৳476.2" },
      { label: "VAT (5%)", amount: "৳23.81" },
    ],
    total: { label: "Total Amount", amount: "৳500" },
  }
};

const FactCheck = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const [searchType, setSearchType] = useState("number"); // State to manage search type
  const [division, setDivision] = useState("Appellate Division"); // State for division
  const [caseType, setCaseType] = useState(""); // State for case type
  const [caseNumber, setCaseNumber] = useState(""); // State for case number
  const [petitioner, setPetitioner] = useState(""); // State for petitioner
  const [respondent, setRespondent] = useState(""); // State for respondent
  const [previousCourtCase, setPreviousCourtCase] = useState(""); // State for previous court case

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search logic here
    console.log("Searching...");
  };

  return (
    <div className="w-[95%] md:w-[80%] mx-auto min-h-screen p-4 md:py-8 mb-20 md:mb-0">
      <div className=" bg-white shadow-lg rounded-lg p-4 mb-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Case Search</h1>

        {/* Search Type Toggle */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setSearchType("number")}
            className={`px-4 py-2 rounded-lg ${
              searchType === "number"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Search by Number
          </button>
          <button
            onClick={() => setSearchType("other")}
            className={`px-4 py-2 rounded-lg ${
              searchType === "other"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Search by Other Fields
          </button>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSubmit}>
          {searchType === "number" && (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Division:</label>
                <select
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="Appellate Division">Appellate Division</option>
                  <option value="High Court Division">
                    High Court Division
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Case Type:</label>
                <input
                  type="text"
                  value={caseType}
                  onChange={(e) => setCaseType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter case type"
                />
              </div>
              <div>
                <label className="block text-gray-700">Case Number:</label>
                <input
                  type="text"
                  value={caseNumber}
                  onChange={(e) => setCaseNumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter case number"
                />
              </div>
            </div>
          )}

          {searchType === "other" && (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Division:</label>
                <select
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="Appellate Division">Appellate Division</option>
                  <option value="High Court Division">
                    High Court Division
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Petitioner:</label>
                <input
                  type="text"
                  value={petitioner}
                  onChange={(e) => setPetitioner(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter petitioner name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Respondent:</label>
                <input
                  type="text"
                  value={respondent}
                  onChange={(e) => setRespondent(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter respondent name"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Previous Court Case:
                </label>
                <input
                  type="text"
                  value={previousCourtCase}
                  onChange={(e) => setPreviousCourtCase(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter previous court case"
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          {/* <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-200"
            >
              Search
            </button>
          </div> */}
        </form>
      </div>

      {/* Payment Details */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-700">
          {appointmentData.paymentDetails.title}
        </h2>
        <div className="mt-4 text-gray-800">
          {appointmentData.paymentDetails.items.map((item, index) => (
            <p key={index} className="flex justify-between text-lg">
              {item.label} <span className="font-medium">{item.amount}</span>
            </p>
          ))}
          <p className="flex justify-between font-bold text-xl mt-4 border-t pt-4">
            {appointmentData.paymentDetails.total.label}{" "}
            <span className="text-blue-600">
              {appointmentData.paymentDetails.total.amount}
            </span>
          </p>
        </div>
        {/* Make Payment Button */}
        <button className="mt-6 w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-lg font-semibold">
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default FactCheck;
