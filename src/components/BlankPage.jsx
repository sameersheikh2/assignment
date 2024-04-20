import { Link } from "react-router-dom";

const BlankPage = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <Link to="/">
        <h1 className="p-1 text-black hover:bg-[#ff6600] cursor-pointer rounded-md py-3 font-semibold transition-colors duration-200 ease-in hover:text-white">
          BACK TO HOME
        </h1>
      </Link>
    </div>
  );
};

export default BlankPage;
