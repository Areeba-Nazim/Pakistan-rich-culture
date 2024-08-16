import React, { forwardRef , useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap , Power1 } from 'gsap';
import { useGSAP } from "@gsap/react";
import Card from "../Component/Card";
import PakMonument from "../assets/images/pak-monument.webp";
import eidfitar from "../assets/images/eid-fitar.webp"
import K2 from '../assets/images/K2.webp'
import Painting from '../assets/images/Painting.webp'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SliderPage =  forwardRef((props, ref) => {

  const horizontalScrollRef = useRef(null);

    useGSAP(() => {
      const element = horizontalScrollRef.current;
  
      gsap.fromTo(
        element,
        { x: "0" },
        {
          x: "-35%", 
          duration: 3,
          ease: Power1.easeIn,
          scrollTrigger: {
            trigger: element,
            start: "middle 30%", 
            end: "bottom bottom", 
            scrub: 0.5
          },
        }
      );
    }, []);
  

  const cardData = [
    { img: PakMonument, title: "Famous Landmarks", link: "/landmarks" },
    {
      img: Painting ,
      title: "Traditional Arts",
      link: "/traditional-art",
    },
    {
      img: eidfitar,
      title: "Religious Festivals",
      link: "/festivals",
    },
    {
      img: K2 ,
      title: "Fascinating Insight",
      link: "/insights",
    },
  ];

   
  return (
    <div data-scroll  data-scroll-speed="-.03" ref={ref}  className=" bg-custom-dark h-screen max-md:h-full w-full rounded-t-2xl flex -translate-x-[38%] overflow-hidden items-center max-md:items-start max-md:py-8 text-custom-light px-7 max-md:px-3  ">     
      <div ref={horizontalScrollRef}  className="flex items-center gap-24 max-md:hidden ">
        <div className="flex flex-col gap-3 w-[30%] flex-shrink-0 ">
          <div >
            <p className=" text-sm font-poppins-regular ">
              a rich historical legacy
            </p>
            <h1 className="text-7xl font-poppins-semibold tracking-tight leading-none">
              Discover  Heritage
            </h1>
          </div>
          <p className="  font-poppins-regular tracking-tight">
            Pakistan's heritage blends ancient civilizations and diverse cultures, creating a rich historical legacy.
          </p>
          <div className=" flex items-center gap-2">
            <div className="p-4 border border-custom-light rounded-full"><FaArrowRightLong/></div>
            <div className="text-lg px-4 py-1 rounded-full border  border-custom-light">
              Click to see more
            </div>
          </div>
        </div>
        <div className="flex gap-20 max-md:flex-col">
          {cardData.map((item, index) => (
            <Card
              id={index}
              img={item.img}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <div  className="py-3 px-1 md:hidden">
        <div className=" flex items-start flex-col  gap-2">
          <div >
            <p className="font-poppins-light ">
              a rich historical legacy
            </p>
            <h1 className="text-5xl font-poppins-semibold">
              Discover  Heritage
            </h1>
          </div>
          <p className="font-poppins-light ">
            Pakistan's heritage blends ancient civilizations and diverse cultures, creating a rich historical legacy.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <div className="border border-custom-light rounded-full p-1  text-custom-light text-lg"><FaArrowRightLong/></div>
            <div className="border border-custom-light rounded-full py-1 px-3">
              Click to see more
              
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-5 mt-5">
          {cardData.map((item, index) => (
            <Card
              id={index}
              img={item.img}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <div />
    </div>
  );
});

export default SliderPage;
