import React from 'react'
import LeftText from '../Component/LeftText'
import RightText from '../Component/RightText'
import BadshahiMasjid from "../assets/images/Badshahi-masjid-2.webp";
import FaisalMosque from "../assets/images/Faisal-Mosque.webp";
import NoorMahal from "../assets/images/Noor-Mahal.webp";
import PakMonument from "../assets/images/pak-monument.webp";


const Landmarks = () => {

  return (
    <div className='bg-custom-dark text-custom-light py-10 max-md:py-5 '>
        <h1 className='max-md:mb-12 max-md:font-poppins-medium text-5xl tracking-tighter opacity-85 text-center font-poppins-semibold'>Famous Landmarks</h1>
       <div className='flex flex-col gap-24 max-md:gap-10'>
        <LeftText title={"Badshahi Masjid"} para={"The Badshahi Mosque is a Mughal-era imperial mosque located in Lahore, Punjab, Pakistan. It was constructed between 1671 and 1673 during the rule of Aurangzeb, opposite of the Lahore Fort on the northern outskirts of the historic Walled City."} img={BadshahiMasjid}/>
        <RightText title={"Faisal Masjid"} para={"The Faisal Mosque is the national mosque of Pakistan, located in the capital city, Islamabad. It is the fifth-largest mosque in the world,Established in 1987, this iconic contemporary mosque is designed to resemble a Bedouin tent."} img={FaisalMosque} />
        <LeftText title={"Noor Mahal"} para={"The Noor Mahal is a historic estate owned by the Ministry of Defense.The palace was the brainchild of Nawab Sir Sadiq Muhammad Khan IV, a visionary leader known as the “Shan Jahan of Bahawalpur” due to his passion for architecture" } img={NoorMahal}  />
        <RightText title={"Pakistan Monument"} para={"The Pakistan Monument is a national monument and heritage museum located on the western Shakarparian Hills in Islamabad, Pakistan. The monument was constructed to symbolize the unity of the Pakistani people."} img={PakMonument} />
       </div>    
    </div>
  )
}

export default Landmarks