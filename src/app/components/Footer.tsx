import React from "react";
import { Youtube, MessageSquare, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mx-5 bg-gray-1000 text-white rounded-lg px-6 py-8 md:px-12 border border-gray-900 ">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo section */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-purple-600 rounded flex items-center justify-center mr-2">
                <div className="h-6 w-6 bg-black rotate-45"></div>
              </div>
              <span className="text-purple-500 text-xl font-bold">NO HESI</span>
            </div>
          </div>

          {/* Navigation columns - responsive grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="hover:text-purple-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contacts" className="hover:text-purple-400">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-3">
                <li>
                  <a href="/get-started" className="hover:text-purple-400">
                    Get started
                  </a>
                </li>
                <li>
                  <a href="/subscription" className="hover:text-purple-400">
                    Subscription
                  </a>
                </li>
                <li>
                  <a href="/servers" className="hover:text-purple-400">
                    Servers
                  </a>
                </li>
                <li>
                  <a href="/leaderboard" className="hover:text-purple-400">
                    Leaderboard
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-3">
                <li>
                  <a href="/privacy" className="hover:text-purple-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-purple-400">
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href="/refund" className="hover:text-purple-400">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="hover:text-purple-400">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social media icons - shows at top on mobile, right side on desktop */}
          <div className="order-first md:order-last mb-6 md:mb-0">
            <div className="flex justify-end space-x-4">
              <a
                href="https://youtube.com"
                className="text-gray-400 hover:text-white"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://discord.com"
                className="text-gray-400 hover:text-white"
              >
                <MessageSquare size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://tiktok.com"
                className="text-gray-400 hover:text-white"
              >
                <span className="font-bold text-xl">␥</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            NoHesi™ 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
