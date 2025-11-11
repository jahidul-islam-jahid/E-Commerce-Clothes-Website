import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutgoingMail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";

function Footer() {
  return (
    <div className="border-t-2 border-gray-200">
      <div className="container mx-auto flex justify-between py-20 ">
        <div className="">
          <img className="w-36 pb-2" src="./image/logo-2.png" alt="" />
          <p className="py-8">
            Grabit is the biggest market of grocery <br /> products. Get your
            daily needs from <br /> our store.
          </p>
          <span className="flex gap-3">
            <img className="h-12 rounded-lg" src="./image/android.png" alt="" />
            <img className="h-12 rounded-lg" src="./image/apple.png" alt="" />
          </span>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold  pb-1 border-b-2 border-[#e2e2e2]">
            Category
          </h2>
          <ul className="py-4 space-y-2 scale-100 font-semibold ">
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Clothes</a>
            </li>
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Jewellery</a>
            </li>
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Jacket's</a>
            </li>
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Watch</a>
            </li>
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Perfume</a>
            </li>
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Shoes</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold  pb-1 border-b-2 border-[#e2e2e2]">
            Company
          </h2>
          <ul className="py-4 space-y-2 scale-100 font-semibold ">
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">About Us</a>
            </li>
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Delivery</a>
            </li>
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Legal Notice</a>
            </li>
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Terms & Conditions</a>
            </li>
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Secure Payment</a>
            </li>
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold  pb-1 border-b-2 border-[#e2e2e2]">
            Account
          </h2>
          <ul className="py-4 space-y-2 scale-100 font-semibold ">
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Sign In</a>
            </li>
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">View Cart</a>
            </li>
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Return Policy</a>
            </li>
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Become a Vendor</a>
            </li>
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Affiliate Program</a>
            </li>
            <li className="hover:text-[#516ebf] hover:font-bold duration-400">
              <a href="">Payments</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold  pb-1 border-b-2 w-[120px] border-[#e2e2e2]">
            Contact
          </h2>
          <div className="py-4 space-y-4 scale-100 font-semibold ">
            <span className="flex items-center gap-1">
              <IoLocationOutline className="text-2xl " />
              <p className="text-sm">
                2548 Broaddus Maple Court, <br /> Madisonville KY 4783, USA.
              </p>
            </span>
            <span className="flex items-center gap-1">
              <SiWhatsapp className="text-xl " />
              <p className="text-sm"> +880 1690-030190</p>
            </span>
            <span className="flex items-center gap-1">
              <MdOutgoingMail className="text-xl " />
              <p className="text-sm">jahidulislam30190@gmail.com</p>
            </span>
            <span className="flex gap-5 text-xl py-4">
              <FaSquareFacebook className="text-2xl hover:text-[#516ebf] duration-300 cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-[#516ebf] duration-300 cursor-pointer" />
              <FaInstagramSquare className="text-2xl hover:text-[#516ebf] duration-300 cursor-pointer" />
              <FaLinkedin className="text-2xl hover:text-[#516ebf] duration-300 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#4B5966] py-3">
        <div className="container mx-auto justify-center flex">
          <p className="text-white">Copyright © Grabit all rights reserved. Powered by <a href="https://www.facebook.com/j.i.jahid900" className="font-bold" target="blank">J.I.Jahid</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
