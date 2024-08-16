import React from 'react'
import LeftText from '../Component/LeftText'
import RightText from '../Component/RightText'
import Shandur from '../assets/images/Shandur.webp'
import PakistanIndependenceDay from '../assets/images/PakistanIndependenceDay.webp'
import eidfitar from "../assets/images/eid-fitar.webp"
import MiladENabi from "../assets/images/MiladENabi.webp"



 

const Festival = () => {
  return (
    <div className='bg-custom-dark text-custom-light py-10 max-md:py-5'>
        <h1 className='text-6xl max-md:mb-12 max-md:font-poppins-medium tracking-tighter opacity-85 text-center font-poppins-semibold'>Religious Festivals</h1>
       <div className='flex flex-col gap-24 max-md:gap-10'>
        <LeftText title={"Shandur Polo Festival"} para={"The Shandur Polo Festival, held in northern Pakistan, features a thrilling polo tournament at the highest polo ground. It celebrates traditional sports amidst stunning landscapes."} img={Shandur}/>
        <RightText title={"Independence Day"} para={"Independence Day, celebrated on August 14th, marks Pakistan's freedom from British rule. The day is observed with patriotic parades, ceremonies, and cultural events nationwide."} img={PakistanIndependenceDay} />
        <LeftText title={"Eid ul-Fitr"} para={"Eid ul-Fitr marks the end of Ramadan, celebrated with communal prayers, festive meals, and charitable giving. Families reunite, and the streets are adorned with lights."} img={eidfitar}  />
        <RightText title={"Eid Milad un-Nabi"} para={"Eid Milad un-Nabi honors the birth of Prophet Muhammad. It's celebrated with processions, religious recitations, and community gatherings, reflecting devotion and unity among Muslims."} img={MiladENabi} />
       </div>    
    </div>
  )
}

export default Festival