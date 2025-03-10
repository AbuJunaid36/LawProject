import React from "react";

const adminalllawyears = () => {
  const transactions = [
    {
      name: "Cooper B.",
      image: "/img/1Y1A2377-Photo-scaled.jpg", // Placeholder image URL
      amount: "$21,819.00",
      purpose: "Transfer of own funds",
      status: "Complete",
      date: "11 Sep 2023",
    },
    {
      name: "Alexandra T.",
      image: "/img/1Y1A2377-Photo-scaled.jpg", // Placeholder image URL
      amount: "$4,671.00",
      purpose: "Payment of services",
      status: "In progress",
      date: "11 Sep 2023",
    },
    {
      name: "Jackson S.",
      image: "/img/1Y1A2377-Photo-scaled.jpg", // Placeholder image URL
      amount: "+ $34,239.00",
      purpose: "Transfer of own funds",
      status: "Complete",
      date: "11 Sep 2023",
    },
    {
      name: "Payment",
      image: "/img/1Y1A2377-Photo-scaled.jpg", // Placeholder image URL
      amount: "- $1,200.00",
      purpose: "Monthly subscription",
      status: "Complete",
      date: "11 Sep 2023",
    },
  ];


  const lawyers = [
  {
    id: 1,
    image: "https://via.placeholder.com/50",
    name: "John Doe",
    totalClients: 120,
    totalEarned: "$50,000",
    paid: "$45,000",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/50",
    name: "Jane Smith",
    totalClients: 95,
    totalEarned: "$40,000",
    paid: "$38,000",
  },
];
  return (
    <div className="px-4 py-8 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl text-gray-800 font-bold text-center md:text-left">
          ALL LAWYERS
        </h1>
        <div className="flex text-gray-500 w-full md:w-auto gap-2 md:gap-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border rounded-lg w-[70%] md:w-auto"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg w-[30%] md:w-auto flex  justify-center">
            Searchr
          </button>
        </div>
      </div>

{/* Table */}
  <div >

  <div className="overflow-x-auto ">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Lawyer</th>
              <th className="py-3 px-6 text-center">Total Clients</th>
              <th className="py-3 px-6 text-center">Total Earned</th>
              <th className="py-3 px-6 text-center">Paid</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {lawyers.map((lawyer) => (
              <tr key={lawyer.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6 text-left flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-3"
                    src={lawyer.image}
                    alt={lawyer.name}
                  />
                  <span>{lawyer.name}</span>
                </td>
                <td className="py-3 px-6 text-center">{lawyer.totalClients}</td>
                <td className="py-3 px-6 text-center">{lawyer.totalEarned}</td>
                <td className="py-3 px-6 text-center">{lawyer.paid}</td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>








  </div>




    </div>
  );
};

export default adminalllawyears;
