import React from "react";

const DocumentCheck = () => {
  return (
    <div className=" md:w-[80%] mx-auto mb-20 md:mb-0 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
          DocumentCheck
        </h1>
        <form className="space-y-6">
          {/* Dropdowns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["বিভাগ", "জেলা", "জরিপ", "থানা", "মৌজা"].map((label, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label}:
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
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
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              জমা দিন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentCheck;
