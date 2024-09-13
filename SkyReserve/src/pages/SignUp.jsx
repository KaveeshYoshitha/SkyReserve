import { Link } from "react-router-dom"; // Import Link for routing
import loginBackground from "../assets/Login-Background.png"; // Update with your image path

const SignUp = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section for Image */}
      <div className="w-1/2 relative overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={loginBackground}
          alt="Airport"
        />
      </div>

      {/* Right Section for Form */}
      <div className="w-1/2 flex justify-center items-center bg-gray-100 animate-fadeIn">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Link
              to="/"
              className="text-indigo-600 text-sm hover:text-indigo-800 transition-colors duration-300"
            >
              Back To Home
            </Link>
            <h2 className="mt-6 text-4xl font-extrabold text-gray-900 animate-slideIn text-center rounded-md p-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Create an account
            </h2>
          </div>

          {/* Form Fields */}
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                className="border border-gray-300 rounded-md p-2"
                placeholder="First Name"
                required
              />
              <input
                type="email"
                name="email"
                className="border border-gray-300 rounded-md p-2"
                placeholder="Email"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="password"
                name="password"
                className="border border-gray-300 rounded-md p-2"
                placeholder="Password"
                required
              />
              <input
                type="tel"
                name="phone"
                className="border border-gray-300 rounded-md p-2"
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <select
                name="language"
                className="border border-gray-300 rounded-md p-2"
                required
              >
                <option value="" disabled selected>
                  Language
                </option>
                <option value="en">English</option>
                <option value="es">Sinhala</option>
              </select>
              <select
                name="country"
                className="border border-gray-300 rounded-md p-2"
                required
              >
                <option value="" disabled selected>
                  Country
                </option>
                <option value="ES">Sri Lanka</option>
              </select>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full bg-violet-500 text-white py-2 rounded-md hover:bg-violet-600 transition-colors duration-300"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
