import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaGamepad, FaCommentDots, FaCog, FaBars, FaList, FaVideo, FaUsers } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";

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
      <aside className={`bg-[#121212] p-5 min-h-screen transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`}>
        <div className="flex items-center justify-between">
          {!collapsed && <h1 className="text-2xl font-bold text-orange-500 transition-all duration-300">PLAYER</h1>}
          <button onClick={() => setCollapsed(!collapsed)} className="text-white focus:outline-none">
            <FaBars size={24} />
          </button>
        </div>

        <nav className="mt-10 space-y-6">
          <Link to="/admin/dashboard" className="flex items-center space-x-3 text-lg hover:text-orange-500 cursor-pointer">
            <FaGamepad />
            {!collapsed && <span>Dashboard</span>}
          </Link>
          <Link to="/admin/trending" className="flex items-center space-x-3 text-lg hover:text-orange-500 cursor-pointer">
            <FaList />
            {!collapsed && <span>Trending</span>}
          </Link>
          <Link to="/admin/following" className="flex items-center space-x-3 text-lg hover:text-orange-500 cursor-pointer">
            <FaUsers />
            {!collapsed && <span>Following</span>}
          </Link>
          <Link to="/admin/videos" className="flex items-center space-x-3 text-lg hover:text-orange-500 cursor-pointer">
            <FaVideo />
            {!collapsed && <span>Your Videos</span>}
          </Link>
          <Link to="/admin/playlist" className="flex items-center space-x-3 text-lg hover:text-orange-500 cursor-pointer">
            <MdPlaylistPlay />
            {!collapsed && <span>Playlist</span>}
          </Link>
          <Link to="/admin/chat" className="flex items-center space-x-3 text-lg hover:text-orange-500 cursor-pointer">
            <FaCommentDots />
            {!collapsed && <span>Chat</span>}
          </Link>
          <Link to="/admin/settings" className="flex items-center space-x-3 text-lg hover:text-orange-500 cursor-pointer">
            <FaCog />
            {!collapsed && <span>Settings</span>}
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
