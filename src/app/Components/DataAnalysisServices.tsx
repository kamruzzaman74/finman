'use client';
import React from 'react';
import { FaChartBar, FaDatabase, FaTools, FaUserShield, FaRegChartBar } from 'react-icons/fa';

const DataAnalysisServices: React.FC = () => {
  return (
    <div className="bg-white py-20 lg:py-32 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-400 to-red-400">
          Data Analysis Services
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Empower your FinTech business with the precision and clarity that advanced data analytics provide. Let data lead your success story!
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full flex justify-center mb-16">
        <div className="absolute top-0 left-0 right-0 -z-10 bg-gradient-to-r from-yellow-500 via-pink-400 to-red-400 h-full rounded-xl"></div>
        <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <img
            src="/tt.webp"
            alt="Data Analysis in FinTech"
            className="w-full h-[450px] object-cover transition-transform duration-500 hover:scale-110 rounded-2xl"
          />
          <div className="absolute bottom-4 left-6 text-white bg-gradient-to-t from-black via-transparent to-transparent opacity-60 p-4 rounded-xl">
            <h2 className="text-3xl font-semibold">Empowering FinTech</h2>
            <p className="mt-1 text-md">Intelligent data solutions for modern businesses.</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-12 text-lg text-gray-800 max-w-5xl mx-auto leading-relaxed">
        {/* Insightful Decisions */}
        <div className="flex flex-col sm:flex-row items-center space-x-4 space-y-6 sm:space-y-0">
          <FaRegChartBar className="text-yellow-500 text-5xl flex-shrink-0" />
          <p>
            <strong className="text-gray-900 text-2xl">Insightful Decisions:</strong> 
            Gain actionable insights to make data-driven decisions that enhance profitability and mitigate risks in real time.
          </p>
        </div>

        {/* Fraud Detection */}
        <div className="flex flex-col sm:flex-row items-center space-x-4 space-y-6 sm:space-y-0">
          <FaUserShield className="text-red-500 text-5xl flex-shrink-0" />
          <p>
            <strong className="text-gray-900 text-2xl">Fraud Detection:</strong> 
            Advanced data analytics identify suspicious patterns, ensuring your transactions are secure and reliable.
          </p>
        </div>

        {/* Customer Insights */}
        <div className="flex flex-col sm:flex-row items-center space-x-4 space-y-6 sm:space-y-0">
          <FaChartBar className="text-green-600 text-5xl flex-shrink-0" />
          <p>
            <strong className="text-gray-900 text-2xl">Customer Insights:</strong> 
            Dive deep into customer behavior to personalize services and build lasting client relationships.
          </p>
        </div>

        {/* Operational Efficiency */}
        <div className="flex flex-col sm:flex-row items-center space-x-4 space-y-6 sm:space-y-0">
          <FaTools className="text-blue-600 text-5xl flex-shrink-0" />
          <p>
            <strong className="text-gray-900 text-2xl">Operational Efficiency:</strong> 
            Leverage automation to optimize resources, streamline processes, and boost productivity.
          </p>
        </div>

        {/* Risk Management */}
        <div className="flex flex-col sm:flex-row items-center space-x-4 space-y-6 sm:space-y-0">
          <FaDatabase className="text-purple-600 text-5xl flex-shrink-0" />
          <p>
            <strong className="text-gray-900 text-2xl">Risk Management:</strong> 
            Predict and mitigate risks effectively using predictive analytics for a safer, more resilient business environment.
          </p>
        </div>
      </div>

      {/* Closing Section */}
      <div className="text-center mt-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
          Let Data Drive Your FinTech Success
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          From real-time decision-making to securing financial operations, data analysis is the backbone of innovation in FinTech. Discover what's possible today!
        </p>
      </div>
    </div>
  );
};

export default DataAnalysisServices;
