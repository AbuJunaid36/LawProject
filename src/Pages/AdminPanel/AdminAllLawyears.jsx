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

  return (
    <div className="md:p-6">
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

      <div className=" rounded-lg shadow">
  <table className=" overflow-x-auto w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Admin
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Transaction
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Purpose of payment
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Status
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Date
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {transactions.map((transaction, index) => (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            <div className="flex items-center">
              <img
                src={transaction.image}
                alt={transaction.name}
                className="w-10 h-10 rounded mr-3"
              />
              {transaction.name}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {transaction.amount}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {transaction.purpose}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <span
              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                transaction.status === "Complete"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {transaction.status}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {transaction.date}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default adminalllawyears;
