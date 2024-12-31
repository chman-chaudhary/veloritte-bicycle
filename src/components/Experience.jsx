import { useEffect, useState } from "react";

const Experience = ({ images, image, setImage }) => {
  const [index, setIndex] = useState(0);
  const [cycleIndex, setCycleIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    setCycleIndex(0);

    const intervalId = setInterval(
      () => setCycleIndex((prev) => (prev + 1) % image.length),
      5000
    );

    return () => clearInterval(intervalId);
  }, [image]);

  useEffect(() => setIndex(cycleIndex), [cycleIndex]);

  return (
    <div
      className={
        "min-h-screen flex items-center justify-center bg-gradient-to-b " +
        (image[0] === "black_front.webp"
          ? "from-zinc-900 via-zinc-600 to-zinc-900"
          : image[0] === "white_front.webp"
          ? "from-[rgb(190,177,171)] via-white to-[rgb(228,223,222)]"
          : image[0] === "gray_front.webp"
          ? "from-[rgb(97,97,96)] via-[rgb(165,165,165)] to-[rgb(97,97,96)]"
          : "from-[rgb(190,177,171)] via-white to-[rgb(228,223,222)]")
      }
    >
      {/* Color Selector */}
      <div className="absolute z-10 right-56 bottom-20 flex items-center justify-center w-[25rem] h-[25rem] border-gray-500/40 border-r-2 rounded-full opacity-0 animate-rotate18">
        <div
          onClick={() => setImage(images.white)}
          className={
            "absolute top-8 right-10 w-10 h-10 bg-[rgb(221,217,205)] rounded-full " +
            (image[0] === "white_front.webp"
              ? "shadow-[0_0_0px_8px_rgba(255,255,255,0.5)]"
              : "shadow-[0_0_0px_8px_rgba(128,128,128,0.5)]")
          }
        ></div>
        <div
          onClick={() => setImage(images.black)}
          className={
            "absolute top-28 -right-2 w-10 h-10 bg-black rounded-full " +
            (image[0] === "black_front.webp"
              ? "shadow-[0_0_0px_8px_rgba(255,255,255,0.5)]"
              : "shadow-[0_0_0px_8px_rgba(0,0,0,0.5)]")
          }
        ></div>
        <div
          onClick={() => setImage(images.gray)}
          className={
            "absolute top-52 -right-5 w-10 h-10 bg-[rgb(97,97,96)] rounded-full " +
            (image[0] === "gray_front.webp"
              ? "shadow-[0_0_0px_8px_rgba(255,255,255,0.5)]"
              : "shadow-[0_0_0px_8px_rgba(97,97,96,0.5)]")
          }
        ></div>
        <div
          onClick={() => setImage(images.bw)}
          className={
            "absolute top-72 right-3 w-10 h-10 bg-[rgb(239,225,203)] rounded-full overflow-hidden flex justify-end items-center " +
            (image[0] === "bw_front.webp"
              ? "shadow-[0_0_0px_8px_rgba(255,255,255,0.5)]"
              : "shadow-[0_0_0px_8px_rgba(128,128,128,0.5)]")
          }
        >
          <div
            onClick={() => setImage(images.bw)}
            className="h-full w-1/2 bg-black"
          ></div>
        </div>
      </div>

      {/* Cycle Image */}
      <img className="h-[45rem]" src={image[index]} alt="cycle" />

      {/* Image selector */}
      <div className="absolute bottom-12 left-1/2 -translate-x-[50%] flex items-center gap-x-6 z-10">
        {[0, 1, 2].map((idx) => (
          <div
            onClick={() => setIndex(idx)}
            className={`h-1 w-24 rounded-full cursor-pointer bg-black overflow-hidden ${
              image[0] === "black_front.webp" || image[0] === "gray_front.webp"
                ? "bg-gray-700"
                : "bg-gray-400"
            }`}
          >
            <div
              className={`h-full w-full rounded-full ${
                cycleIndex !== idx
                  ? "animate-none"
                  : image[0] === "black_front.webp" ||
                    image[0] === "gray_front.webp"
                  ? "animate-timer bg-white"
                  : "animate-timer bg-black"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
