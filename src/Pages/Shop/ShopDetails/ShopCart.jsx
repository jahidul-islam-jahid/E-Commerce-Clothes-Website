import React from "react";

function ShopCart() {
  return (
    <div className="container mx-auto py-10 md:py-20 px-4">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="w-full lg:flex-1">
          <img
            className="w-full rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-400 max-w-2xl mx-auto"
            src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/34_1.jpg"
            alt="Potato Chips"
          />
        </div>
        
        {/* Details Section */}
        <div className="w-full lg:flex-1 p-4 md:p-5">
          <p className="font-semibold text-gray-600">Eggs</p>
          <h2 className="text-2xl md:text-4xl font-bold py-1 text-gray-900">
            Potato Chips 52g, American Cream.
          </h2>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-15 font-semibold py-2">
            <span className="text-gray-600">Sole: N/A</span>
            <p className="text-gray-600">Total Rating : 992</p>
          </div>
          
          <div className="flex items-center gap-6 md:gap-10 py-2 font-semibold">
            <p className="text-xl md:text-2xl text-green-600">Price: $664</p>
            <p className="line-through text-lg md:text-xl text-gray-600">$2999</p>
          </div>
          
          <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">
            Crunchy chips and snacks with American cream & onion flavour. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          
          <div className="space-y-2 pt-3">
            <p>
              <strong>SKU :</strong> WH12
            </p>
            <p>
              <strong>Stock :</strong> <span className="text-green-600">In Stock</span>
            </p>
            <p>
              <strong>Closure :</strong> Hook & Loop
            </p>
          </div>
          
          {/* Size Options */}
          <div className="py-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="font-bold text-lg">Size :</p>
            <div className="flex gap-2 flex-wrap">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">
                299g
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">
                500g
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">
                1kg
              </button>
            </div>
          </div>
          
          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-2xl font-light hover:bg-gray-50 transition-colors">
                -
              </button>
              <span className="w-12 text-center text-lg font-semibold">1</span>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-2xl font-light hover:bg-gray-50 transition-colors">
                +
              </button>
            </div>
            <div className="w-full sm:w-auto">
              <button className="w-full bg-[#516EBF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCart;