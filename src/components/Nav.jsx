import React, { useState } from 'react';
import { navlink } from '../constant';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="h-[80px] w-full flex justify-evenly items-center fixed z-50 top-0 bg-transparent px-[5%]">

      <div>
        <a href="#" className="text-[25px] font-bold text-[#fff]">
          <span className="text-[#df8033]">ROYAL</span>X
        </a>
      </div>

      <ul
        className={`md:static absolute md:top-0 top-[100%] ${
          menuOpen ? 'left-0' : 'left-[-100%]'
        } md:left-0 transition-all duration-500
        max-md:w-full max-md:bg-gray-900/50 max-md:backdrop-blur-[8px]
        border-white max-md:border-b z-40`}
      >
        {navlink.map((data, index) => (
          <li
            key={data.id}
            className={`Navlist md:inline-block ${
              index === navlink.length - 1 ? 'pr-0' : 'pr-[25px]'
            } max-md:block max-md:my-[5px] max-md:py-[25px] max-md:pl-[15%]
            border-gray-600 max-md:border-b relative `}
          >
            <a
              className="text-[#fff] font-medium font-poppins text-[15px]"
              href={`${data.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {data.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex gap-[18px] items-center">
        <button className="cursor-pointer h-[38px] w-[130px] border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000">
          Book Now
        </button>

        <i
          onClick={menuHandler}
          className="md:hidden flex ri-menu-4-line border-none bg-[#cb5c00] h-[40px] w-[40px] justify-center items-center text-[20px] shadow-2px hover:shadow-h2px text-white transition duration-1000 transform scale-100 hover:scale-[0.95] cursor-pointer"
        ></i>
      </div>
    </div>
  );
};

export default Nav;
