import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Qfy Leads</h2>
          <p className="text-sm text-green-100">
            Delivering scalable IT solutions and precision-driven lead generation
            to accelerate business success.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm">📍 Office No. 428, Gera Imperium, Hinjawadi Phase II, Pune – 411057</p>
          <p className="text-sm">📞 +91 9766855918</p>
          <p className="text-sm">✉️ info@optenix.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 mt-8 pt-4 text-center text-sm text-green-200">
        © 2026 Qfy Leads. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;