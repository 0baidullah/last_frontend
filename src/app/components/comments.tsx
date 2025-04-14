import React from "react";
import { MessageSquare } from "lucide-react";

export default function Testimonials() {
  // Dummy testimonial data
  const testimonials = [
    {
      id: 1,
      username: "Obaid",
      avatar: "/api/placeholder/60/60",
      content:
        "I've been playing for about two years now, and I absolutely love the work you guys do. I also have Tier 2, so my experience has been incredibly delightful. Keep up the amazing work!",
    },
    {
      id: 2,
      username: "MEDII",
      avatar: "/api/placeholder/60/60",
      content:
        "No Hesi has been life-changing for me. Being able to come home, drive, and listen to music has truly brought peace to my life. I highly recommend it to anyone who loves driving as much as I do.",
    },
    {
      id: 3,
      username: "Mikasa",
      avatar: "/api/placeholder/60/60",
      content:
        "Assetto Corsa has always been a passion for me, and with No Hesi, that passion has grown even more. A great team, great work, and an amazing Assetto experience in return. Thank you, No Hesi!",
    },
  ];

  return (
    <div className="bg-gray-1000 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl md:text-xl lg:text-6xl font-bold text-center mb-16 tracking-wider uppercase">
          <span className="text-gray-300">WHAT PEOPLE</span>
          <br />
          <span className="text-gray-400">SAY ABOUT US</span>
        </h2>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-1000 rounded-lg p-3 border border-gray-800"
            >
              {/* User info */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.username} avatar`}
                  className="w-7 h-7 rounded-full mr-3"
                />
                <div className="flex items-center">
                  <span className=" text-md">{testimonial.username}</span>
                  <MessageSquare size={16} className="ml-2 text-gray-400" />
                </div>
              </div>

              {/* Testimonial content */}
              <p className="text-gray-300 text-sm">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
