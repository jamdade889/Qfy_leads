import React from "react";

const Services: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Our Services
        </h2>
        <p className="text-green-100 mb-12">
          Lead Generation • Data Enrichment • Targeted Outreach
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="flex items-center space-x-3 bg-white text-green-800 p-4 rounded-lg shadow hover:shadow-xl transition">
            <span className="text-green-600 text-xl">✔</span>
            <p className="font-medium">Home Service Leads</p>
          </div>

          <div className="flex items-center space-x-3 bg-white text-green-800 p-4 rounded-lg shadow hover:shadow-xl transition">
            <span className="text-green-600 text-xl">✔</span>
            <p className="font-medium">Manufacturing Leads</p>
          </div>

          <div className="flex items-center space-x-3 bg-white text-green-800 p-4 rounded-lg shadow hover:shadow-xl transition">
            <span className="text-green-600 text-xl">✔</span>
            <p className="font-medium">Specialty Leads</p>
          </div>

          <div className="flex items-center space-x-3 bg-white text-green-800 p-4 rounded-lg shadow hover:shadow-xl transition">
            <span className="text-green-600 text-xl">✔</span>
            <p className="font-medium">Live Leads</p>
          </div>

          <div className="flex items-center space-x-3 bg-white text-green-800 p-4 rounded-lg shadow hover:shadow-xl transition">
            <span className="text-green-600 text-xl">✔</span>
            <p className="font-medium">Aged Leads</p>
          </div>

          <div className="flex items-center space-x-3 bg-white text-green-800 p-4 rounded-lg shadow hover:shadow-xl transition">
            <span className="text-green-600 text-xl">✔</span>
            <p className="font-medium">Mailing Lists</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;