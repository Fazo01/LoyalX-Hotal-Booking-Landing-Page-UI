import React from 'react'
import aboutImg from '../assets/about-one.png'
const About = () => {
  return (
    <div className='py-[90px] px-[15%] flex flex-row max-[1200px]:flex-col gap-[40px] '>
      <div className="flex width-[50%] max-[1200px]:w-[90%] items-center justify-center">
        <img className='w-[90vw] h-[90%] max-[1400px]:w-[100vw] max-[1400px]:h-[80%] max-[1200px]:w-[100vw] max-[1200px]:h-[100%]' src={aboutImg} alt="" />
      </div>
      <div className="width-[50%] max-[1200px]:w-[100%] flex flex-col max-[1200px]: py-[50px] px-[30px] max-[1400px]:p-0 gap-[15px] text-[#1e1e1e]">
        <small className='text-[20px] font-semibold text-[#1e1e1e]'>The Royal Hotel</small>
        <h2 className='text-[38px] text-[#1e1e1e] font-poppins'>Where Elegance Meets <span className='text-[#9d7e54]'>Excellance</span></h2>
        <p className='text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aut perspiciatis aspernatur cupiditate eius quae, quas repellendus deserunt vel repellat, quos error libero, optio ad! Minus vitae rerum aliquid explicabo.</p>
        <div className="grid grid-cols-3 max-[1400px]:grid-cols-2 max-[1200px]:grid-cols-3 max-[768px]:grid-cols-1 gap-[30px] mt-[50px]">
          <p className='features'>260+ <span className='text-[15px] block'>Awards Wins</span></p>
          <p className='features'>250K+ <span className='text-[15px] block'>Visitors Visits</span></p>
          <p className='features'>150K+ <span className='text-[15px] block'>Events</span></p>
        </div>
      </div>
    </div>
  )
}

export default About
