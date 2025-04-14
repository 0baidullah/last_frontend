import React from "react";

export default function PurpleCarAd() {
  return (
    <div className="relative w-full h-screen bg-gray-1000 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>

      {/* Main content container */}
      <div className="relative z-20 flex flex-col justify-center h-full p-8 md:p-16">
        {/* Headline text */}
        <div className="mb-8 md:mb-16">
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-wider leading-tight">
            NO HESITATION
            <br />
            FULL ACCELERATION
          </h1>
        </div>

        {/* Subheadings */}
        <div className="mt-auto">
          <p className="text-2xl md:text-4xl font-bold text-purple-500 leading-snug">
            PUSHING BOUNDARIES
            <br />
            SETTING THE STANDARD
            <br />
            CAPTURING A GLOBAL AUDIENCE
          </p>
        </div>
      </div>

      {/* Background image (placeholder) */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-purple-800 bg-opacity-50">
          <img
            src="/api/placeholder/1200/800"
            alt="Purple luxury car"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>
    </div>
  );
}
