import React from "react";

const LeftText = ({ title, para, img }) => {
  return (
    <div className=" mt-16 pl-16 max-md:px-7 w-full max-md:mt-1">
      <div className="flex justify-between items-center max-md:flex-col max-md:gap-3">
        <div className="w-[50%] max-md:w-full">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-poppins-medium tracking-tighter max-md:text-5xl ">
              {title}
            </h1>
            <p className="w-[80%] font-poppins-light tracking-wide max-md:text-sm max-md:w-full ">
              {para}
            </p>
          </div>
        </div>
        <div className="w-[50%] max-md:w-full h-full  flex justify-start overflow-hidden">
          <img
            className="w-[80%] h-full object-cover rounded-xl max-md:w-full "
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LeftText;
