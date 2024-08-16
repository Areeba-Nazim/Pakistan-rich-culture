import React, { forwardRef, useRef, useState } from 'react';
import { gsap, Power1 } from 'gsap';
import TarbelaDAm from '../assets/images/Tarbela Dam.webp'
import worldcup from '../assets/images/worldcup.webp'
import nuclearstate from '../assets/images/nuclear state.webp'

const Achievement = forwardRef((props, ref) => {
  const divRefs = useRef([]);
  const imgRefs = useRef([]);
  const [rotate, setRotate] = useState(0);
  const [diffrotate, setDiffRotate] = useState(0);

  const AchieveData = [
    { img: worldcup, title: 'World Cup', year: '1992' },
    { img: nuclearstate, title: 'Nuclear State', year: '1998' },
    { img: TarbelaDAm, title: 'Largest dam', year: '1976 ' },
  ];

  const ImageAnim = (e, index) => {
    let diff = e.clientY - divRefs.current[index].getBoundingClientRect().top;
    setDiffRotate(e.clientX - rotate);
    setRotate(e.clientX);

    gsap.to(imgRefs.current[index], {
      opacity: 1,
      ease: Power1.easeOut,
      top: diff,
      left: e.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrotate * 0.5),
    });
  };

  const ImageLeave = (index) => {
    gsap.to(imgRefs.current[index], {
      opacity: 0,
      ease: Power1.easeOut,
      duration: 0.5,
    });
  };

  return (
    <div
      ref={ref}
      className="bg-custom-dark max-md:h-full pb-3 overflow-hidden  text-custom-light h-screen w-full max-md:px-5 px-9 rounded-t-2xl"
    >
      <h1 className="text-center max-md:text-5xl pt-12 text-6xl mb-16 font-poppins-semibold tracking-tighter opacity-85">
        Pakistan's Top Achievements
      </h1>
      {AchieveData.map((item, index) => (
        <div
          key={index}
          ref={(el) => (divRefs.current[index] = el)}
          onMouseMove={(e) => ImageAnim(e, index)}
          onMouseLeave={() => ImageLeave(index)}
          className={`flex relative border-t-[1px] ${
            index === 2 ? 'border-y-[1px]' : 'border-t-[1px] '
          } border-[#ecf39e8a]  items-center  justify-between z-[99]  py-8 max-md:py-4`}
        >
          <img
            ref={(el) => (imgRefs.current[index] = el)}
            className="absolute w-72 h-52 object-cover max-md:w-64 opacity-0 -translate-x-1/2 -translate-y-1/2 top-2 z-[9999] "
            src={item.img}
            alt={item.title}
          />
          <h1 className="text-7xl uppercase font-poppins-semibold max-md:text-6xl max-md:tracking-tighter">
            {item.title}
          </h1>
          <p className="text-md font-poppins-regular">{item.year}</p>
        </div>
      ))}
    </div>
  );
});

export default Achievement;
