import React, { useState, useEffect } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { FaCog, FaBars } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import {
  FaTasks,
  FaCalendarAlt,
  FaChartBar,
  FaUsersCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
// import { MdPlaylistPlay } from "react-icons/md";

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 768); // Auto collapse on small screens

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen text-white flex">
      {/* Sidebar */}
      <aside
        className={`bg-white p-5 min-h-screen transition-all duration-300 flex flex-col justify-between ${
          collapsed ? "w-16" : "w-64"
        } shadow-lg rounded-r-xl`}
      >
        {/* Logo & Toggle */}
        <div>
          <div className="flex items-center justify-between">
            {!collapsed && (
              <h1 className="text-lg font-bold text-blue-500 flex items-center space-x-2">
                <img src="/logo.png" alt="logo" className="w-8 h-8" />
                <span>Admin</span>
              </h1>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-blue-500 focus:outline-none"
            >
              <FaBars size={24} />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="mt-10 space-y-4">
            {!collapsed && <p className="text-gray-400 text-sm">MENU</p>}

            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `flex items-center space-x-3 font-medium cursor-pointer ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-400 hover:text-blue-500"
                }`
              }
            >
              <MdDashboard size={20} />
              {!collapsed && <span>Dashboard</span>}
            </NavLink>

            <NavLink
              to="/admin/adminalllawyears"
              className={({ isActive }) =>
                `flex items-center space-x-3 cursor-pointer ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-400 hover:text-blue-500"
                }`
              }
            >
              <FaTasks size={18} />
              {!collapsed && <span>All Lawyers</span>}
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-3 cursor-pointer ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-400 hover:text-blue-500"
                }`
              }
            >
              <FaCalendarAlt size={18} />
              {!collapsed && <span>Document Check</span>}
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-3 cursor-pointer ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-400 hover:text-blue-500"
                }`
              }
            >
              <FaChartBar size={18} />
              {!collapsed && <span>Fact Check</span>}
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-3 cursor-pointer ${
                  isActive
                    ? "text-blue-500"
                    : "text-gray-400 hover:text-blue-500"
                }`
              }
            >
              <FaUsersCog size={18} />
              {!collapsed && <span>Payment</span>}
            </NavLink>
          </nav>

          <nav className="mt-10 space-y-4">
            {!collapsed && <p className="text-gray-400 text-sm">GENERAL</p>}
            <Link
              to="/admin/settings"
              className="flex items-center space-x-3 text-gray-400 hover:text-blue-500 cursor-pointer"
            >
              <FaCog size={18} />
              {!collapsed && <span>Settings</span>}
            </Link>
            <Link
              to="/help"
              className="flex items-center space-x-3 text-gray-400 hover:text-blue-500 cursor-pointer"
            >
              <FaQuestionCircle size={18} />
              {!collapsed && <span>Help</span>}
            </Link>
            <Link
              to="/"
              className="flex items-center space-x-3 text-gray-400 hover:text-blue-500 cursor-pointer"
            >
              <FaSignOutAlt size={18} />
              {!collapsed && <span>Logout</span>}
            </Link>
          </nav>
        </div>

        {/* Mobile App Download - Hidden when collapsed */}
        {!collapsed && (
          <div className="bg-blue-700 p-4 rounded-xl text-white text-center">
            <p className="text-sm">Download our Mobile App</p>
            <p className="text-xs opacity-80">Get easy in another way</p>
            <button className="mt-2 bg-blue-500 px-4 py-2 rounded-md">
              Download
            </button>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
