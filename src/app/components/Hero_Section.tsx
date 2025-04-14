"use client";

import Image from "next/image";
import Header from "./Header";

// import bgImg from '@/public/hero-bg.jpg'; // You can rename your image and put it in public folder as 'hero-bg.jpg'

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.nohesi.gg/assets/website/videos/intro-2.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
        {/* Optional Overlay for better text visibility */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to left, #c31432, #240b36)", // Gradient overlay
            opacity: 0.6, // Adjust opacity for better text visibility
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-8">
        <h1 className="text-white text-xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide">
          VIRTUAL STREETS
          <br />
          <span className="block mt-1">REAL RUSH</span>
        </h1>

        <p className="text-gray-300 mt-6 max-w-2xl text-sm sm:text-base md:text-lg">
          Discover custom cars, unique highway maps, and unmatched cut-up
          competitions.
          <br />
          <span className="text-cyan-400 font-medium underline underline-offset-2">
            Enjoy monthly updates and exclusive content
          </span>
          <br />
          and see why over a million drivers are part of our community.
        </p>

        <button className="mt-8 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm rounded-md shadow-md transition duration-300">
          GET STARTED!
        </button>
      </div>
    </section>
  );
};

export default Hero;
