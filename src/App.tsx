import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Tools from "./pages/Tools";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar always visible */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
};

export default App;
