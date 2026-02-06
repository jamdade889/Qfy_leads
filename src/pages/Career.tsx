import React from "react";

const Careers: React.FC = () => {
  return (
    <main className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 min-h-screen text-white">
      {/* Why Choose Section */}
      <section className="text-center px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Why Choose Qfy Leads?
        </h2>
        <p className="text-lg md:text-xl text-green-100 leading-relaxed">
          We combine technical expertise, creative thinking, and a deep
          understanding of business needs to deliver impactful solutions on time.
        </p>
      </section>

      {/* Careers Section */}
      <section className="bg-green-800 py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Careers at Qfy Leads
        </h2>
        <p className="text-green-100 mb-12 max-w-2xl mx-auto">
          At Optenix, we believe people are our greatest asset. We provide
          opportunities to work on challenging projects using modern
          technologies.
        </p>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white text-green-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">Software Engineer</h3>
            <p className="text-sm text-gray-600">Java / Python</p>
          </div>

          <div className="bg-white text-green-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">Frontend Developer</h3>
            <p className="text-sm text-gray-600">React</p>
          </div>

          <div className="bg-white text-green-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">Cloud & DevOps Engineer</h3>
            <p className="text-sm text-gray-600">AWS / Azure / CI/CD</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;