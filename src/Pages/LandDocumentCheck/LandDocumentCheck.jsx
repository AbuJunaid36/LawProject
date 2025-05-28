import React, { useState, useEffect } from "react";
import { FiUpload } from "react-icons/fi";

const LandDocumentCheck = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic
    alert("Submitted!");
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-10 px-4">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          Land Document Check
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Message Box */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-gray-700 font-semibold"
            >
              Write your message here
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* Upload Section */}
          <div>
            <label className="flex items-center gap-2 text-blue-600 font-semibold cursor-pointer hover:text-blue-800">
              <FiUpload className="w-5 h-5" />
              <span>Upload your document</span>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx,.jpg,.png"
                onChange={handleFileChange}
              />
            </label>
            {file && (
              <p className="mt-2 text-gray-700 text-sm">
                Selected: <span className="font-medium">{file.name}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        {/* Contact Section */}
        <div className="mt-10 border-t pt-6 text-gray-700 text-sm text-center">
          <h3 className="text-lg font-semibold mb-2">Need Further Help?</h3>
          <p>
            📞 Phone:{" "}
            <a href="tel:+1234567890" className="text-blue-600 underline">
              +1 (234) 567-890
            </a>
          </p>
          <p>
            📧 Email:{" "}
            <a href="mailto:support@company.com" className="text-blue-600 underline">
              support@company.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandDocumentCheck;
