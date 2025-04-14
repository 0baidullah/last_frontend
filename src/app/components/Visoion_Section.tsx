import React from "react";
import DarkStrip from "./spacing";
const NoHesiCommunity = () => {
  // Dummy data storage
  const communityData = [
    {
      id: 1,
      icon: "/Frame-1.svg", // Use the relative path from the public folder
      title: "WORLDWIDE INFLUENCE",
      content:
        "Our content has billions of views, and has created an entirely new community of driving enthusiasts. We have over a 100K active members that drive together across all continents.",
      highlight: "100K+ ACTIVE MEMBERS",
    },
    {
      id: 2,
      icon: "/Frame-3.svg", // Use the relative path from the public folder
      title: "OUR VISION",
      content:
        "Since the beginning, our vision has been to blend the real and virtual world, aligning our brand with the underground racing community. We partner with real-world brands to get you as close as possible to your dream builds with the most desirable cars in the world.",
      highlight: "REAL & VIRTUAL BLEND",
    },
    {
      id: 3,
      icon: "/Frame-2.svg", // Use the relative path from the public folder
      title: "UNLIMITED POTENTIAL",
      content:
        "As the leading virtual car community, you have an opportunity to grow your own brand and following with hundreds of thousands of drivers across the globe. Create new connections that you can't make anywhere else.",
      highlight: "GLOBAL CONNECTIONS",
    },
  ];
  return (
    <>
      <div className="bg-gray-1000 text-white py-9 px-1 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-start gap-0">
            No Hesi is a
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-start gap-0 mb-12">
            Global Community
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityData.map((card) => (
              <div
                key={card.id}
                className={`bg-gray-1000 border border-gray-700 rounded-xl overflow-hidden hover:shadow-xs hover:scale-100 transition-all duration-300 ${
                  card.id === 1
                    ? "hover:border-green-200 shadow-2xl hover:shadow-green-700 transition-all duration-300" // Green border for the first card
                    : card.id === 2
                    ? "hover:border-red-200 shadow-2xl hover:shadow-red-700 transition-all duration-300" // Red border for the second card
                    : "hover:border-yellow-200 shadow-2xl hover:shadow-yellow-700 transition-all duration-300" // Yellow border for the third card
                }`}
              >
                <div className="p-6">
                  <div className="flex justify-start mb-4">
                    <img
                      src={card.icon}
                      alt={`Icon ${card.id}`}
                      className="w-16 h-16"
                    />
                  </div>
                  <h2
                    className={`text-3xl font-bold mb-2 text-transparent bg-clip-text uppercase tracking-wider ${
                      card.id === 1
                        ? "bg-gradient-to-r from-green-400 to-green-600" // Green for the first title
                        : card.id === 2
                        ? "bg-gradient-to-r from-red-400 to-red-600" // Red for the second title
                        : "bg-gradient-to-r from-yellow-400 to-yellow-600" // Yellow for the third title
                    }`}
                  >
                    {card.title.split(" ").map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </h2>
                  <p className="text-gray-200 mb-6 text-sm leading-relaxed">
                    {card.content.split("\n").map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DarkStrip />
    </>
  );
};

export default NoHesiCommunity;
