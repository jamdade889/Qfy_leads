import React from "react";
import { Link } from "react-router-dom";

// No props for now, so we just use React.FC
const Home: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white">
      
      {/* Top Contact Bar */}
      <div className="bg-green-800 text-sm py-2 px-6 flex flex-col md:flex-row justify-between items-center">
        <p>Office No. 428, Gera Imperium, Hinjawadi Phase II, Pune – 411057</p>
        <div className="flex flex-col md:flex-row md:space-x-6 mt-2 md:mt-0">
          <p>📞 +91 9766855918</p>
          <p>✉️ info@optenix.com</p>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-green-700/70 backdrop-blur-md">
        <h1 className="text-xl font-bold tracking-wide">Qfy Leads</h1>
        <div className="flex space-x-6 font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link to="/services" className="hover:text-yellow-300 transition">
            Services
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition">
            About
          </Link>
          <Link
            to="/contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-green-900 px-4 py-2 rounded-lg shadow-md transition"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Qfy Leads <br />
          <span className="text-yellow-300">POWERING DIGITAL GROWTH</span>
        </h2>
        <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-8">
          Qfy Leads delivers scalable IT solutions and precision-driven lead
          generation to accelerate business success.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Get Started →
          </button>
          <div className="text-sm text-green-100">
            <p className="font-medium">Talk to us</p>
            <p className="text-lg font-bold">+91 9766855918</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
