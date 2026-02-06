import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-green-900 text-white text-sm py-2 px-6 flex flex-col md:flex-row justify-between items-center">
        <p>Office No. 428, Gera Imperium, Hinjawadi Phase II, Pune – 411057</p>
        <div className="flex flex-col md:flex-row md:space-x-6 mt-2 md:mt-0">
          <p>📞 +91 9766855918</p>
          <p>✉️ info@optenix.com</p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-green-700 text-white flex justify-between items-center px-6 py-4 shadow-md">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">Qfy Leads</h1>

        {/* Links */}
        <div className="flex space-x-6 font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/services" className="hover:text-yellow-300 transition">Services</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link
            to="/contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-green-900 px-4 py-2 rounded-lg shadow-md transition"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;