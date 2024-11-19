"use client";
import React from "react";
import Image from "next/image"; // Import the Image component
import "./BusinessOwner.css";

const BusinessOwner = () => {
  return (
    <div className="business-owner-container bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 mb-6 tracking-wide">
            Finman: Your Business Ally in Bangladesh
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Comprehensive solutions for tax returns, trade licenses, and
            business registration to make your entrepreneurial journey smooth.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Image Section */}
          <div className="relative flex-shrink-0 w-full lg:w-1/2">
            <Image
              src="/oo.jpg" // Path to the image
              alt="Business Solutions"
              width={600} // Specify the width
              height={400} // Specify the height
              className="rounded-lg shadow-lg w-full"
              priority // Load this image first for better performance
            />
          </div>

          {/* Right Side - Paragraph Section */}
          <div className="lg:max-w-xl text-gray-800">
            <p className="text-lg leading-relaxed">
              Starting and running a business in Bangladesh involves navigating
              complex regulations and procedures. At Finman, we take the
              headache out of this process, offering end-to-end support for
              entrepreneurs. From filing yearly tax returns and addressing tax
              issues to acquiring trade licenses and registering your business,
              we ensure everything is done seamlessly. Our expert advisors are
              dedicated to helping you focus on growing your business while we
              handle the paperwork and compliance. Trust Finman to make your
              entrepreneurial dreams a reality.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-6">
            Your Success Is Our Priority
          </h2>
          <p className="text-gray-600 text-lg">
            Let Finman handle the challenges so you can focus on building your
            legacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessOwner;
