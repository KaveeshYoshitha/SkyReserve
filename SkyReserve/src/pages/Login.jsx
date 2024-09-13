import { Link } from "react-router-dom"; // Import Link from react-router-dom
import loginBackground from "../assets/Login-Background.png";

const Login = () => {
  return (
    <div id="#login" className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 flex justify-center items-center bg-gray-100 animate-fadeIn">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* Use Link to navigate to home */}
            <Link
              to="/"
              className="text-indigo-600 text-sm hover:text-indigo-800 transition-colors duration-300"
            >
              Back To Home
            </Link>
            <h2 className="mt-6 text-4xl font-extrabold text-gray-900 animate-slideIn text-center rounded-md p-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Log in
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-6"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3 mb-9"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-500 hover:bg-[#07BACF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-colors duration-300"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 relative overflow-hidden">
        <img
          className="h-full w-full object-cover animate-scaleUp"
          src={loginBackground}
          alt="Airport"
        />
      </div>
    </div>
  );
};

export default Login;
