import React from 'react';
import DarkStrip from './spacing';
import Image from 'next/image';
import largeGiftImage from '../../../public/gift-images.png'; // Adjust the path as necessary

export default function GiftBanner() {
  return (
    <>
      {/* <DarkStrip /> */}
      <div className="relative w-full bg-gray/50 py-8 px-4 overflow-hidden">
        {/* Background wrapper with z-index control */}
        <div className="relative max-w-6xl mx-auto">
          {/* Gift images */}
          <div className="flex justify-center items-center relative">
            {/* Center large gift */}
            <Image
              src={largeGiftImage} // Correctly reference the imported image
              alt="Neon gift box"
              className="w-full  h-4xl z-10 mx-auto"
            />
          </div>

          {/* Text overlay in the middle */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
            <div className="bg-black-900/70 w-full py-8 px-6 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-wider mb-2">
                FEELING GENEROUS?
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-wider">
                GIFTING NOW AVAILABLE!
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* <DarkStrip /> */}
    </>
  );
}