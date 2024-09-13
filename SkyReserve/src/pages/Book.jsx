import { useState } from "react";
import axios from "axios";

const Book = () => {
  const [passengers, setPassengers] = useState(1);
  const [flightClass, setFlightClass] = useState("Economy");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePassengerChange = (event) => {
    setPassengers(event.target.value);
  };

  const handleClassChange = (event) => {
    setFlightClass(event.target.value);
  };

  const handleSearchFlights = async () => {
    setLoading(true);
    try {
      // Replace with your actual API endpoint and parameters
      const response = await axios.get(
        "https://api.aviationstack.com/v1/flights",
        {
          params: {
            access_key: "9d98db64085137302a2856df66f63d53", // Replace with your actual API key
            dep_iata: from,
            arr_iata: to,
            dep_date: departDate,
            ret_date: returnDate,
            passengers,
            class: flightClass,
          },
        }
      );

      // Assuming `response.data.data` contains the flight information
      setFlights(response.data.data);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    } finally {
      setLoading(false);
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
            Stopover
          </button>
          <button className="px-6 py-2 text-gray-700">
            Manage Booking / Check in
          </button>
          <button className="px-6 py-2 text-gray-700">Flight Status</button>
        </div>

        {/* Trip Type Selection */}
        <div className="flex space-x-8 mb-8">
          <label className="flex items-center">
            <input type="radio" name="tripType" className="mr-2" /> One way
          </label>
          <label className="flex items-center">
            <input type="radio" name="tripType" className="mr-2" /> Round-trip
          </label>
        </div>

        {/* Flight Search Form */}
        <div className="bg-indigo-50 p-4 rounded-lg mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600">From</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="From"
              className="border rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600">To</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="To"
              className="border rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600">Departing</label>
            <input
              type="date"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
              className="border rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600">Returning</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="border rounded-lg px-3 py-2"
            />
          </div>

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
        <div className="flex justify-center mb-6">
          <button
            onClick={handleSearchFlights}
            className="px-6 py-3 bg-violet-500 text-white font-semibold rounded-lg"
          >
            Show Flight <span>✈️</span>
          </button>
        </div>

        {/* Flight Results */}
        <div className="mt-8">
          {loading && <p>Loading flights...</p>}
          {!loading && flights.length === 0 && <p>No flights found.</p>}
          <ul className="space-y-4">
            {flights.map((flight) => (
              <li
                key={flight.flight.iata}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold">
                  {flight.flight.airline.name} {flight.flight.number}
                </h3>
                <p>
                  <strong>From:</strong> {flight.flight.departure.airport} (
                  {flight.flight.departure.iata})
                </p>
                <p>
                  <strong>To:</strong> {flight.flight.arrival.airport} (
                  {flight.flight.arrival.iata})
                </p>
                <p>
                  <strong>Depart:</strong>{" "}
                  {new Date(flight.flight.departure.estimated).toLocaleString()}
                </p>
                <p>
                  <strong>Arrival:</strong>{" "}
                  {new Date(flight.flight.arrival.estimated).toLocaleString()}
                </p>
                <p>
                  <strong>Class:</strong> {flightClass}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Book;
