import { useState } from "react";

import { GoAlertFill } from "react-icons/go";

const SignupLawyear = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    lawFirm: "",
    specialization: "",
    licenseNumber: "",
    phone: "",
    address: "",
    document: null,
  });

  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, document: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOtpSent(true);
    setShowOtpForm(true);
    console.log("Form Submitted", formData);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log("OTP Submitted", otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 mb-20 md:mb-0">
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.1)] w-full max-w-3xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Lawyer Sign-Up
        </h2>

        {!showOtpForm ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="border rounded-lg p-3 md:p-4 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg p-3 md:p-4 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border rounded-lg p-3 md:p-4 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="border rounded-lg p-3 md:p-4 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="lawFirm"
                placeholder="Law Firm Name"
                value={formData.lawFirm}
                onChange={handleChange}
                className="border rounded-lg p-3 md:p-4 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
              <input
                type="text"
                name="specialization"
                placeholder="Specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="border rounded-lg p-3 md:p-4 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="licenseNumber"
                placeholder="License Number"
                value={formData.licenseNumber}
                onChange={handleChange}
                className="border rounded-lg p-3 md:p-4 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-lg p-3 md:p-4 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              />
            </div>

            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded-lg p-3 md:p-4 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            ></textarea>

            {/* Document Upload Section */}
            <div>
              <input
                type="file"
                onChange={handleFileChange}
                className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 transition duration-200 mb-2"
                required
              />
              <div className="flex items-center gap-2 text-sm md:text-md">
                <GoAlertFill className="text-red-500" />
                Please upload your official documents
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Verify Phone Number
            </h3>
            <p className="text-gray-600 mb-6">
              An OTP has been sent to your phone number. Please enter it below
              to complete the verification.
            </p>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border rounded-lg p-4 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
            <button
              type="submit"
              className="w-full py-4 bg-green-600 text-white font-semibold rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-green-700 transition duration-300"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupLawyear;
