import React, { useState, useEffect } from "react";

const AdminDocumentCheck = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const [selectedSection, setSelectedSection] = useState("BS");

  const appointmentData = {
    patientSelection: {
      title: "👤 Patient Selection",
      label: "Mobile Number",
      placeholder: "Enter your mobile number",
      terms: "By proceeding, you agree to our",
      termsLinks: [
        { text: "Terms of Service", url: "#" },
        { text: "Privacy Policy", url: "#" },
      ],
      buttonText: "Send OTP",
    },
  };

  return (
    <div className="mx-auto mb-20 md:mb-0 flex flex-col gap-4 items-center justify-center">
      <div className=" px-4 py-8 rounded-md w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-xl md:text-2xl text-gray-800 font-bold text-center md:text-left">
            দলিল/খতিয়ান উত্তোলন
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

        {/* Top Sections */}
        <div>
          {/* Section Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-2 mb-2">
            {["BS", "CS", "RS", "MAP", "DOLIL UTTOLON"].map(
              (section, index) => (
                <div
                  key={index}
                  className={`text-center p-2 md:p-3 rounded-md font-semibold cursor-pointer transition-all 
        ${
          selectedSection === section
            ? " shadow-lg scale-105 bg-blue-500 text-white "
            : " hover:bg-blue-100 bg-gray-200 text-gray-700 "
        } 
        ${
          section === "DOLIL UTTOLON"
            ? "w-full md:w-auto col-span-2 md:col-span-1"
            : ""
        }`}
                  onClick={() => setSelectedSection(section)}
                >
                  {section}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDocumentCheck;
