import React from "react";

function ContactSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Customer service should not be a department. It should be the entire
            company.
          </p>
        </div>

        <div className=" gap-12">
          {/* Left Side - Contact Information */}
          <div className="grid grid-cols-3 gap-5 my-8">
            {/* Phone Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200  text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 flex flex-col text-center items-center justify-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 ">📞</span>
                </div>
                Contact With Phone
              </h3>
              <div className="space-y-0.5 flex flex-col items-center">
                <p className="text-gray-700 flex items-center gap-2">
                  Phone: 01690030190
                </p>
                <p className="text-gray-700 flex items-center gap-2">
                  Phone: 01690030190
                </p>
              </div>
            </div>

            {/* Email Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200  text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 flex flex-col text-center items-center justify-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 ">✉️</span>
                </div>
                Contact With Email
              </h3>
              <div className="space-y-0.5 flex flex-col items-center">
                <p className="text-gray-700 flex items-center gap-2">
                  Email: j.i.jaihd90@gmail.com
                </p>
                <p className="text-gray-700 flex items-center gap-2">
                  Email: jahidulislam30190@gmail.com
                </p>
              </div>
            </div>

            {/* Address Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200  text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 flex flex-col text-center items-center justify-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 ">📍</span>
                </div>
                Addresse
              </h3>
              <div className="space-y-0.5 flex flex-col items-center">
                <p className="text-gray-700 flex items-center gap-2">
                  Ruami Mello Moraes Filho, 987 - Salvador - MA, 40352, Brazil.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Locations & Form */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Send us a Message
              </h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#516EBF] focus:border-[#516EBF] transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Your Phone..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#516EBF] focus:border-[#516EBF] transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Your message..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#516EBF] focus:border-[#516EBF] transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#516EBF] text-white py-3 rounded-xl font-semibold hover:bg-[#516EBF] transition-colors shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
