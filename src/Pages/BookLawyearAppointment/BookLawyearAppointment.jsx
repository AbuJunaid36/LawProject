import React, { useState } from "react";

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
    total: { label: "Net Amount", amount: "৳500" },
  },
  lawyerInfo: {
    name: "Assoc. Prof. Dr. Muhammed Ashraful Alam Bhuiyan",
    qualifications: "MBBS, MCPS, Diploma (Dermatology), FCPS",
    specialty: "Dermatologist",
    image: "/img/1Y1A2377-Photo-scaled.jpg",
  },
};

const BookLawyerAppointment = () => {
  // State to manage OTP visibility
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(""); // State to manage OTP error

  // Handle OTP input change
  const handleOtpChange = (e) => setOtp(e.target.value);

  // Handle Send OTP button click
  const handleSendOtp = () => {
    setOtpSent(true); // Show OTP input field after button click
    setOtpError(""); // Reset OTP error when sending OTP
  };

  // Handle OTP submit
  const handleOtpSubmit = () => {
    // Simple OTP validation (checks for 6 digits)
    if (otp.length !== 6) {
      setOtpError("OTP must be 6 digits");
    } else {
      setOtpError(""); // Clear error if OTP is valid
      // Add the logic for submitting OTP (like making an API request)
      alert("OTP Submitted: " + otp); // For demonstration purposes
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 py-4 w-[90%] md:w-[80%] mx-auto min-h-screen mb-16 md:mb-0">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full md:w-2/3 order-2 md:order-1">
        {/* Patient Selection */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-700">
            {appointmentData.patientSelection.title}
          </h2>
          <label className="block mt-4 text-gray-600 font-medium text-lg">
            {appointmentData.patientSelection.label}{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-blue-500 rounded-lg overflow-hidden mt-3 bg-gray-50">
            <span className="px-4 md:py-3 bg-blue-500 text-white font-medium ">
              🇧🇩 +88
            </span>
            <input
              type="Number"
              placeholder={appointmentData.patientSelection.placeholder}
              className="flex-1 p-3 outline-none bg-transparent text-gray-700"
            />
          </div>
          <p className="text-sm text-gray-500 mt-3">
            {appointmentData.patientSelection.terms}{" "}
            {appointmentData.patientSelection.termsLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-blue-600 font-medium hover:underline"
              >
                {link.text}
              </a>
            ))}
          </p>

          {/* Send OTP Button */}
          <button
            onClick={handleSendOtp}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mt-5 w-full font-medium text-lg shadow-md transition-all"
          >
            {appointmentData.patientSelection.buttonText}
          </button>

          {/* OTP Input Field (appears after Send OTP button is clicked) */}
          {otpSent && (
            <div className="mt-5">
              <label className="block text-gray-600 font-medium text-lg">
                Enter OTP <span className="text-red-500">*</span>
              </label>
              <div className="flex border border-blue-500 rounded-lg mt-3 bg-gray-50">
                <input
                  type="text"
                  maxLength="6"
                  value={otp}
                  onChange={handleOtpChange}
                  placeholder="Enter OTP"
                  className="flex-1 p-3 outline-none bg-transparent text-gray-700 text-center"
                />
              </div>

              {/* OTP Error Message */}
              {otpError && (
                <p className="text-red-500 text-sm mt-2">{otpError}</p>
              )}

              {/* OTP Submit Button */}
              <button
                onClick={handleOtpSubmit}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg mt-5 w-full font-medium text-lg shadow-md transition-all"
              >
                Submit OTP
              </button>
            </div>
          )}
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
        </div>
      </div>

      {/* Right Side - Lawyer Profile */}
      <div className="w-full md:w-1/3 order-1 md:order-2">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-left flex">
          <div className="relative mr-6">
            <img
              src={appointmentData.lawyerInfo.image}
              alt="Lawyer"
              className="w-24 h-24 rounded-lg mx-auto border shadow-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-md md:text-lg font-bold md:font-semibold text-gray-700">
              {appointmentData.lawyerInfo.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              {appointmentData.lawyerInfo.qualifications}
            </p>
            <span className="bg-blue-600 text-white px-4 py-1 rounded-lg mt-3 inline-block text-sm shadow-md">
              {appointmentData.lawyerInfo.specialty}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookLawyerAppointment;
