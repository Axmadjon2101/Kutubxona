import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to={'/'}>
          <h1 className="text-3xl font-extrabold text-white cursor-pointer hover:text-yellow-400 transition-all duration-300">
            Kutubxona
          </h1>
        </Link>

        {/* Navbar Links */}
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link
              to="/"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Bosh Sahifa
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Biz Haqimizda
            </Link>
          </li>
          <li>
            <Link
              to="/books"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Kitoblar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
