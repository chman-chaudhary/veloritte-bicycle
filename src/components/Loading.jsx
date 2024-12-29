import React from "react";

const Loading = () => {
  return (
    <>
      <div class="h-screen w-full font-redHat font-semibold flex justify-center items-center">
        <span class="text-3xl font-bold text-black">
          V&nbsp;&nbsp;E&nbsp;&nbsp;L&nbsp;&nbsp;O&nbsp;&nbsp;R&nbsp;&nbsp;E&nbsp;&nbsp;T&nbsp;&nbsp;T
        </span>
      </div>
      <div className="absolute top-0 h-screen w-full flex justify-center items-center">
        <div className="w-[17.3rem] h-6 overflow-hidden">
          <div className="w-full h-full bg-black animate-loading"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
