import React from "react";

const Registration = () => {
  return (
    <div>
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Get in touch with us
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              We're here to help. Send your query or question below and provide
              us with as much detail as possible. We aim to reply within 24
              hours.
            </p>
          </div>

          {/* Form */}
          <form className="bg-white shadow-lg rounded-lg p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            {/* Concern Dropdown */}
            <div className="mt-6">
              <label
                htmlFor="concern"
                className="block text-sm font-medium text-gray-700"
              >
                What is your concern?
              </label>
              <select
                id="concern"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select an option</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing</option>
              </select>
            </div>

            {/* Query Textarea */}
            <div className="mt-6">
              <label
                htmlFor="query"
                className="block text-sm font-medium text-gray-700"
              >
                Your query <span className="text-red-500">*</span>
              </label>
              <textarea
                id="query"
                rows="4"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Please describe your query in detail"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Registration;
