import logo from "../assets/logo3.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-100">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-16" alt="SkyReserve Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-violet-500	">
              SkyReserve
            </span>
          </a>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#home"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 dark:text-black md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#book"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 dark:text-black md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  Book
                </a>
              </li>
              <li>
                <a
                  href="#deals"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 dark:text-black md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  Deals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 dark:text-black md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 dark:text-black md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-500 dark:text-black md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 font-medium text-white bg-violet-500 rounded-lg hover:bg-[#07BACF] hover:transition-all">
              <Link to="/login">Login</Link>
            </button>
            <button className="hidden md:block px-4 py-2 font-medium text-white bg-violet-500 rounded-lg hover:bg-[#07BACF] hover:transition-all">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
