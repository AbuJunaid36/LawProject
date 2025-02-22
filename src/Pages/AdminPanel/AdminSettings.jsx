import React, { useState } from "react";
import { FaUser, FaLock, FaEdit } from "react-icons/fa";

const Settings = () => {
  const [formData, setFormData] = useState({
    username: "admin123",
    password: "password123",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings updated successfully!");
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-center h-screen  ">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Settings</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-gray-50">
            <label className="block text-gray-700 font-medium">Username</label>
            <div className="flex items-center mt-1">
              <FaUser className="text-gray-500 mr-2" />
              <span className="text-gray-800">{formData.username}</span>
            </div>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="flex items-center mt-1">
              <FaLock className="text-gray-500 mr-2" />
              <span className="text-gray-800">********</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-5 py-2 flex items-center gap-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            <FaEdit /> Edit
          </button>
        </div>
        {isEditing && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition duration-200"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Settings;
