import React, { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import TopFlag from "../assets/images/TopFlag.webp";
import SliderPage from "./SliderPage";
import Marquee from "../Component/Marquee";
import Navbar from "../Component/Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion'
import Achievement from "./Achievement";
import LocomotiveScroll from 'locomotive-scroll';
import Special from "./Special";
import Footer from "../Component/Footer";

const Home = () => {


  const DivWrapper = useRef(null)
  const SliderRef = useRef(null);
  const AchieveRef = useRef(null)

  
  const locomotiveScroll = new LocomotiveScroll(
    {
      el: DivWrapper.current,
      smooth: true
    }
  );

  function scrollTo(target, options) {
      locomotiveScroll.scrollTo(target.current, options);
  }
   

  return (
    <div ref={DivWrapper} className="bg-custom-dark">
      <div data-scroll data-scroll-speed="-.9" className=" w-full h-screen bg-custom-dark flex items-center justify-center text-custom-light overflow-hidden">
        <div className="w-[95%] h-[95%] p-2">
          <div className="h-[45%]  max-sm:h-[30%] max-md:h-[40%] bg-url overflow-hidden bg-white rounded-2xl">
            <img
              className="h-full w-screen object-cover opacity-[.8] "
              src={TopFlag}
            />
          </div>
          <div className="flex  justify-between text-sm items-center px-2 font-poppins-regular">
            <h1 className="max-md:hidden">Unity - Faith - Discipline</h1>
            <h1>The Land of Love</h1>
            <Navbar />
          </div>
          <div className="flex mt-12 max-md:flex-col ">
            <div className="w-[50%] max-md:w-full">
              <h1 className="bg-custom-light-green max-md:text-sm max-md:mb-1 text-custom-dark font-poppins-regular  w-fit px-4 p-1 rounded-full ">
                Legacy Lives, Pride Thrives
              </h1>
              <h1 className="text-6xl max-lg:text-7xl max-sm:text-5xl max-2xl:text-8xl leading-[5vw] font-poppins-semibold tracking-tighter ">
                Pakistan's Rich Legacy
              </h1>
            </div>
            <div className="w-[50%] max-md:w-full flex flex-col justify-end gap-5 max-md:mt-2">
              <p className="w-[80%] max-md:w-full max-md:text-sm max-md:laeding-none font-poppins-light ">
                Pakistan's rich culture is a vibrant tapestry of traditions,
                art, music, and cuisine. From the historical Mughal architecture
                to the colorful festivals, it reflects a deep heritage that
                celebrates diversity and unity.
              </p>
              <div className="flex items-center gap-3 ">
               
                <div onClick={() => scrollTo(SliderRef, { duration: 2, immediate: false, lock: false })} className="py-2 px-6   flex items-center gap-2 rounded-full mt-3 border border-custom-light ">
                <button className="max-md:text-sm text-xl font-poppins-regular">Heritage</button>
                <h1 className="text-xl"><GoArrowUpRight/></h1>
                </div>
                <div onClick={() => scrollTo(AchieveRef, { duration: 2, immediate: false, lock: false })} className="py-2 px-6   flex items-center gap-2 rounded-full mt-3  border border-custom-light ">
                <button className="max-md:text-sm text-xl font-poppins-regular">Achievement</button>
                <h1 className="text-xl"><GoArrowUpRight/></h1>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 right-9 flex items-center gap-3">
            <h1 className=" text-sm  font-poppins-light">Scroll down</h1>
            <motion.span 
            initial={{y:"0"}}
            animate={{y:"50%"}}
            transition={{ease: "linear", duration: ".5", repeat: Infinity}}
            className="text-custom-light text-xl">
              <IoIosArrowDown />
            </motion.span>
          </div>
        </div>
      </div>
      <Marquee/>
      < SliderPage ref={SliderRef} />
      <Achievement ref={AchieveRef} />
      <Special/>
      <Footer/>
    </div>
  );
};

export default Home;
