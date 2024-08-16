import React from 'react'
import { motion } from 'framer-motion'
function Marquee() {
  return (
    <div data-scroll data-scroll-speed="-.01"   className='w-full py-5 text-custom-light bg-custom-middle-green rounded-tl-3xl rounded-tr-3xl overflow-hidden'>
        <div className='flex border-y-[1px] border-custom-light-green'>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity  ,ease: "linear", duration: 10}} className='text-[12vw] pr-9 max-md:text-6xl font-poppins-bold tracking-tighter leading-none uppercase whitespace-nowrap'>Pakistan Zindabad</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity  ,ease: "linear", duration: 10}} className='text-[12vw] max-md:text-6xl font-poppins-bold pr-9 tracking-tighter leading-none uppercase whitespace-nowrap'>Pakistan Zindabad</motion.h1>
        </div>
    </div>
  )
}

export default Marquee