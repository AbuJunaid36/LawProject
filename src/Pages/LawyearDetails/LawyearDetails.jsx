import React, { useEffect, useState } from "react";

import { FaStar, FaClock, FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const LawyearDetails = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const doctorData = {
    name: "Asst. Prof. Dr. Z. Wadud",
    specialty: "MBBS, MS (Orthopedics)",
    category: "Orthopedist",
    experience: "11+ Years Experience",
    bmdc: "BMDC: 56354",
    rating: 5,
    reviews: 248,
    consultationFee: 450,
    followUpFee: 400,
    joinedDate: "April 23, 2023",
    doctorCode: "DT2088",
    patientsAttended: 823,
    avgConsultationTime: "10 minutes",
    schedule: [
      {
        icon: <FaClock className="text-blue-500" />,
        text: "Instant Consultation",
        time: "Sat - Fri (3PM - 11PM)",
      },
      {
        icon: <FaCalendarCheck className="text-blue-500" />,
        text: "Appointment",
        time: "Sat - Fri (9AM - 11PM)",
      },
    ],
  };

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("Info");

  // Data for peel
  const tabsData = [
    {
      id: "Info",
      title: "About Doctor",
      content: (
        <p className="mt-2 text-gray-700 lg:text-lg">
          ডা. ওয়াদুদ ২০১০ সালে এমবিবিএস সম্পন্ন করেন। তিনি দীর্ঘদিন ধরে অস্থিরোগ
          চিকিৎসায় কাজ করছেন। তাঁর অভিজ্ঞতা রয়েছে বিভিন্ন হাসপাতালের সাথে যুক্ত
          থাকার।
        </p>
      ),
    },
    {
      id: "Experience",
      title: "Experience",
      content: (
        <p className="mt-2 text-gray-700 lg:text-lg">
          Dr. Wadud has over 10 years of experience in orthopedic surgery. He
          has worked at renowned hospitals such as ABC Hospital and XYZ Medical
          Center.
        </p>
      ),
    },
    {
      id: "Reviews",
      title: "Reviews",
      content: (
        <div>
          <p className="mt-2 text-gray-700 lg:text-lg">
            Here are some patient reviews:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Excellent doctor, very knowledgeable and caring.</li>
            <li>Highly recommended for orthopedic issues.</li>
            <li>Great experience, very professional.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="mb-20 md:mb-0">
      <div className="max-w-6xl mx-auto p-4">
        {/* Doctor Header */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden p-6 md:flex items-center justify-between transition-all duration-300 hover:shadow-xl">
          {/* Doctor Info Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            {/* Doctor Image */}
            <img
              src="/img/1Y1A2377-Photo-scaled.jpg"
              alt="Doctor"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-blue-100"
            />

            {/* Doctor Details */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                {doctorData.name}
              </h2>
              <p className="text-gray-600 lg:text-lg mt-1">
                {doctorData.specialty}
              </p>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm lg:text-base rounded-full mt-2">
                {doctorData.category}
              </span>
              <p className="text-gray-600 mt-2 lg:text-lg">General Physician</p>

              {/* Additional Info */}
              <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 mt-3">
                <p className="text-sm lg:text-base text-gray-700">
                  {doctorData.experience}
                </p>
                <p className="text-sm lg:text-base text-gray-700">
                  {doctorData.bmdc}
                </p>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400" />
                  <span className="ml-1 text-sm lg:text-base text-gray-700">
                    {doctorData.rating} ({doctorData.reviews})
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Fee Section */}
          <div className="text-center mt-6 md:mt-0 md:text-right">
  <p className="text-gray-600 lg:text-lg">Consultation Fee</p>
  <p className="text-3xl lg:text-4xl font-bold text-blue-600 mt-2">
    ৳{doctorData.consultationFee}{" "}
    <span className="text-sm lg:text-base text-gray-500">
      (Incl. VAT)
    </span>
  </p>

  {/* Link to the BookLawyerAppointment page */}
  <Link to="/BookLawyearAppointment">

      <button className="mt-4 px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-lg lg:text-lg font-semibold hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105">
        Book Appointment
      </button>
 
  </Link>
</div>
        </div>

        {/* Peel */}

        <div>
          {/* Tabs */}
          <div className="flex border-b mt-4">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)} // Set the active tab on click
                className={`px-4 py-2 lg:text-lg ${
                  activeTab === tab.id
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                } transition-all duration-200`}
              >
                {tab.id}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4 md:flex">
            {/* Dynamic Content Based on Active Tab */}
            <div className="md:w-2/3">
              {tabsData.map(
                (tab) =>
                  activeTab === tab.id && (
                    <div key={tab.id}>
                      <h3 className="text-xl lg:text-2xl font-bold text-blue-600">
                        {tab.title}
                      </h3>
                      {tab.content}
                    </div>
                  )
              )}
            </div>

            {/* At a Glance Section (Visible on all tabs) */}
            <div className="mt-4 md:mt-0 md:w-1/3 md:ml-4 bg-white shadow-md rounded-xl p-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-4">
                At a Glance
              </h3>

              {/* Schedule */}
              <div className="space-y-3">
                {doctorData.schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200"
                  >
                    <div className="flex items-center text-gray-700 lg:text-lg">
                      {item.icon} {/* Render the icon */}
                      <span className="ml-2">{item.text}:</span>
                    </div>
                    <span className="text-gray-800 font-semibold">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Other Details */}
              <div className="mt-4 border-t pt-4 space-y-3">
                {[
                  {
                    label: "Consultation Fee",
                    value: `৳${doctorData.consultationFee}`,
                  },
                  {
                    label: "Follow-Up Fee",
                    value: `৳${doctorData.followUpFee} (Within 7 days)`,
                  },
                  {
                    label: "Patients Attended",
                    value: doctorData.patientsAttended,
                  },
                  {
                    label: "Avg. Consultation Time",
                    value: doctorData.avgConsultationTime,
                  },
                  {
                    label: "Joined Website name",
                    value: doctorData.joinedDate,
                  },
                  { label: "Doctor Code", value: doctorData.doctorCode },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200"
                  >
                    <span className="text-gray-700 lg:text-lg">
                      {item.label}
                    </span>
                    <span className="text-blue-600 font-semibold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


























      
    </div>
  );
};

export default LawyearDetails;
