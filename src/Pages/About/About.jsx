import React from "react";
import { FaTshirt, FaFeatherAlt, FaShippingFast } from "react-icons/fa";

function About() {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            About Our Fashion Store
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your style says who you are — and we help you express it. We bring
            you premium, trendy, and comfortable outfits that match your
            lifestyle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Quality */}
          <div className="bg-white shadow-md p-8 rounded-xl hover:shadow-xl transition">
            <FaTshirt className="text-4xl text-indigo-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              Every fabric is selected with care, stitched with precision, and
              designed to give you the best comfort with a perfect fit.
            </p>
          </div>

          {/* Design */}
          <div className="bg-white shadow-md p-8 rounded-xl hover:shadow-xl transition">
            <FaFeatherAlt className="text-4xl text-pink-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Trendy Designs</h3>
            <p className="text-gray-600">
              From daily casuals to classic outfits, we create styles that make
              you stand out — simple, elegant, and fashionable.
            </p>
          </div>

          {/* Shipping */}
          <div className="bg-white shadow-md p-8 rounded-xl hover:shadow-xl transition">
            <FaShippingFast className="text-4xl text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Shop your favorite outfits and get them delivered quickly, safely,
              and with trusted service — right to your doorstep.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg">
            We don’t just sell clothes — we bring comfort, confidence, and style
            to your everyday life.
            <br />
            <span className="font-semibold">Wear your story with us.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
