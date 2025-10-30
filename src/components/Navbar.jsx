import { Menu, ShoppingCart, User } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-400">
          <Link href="/">ShopingCart</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="/"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Products
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button
            aria-label="Add to cart"
            className="hover:text-blue-300 transition-colors duration-200 relative"
          >
            <ShoppingCart className="h-6 w-6" />
            {/* Cart count badge (optional) */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
          <button
            aria-label="User profile"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            <User className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu Button (Optional, for responsiveness) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
