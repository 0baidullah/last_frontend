"use client";

import Image from "next/image";
import banner from "../../../public/image.png"; // Adjust the path as necessary;
import DarkStrip from "./spacing";
const DetailsSection = () => {
  return (
    <>
      <DarkStrip />
      <section className="lg:my-36 w-full h-screen bg-gray- py-12 px-4 sm:px-6 md:px-8 flex justify-center items-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={banner}
              alt="110 Banner"
              className="w-full h-auto object-cover  lg:w-xl xl:w-4xl "
              priority
            />
          </div>
          <button className="bg-violet-600 hover:bg-violet-700 bottom- text-white text-sm font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300">
            GET THE DETAILS
          </button>
        </div>
      </section>
      <DarkStrip />
    </>
  );
};

export default DetailsSection;
