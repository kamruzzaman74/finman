'use client';
import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { FaChartLine, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';

const CorporateOfficeFintech: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-16 lg:py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center w-full space-y-12 lg:space-y-0 lg:space-x-12 mb-16">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src="/hh.png" // Ensure this image exists in the `public` folder
              alt="Corporate FinTech Solutions"
              width={600} // Specify width
              height={400} // Specify height
              className="object-cover"
              priority // Load as a priority image for LCP
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-yellow-600 mb-6">
            Corporate FinTech Solutions
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Revolutionize your corporate operations with modern financial solutions tailored for
            your business success, especially in the vibrant business hubs of Dhaka.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
          <FaChartLine className="text-yellow-600 text-6xl mb-4 mx-auto lg:mx-0" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-3 text-center lg:text-left">
            Advanced Financial Analytics
          </h2>
          <p className="text-gray-600 text-base lg:text-lg text-center lg:text-left">
            Empower your decisions with cutting-edge analytics and actionable insights.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
          <FaShieldAlt className="text-blue-600 text-6xl mb-4 mx-auto lg:mx-0" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-3 text-center lg:text-left">
            Enterprise Data Security
          </h2>
          <p className="text-gray-600 text-base lg:text-lg text-center lg:text-left">
            Fortify your business with enterprise-grade data security solutions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
          <FaMoneyBillWave className="text-green-600 text-6xl mb-4 mx-auto lg:mx-0" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-3 text-center lg:text-left">
            Automated Billing & Payments
          </h2>
          <p className="text-gray-600 text-base lg:text-lg text-center lg:text-left">
            Simplify your transactions with efficient and automated systems.
          </p>
        </div>
      </div>

      {/* Dhaka-Specific Financial Solutions Section */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Tailored Financial Services for Dhaka Businesses
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            From bustling markets to high-rise corporate offices, we provide specialized solutions
            to enhance financial efficiency for businesses in Dhaka. Our services are designed to
            meet the unique challenges of this thriving metropolis.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-4">
            <li>Real-time analytics for Dhaka-based trading firms.</li>
            <li>Secure payment gateways tailored for local businesses.</li>
            <li>Automated billing solutions for SMEs in Dhaka&apos;s tech industry.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src="/kkkk.jpg" // Ensure this image exists in the `public` folder
              alt="Dhaka Financial Solutions"
              width={600} // Specify width
              height={400} // Specify height
              className="object-cover"
              priority // Load as a priority image for LCP
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateOfficeFintech;
