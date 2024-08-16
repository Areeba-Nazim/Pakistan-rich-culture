import React from "react";
import BadshahiMasjid from "../assets/images/Badshahi-masjid-2.webp";

const RightText = ({ title, para, img }) => {
  return (
    <div className=" mt-12 pl-16 w-full max-md:px-7 max-md:mt-1">
      <div className="flex justify-between items-center max-md:gap-3 max-md:flex-col-reverse ">
        <div className="w-[50%] max-md:w-full flex justify-start overflow-hidden  ">
          <img
            className="w-[80%] h-full object-cover rounded-xl  max-md:w-full "
            src={img}
            alt=""
          />
        </div>
        <div className="w-[50%] max-md:w-full ">
        <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-poppins-medium tracking-tighter max-md:text-5xl">
              {title}
            </h1>
            <p className="w-[80%] font-poppins-light max-md:text-sm tracking-wide max-md:w-full ">
             {para}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightText;
