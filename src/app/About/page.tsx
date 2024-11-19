'use client';

import React from 'react';
import { FaHandshake, FaChartLine, FaRegBuilding, FaRegMoneyBillAlt } from 'react-icons/fa';
import 'animate.css'; // Ensure animate.css is imported

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-blue-100 py-16 sm:py-20 md:py-24 px-6 sm:px-12 lg:px-24">
      {/* Hero Section */}
      <div className="relative mb-16 sm:mb-20">
        <img
          src="k.jpg.png" // Adjust image size here
          alt="Finman Hero Image"
          className="w-full h-[200px] sm:h-[300px] lg:h-[350px] object-cover rounded-2xl shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-black opacity-25 rounded-2xl"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            About Us
          </h1>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-6xl mx-auto mb-16 sm:mb-20 text-center animate__animated animate__fadeInUp">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-teal-600 mb-6 sm:mb-8">
          Our Mission & Vision
        </h2>
        <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6 sm:mb-8">
          At <span className="font-extrabold text-teal-500">Finman</span>, we are committed to delivering financial strategies that help you achieve long-term success and stability.
        </p>
        <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
          We provide customized solutions for businesses, individuals, and homeowners, built around trust, transparency, and personal growth.
        </p>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto mb-16 sm:mb-20">
        {/* Value 1 */}
        <div className="flex items-start bg-gradient-to-br from-teal-50 to-teal-200 border border-teal-300 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300 hover:bg-teal-100">
          <FaHandshake className="text-teal-500 text-5xl mr-6" />
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Trust & Integrity</h3>
            <p className="text-gray-700">
              Long-lasting relationships grounded in trust. We prioritize your success and security.
            </p>
          </div>
        </div>

        {/* Value 2 */}
        <div className="flex items-start bg-gradient-to-br from-purple-50 to-purple-200 border border-purple-300 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300 hover:bg-purple-100">
          <FaChartLine className="text-purple-500 text-5xl mr-6" />
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Growth & Innovation</h3>
            <p className="text-gray-700">
              Forward-thinking strategies designed for sustainable growth and market-leading innovation.
            </p>
          </div>
        </div>

        {/* Value 3 */}
        <div className="flex items-start bg-gradient-to-br from-blue-50 to-blue-200 border border-blue-300 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300 hover:bg-blue-100">
          <FaRegBuilding className="text-blue-500 text-5xl mr-6" />
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Expertise</h3>
            <p className="text-gray-700">
              Decades of combined experience ensuring tailored solutions for your unique needs.
            </p>
          </div>
        </div>

        {/* Value 4 */}
        <div className="flex items-start bg-gradient-to-br from-yellow-50 to-yellow-200 border border-yellow-300 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300 hover:bg-yellow-100">
          <FaRegMoneyBillAlt className="text-yellow-500 text-5xl mr-6" />
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Customer-Centric Approach</h3>
            <p className="text-gray-700">
              Financial solutions built around your goals, providing value and clarity every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center max-w-5xl mx-auto mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-teal-600 mb-6 sm:mb-8">
          Why Choose Finman?
        </h2>
        <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6 sm:mb-8">
          At Finman, we don’t just offer services; we create long-term partnerships that help you build a more secure future.
        </p>
        <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
          Our team is here to provide personalized advice and actionable strategies, ensuring you remain in control of your financial journey.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
