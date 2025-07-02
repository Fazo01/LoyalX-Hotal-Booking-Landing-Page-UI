import React from 'react'
import { navlink } from '../constant'
const Nav = () => {
  return (
    <div className="h-[80px] w-full flex justify-evenly items-center fixed z-99 top-0 bg-transparent">
      <div >
        <a href="" className='text-[25px] font-bold text-[#fff]'><span className='text-[#df8033]'>ROYAL</span>X</a>
      </div>
      <ul className=''>
        {navlink.map((data,index)=>(
            <li key={data.id} className={`inline-block ${index===navlink.length-1?"pr-0":"pr-[15px]"}`}>
                <a className='text-[#fff] font-medium font-poppins text-[15px]' href={`${data.id}`}>{data.title}</a>
            </li>
        ))}
      </ul>
      <div className="flex gap-[18px] items-center">
        <button className="cursor-pointer h-[38px] w-[130px] border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000">
  Book Now
</button>




        <i className='sm:hidden  ri-menu-4-line border-none bg-[#cb5c00] h-[40px] w-[40px] flex justify-center items-center font-[15px] shadow-2px hover:shadow-h2px text-[15px] transition duration-1000 transform scale-100 hover:scale-[0.95] cursor-pointer' ></i>
      </div>
    </div>
  )
}

export default Nav
