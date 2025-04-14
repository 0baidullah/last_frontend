import Image from 'next/image'; // Import the Next.js Image component
import Imagee from '../../../public/banner2.png'; // Adjust the path as necessary
import DarkStrip from './spacing';
export default function Banner() {
  return (

    <>
    {/* <DarkStrip /> */}
    <div className="relative w-full h-64 bg-purple-700 overflow-hidden flex items-center">
      {/* Left content section */}
      <div className="absolute left-0 top-0 bottom-0 w-2/3 p-8 z-10 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider mb-2">
          DONT HESITATE
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          START RIGHT <br /> NOW!
        </h2>
        <button className="bg-white text-black px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors w-fit">
          GET STARTED
        </button>
      </div>

      {/* Right triangle image section */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2">
        <div className="relative h-full w-full">
          {/* Triangle shape containing car image */}
          <div
            className="absolute right-0 top-0 h-full w-full"
            style={{
              clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
            }}
          >
            <Image
              src={Imagee} // Correctly reference the imported image
              alt="Car Banner"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />

            {/* Overlay to darken the image */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}