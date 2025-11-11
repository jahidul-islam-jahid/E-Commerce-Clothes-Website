import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

function TopHeader() {
  return (
    <div className="py-2 bg-[#F8F8FB] text-sm">
      <div className=" container mx-auto flex items-center justify-between ">
        <div className="flex  gap-4">
          <span className="flex items-center gap-1">
            <FiPhoneCall />
            <p>+880 1690-030190</p>
          </span>
          <span className="flex items-center gap-1">
            <FaWhatsapp />
            <p>+880 1872-442582</p>
          </span>
        </div>
        <div>
          <p>World's Fastest Online Shopping Destination</p>
        </div>
        <div className="flex  gap-4">
          <p>Help?</p>
          <p>Trac Order?</p>
          <p>English</p>
          <p>Contact Us</p>
          <select className="border rounded-sm px-2 border-gray-400">
            <option>Bangla</option>
            <option>English</option>
            <option>Arabic</option>
            <option>Hindi</option>
            <option>USA</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
