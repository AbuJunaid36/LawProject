import React, { useEffect, useState } from "react";

const steps = ["Scheduled", "Pending", "Accepted"];

const WaitingRoom = () => {
  const [waitingList, setWaitingList] = useState([
    {
      id: 1,
      lawyerName: "John Doe",
      image: "img/1Y1A2377-Photo-scaled.jpg",
      time: "3:00 PM",
      date: "2025-02-20",
      timeLeft: 600,
      stage: "Accepted",
      degree: "LLB, Harvard University",
      specialty: "Criminal Law",
      reason: "Legal consultation for a case.",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaitingList((prevList) =>
        prevList.map((item) => ({
          ...item,
          timeLeft:
            item.stage === "Accepted" && item.timeLeft > 0
              ? item.timeLeft - 1
              : item.timeLeft,
        }))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimeLeft = (timeLeft) => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}m ${seconds}s`;
  };

  const currentStageIndex = steps.indexOf(waitingList[0].stage);

  return (
    <div className="w-[90%] md:w-[80%] mx-auto p-6 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Waiting Room
      </h2>

      {/* Steps Section */}

      <div className="flex justify-center  mb-6 mx-auto w-full ">
        {steps.map((step, index) => (
          <div key={index} className="relative flex-1 flex items-center">
            
            <div className="flex flex-col">
            {/* Step Indicator */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full z-10 
                transition duration-300 ease-in-out 
                ${
                  index <= currentStageIndex
                    ? "bg-blue-600 text-white shadow-lg scale-110"
                    : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                }`}
            >
              {index + 1}
            </div>


            {/* Step Name */}
            <p className="mt-2 text-sm font-medium text-gray-700">{step}</p>
            </div>


            {/* Dotted Line - Only show if not the last step */}
            {index !== steps.length - 1 && (
              <div className="absolute top-1/2 left-12 right-0 border-t-2 border-dotted border-gray-400"></div>
            )}
          </div>
        ))}
      </div>



      {/*  */}







      {/* <div className="flex justify-center mb-6 w-full">
        <div className="flex w-full max-w-lg items-center justify-between relative">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full z-10 
            transition duration-300 ease-in-out 
            ${
              index <= currentStageIndex
                ? "bg-blue-600 text-white shadow-lg scale-110"
                : "bg-gray-200 text-gray-500 hover:bg-gray-300"
            }`}
              >
                {index + 1}
              </div>

              {index !== steps.length - 1 && (
                <div className="absolute top-1/2 left-full w-full transform -translate-y-1/2 border-t-2 border-dotted border-gray-400"></div>
              )}
            </div>
          ))}
        </div>
      </div> */}


      {/*  */}








      {/* Profile & Timer Section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lawyer Profile */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <img
            src={waitingList[0].image}
            alt={waitingList[0].lawyerName}
            className="w-24 h-24 rounded-full border border-gray-300"
          />
          <h3 className="mt-4 font-semibold text-gray-800">
            {waitingList[0].lawyerName}
          </h3>
          <p className="text-gray-500 text-sm">{waitingList[0].degree}</p>
          <p className="text-gray-500 text-sm">{waitingList[0].specialty}</p>
        </div>

        {/* Timer & Date */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <p className="text-gray-600">Date: {waitingList[0].date}</p>
          <p className="text-gray-600">Time: {waitingList[0].time}</p>
          {waitingList[0].stage === "Accepted" && (
            <p className="text-lg font-semibold text-red-500 mt-2">
              {formatTimeLeft(waitingList[0].timeLeft)}
            </p>
          )}
        </div>
      </div>

      {/* Message Box */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-600">{waitingList[0].reason}</p>
      </div>
    </div>
  );
};

export default WaitingRoom;
