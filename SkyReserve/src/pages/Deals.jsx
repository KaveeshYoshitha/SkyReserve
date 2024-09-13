import { useState, useEffect } from "react";
import thailand from "../assets/Thailand-card.png";
import dubai from "../assets/Dubai-card.png";
import malaysia from "../assets/Malaysia-card.png";
import singapore from "../assets/Singapore-card.png";
import japan from "../assets/Japan-card.png";

const Deals = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const deals = [
    {
      id: 1,
      destination: "Sri Lanka to Thailand",
      date: "14 Aug, 2023 - 20 Aug 2023",
      class: "Premium Class",
      price: "$540",
      imgSrc: thailand,
    },
    {
      id: 2,
      destination: "Sri Lanka to Dubai",
      date: "14 Aug, 2023 - 20 Aug 2023",
      class: "Business Class",
      price: "$980",
      imgSrc: dubai,
    },
    {
      id: 3,
      destination: "Sri Lanka to Malaysia",
      date: "14 Aug, 2023 - 20 Aug 2023",
      class: "First Class",
      price: "$400",
      imgSrc: malaysia,
    },
    {
      id: 4,
      destination: "Sri Lanka to Singapore",
      date: "14 Aug, 2023 - 20 Aug 2023",
      class: "First Class",
      price: "$4200",
      imgSrc: singapore,
    },
    {
      id: 5,
      destination: "Sri Lanka to Japan",
      date: "14 Aug, 2023 - 20 Aug 2023",
      class: "First Class",
      price: "$1000",
      imgSrc: japan,
    },
  ];

  const cardsToShow = 3;
  const extendedDeals = [deals[deals.length - 1], ...deals, deals[0]];

  useEffect(() => {
    if (index === -1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(deals.length - 1);
      }, 300);
    } else if (index === deals.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 300);
    } else {
      setIsTransitioning(true);
    }
  }, [index, deals.length]);

  const handlePrevious = () => {
    setIndex(index - 1);
  };

  const handleNext = () => {
    setIndex(index + 1);
  };

  return (
    <div
      id="deals"
      className="flex flex-col items-center justify-center bg-gray-200 py-10 px-4 min-h-[650px]"
    >
      {/* Animated Heading */}
      <h2 className="text-4xl font-bold mb-14 mt-0 pt-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg animate-fadeIn">
        Latest Flight Deals
      </h2>

      <div className="relative w-full max-w-6xl">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-full px-4 py-2 text-2xl bg-white rounded-full shadow-md z-10 hover:bg-gray-300 transition-colors"
          onClick={handlePrevious}
        >
          &lt;
        </button>

        {/* Cards Container */}
        <div className="flex overflow-hidden w-full">
          <div
            className={`flex transition-transform duration-300 ease-in-out ${
              isTransitioning ? "" : "transition-none"
            }`}
            style={{
              transform: `translateX(-${(index + 1) * (100 / cardsToShow)}%)`,
            }}
          >
            {extendedDeals.map((deal, i) => (
              <div key={i} className="flex-shrink-0 w-1/3 px-2">
                <div className="bg-white shadow-lg rounded-lg hover:scale-105 transform transition-transform duration-300">
                  <img
                    className="w-full h-56 object-cover rounded-t-lg"
                    src={deal.imgSrc}
                    alt={deal.destination}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{deal.destination}</h3>
                    <p className="text-gray-500">{deal.date}</p>
                    <p className="text-gray-800">{deal.class}</p>
                    <p className="text-lg font-bold">{deal.price}</p>
                    <button className="mt-4 px-4 py-2 font-semibold text-white bg-violet-600 rounded-lg hover:bg-[#07BACF] hover:transition-all">
                      <a href="#book">Book Now</a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-full px-4 py-2 text-2xl bg-white rounded-full shadow-md z-10 hover:bg-gray-300 transition-colors"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Deals;
