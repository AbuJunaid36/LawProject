import React, { useEffect, useState } from "react";

const WaitingRoom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [waitingList, setWaitingList] = useState([
    { id: 1, lawyerName: "John Doe", image: "img/1Y1A2377-Photo-scaled.jpg", time: "3:00 PM", date: "2025-02-20", timeLeft: 900, stage: "Scheduled", degree: "LLB, Harvard University", specialty: "Criminal Law", reason: "Legal consultation for a case." },
    { id: 2, lawyerName: "Jane Smith", image: "img/1Y1A2377-Photo-scaled.jpg", time: "4:30 PM", date: "2025-02-21", timeLeft: 1800, stage: "Pending", degree: "LLM, Yale University", specialty: "Family Law", reason: "Divorce settlement guidance." },
    { id: 3, lawyerName: "Alice Johnson", image: "img/1Y1A2377-Photo-scaled.jpg", time: "5:00 PM", date: "2025-02-21", timeLeft: 2700, stage: "Accepted", degree: "JD, Stanford University", specialty: "Corporate Law", reason: "Merger and acquisition advice." }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaitingList(prevList => prevList.map(item => ({
        ...item,
        timeLeft: item.stage === "Accepted" && item.timeLeft > 0 ? item.timeLeft - 1 : item.timeLeft
      })));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTimeLeft = (timeLeft, stage) => {
    if (stage !== "Accepted") return "00:00";
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}m ${seconds}s`;
  };

  return (
    <div className="md:w-[90%] mx-auto p-6 min-h-screen mb-20">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Waiting Room</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 overflow-x-auto">
        {/* Desktop View */}
        <div className="hidden md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4">Lawyer</th>
                <th className="p-4">Name & Degree</th>
                <th className="p-4">Stage</th>
                <th className="p-4">Time Left</th>
                <th className="p-4">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {waitingList.map(item => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <img src={item.image} alt={item.lawyerName} className="w-12 h-12 rounded-full border border-gray-300" />
                  </td>
                  <td className="p-4">
                    <p className="font-semibold text-gray-700">{item.lawyerName}</p>
                    <p className="text-sm text-gray-500">{item.degree}</p>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 relative">
                      {["Scheduled", "Pending", "Accepted"].map((stage, index) => (
                        <div key={index} className="relative flex items-center">
                          <span className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-all ${
                            item.stage === stage ?
                              (stage === "Scheduled" ? "bg-blue-500 text-white" : stage === "Pending" ? "bg-yellow-500 text-white" : "bg-green-500 text-white")
                              : "bg-gray-200 text-gray-600"
                          }`}>{stage}</span>
                          {index < 2 && <div className="h-1 w-6 border-dotted border-t border-gray-400 mx-2"></div>}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{formatTimeLeft(item.timeLeft, item.stage)}</td>
                  <td className="p-4 text-gray-600">{item.date} <br /> {item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {waitingList.map(item => (
            <div key={item.id} className="border rounded-lg p-4 shadow-md">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.lawyerName} className="w-14 h-14 rounded-full border border-gray-300" />
                <div>
                  <p className="text-lg font-semibold text-gray-700">{item.lawyerName}</p>
                  <p className="text-sm text-gray-500">{item.degree}</p>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-gray-700 font-semibold">Stage</h3>
                <div className="flex flex-col items-start space-y-2">
                  {["Scheduled", "Pending", "Accepted"].map((stage, index) => (
                    <div key={index} className="flex items-center">
                      <span className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-all ${
                        item.stage === stage ?
                          (stage === "Scheduled" ? "bg-blue-500 text-white" : stage === "Pending" ? "bg-yellow-500 text-white" : "bg-green-500 text-white")
                          : "bg-gray-200 text-gray-600"
                      }`}>
                        {stage}
                      </span>
                      {index < 2 && <div className="h-6 border-l-2 border-dotted border-gray-400 mx-2"></div>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 text-gray-600">
                <p><strong>Date & Time:</strong> {item.date} at {item.time}</p>
                <p><strong>Time Left:</strong> {formatTimeLeft(item.timeLeft, item.stage)}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WaitingRoom;
