import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
const NavBar = () => {
  const [isNav, setIsNav] = useState(false);
  const handleNav = () => setIsNav(!isNav);

  return (
    <div className="fixed w-full h-16 flex justify-between  items-center px-4 text-gray-300  bg-blue-950">
      {/* Menu */}
      <ul className="hidden sm:flex">
        <li className="px-4 cursor-pointer">
          <Link to="home" smooth="true" duration="500">
            Home
          </Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to="about" smooth="true" duration="500">
            About Me
          </Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to="skills" smooth="true" duration="500">
            Skills
          </Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to="experience" smooth="true" duration="500">
            Experience
          </Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to="contact" smooth="true" duration="500">
            Contact Me
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="flex sm:hidden z-10 cursor-pointer" onClick={handleNav}>
        {" "}
        {isNav ? <FaTimes /> : <FaBars />}{" "}
      </div>
      <ul
        className={
          isNav
            ? "absolute top-0 left-0 sm:hidden w-full h-screen bg-blue-950 flex flex-col justify-center items-center"
            : "hidden "
        }
      >
        <li className="py-4 text-2xl cursor-pointer">
          <Link onClick={handleNav} to="home" smooth="true" duration="500">
            Home
          </Link>
        </li>
        <li className="py-4 text-2xl cursor-pointer">
          <Link onClick={handleNav} to="about" smooth="true" duration="500">
            About Me
          </Link>
        </li>
        <li className="py-4 text-2xl cursor-pointer">
          <Link onClick={handleNav} to="skills" smooth="true" duration="500">
            Skills
          </Link>
        </li>
        <li className="py-4 text-2xl cursor-pointer">
          <Link
            onClick={handleNav}
            to="experience"
            smooth="true"
            duration="500"
          >
            Experience
          </Link>
        </li>
        <li className="py-4 text-2xl cursor-pointer">
          <Link onClick={handleNav} to="contact" smooth="true" duration="500">
            Contact Me
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden sm:flex fixed flex-col top-1/3 left-0 bg-white rounded-r">
        <ul>
          <li className="w-32 h-14 pr-1 flex justify-between items-center -ml-20 hover:ml-3 duration-300">
            <a
              className="flex justify-between items-center w-full text-blue-950"
              href="/"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-32 h-14 pr-1 flex justify-between items-center -ml-20 hover:ml-3 duration-300">
            <a
              className="flex justify-between items-center w-full text-blue-950"
              href="/"
            >
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-32 h-14 pr-1 flex justify-between items-center -ml-20 hover:ml-3 duration-300">
            <a
              className="flex justify-between items-center w-full text-blue-950"
              href="/"
            >
              Email Me
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-32 h-14 pr-1 flex justify-between items-center -ml-20 hover:ml-3 duration-300">
            <a
              className="flex justify-between items-center w-full text-blue-950"
              href="/"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
