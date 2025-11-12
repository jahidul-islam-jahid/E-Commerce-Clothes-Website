import React, { useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FaRegHeart, FaRegUser, FaChevronDown } from "react-icons/fa";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../../../Context/CartProvider";
import { Link, NavLink } from "react-router";

function Navbar() {
  const { cartProducts } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const cartItemsCount = cartProducts.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const Categories = [
    { name: "All Categories", sub: [] },
    { name: "Electronics", sub: ["Phones", "Laptops", "Tablets"] },
    { name: "Fashion", sub: ["Clothing", "Shoes", "Accessories"] },
    { name: "Home & Garden", sub: ["Furniture", "Decor", "Kitchen"] },
    { name: "Sports", sub: ["Fitness", "Outdoor", "Equipment"] },
  ];

  return (
    <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main Navbar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="">
              <img className="w-44" src="./image/logo-2.png" alt="" />
            </div>
          </Link>
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 hover:bg-gray-100 transition-all duration-200 border border-transparent hover:border-gray-200">
                <IoIosSearch className="text-gray-400 text-xl mr-3" />
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="ml-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <IoIosClose className="text-xl" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <NavLink
              to="/Wishlist"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-red-600 bg-red-50"
                    : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                }`
              }
            >
              <FaRegHeart className="text-xl" />
              <span className="hidden lg:block font-medium">Wishlist</span>
            </NavLink>

            {/* Cart */}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-lg transition-all duration-200 relative ${
                  isActive
                    ? "text-[#516EBF] bg-blue-50"
                    : "text-gray-600 hover:text-blue-50 hover:bg-[#516EBF]"
                }`
              }
            >
              <MdOutlineShoppingCart className="text-xl" />
              <span className="hidden lg:block font-medium">Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartItemsCount > 99 ? "99+" : cartItemsCount}
                </span>
              )}
            </NavLink>

            {/* User Account */}
            <NavLink
              to="/account"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-[#516EBF] bg-green-50"
                    : "text-gray-600 hover:text-[#516EBF] hover:bg-green-50"
                }`
              }
            >
              <FaRegUser className="text-xl" />
              <span className="hidden lg:block font-medium">Account</span>
            </NavLink>

            {/* Shop Now Button - Mobile */}
            <button className="lg:hidden flex items-center gap-1 text-white rounded-lg font-semibold bg-[#516EBF] px-3 py-2 hover:bg-[#516EBF] transition-all duration-200 shadow-md hover:shadow-lg">
              <MdOutlineShoppingCart />
              <span className="text-sm">Shop</span>
            </button>
          </div>
        </div>

        {/* Secondary Navigation - Desktop */}
        <div className="hidden lg:flex items-center justify-center gap-8 py-3 border-t border-gray-100">
          {["Home",  "Product","About", "Blog", "Shop", "Contact"].map(
            (item, index) => (
              <NavLink
                key={index}
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className={({ isActive }) =>
                  `font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#516EBF] border-b-2 border-[#516EBF]"
                      : "text-gray-600 hover:text-[#516EBF]"
                  }`
                }
              >
                {item}
              </NavLink>
            )
          )}
        </div>

        {/* Mobile Search Overlay */}
        {isSearchOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50 p-4">
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <IoIosClose className="text-2xl" />
              </button>
              <div className="flex-1">
                <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
                  <IoIosSearch className="text-gray-400 text-xl mr-3" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 bg-transparent outline-none text-gray-700"
                    autoFocus
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
