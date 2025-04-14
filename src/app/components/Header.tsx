"use client";


import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 flex justify-between items-center rounded-2xl p-2 mx-4 md:mx-8 my-4 md:my-5 z-50"
      style={{ backgroundColor: "#140F10", backdropFilter: "blur(16px)" }}
    >
      <div className="mx-auto flex justify-between items-center w-full py-0.5 px-1">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <button className="flex items-center bg-gray-700 px-4 py-2 rounded">
              <div className="text-white font-bold text-xs">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  NO HESI
                </span>
              </div>
            </button>
          </Link>

          <div className="hidden pl-2.5 xl:flex items-center space-x-2">
            <Link href="/get-started">
              <button className="hover:text-gray-300 text-xs px-2 py-2 rounded hover:bg-gray-700">
                Get started
              </button>
            </Link>
            <Link href="/about">
              <button className="hover:text-gray-300 px-2 text-xs py-2 rounded hover:bg-gray-700">
                About Us
              </button>
            </Link>
            <Link href="/partners">
              <button className="hover:text-gray-300 px-2 py-2 text-xs rounded hover:bg-gray-700">
                Partners
              </button>
            </Link>
            <Link href="/contact">
              <button className="hover:text-gray-300 px-2 py-2 text-xs rounded hover:bg-gray-700">
                Contact
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side Items */}
        <div className="flex items-center space-x-1">
          <div className="hidden xl:flex items-end space-x-1">
            <Link href="/subscriptions">
              <button className="hover:text-gray-300 text-xs flex items-center px-2 py-2 rounded bg-gray-700">
                <svg
                  className="w-3 h-3 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Subscriptions
              </button>
            </Link>
            <Link href="/servers">
              <button className="hover:text-gray-300 flex text-xs items-center px-2 py-2 rounded bg-gray-700">
                <svg
                  className="w-3 h-3 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Servers
              </button>
            </Link>
            <Link href="/leaderboard">
              <button className="hover:text-gray-300 flex text-xs items-center px-2 py-2 rounded bg-gray-700">
                <svg
                  className="w-3 h-3 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
                Leaderboard
              </button>
            </Link>
          </div>
          <Link
            href="/login"
            className="ml-1 bg-purple-600 hover:bg-purple-700 text-white text-xs px-2 py-2 rounded-md flex items-center transition duration-300"
          >
            <svg
              className="w-3 h-3 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            Log In
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none xl:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="xl:hidden absolute top-5 mt-10 left-0 right-0 bg-gray-900 border-t border-gray-800 rounded-2xl z-50"
          style={{ backgroundColor: "#140F10", backdropFilter: "blur(16px)" }}
        >
          <div className="flex flex-col space-y-3 p-4">
            <Link href="/get-started">
              <button className="w-full px-3 py-2 rounded bg-gray-600 hover:bg-blue-700 text-white">
                Get started
              </button>
            </Link>
            <Link href="/about">
              <button className="w-full px-3 py-2 rounded bg-gray-600 hover:bg-blue-700 text-white">
                About Us
              </button>
            </Link>
            <Link href="/partners">
              <button className="w-full px-3 py-2 rounded bg-gray-600 hover:bg-blue-700 text-white">
                Partners
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full px-3 py-2 rounded bg-gray-600 hover:bg-blue-700 text-white">
                Contact
              </button>
            </Link>
            <Link href="/subscriptions">
              <button className="w-full px-3 py-2 rounded bg-gray-700 hover:bg-blue-700 text-white">
                Subscriptions
              </button>
            </Link>
            <Link href="/servers">
              <button className="w-full px-3 py-2 rounded bg-gray-700 hover:bg-blue-700 text-white">
                Servers
              </button>
            </Link>
            <Link href="/leaderboard">
              <button className="w-full px-3 py-2 rounded bg-gray-700 hover:bg-blue-700 text-white">
                Leaderboard
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
