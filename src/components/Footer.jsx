import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-8 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
          <p className="text-gray-400">
            Amader company somporke kichu kotha. Amra quality products ebong
            service pradan korte protishrutiboddho.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-300 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition-colors">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-400 transition-colors"
            >
              <CiFacebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-400 transition-colors"
            >
              <CiTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-400 transition-colors"
            >
              <CiInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
        <p>&copy; 2024 AmarLogo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
