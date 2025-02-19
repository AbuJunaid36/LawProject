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
    total: { label: "Total Amount", amount: "৳500" },
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
        {/* Document */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-700">
            Case Details
          </h2>
          <label className="block mt-4 text-gray-600 font-medium text-lg">
            Reason
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg mt-2"
            placeholder="Enter reason"
          />
          <label className="block mt-4 text-gray-600 font-medium text-lg">
            Which District
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg mt-2"
            placeholder="Enter district"
          />
          <label className="block mt-4 text-gray-600 font-medium text-lg">
            Any Document
          </label>
          <input type="file" className="w-full p-2 border rounded-lg mt-2" />
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
  <button
    className="mt-6 w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-lg font-semibold"
  >
    Make Payment
  </button>
</div>
      </div>

      {/* Right Side - Lawyer Profile */}
      <div className="w-full md:w-1/3 order-1 md:order-2">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-left flex md:mb-4">
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

        {/* Payment Details */}
        {/* <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hidden md:block">
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
        </div> */}
      </div>
    </div>
  );
};

export default BookLawyerAppointment;
