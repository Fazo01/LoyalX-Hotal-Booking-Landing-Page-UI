import React from 'react'
import { navlink } from '../constant'
const Nav = () => {
  return (
    <div className="h-[80px] w-full flex justify-evenly items-center fixed z-99 top-0 bg-transparent">
      <div >
        <a href="" className='text-[25px] font-bold text-[#fff]'><span className='text-[#4f3520]'>ROYALX</span></a>
      </div>
      <ul className=''>
        {navlink.map((data,index)=>(
            <li key={data.id} className={`inline-block ${index===navlink.length-1?"pr-0":"pr-[15px]"}`}>
                <a className='text-[#1e1e1e] font-medium font-poppins text-[15px]' href={`${data.id}`}>{data.title}</a>
            </li>
        ))}
      </ul>
      <div className="flex gap-[18px] items-center">
<button className="cursor-pointer h-[45px] w-[150px] border-2 border-white hover:border-black bg-transparent hover:bg-black text-black hover:text-white text-[15px] font-medium transition-colors duration-300">
  Book Now
</button>



        <i className='ri-menu-4-line'></i>
      </div>
    </div>
  )
}

export default Nav
