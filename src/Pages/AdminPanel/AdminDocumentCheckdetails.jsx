import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";

const AdminDocumentCheckdetails = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);



  // Sample submitted data to display
  const submittedData = {
    sections: {
      বিভাগ: "Medical",
      জেলা: "Dhaka",
      জরিপ: "Survey 1",
      থানা: "Thana 1",
      মৌজা: "Mouza 1",
    },
    fields: {
      "বর্তমান খতিয়ান": "123456",
      মালিক: "John Doe",
      পিতা: "Mr. Doe",
      মাতা: "Mrs. Doe",
      "এন. আইডি": "123-45-6789",
      "জন্ম নিবন্ধন": "BR123456",
      "সাবেক খতিয়ান": "654321",
      "বর্তমান দাগ": "789",
      "সাবেক দাগ": "321",
      "সি.এস.দাগ": "456",
      "মালিকের ঠিকানা": "123 Street, Dhaka",
      "স্বামী / স্ত্রী": "Jane Doe",
      "মোবাইল নম্বর": "017xxxxxxxx",
    },
  };

  return (
    <div className="px-4 py-8 rounded-md w-full mb-20 md:mb-0">
      {/* Back Button */}
      <div className="w-full mb-4">
  <button
    className="flex items-center md:gap-1 text-blue-600 hover:text-blue-800 transition-all"
    onClick={() => window.history.back()} // Go back to the previous page
  >
    <IoIosArrowBack className="text-2xl" />
    <span className="text-lg font-medium">পিছনে যান</span>
  </button>
</div>

      {/* Admin Panel Card */}
      <div className="w-full">
        {/* Form */}
        <form className="space-y-6">
          {/* Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["বিভাগ", "জেলা", "জরিপ", "থানা", "মৌজা"].map((label, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label}:
                </label>
                <div className="p-2 border border-gray-300 rounded-md">
                  {submittedData.sections[label] || "Not Submitted"}
                </div>
              </div>
            ))}
          </div>

          {/* Text Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <div className="p-2 border border-gray-300 rounded-md">
                  {submittedData.fields[label] || "Not Submitted"}
                </div>
              </div>
            ))}
          </div>

          {/* File Upload Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              নথি সংযুক্ত করুন:
            </label>
            <div className="p-2 border border-gray-300 rounded-md">
              {/* Displaying sample uploaded file */}
              {submittedData.fields["নথি"] ? (
                <span>{submittedData.fields["নথি"]}</span>
              ) : (
                "No file uploaded"
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDocumentCheckdetails;
