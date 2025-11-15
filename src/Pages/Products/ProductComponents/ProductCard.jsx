import React from "react";
import { useCart } from "../../../Context/CartProvider";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { setCartProducts, cartProducts } = useCart();
  const navigate = useNavigate();


  return (
    <div className="max-w-sm bg-white rounded-2xl h-auto shadow-lg p-4 md:p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100 flex flex-col">
      {/* Product Image Container - Fixed height with proper fitting */}
      <div className="relative mb-4 flex-shrink-0">
        <div className="w-full h-40 md:h-48 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
          <img
            className="w-full h-full object-contain p-2"
            src={product.image}
            alt={product.name}
          />
        </div>
        {/* Discount Badge */}
        <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
          {product.discount}% OFF
        </div>
        {/* Stock Status */}
        <div
          className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${
            product.stock > 10
              ? "bg-green-100 text-green-800"
              : "bg-orange-100 text-orange-800"
          }`}
        >
          {product.stock}
        </div>
      </div>

      {/* Product Info - Flex grow to take remaining space */}
      <div className="flex flex-col flex-grow space-y-3">
        {/* Category */}
        <div className="flex justify-between items-start">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {product.categoryName}
          </span>
        </div>

        {/* Product Name */}
        <h2 className="font-bold text-base md:text-lg text-gray-900 line-clamp-2 leading-tight">
          {product.name}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed flex-grow">
          {product.description}
        </p>

        {/* Price Section */}
        <div className="flex items-center gap-2 pt-2 flex-wrap">
          <span className="text-lg md:text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          <span className="text-sm line-through text-gray-400">
            ${product.mrp}
          </span>
          <span className="text-xs font-semibold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
            Save ${(product.mrp - product.price).toFixed(2)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 md:gap-3 pt-4">
          <button
            onClick={() => setCartProducts([product, ...cartProducts])}
            className="cursor-pointer flex-1 bg-gradient-to-r from-[#516EBF] to-[#516EBF] text-white px-3 md:px-4 py-2 md:py-3 rounded-xl hover:from-[#516EBF] hover:to-[#516EBF] transition-all duration-200 font-semibold shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
          >
            <svg
              className="w-3 h-3 md:w-4 md:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add to Cart
          </button>

          <button
            onClick={()=>navigate(`/shop/${product.id}`)}
            className="cursor-pointer px-3 md:px-4 py-2 md:py-3 border border-gray-300 text-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium flex items-center justify-center"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;