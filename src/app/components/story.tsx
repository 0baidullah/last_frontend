import React from "react";
import Image from "../../public/about-story.jpeg";

export default function OurStory() {
  return (
    <>
      <div className="bg-gradient-to-l from-[#c31432] to-[#240b36] text-white w-full py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left text content */}
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase">
                OUR STORY
              </h2>

              <div className="space-y-4">
                <p className="text-sm">
                  No Hesi started as a passion project, inspired by our founder
                  Chris' love for German cars and high-speed. What began as a
                  niche idea has grown into a global community of nearly 1
                  million players. In just two years, we've transformed the
                  highway-traffic experience, dedicating countless hours to
                  building an authentic platform for the cut-up scene. But it's
                  not just about that, it's about bringing drivers together from
                  around the world to share unforgettable, adrenaline-fueled
                  moments.
                </p>
              </div>
            </div>

            {/* Right image */}
            <div className="lg:w-1/2 rounded-2xl overflow-hidden mt-8 lg:mt-0">
              <img
                src="/about-story.jpeg"
                alt="Racing car with headlights in dark environment"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-l from-[#c31432] to-[#240b36] text-white w-full py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 rounded-2xl overflow-hidden mt-8 lg:mt-0">
              <img
                src="/about-story.jpeg"
                alt="Racing car with headlights in dark environment"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Left text content */}
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase">
                OUR STORY
              </h2>

              <div className="space-y-4">
                <p className="text-sm">
                  No Hesi started as a passion project, inspired by our founder
                  Chris' love for German cars and high-speed. What began as a
                  niche idea has grown into a global community of nearly 1
                  million players. In just two years, we've transformed the
                  highway-traffic experience, dedicating countless hours to
                  building an authentic platform for the cut-up scene. But it's
                  not just about that, it's about bringing drivers together from
                  around the world to share unforgettable, adrenaline-fueled
                  moments.
                </p>
              </div>
            </div>

            {/* Right image */}
          </div>
        </div>
      </div>
    </>
  );
}
