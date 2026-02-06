import React, { useState } from "react";
import ".styles/About.css"; // Import the CSS file

const About: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="about-main">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Badge */}
        <div className="badge">Qfy Leads</div>

        {/* Headline */}
        <h1 className="headline">Trusted Technology Partner</h1>

        {/* Subheading */}
        <p className="subheading">
          Qfy Leads empowers businesses with intelligent software solutions,
          advanced data insights, and scalable lead generation strategies.
        </p>

        {/* CTA */}
        <button className="cta-button">Learn More →</button>
      </section>

      {/* Collapsible Section */}
      <section className="collapsible-section">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="collapsible-toggle"
        >
          How does Optenix work?
          <span className="toggle-icon">{isOpen ? "−" : "+"}</span>
        </button>

        {isOpen && (
          <div className="collapsible-content">
            Optenix integrates seamlessly with your business processes by
            combining intelligent software, advanced analytics, and lead
            generation strategies. It helps you capture, enrich, and convert
            leads more effectively while providing actionable insights for
            growth.
          </div>
        )}
      </section>
    </main>
  );
};

export default About;