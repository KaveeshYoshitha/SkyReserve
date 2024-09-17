import globeImage from "../assets/worldmap.png"; // Adjust the path to your uploaded image

const About = () => {
  return (
    <section
      id="about"
      className="flex justify-center items-center py-12 px-6 bg-gray-200 animate-fadeIn"
    >
      <div className="flex flex-col md:flex-row items-center md:space-x-12 bg-gray-200 rounded-lg p-8">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={globeImage}
            alt="Globe with cities"
            className="max-w-full h-auto transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-[#07BACF] mb-4 animate-bounce inline-block">
            About us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="font-semibold text-blue-600">SkyReserve</span>,
            we strive to make the flight booking experience as seamless and
            hassle-free as possible. Our platform allows users to easily create
            an account, log in, and manage their flight bookings with ease.
            Whether you&apos;re booking a new flight, updating your travel
            requirements such as passenger count, date, or class, or canceling
            an existing booking, we’ve got you covered. Once a flight is booked,
            we ensure that all your needs are met by matching you with the most
            suitable flights. After you submit your booking, we’ll confirm
            everything via email, ensuring you&apos;re informed every step of
            the way. Travel made simple, with you in mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
