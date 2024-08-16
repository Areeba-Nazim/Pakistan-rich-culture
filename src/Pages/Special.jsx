import React, { useRef } from "react";
import ArshadNadeem from "../assets/images/Arshad-Nadeem.webp";
import { gsap, Power1 } from 'gsap';


const Special = () => {
    const CursorRef = useRef(null)


  const CursorEnter = () => {
    gsap.to(CursorRef.current, {
      opacity: 1,
      scale: 1,
      ease: Power1
    });
  } 
 
  const CursorAnim = (e) => {
    gsap.to(CursorRef.current, {
      opacity: 1,
      scale: 1,
      ease: Power1,
      y: e.clientY,
      x: e.clientX ,
    });
  };

  const cursorLeave = () => {
    gsap.to(CursorRef.current, {
      opacity: 0,
      ease: Power1,
      duration: 0.5,
    });
    
  }




  return (
    <div className="bg-custom-middle-green py-12 max-md:rounded-t-2xl text-custom-light flex items-center justify-center   w-full  max-md:h-full rounded-t-[52px]">
      <div className="  h-full flex justify-center items-center flex-col gap-5 max-md:w-[90%]  w-[70%]">
        <h1 className="max-md:text-4xl text-center text-5xl tracking-tight font-poppins-semibold ">
          What makes Pakistan's 77th Independence Day special?
        </h1>
        <div
        onMouseEnter={(e)=> CursorEnter(e)}
        onMouseMove={(e) => CursorAnim(e)}
        onMouseLeave={() => cursorLeave()}
        className="h-[70%] rounded-2xl overflow-hidden relative"
        >
      <div
        ref={CursorRef}
        className="h-24 w-24 flex left-0 top-0 items-center justify-center absolute   text-xl bg-custom-dark leading-none text-center opacity-0 scale-0 z-[999] rounded-full shadow-xl "
      >
        Arshad Nadeem
      </div>
      <img
        className="h-full w-full object-cover z-0"
        src={ArshadNadeem}
        alt=""
      />
    </div>
        <p className="text-md font-poppins-light tracking-wide">
          In the Olympic Games Paris 2024, in the men's javelin throw final,
          Pakistan's Arshad Nadeem set a new Olympic record with a throw of
          92.97m, dominating the competition to clinch gold — his first Olympic
          medal. This victory represents Pakistan's inaugural Olympic gold medal
          in athletics.
        </p>
      </div>
      
    </div>
  );
};

export default Special;

// in the Olympic Games Paris 2024 men’s javelin throw final as Pakistan’s Arshad Nadeem set a new Olympic record throw of 92.97m, dominating the field to earn gold - his first Olympic medal. This win marks Pakistan’s first Olympic gold medal in athletics."What makes Pakistan's 77th Independence Day particularly special?"92.97m
