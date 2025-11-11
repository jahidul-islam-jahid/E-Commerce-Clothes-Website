import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between container mx-auto items-center py-6">
        <div>
          <img className="w-44" src="./image/logo-2.png" alt="" />
        </div>
        <div className="border border-[#516EBF] rounded-md flex items-center px-4 py-3 w-full max-w-3xl">
          <div className="flex items-center gap-1 text-gray-700 font-semibold">
            <select className=" rounded-sm px-2 border-[#516EBF]">
              <option>All Categories</option>
              <option>Cloths</option>
              <option>Watches</option>
              <option>Dresses</option>
              <option>Cosmatice</option>
            </select>
          </div>

          <div className="h-6 w-px bg-gray-300 mx-4"></div>

          <input
            type="text"
            placeholder="Search for items..."
            className="flex-1 outline-none"
          />

          <IoIosSearch className="text-gray-500 text-xl" />
        </div>

        <div className="flex gap-5">
          <span className="flex items-center gap-2">
            <FaRegHeart className="text-2xl" />
            <p>Wishlist</p>
          </span>
          <span className="flex items-center gap-2">
            <FaRegUser className="text-2xl" />
            <p>Account</p>
          </span>
          <span className="flex items-center gap-2">
            <MdOutlineShoppingCart className="text-2xl" />
            <p>Cart</p>
          </span>
        </div>
      </div>
      {/* navbar */}
      <div className=" border-t-2 border-b-2 py-2 border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 bg-[#516EBF] px-4 p-2 font-semibold rounded-md">
            <span className="flex items-center gap-1 text-white ">
              <BiCategoryAlt className="font-bold text-xl" />
              <p>Browse</p>
            </span>
            <select className=" rounded-sm px-2 border-gray-400 text-white ">
              <option>All Categories</option>
              <option>Drink</option>
              <option>Food</option>
              <option>Bevarage</option>
              <option>Cold Drinks</option>
            </select>
          </div>
          <div className="flex gap-8 text-md font-semibold">
            <NavLink className={({ isActive }) => (isActive ? `activeColor` : ``)} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? `activeColor` : ``)} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => (isActive ? `activeColor` : ``)} to="/product">Product</NavLink>
            <NavLink className={({ isActive }) => (isActive ? `activeColor` : ``)} to="/blog">Blog</NavLink>
            <NavLink className={({ isActive }) => (isActive ? `activeColor` : ``)} to="/shop">Shop</NavLink>
            <NavLink className={({ isActive }) => (isActive ? `activeColor` : ``)} to="/contact">Contact</NavLink>
          </div>
          <div>
            <button className="flex items-center gap-1 text-white rounded-md font-semibold bg-[#516EBF] px-4 py-2">
              {" "}
              <MdOutlineShoppingCart />
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
