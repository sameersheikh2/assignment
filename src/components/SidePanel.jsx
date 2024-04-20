import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const SidePanel = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`h-full duration-700 ease-in-out transition-all  ${
        isMenuOpen
          ? "opacity-1 translate-x-0"
          : "opacity-0 translate-x-[-1000px]"
      } overflow-y-auto top-0 left-0 sm:w-[40%] w-full z-20 flex justify-center items-center flex-col bg-black fixed`}
    >
      <button
        className="text-3xl text-white absolute top-5 right-5"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <HiX />
      </button>
      <ul className="mb-2 flex flex-col justify-center items-center gap-5">
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
      <div>
        <button
          className="bg-white mx-1 text-black px-4 py-3 text-sm font-semibold rounded-md  hover:bg-[#ff6600] transition-colors duration-200 ease-in hover:text-white "
          type="button"
        >
          Contact Us
        </button>
        <button
          className="bg-white mx-1 text-black p-3 text-sm font-semibold rounded-md  hover:bg-[#ff6600] transition-colors duration-200 ease-in hover:text-white "
          type="button"
        >
          Sign up / login
        </button>
      </div>
    </div>
  );
};

export default SidePanel;
