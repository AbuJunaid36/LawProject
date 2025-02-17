import React, { useEffect } from "react";

const WaitingRoom = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const waitingList = [
    {
      id: 1,
      lawyerName: "John Doe",
      image: "img/1Y1A2377-Photo-scaled.jpg",
      time: "3:00 PM",
      date: "2025-02-20",
      amount: "৳150",
      degree: "LLB, Harvard University",
      specialty: "Criminal Law",
      reason: "Legal consultation for a case.",
    },
    {
      id: 2,
      lawyerName: "Jane Smith",
      image: "img/1Y1A2377-Photo-scaled.jpg",
      time: "4:30 PM",
      date: "2025-02-21",
      amount: "৳200",
      degree: "LLM, Yale University",
      specialty: "Family Law",
      reason: "Divorce settlement guidance.",
    },
    {
      id: 3,
      lawyerName: "Jane Smith",
      image: "img/1Y1A2377-Photo-scaled.jpg",
      time: "4:30 PM",
      date: "2025-02-21",
      amount: "৳200",
      degree: "LLM, Yale University",
      specialty: "Family Law",
      reason: "Divorce settlement guidance.",
    },
  ];

  return (
    <div className="md:w-[90%] mx-auto p-6 min-h-screen mb-20">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Waiting List
      </h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Desktop View */}
        <div className="hidden md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4">Lawyer</th>
                <th className="p-4">Degree</th>
                <th className="p-4">Specialty</th>
                <th className="p-4">Appointment Reason</th>
                <th className="p-4">Time</th>
                <th className="p-4">Date</th>
                <th className="p-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {waitingList.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.lawyerName}
                      className="w-12 h-12 rounded border border-gray-300"
                    />
                    <span className="font-semibold text-gray-700">
                      {item.lawyerName}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{item.degree}</td>
                  <td className="p-4 text-gray-600">{item.specialty}</td>
                  <td className="p-4 text-gray-600">{item.reason}</td>
                  <td className="p-4 text-gray-600">{item.time}</td>
                  <td className="p-4 text-gray-600">{item.date}</td>
                  <td className="p-4 text-gray-600 font-semibold">
                    {item.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {waitingList.map((item) => (
            <div
              key={item.id}
              className="border-b p-4 flex flex-col bg-gray-50 rounded-lg shadow-sm mb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.lawyerName}
                  className="w-14 h-14 rounded border border-gray-300"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {item.lawyerName}
                  </p>
                  <p className="text-sm text-gray-500">{item.degree}</p>
                </div>
              </div>
              <p className="mt-2 text-gray-600">
                <strong>Specialty:</strong> {item.specialty}
              </p>
              <p className="text-gray-600">
                <strong>Reason:</strong> {item.reason}
              </p>
              <p className="text-gray-600">
                <strong>Time:</strong> {item.time}
              </p>
              <p className="text-gray-600">
                <strong>Date:</strong> {item.date}
              </p>
              <p className="text-gray-800 font-semibold mt-2">
                <strong>Amount:</strong> {item.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaitingRoom;
