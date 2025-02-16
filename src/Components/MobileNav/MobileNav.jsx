import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { GoHomeFill, GoLaw } from "react-icons/go"; // Import icons
import { MdAccountCircle } from "react-icons/md"; // Import icons
import { FaListAlt } from "react-icons/fa"; // Import icons
import { BiSolidWidget } from "react-icons/bi"; // Import icons

function MobileNav() {
  const location = useLocation(); // Get the current location

  return (
    <div className="sm:hidden fixed bottom-0 w-full bg-gradient-to-t from-gray-50 to-white shadow-lg z-40 border-t ">
      <div className="flex justify-between py-3 px-4 relative">
        {/* Home Link */}
        <Link to="/" className="flex flex-col items-center group">
          <GoHomeFill
            size={26}
            className={`${
              location.pathname === "/" ? "text-blue-500" : "text-gray-700"
            } group-hover:text-blue-500 transition duration-200 ease-in-out`}
          />
          <span
            className={`text-xs ${
              location.pathname === "/" ? "text-blue-500" : "text-gray-600"
            } group-hover:text-blue-500 transition duration-200 ease-in-out`}
          >
            Home
          </span>
        </Link>

        {/* Profile Link */}
        <Link to="/profile" className="flex flex-col items-center group">
          <MdAccountCircle
            size={26}
            className={`${
              location.pathname === "/profile"
                ? "text-blue-500"
                : "text-gray-700"
            } group-hover:text-blue-500 transition duration-200 ease-in-out`}
          />
          <span
            className={`text-xs ${
              location.pathname === "/profile"
                ? "text-blue-500"
                : "text-gray-600"
            } group-hover:text-blue-500 transition duration-200 ease-in-out`}
          >
            Profile
          </span>
        </Link>

        {/* Lawyears Button */}
        <Link to="/AllLawyears" className="flex flex-col items-center group">
          <GoLaw
            size={26}
            className={`${
              location.pathname === "/menu" ? "text-blue-500" : "text-gray-700"
            } group-hover:text-blue-500 transition duration-200 ease-in-out`}
          />
          <span
            className={`text-xs ${
              location.pathname === "/menu" ? "text-blue-500" : "text-gray-600"
            } group-hover:text-blue-500 transition duration-200 ease-in-out`}
          >
            Lawyears
          </span>
        </Link>

        {/* Order Link */}
        <Link to="/order" className="flex flex-col items-center group">
          <FaListAlt
            size={26}
            className={`${
              location.pathname === "/order" ? "text-blue-500" : "text-gray-700"
            } group-hover:text-blue-500 transition duration-200 ease-in-out`}
          />
          <span
            className={`text-xs ${
              location.pathname === "/order" ? "text-blue-500" : "text-gray-600"
            } group-hover:text-blue-500 transition duration-200 ease-in-out`}
          >
            Order
          </span>
        </Link>

        {/* Menu Button */}
        <Link to="/menu" className="flex flex-col items-center group">
          <BiSolidWidget
            size={26}
            className={`${
              location.pathname === "/menu" ? "text-blue-500" : "text-gray-700"
            } group-hover:text-blue-500 transition duration-200 ease-in-out`}
          />
          <span
            className={`text-xs ${
              location.pathname === "/menu" ? "text-blue-500" : "text-gray-600"
            } group-hover:text-blue-500 transition duration-200 ease-in-out`}
          >
            Menu
          </span>
        </Link>


        {/* Centered Law Icon */}
        {/* <Link
          to="/LawyearDetails"
          className="absolute left-1/2 transform -translate-x-1/2 bottom-8 flex justify-center items-center w-16 h-16 bg-gray-100 rounded-full border-2 border-gray-200 shadow-lg hover:bg-gray-200 hover:shadow-xl transition duration-300 ease-in-out"
          aria-label="Go to Lawyer Details"
        >
          <GoLaw
            size={36}
            className={`${
              location.pathname === "/LawyearDetails"
                ? "text-blue-500"
                : "text-gray-700"
            } transition duration-200 ease-in-out`}
          />
        </Link> */}
      </div>
    </div>
  );
}

export default MobileNav;
