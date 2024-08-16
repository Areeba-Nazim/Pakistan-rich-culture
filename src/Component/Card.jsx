import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({id, img, title, link}) => {
  return (
    <div key={id} className='w-[18vw] h-[23vw]  max-xl:w-64 max-xl:h-72 relative inline-block rounded-xl overflow-hidden'>
        <img className='w-full opacity-65  h-full object-cover ' src={img} alt="" />
          <div className='absolute bottom-2 left-3'>
            
            <h1 className='text-3xl tracking-tight font-poppins-semibold max-xl:leading-[8vw] leading-[2vw]'>{title}</h1>
            <button className='py-2 px-4 border border-custom-light rounded-full mt-3 font-poppins-regular  text-md'><NavLink to={link}>Deep Dive</NavLink></button>
          </div>
    </div>
  )
}

export default Card