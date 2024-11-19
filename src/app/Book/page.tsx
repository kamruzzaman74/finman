'use client';
import React, { useState } from 'react';
import { FaUserAlt, FaPhoneAlt, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Financial Counseling',
    date: '',
    time: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you can send the data to your backend or store it as needed
    console.log(formData);
  };

  return (
    <div className="relative bg-white py-16 lg:py-24 px-8 sm:px-16 lg:px-28 overflow-hidden">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Book Your Appointment</h2>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700 mb-2" htmlFor="name">
              Your Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <FaUserAlt className="text-blue-600 mr-2" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full border-none focus:outline-none"
              />
            </div>
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700 mb-2" htmlFor="phone">
              Phone Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <FaPhoneAlt className="text-blue-600 mr-2" />
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full border-none focus:outline-none"
              />
            </div>
          </div>

          {/* Service Type Field */}
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700 mb-2" htmlFor="serviceType">
              Service Type
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <FaClipboardList className="text-blue-600 mr-2" />
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full border-none focus:outline-none"
              >
                <option value="Financial Counseling">Financial Counseling</option>
                <option value="Investment Planning">Investment Planning</option>
                <option value="Tax Consulting">Tax Consulting</option>
              </select>
            </div>
          </div>

          {/* Date Field */}
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700 mb-2" htmlFor="date">
              Preferred Date
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <FaCalendarAlt className="text-blue-600 mr-2" />
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border-none focus:outline-none"
              />
            </div>
          </div>

          {/* Time Field */}
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700 mb-2" htmlFor="time">
              Preferred Time
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <FaCalendarAlt className="text-blue-600 mr-2" />
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border-none focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transform transition-transform duration-300"
          >
            Book Appointment
          </button>
        </form>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mt-8 text-center text-green-600">
            <h3 className="text-xl font-semibold">Your booking has been successfully submitted!</h3>
            <p className="text-sm">We will contact you shortly to confirm your appointment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
 
