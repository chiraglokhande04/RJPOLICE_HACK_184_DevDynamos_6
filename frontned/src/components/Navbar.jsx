import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaWpforms } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="w-screen  h-10 flex justify-around fixed ">
      <nav className=" h-[5vh] items-center pt-1">
        <ul className="flex gap-6  ">
          <NavLink to={"/"}>
            <FaHome size={30} />
          </NavLink>
          <NavLink to={"/profile"}>
            <CgProfile size={30} />
          </NavLink>
          <NavLink to={"/form"}>
            <FaWpforms size={30} />
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
