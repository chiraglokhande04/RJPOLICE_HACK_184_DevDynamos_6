import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaWpforms } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Navbar = () => {
  const { isAuthenticated, logoutHandler } = useContext(AppContext);

  return (
    <div className="w-full h-16 md:h-10 flex justify-around fixed bg-gray-800 text-white">
      <nav className="h-full items-center pt-1">
        <ul className="flex gap-6">
          <NavLink to={"/"} className="flex items-center">
            <FaHome size={30} />
            <span className="hidden md:inline-block ml-2">Home</span>
          </NavLink>
          <NavLink to={"/profile"} className="flex items-center">
            <CgProfile size={30} />
            <span className="hidden md:inline-block ml-2">Profile</span>
          </NavLink>
          <NavLink to={"/form"} className="flex items-center">
            <FaWpforms size={30} />
            <span className="hidden md:inline-block ml-2">Form</span>
          </NavLink>

          {isAuthenticated ? (
            <NavLink
              to={"/login"}
              onClick={logoutHandler}
              className="flex items-center"
            >
              <IoLogOutSharp size={30} />
              <span className="hidden md:inline-block ml-2">Logout</span>
            </NavLink>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
