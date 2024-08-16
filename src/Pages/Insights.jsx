import React from 'react'
import LeftText from '../Component/LeftText'
import RightText from '../Component/RightText'
import K2 from '../assets/images/K2.webp'
import Gawadar from '../assets/images/Gwadar.webp'
import Shandur from '../assets/images/Shandur.webp'
import Edhi from '../assets/images/Edhi.webp'


const Insights = () => {
  return (
    <div className='bg-custom-dark text-custom-light py-10 max-md:py-5'>
        <h1 className='text-5xl max-md:mb-12 max-md:font-poppins-medium text-center tracking-tighter opacity-85 font-poppins-semibold'>Fascinating Insights</h1>
       <div className='flex flex-col gap-24 max-md:gap-10'>
        <LeftText title={"K2 Mountain"} para={"Pakistan is home to the second highest mountain , third highest Tirich Mir and the three highest mountain ranges in the world (Hindukush, Karakoram and Himalayas"} img={K2}/>
        <RightText title={"Gawadar"} para={"Gwadar is a port city on the southwestern coast of the Pakistani province of Balochistan. The city is located on the shores of the Arabian Sea, opposite Oman and has a population of over 90,000, according to the 2017 census. "} img={Gawadar} />
        <LeftText title={"Shandur"} para={"Shandur Pass connects Chitral and Ghizer, Balatistan, and is home to the world's highest Polo ground at 3,700 meters (12,000ft). This polo ground was established by a Balti prince for traditional polo games which have been held annually since 1936"} img={Shandur}  />
        <RightText title={"Ambulance Service"} para={"Pakistan’s Edhi Foundation proudly runs the world’s largest volunteer ambulance service."} img={Edhi} />
       </div>    
    </div>
  )
}

export default Insights