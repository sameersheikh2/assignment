import { useState } from "react";
import Logo from "../assets/logo.png";
import { HiMenu } from "react-icons/hi";
import SidePanel from "./SidePanel";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black rounded-lg p-3 w-[98%] top-4 left-0 right-0 m-auto fixed flex  justify-between items-center">
      <ul className="lg:flex hidden  ml-4 justify-center items-center gap-3">
        <Link to="/">
          <li className="p-1 text-white hover:bg-[#ff6600] cursor-pointer rounded-md py-3 font-semibold transition-colors duration-200 ease-in hover:text-black">
            Home
          </li>
        </Link>
        <Link to="/blank">
          <li className="p-1 text-white hover:bg-[#ff6600] cursor-pointer rounded-md py-3 font-semibold transition-colors duration-200 ease-in hover:text-black">
            Services
          </li>
        </Link>
        <Link to="/blank">
          <li className="p-1 text-white hover:bg-[#ff6600] cursor-pointer rounded-md py-3 font-semibold transition-colors duration-200 ease-in hover:text-black">
            Dashboard
          </li>
        </Link>
        <Link to="/blank">
          <li className="p-1 text-white hover:bg-[#ff6600] cursor-pointer rounded-md py-3 font-semibold transition-colors duration-200 ease-in hover:text-black">
            Service Listing
          </li>
        </Link>
      </ul>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        type="button"
        className="lg:hidden block text-3xl text-white"
      >
        <HiMenu />
      </button>
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-black opacity-[50%] top-0 left-0 w-full h-full fixed z-10"
        ></div>
      )}

      <SidePanel isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <img
        className="lg:mr-32"
        width={100}
        height={100}
        src={Logo}
        alt="logo"
      />
      <div>
        <Link to="/blank">
          <button
            className="lg:inline hidden bg-white mx-1 text-black px-4 py-3 text-sm font-semibold rounded-md  hover:bg-[#ff6600] transition-colors duration-200 ease-in hover:text-white "
            type="button"
          >
            Contact Us
          </button>
        </Link>
        <Link to="/blank">
          <button
            className="lg:inline hidden bg-white mx-1 text-black p-3 text-sm font-semibold rounded-md  hover:bg-[#ff6600] transition-colors duration-200 ease-in hover:text-white "
            type="button"
          >
            Sign up / login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
