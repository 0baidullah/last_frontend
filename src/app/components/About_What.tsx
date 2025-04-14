import React from "react";
import DarkStrip from "./spacing";

export default function WhatWeDo() {
  return (
    <>
      <DarkStrip />
      <div className="w-full  relative z-10 px-6 py-16 md:px-16 md:py-24  mx-auto border rounded-xl  border-gray-700  ">
        <h2 className="text-4xl md:text-6xl font-bold tracking-wider mb-8 text-center md:text-left">
          WHAT WE DO
        </h2>

        <p className="text-sm md:text-xl mb-8 leading-relaxed">
          At No Hesi, we're a team of car enthusiasts driven by one mission: to
          flip the script on driving sims. What started as a niche hobby is now
          a full-on community of over 850k members, fusing cut-up vibes with
          today's car culture. In just two years, we've connected hardcore and
          casual gamers, building a space where anyone can feel the rush of
          cutting up.
        </p>

        <p className="text-sm md:text-xl leading-relaxed">
          With our custom 3D models, next-level design, and original gameplay
          innovations, we've taken highway racing from underground to
          mainstream. Whether you're hitting drifts on our highways or chasing
          precision driving, No Hesi is where you exceed your limits.
        </p>
      </div>
      <DarkStrip />
    </>
  );
}
