import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate for routing
import loginBackground from "../assets/Login-Background.png"; // Update with your image path

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    phone: "",
    language: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        formData
      );
      alert(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

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
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2"
                placeholder="First Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2"
                placeholder="Email"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2"
                placeholder="Password"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2"
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2"
                required
              >
                <option value="" disabled selected>
                  Language
                </option>
                <option value="english">English</option>
                <option value="sinhala">Sinhala</option>
              </select>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2"
                required
              >
                <option value="" disabled selected>
                  Country
                </option>
                <option value="SriLanka">Sri Lanka</option>
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
