'use client';
import React from 'react';
import { FaBuilding, FaHome, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link'; // Import Link for navigation

const FinancialCounseling: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-6">
          Dhaka City Financial Counseling
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Expert financial guidance tailored for Dhaka’s vibrant communities. Solutions for business owners and homeowners in key neighborhoods.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-16">
        <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/nn.jpg"
            alt="Financial Planning in Dhaka"
            className="w-full h-72 object-cover hover:scale-110 transform transition duration-500"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
        {/* Business Owners Section */}
        <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg flex flex-col items-center hover:shadow-2xl transform transition duration-300">
          <FaBuilding className="text-blue-600 text-6xl mb-6 animate-bounce" />
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            For Business Owners
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Tailored solutions for business growth and financial planning in areas like Gulshan, Banani, and Motijheel.
          </p>
          <ul className="space-y-3 text-gray-700 text-center">
            <li>🏢 Office Expansion Planning</li>
            <li>📈 Market-Specific Investment</li>
            <li>💡 Tax & Compliance Support</li>
            <li>🚀 Strategic Growth Insights</li>
          </ul>
        </div>

        {/* Homeowners Section */}
        <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg flex flex-col items-center hover:shadow-2xl transform transition duration-300">
          <FaHome className="text-blue-600 text-6xl mb-6 animate-bounce" />
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            For Homeowners
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Expert mortgage planning and wealth-building solutions for Dhanmondi, Uttara, and Mirpur.
          </p>
          <ul className="space-y-3 text-gray-700 text-center">
            <li>🏡 Mortgage & Asset Protection</li>
            <li>📉 Debt Management Assistance</li>
            <li>🔒 Retirement Planning</li>
            <li>💰 Wealth-Building Tips</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <Link href="/Book">
          <button className="px-10 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300 flex items-center justify-center mx-auto">
            <FaCalendarAlt className="mr-3" /> Schedule Your Free Consultation
          </button>
        </Link>

        <p className="text-gray-600 text-sm mt-4">
          Or call us directly at{' '}
          <span className="text-blue-800 font-semibold">
            <FaPhoneAlt className="inline-block mb-1 mr-1" /> +880-015766 72498
          </span>
        </p>
      </div>
    </div>
  );
};

export default FinancialCounseling;
