"use client";

import React from "react";
import { Youtube } from "lucide-react";

const dummyVideos = [
  {
    title: "October Update",
    thumbnail: "https://via.placeholder.com/640x360.png?text=October+Update",
    duration: "1:42",
  },
  {
    title: "Building Preview",
    thumbnail: "https://via.placeholder.com/640x360.png?text=Building+Preview",
    duration: "2:10",
  },
  {
    title: "UI Update",
    thumbnail: "https://via.placeholder.com/640x360.png?text=UI+Update",
    duration: "1:45",
  },
];

export default function YouTubeChannel() {
  return (
    <div className="bg-black-1000 w-full text-white py-16 px-5">
      <div className="max-w-screen-xl mx-auto">
        {/* Title & Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase leading-tight mb-6 md:mb-0">
            CHECK OUR
            <br />
            YOUTUBE
            <br />
            CHANNEL
          </h2>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded px-4 py-2 hover:bg-white hover:text-black transition-colors"
          >
            GO TO YOUTUBE
          </a>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dummyVideos.map((video, index) => (
            <div
              key={index}
              className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />

              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 w-12 h-9 flex items-center justify-center rounded">
                  <Youtube size={24} className="text-white" />
                </div>
              </div>

              {/* Bottom Controls */}
              {/* <div className="absolute bottom-0 left-0 p-2 flex items-center space-x-2">
                <button className="text-white text-sm">▶</button>
                <span className="text-xs text-gray-300">0:00 / {video.duration}</span>
              </div>
              <div className="absolute bottom-0 right-0 p-2 flex items-center space-x-2">
                <button className="text-white text-sm">⚙</button>
                <button className="text-white text-sm">⤢</button>
              </div> */}

              {/* Duration Tag Top Right */}
              <div className="absolute top-0 right-0 bg-black py-1 px-2 text-white text-xs">
                {video.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
