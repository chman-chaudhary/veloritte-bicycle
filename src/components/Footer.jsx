import React from "react";

const Footer = ({ image }) => {
  return (
    <div
      className={
        "absolute bottom-0 w-full flex justify-between items-end " +
        (image[0] === "black_front.webp"
          ? "text-white"
          : image[0] === "white_front.webp"
          ? "text-black"
          : image[0] === "gray_front.webp"
          ? "text-white"
          : "text-black")
      }
    >
      <div className="text-xs space-y-2 pb-5 pl-5 font-redHat">
        <span>Introducing</span>
        <br />
        <h2 className="text-6xl font-medium">Electric&nbsp;&nbsp;Ace</h2>
        <p className="w-80">
          The Ace Two is the latest revolution in electric commuting with a high
          frame. It combines a clean design, cutting-edge technology, and
          efficient safety features. Rider height: between 173 and 200cm.
        </p>
      </div>
      <span
        className={
          "font-redHat py-8 px-20 text-center rounded-tl-3xl " +
          (image[0] === "black_front.webp"
            ? "text-black bg-white"
            : image[0] === "white_front.webp"
            ? "text-white bg-black"
            : image[0] === "gray_front.webp"
            ? "text-black bg-white"
            : "text-white bg-black")
        }
      >
        B&nbsp;&nbsp;&nbsp;U&nbsp;&nbsp;&nbsp;Y
      </span>
    </div>
  );
};

export default Footer;
