'use client';

import React from 'react';
import Navbar from '../Components/Navbar';
import Image from 'next/image'; // Importing Next.js Image component
import './anni.css';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4 lg:px-8 pt-20 md:pt-24">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mt-10 lg:mt-16">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:max-w-lg">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-snug tracking-wide">
            Discover Financial Freedom with{' '}
            <span className="text-yellow-500">FinmanBD</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4 leading-relaxed">
            Let us simplify your finances with expert advice, innovative
            solutions, and trusted support tailored to your needs.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:mt-0 lg:ml-10 flex-shrink-0">
          <Image
            src="/aa.jpg"
            alt="Finance Hero"
            width={600}
            height={400}
            className="rounded-lg shadow-xl w-full max-w-md lg:max-w-lg object-cover"
          />
        </div>
      </div>

      {/* Quote Section */}
      <div className="mt-16 w-full max-w-4xl text-center">
        <blockquote className="text-2xl md:text-3xl font-semibold text-gray-700 italic">
          &quot;Financial success is not just a goal; it’s a journey. Let Finman be
          your trusted companion along the way.&quot;
        </blockquote>
        <p className="text-gray-500 text-lg mt-4">- The Finman Team</p>
      </div>

      {/* Testimonial Section */}
      <div className="mt-16 w-full max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Testimonial 1 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <p className="text-gray-600 italic">
              &quot;Finman transformed the way I manage my finances. Their expertise
              is unparalleled!&quot;
            </p>
            <p className="text-gray-800 font-bold mt-4">- Sarah J.</p>
          </div>
          {/* Testimonial 2 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <p className="text-gray-600 italic">
              &quot;Thanks to Finman, I’ve achieved financial clarity and can focus
              on growing my business.&quot;
            </p>
            <p className="text-gray-800 font-bold mt-4">- David R.</p>
          </div>
          {/* Testimonial 3 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <p className="text-gray-600 italic">
              &quot;Professional, reliable, and always supportive. Highly recommend
              Finman!&quot;
            </p>
            <p className="text-gray-800 font-bold mt-4">- Emily T.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-20 w-full bg-gray-900 text-white py-8 text-center rounded-lg">
        <p className="text-lg">
          Ready to take control of your finances?{' '}
          <span className="text-yellow-500">Contact us today!</span>
        </p>
      </div>
    </div>
  );
};

export default Page;
