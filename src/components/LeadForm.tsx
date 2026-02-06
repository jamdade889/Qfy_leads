import { useState } from "react";

interface LeadData {
  name: string;
  email: string;
  phone: string;
}

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Lead Submitted: ${formData.name}, ${formData.email}, ${formData.phone}`);
  };

  return (
    <div className="flex justify-center items-center py-12 bg-gradient-to-r from-blue-50 to-blue-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Get Started Today 🚀
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Your Phone"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
        >
          Submit Lead
        </button>

        {/* Small Note */}
        <p className="text-xs text-gray-500 text-center mt-4">
          We respect your privacy. Your details are safe with us.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;