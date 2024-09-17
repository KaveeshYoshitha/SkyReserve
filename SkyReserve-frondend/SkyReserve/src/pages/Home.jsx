import heroBackgroundImage from "../assets/Hero-Background-transparent2.png";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-gray-200 min-h-[650px] bg-cover bg-center flex flex-col md:flex-row items-center justify-center py-6 md:py-12 px-4 md:px-8 space-y-0 animate-fadeInUp"
    >
      {/* Left Section: Text */}
      <div className="max-w-md text-center md:text-left space-y-4 md:space-y-6 mx-4 md:mx-24 transition-transform duration-500 ease-in-out transform hover:scale-105 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Book Your Flights With{" "}
          <span className="text-violet-600">SkyReserve</span> Now!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Have a smooth flight booking experience.
        </p>

        <button className="mt-8">
          <a
            className="px-6 py-3 font-semibold text-white bg-violet-600 rounded-lg hover:bg-[#07BACF] hover:transition-all"
            href="#book"
          >
            Book Now
          </a>
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="transition-transform duration-500 ease-in-out transform hover:scale-105 animate-fadeInUp">
        <img
          src={heroBackgroundImage}
          alt="airplane"
          className="w-full h-auto max-w-xl md:max-w-2xl"
        />
      </div>
    </div>
  );
};

export default Home;
