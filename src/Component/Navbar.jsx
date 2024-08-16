import { IoClose } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { gsap } from "gsap";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const itemRefs = useRef([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    animateMenu();
  };

  const animateMenu = () => {
    const tl = gsap.timeline();
    const menuItems = itemRefs.current;

    if (isOpen) {
      tl.to(menuItems, {
        y: "0",
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
      });
    } else {
      tl.to(menuItems, {
        y: "100%",
        opacity: 1,
        stagger: 0.2,
        duration: 0.5,
      });
    }
  };

  return (
    <nav className="pr-5 text-custom-light">
      <div className="z-[9999] menu-icon absolute" onClick={toggleMenu}>
        <h1 className="text-2xl">{isOpen ? <IoClose /> : <TbMenu />}</h1>
      </div>
      <div className={`z-[10] absolute menu-items right-9 max-md:right-5 flex flex-col max-md:flex-row gap-2 ${!isOpen && "hidden"  }`   } >
        
        <div
          className="menu-item  py-2 px-4 bg-custom-middle-green rounded-full font-poppins-regular  text-md"
          ref={(el) => (itemRefs.current[0] = el)}
        >
          <NavLink to={"/landmarks"} >Landmarks</NavLink>
        </div>
        <div
          className="menu-item py-2 px-7  bg-custom-middle-green rounded-full font-poppins-regular text-md"
          ref={(el) => (itemRefs.current[1] = el)}
        >
          <NavLink to={"/insights"} >Insights</NavLink>
        </div>
        <div
          className="menu-item py-2 px-7 bg-custom-middle-green rounded-full font-poppins-regular text-md"
          ref={(el) => (itemRefs.current[2] = el)}
        >
          <NavLink to={"/festivals"} >Festival</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
