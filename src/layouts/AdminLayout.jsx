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

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(true); // Always collapsed by default
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setCollapsed(false); // Keep sidebar open on large screens
      else setCollapsed(true); // Ensure it's collapsed on mobile
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex relative">
      {/* Dark Overlay when sidebar is open on mobile */}
      {isMobile && !collapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setCollapsed(true)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-white p-5 transition-all duration-300 shadow-lg z-20 rounded-r-xl
          ${collapsed ? "w-16 -translate-x-0" : "w-52 translate-x-0"}
          ${
            isMobile ? (collapsed ? "-translate-x-full" : "translate-x-0") : ""
          }`}
      >
        <div>
          <div className="flex items-center justify-between">
            {!collapsed && (
              <h1 className="text-lg font-bold text-blue-500 flex items-center space-x-2">
                <img
                  src="/img/istockphoto-1179944175-612x612-removebg-preview.png"
                  alt="logo"
                  className="w-8 h-8"
                />
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
              to="/admin/admindocumentcheck"
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
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 md:mx-4 transition-all duration-300 ${
          collapsed ? "pl-14" : "pl-52"
        } ${isMobile ? "pl-0" : ""}`}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
