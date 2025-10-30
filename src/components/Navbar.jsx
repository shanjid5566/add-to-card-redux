import { Menu, ShoppingCart, User } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-400">
          <Link href="/">ShopingCart</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink
            to="/"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Products
          </NavLink>
          <NavLink
            to="/add-product"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Add Product
          </NavLink>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/cart"
            aria-label="Add to cart"
            className="hover:text-blue-300 transition-colors duration-200 relative"
          >
            <ShoppingCart className="h-6 w-6" />
            {/* Cart count badge (optional) */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cart.length}
            </span>
          </Link>
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
