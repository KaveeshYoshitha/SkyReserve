import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios"; // For making HTTP requests

const Book = ({ userEmail }) => {
  const [passengers, setPassengers] = useState(1);
  const [flightClass, setFlightClass] = useState("Economy");
  const [tripType, setTripType] = useState("One way");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departing, setDeparting] = useState("");
  const [returning, setReturning] = useState("");

  const handlePassengerChange = (event) => {
    setPassengers(event.target.value);
  };

  const handleClassChange = (event) => {
    setFlightClass(event.target.value);
  };

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handleSubmit = async () => {
    // Check if all necessary fields are filled
    if (
      !from ||
      !to ||
      !departing ||
      (tripType === "Round-trip" && !returning)
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const bookingData = {
      userEmail: userEmail, // Ensure this matches the backend field name
      from: from,
      to: to,
      departing: departing,
      returning: tripType === "Round-trip" ? returning : null,
      passengers: passengers,
      flightClass: flightClass,
      tripType: tripType,
    };

    try {
      // Sending booking data to the backend
      const response = await axios.post("/api/bookFlight", bookingData);
      if (response.status === 200) {
        alert("Flight booked successfully!");
      } else {
        alert("Failed to book flight. Please try again.");
      }
    } catch (error) {
      console.error("Error booking flight:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      id="book"
      className="min-h-screen bg-gray-200 flex flex-col items-center py-12 px-4"
    >
      <h1 className="text-4xl font-bold text-violet-500 mb-8">
        Book Your Tickets
      </h1>
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between border-b-2 pb-4 mb-4">
          <button className="px-6 py-2 bg-[#07BACF] text-white rounded-full">
            Book
          </button>
          <button className="px-6 py-2 text-gray-700">Manage Booking</button>
          <button className="px-6 py-2 text-gray-700">Delete</button>
        </div>

        {/* Trip Type Selection */}
        <div className="flex space-x-8 mb-8">
          <label className="flex items-center">
            <input
              type="radio"
              name="tripType"
              value="One way"
              checked={tripType === "One way"}
              onChange={handleTripTypeChange}
              className="mr-2"
            />{" "}
            One way
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="tripType"
              value="Round-trip"
              checked={tripType === "Round-trip"}
              onChange={handleTripTypeChange}
              className="mr-2"
            />{" "}
            Round-trip
          </label>
        </div>

        {/* Flight Search Form */}
        <div className="bg-indigo-50 p-4 rounded-lg mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600">From</label>
            <input
              type="text"
              placeholder="From"
              className="border rounded-lg px-3 py-2"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600">To</label>
            <input
              type="text"
              placeholder="To"
              className="border rounded-lg px-3 py-2"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600">Departing</label>
            <input
              type="date"
              className="border rounded-lg px-3 py-2"
              value={departing}
              onChange={(e) => setDeparting(e.target.value)}
            />
          </div>
          {tripType === "Round-trip" && (
            <div className="flex flex-col">
              <label className="font-semibold text-gray-600">Returning</label>
              <input
                type="date"
                className="border rounded-lg px-3 py-2"
                value={returning}
                onChange={(e) => setReturning(e.target.value)}
              />
            </div>
          )}

          {/* Passengers Selection */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600">Passengers</label>
            <select
              value={passengers}
              onChange={handlePassengerChange}
              className="border rounded-lg px-3 py-2"
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1} Passenger{num > 0 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Flight Class Selection */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600">Class</label>
            <select
              value={flightClass}
              onChange={handleClassChange}
              className="border rounded-lg px-3 py-2"
            >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First Class">First Class</option>
            </select>
          </div>
        </div>

        {/* Centered Show Flight Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-violet-500 text-white font-semibold rounded-lg"
          >
            Book Flight <span>✈️</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default Book;
