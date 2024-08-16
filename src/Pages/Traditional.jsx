import React from 'react'
import LeftText from '../Component/LeftText'
import RightText from '../Component/RightText'
import Painting from '../assets/images/painting (1).webp'
import Pottery from '../assets/images/pottery.webp'
import calligraphy from '../assets/images/calligraphy.webp'
import Woodwork from '../assets/images/woodwork.webp'



const Traditional = () => {
  return (
    <div className='bg-custom-dark text-custom-light py-10 max-md:py-5'>
        <h1 className='text-5xl max-md:mb-12 max-md:font-poppins-medium tracking-tighter opacity-85 text-center font-poppins-semibold'>Traditional Arts</h1>
       <div className='flex flex-col gap-24 max-md:gap-10'>
        <LeftText title={"Painting"} para={"Traditional Pakistani painting, like the vibrant Peshawar miniatures, showcases intricate patterns and historical themes, reflecting the region’s artistic heritage and storytelling traditions"} img={Painting}/>
        <RightText title={"Pottery"} para={"Pakistani pottery, renowned for its vibrant colors and intricate designs, includes glazed and unglazed pieces. Each region has unique styles that celebrate local culture and craftsmanship"} img={Pottery} />
        <LeftText title={"Calligraphy"} para={"Pakistani calligraphy blends traditional Islamic art with modern techniques. It features elegant Arabic scripts and decorative patterns, preserving the art form's historical and spiritual significance."} img={calligraphy} />
        <RightText title={"Woodwork"} para={"Pakistani woodwork, from ornate furniture to detailed carvings, highlights skilled craftsmanship. Traditional designs often feature intricate patterns and motifs, reflecting cultural heritage and artisanal expertise"} img={Woodwork} />
       </div>    
    </div>
  )
}

export default Traditional