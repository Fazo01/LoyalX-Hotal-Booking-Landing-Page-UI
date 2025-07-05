import React from 'react'

const Footer = () => {
  return (
    <footer className='p-[90px] max-[1100px]:p-[90px] max-[768px]:p-[30px] bg-[#1e1e1e] text-white grid grid-cols-4 max-[900px]:grid-cols-2 max-[768px]:grid-cols-1 gap-[40px]'>
        <div className="flex flex-col gap-[12px]">
            <div className="FooterMain">
                <h2 >RoyalX</h2>
                <p className='font-poppins text-[12px] text-[rgba(131,131,131,1)] hover:text-white footerp cursor-pointer'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sapiente consequuntur incidunt error qui molestiae libero illum cumque. Architecto ea saepe, dolorum adipisci quibusdam omnis porro tempore reprehenderit! Odit, consectetur!</p>
            </div>
        </div>
        <div className="">
            <h3>Quick Links</h3>
            <p className='font-poppins text-[12px] text-[rgba(131,131,131,1)] hover:text-white footerp cursor-pointer'>About</p>
            <p className='font-poppins text-[12px] text-[rgba(131,131,131,1)] hover:text-white footerp cursor-pointer'>Contact Us</p>
            <p className='font-poppins text-[12px] text-[rgba(131,131,131,1)] hover:text-white footerp cursor-pointer'>Rooms</p>
            <p className='font-poppins text-[12px] text-[rgba(131,131,131,1)] hover:text-white footerp cursor-pointer'>GYM</p>
            <p className='font-poppins text-[12px] text-[rgba(131,131,131,1)] hover:text-white footerp cursor-pointer'>Resturant</p>
        </div>
        <div className="">
            <h3>City Branches</h3>
            <p className='font-poppins text-[12px] text-[rgba(131,131,131,1)] hover:text-white footerp cursor-pointer'>Maxico</p>
            <p className='font-poppins text-[12px] text-[rgba(131,131,131,1)] hover:text-white footerp cursor-pointer'>Pakistan</p>
            <p className='font-poppins text-[12px] text-[rgba(131,131,131,1)] hover:text-white footerp cursor-pointer'>Germany</p>
            <p className='font-poppins text-[12px] text-[rgba(131,131,131,1)] hover:text-white footerp cursor-pointer'>Austrilia</p>
            <p className='font-poppins text-[12px] text-[rgba(131,131,131,1)] hover:text-white footerp cursor-pointer'>Canada</p>
        </div>
        <div className="footerspan">
            <h3>Contact</h3>
            <p>Address : <span className=' block  '>360 Street- Mumbai, India</span></p>
            <p>Email : <span>ex@gmail.com</span></p>
            <p>Phone : <span>996587680</span></p>
        </div>
    </footer>
  )
}

export default Footer
