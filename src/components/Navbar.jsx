import React from "react";
import { FiArrowDownRight, FiSearch } from "react-icons/fi";
import { TbMenu } from "react-icons/tb";

const Navbar = ({ image }) => {
  return (
    <div
      className={
        "absolute top-0 left-0 w-full flex justify-between items-end py-2 px-5 text-xs font-medium font-redHat z-20 " +
        (image[0] === "black_front.webp"
          ? "text-white"
          : image[0] === "white_front.webp"
          ? "text-black"
          : image[0] === "gray_front.webp"
          ? "text-white"
          : "text-black")
      }
    >
      <div className="font-medium text-base">
        V&nbsp;E&nbsp;L&nbsp;O&nbsp;R&nbsp;E&nbsp;T&nbsp;T&nbsp;I
      </div>
      <div>HOME</div>
      <div>FEATURES</div>
      <div className="flex items-end gap-x-[2px]">
        PRODUCT
        <FiArrowDownRight className="size-4" />
      </div>
      <div>FAQ</div>
      <div className="flex items-end gap-x-2">
        <FiSearch className="size-4" />
        <TbMenu className="size-6 translate-y-1" />
      </div>
    </div>
  );
};

export default Navbar;
