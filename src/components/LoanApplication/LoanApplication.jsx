
import React, { useState } from "react";

const LoanApplication = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    loanAmount: "",
    purpose: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Loan application submitted:", formData);
    // Reset form or show success message
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Apply for a Loan
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="businessName" className="block mb-2">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="loanAmount" className="block mb-2">
              Loan Amount
            </label>
            <input
              type="number"
              id="loanAmount"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="purpose" className="block mb-2">
              Loan Purpose
            </label>
            <select
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select a purpose</option>
              <option value="working_capital">Working Capital</option>
              <option value="equipment">Equipment Purchase</option>
              <option value="expansion">Business Expansion</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="duration" className="block mb-2">
              Loan Duration (months)
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoanApplication;
