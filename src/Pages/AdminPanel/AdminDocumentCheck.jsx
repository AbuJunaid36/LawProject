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
    paymentDetails: {
      title: "📜 Payment Details",
      items: [
        { label: "Consultation Fee", amount: "৳476.2" },
        { label: "VAT (5%)", amount: "৳23.81" },
      ],
      total: { label: "Total Amount", amount: "৳500" },
    },
    lawyerInfo: {
      name: "Assoc. Prof. Dr. Muhammed Ashraful Alam Bhuiyan",
      qualifications: "MBBS, MCPS, Diploma (Dermatology), FCPS",
      specialty: "Dermatologist",
      image: "/img/1Y1A2377-Photo-scaled.jpg",
    },
  };

  return (
    <div className="w-[95%] md:w-[80%] mx-auto mb-20 md:mb-0 flex flex-col gap-4 items-center justify-center py-4">
      <div className="bg-white px-4 py-8 rounded-xl shadow-2xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          দলিল/খতিয়ান উত্তোলন
        </h1>

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

          {/* Notice with Icon */}
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-4">
            <span className="text-lg">⚠️</span>
            <p>Please select your preferred sector first.</p>
          </div>
        </div>

        {/* Form */}

        <form className="space-y-6">
          {/* Dropdowns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["বিভাগ", "জেলা", "জরিপ", "থানা", "মৌজা"].map((label, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label}:
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <option>নির্বাচন করুণ</option>
                  <option value="1">{label} ১</option>
                  <option value="2">{label} ২</option>
                  <option value="3">{label} ৩</option>
                </select>
              </div>
            ))}
          </div>

          {/* Text Inputs */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "বর্তমান খতিয়ান",
              "মালিক",
              "পিতা",
              "মাতা",
              "এন. আইডি",
              "জন্ম নিবন্ধন",
              "সাবেক খতিয়ান",
              "বর্তমান দাগ",
              "সাবেক দাগ",
              "সি.এস.দাগ",
              "মালিকের ঠিকানা",
              "স্বামী / স্ত্রী",
              "মোবাইল নম্বর",
            ].map((label, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label}:
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            ))}
          </div>

          {/* File Upload Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              নথি সংযুক্ত করুন:
            </label>
            <input
              type="file"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </form>
      </div>
      <div className="bg-white w-full p-6 rounded-xl shadow-lg border border-gray-200">
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
        <button className="w-full bg-blue-600 text-white p-3 mt-6 rounded-md font-semibold hover:bg-blue-700 transition-all transform ">
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default AdminDocumentCheck;
