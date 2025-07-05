import React from 'react'
const Rooms = () => {
  return (
    <div className='p-[90px] max-[1100px]:p-[90px] max-[768px]:p-[30px]'>
      <small className='text-[20px] font-semibold text-[#1e1e1e]'>Luxury Suities</small>
      <h2 className='text-[38px] text-[#1e1e1e] font-poppins'>Our Best <span className='text-[#9d7e54]'>Rooms</span></h2>

      <div className="grid grid-cols-3 max-[1100px]:grid-cols-2 max-[768px]:grid-cols-1 gap-[30px]">
        <div className="perspective-[1000px]">
          <div className="w-full h-[320px] p-[25px] transform-3d rotate-y-0 hover:rotate-y-180 transition duration-700">
            <div className='absolute w-full h-full backface-hidden rounded-[20px] flex flex-col justify-end items-center p-[25px] bg-[url(./assets/1.jpg)]'>
              <button className='w-full cursor-pointer h-[38px]  border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000'>Junior Suite</button>
            </div>
            <div className="absolute w-full h-full backface-hidden rounded-[20px] flex flex-col justify-between items-center p-[30px] bg-[url(./assets/1.jpg)] rotate-y-180 Roomafter z-1  ">
              <div className="">
                <p className='py-[8px] px-[10px] bg-[#1e1e1e] text-[#fff] font-poppins'>$120/N</p>
              </div>
              <div className="flex flex-col gap-[10px] font-poppins ">
                <h3 className='font-poppins '>Junior Suite</h3>
                <p className='font-poppins'> - Daily Cleaning</p>
                <p className='font-poppins'> - Home Service</p>
                <p className='font-poppins'> - HouseKeeping</p>
                <p className='font-poppins'> - Wifi & Parking</p>
              </div>
              <div className="flex justify-between w-full items-center">
                <button className='cursor-pointer h-[38px] w-[130px] border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000'>Book Now</button>
                <i className='ri-arrow-right-line h-full w-[50px] bg-[#1e1e1e] text-[#fff] flex items-center justify-center'></i>
              </div>
            </div>
          </div>
        </div>
        <div className="perspective-[1000px]">
          <div className="w-full h-[320px] p-[25px] transform-3d rotate-y-0 hover:rotate-y-180 transition duration-700">
            <div className='absolute w-full h-full backface-hidden rounded-[20px] flex flex-col justify-end items-center p-[25px] bg-[url(./assets/2.jpg)]'>
              <button className='w-full cursor-pointer h-[38px]  border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000'>Twin Room</button>
            </div>
            <div className="absolute w-full h-full backface-hidden rounded-[20px] flex flex-col justify-between items-center p-[30px] bg-[url(./assets/2.jpg)] rotate-y-180 Roomafter z-1  ">
              <div className="">
                <p className='py-[8px] px-[10px] bg-[#1e1e1e] text-[#fff] font-poppins'>$120/N</p>
              </div>
              <div className="flex flex-col gap-[10px] font-poppins ">
                <h3 className='font-poppins '>Twin Room</h3>
                <p className='font-poppins'> - Daily Cleaning</p>
                <p className='font-poppins'> - Home Service</p>
                <p className='font-poppins'> - HouseKeeping</p>
                <p className='font-poppins'> - Wifi & Parking</p>
              </div>
              <div className="flex justify-between w-full items-center">
                <button className='cursor-pointer h-[38px] w-[130px] border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000'>Book Now</button>
                <i className='ri-arrow-right-line h-full w-[50px] bg-[#1e1e1e] text-[#fff] flex items-center justify-center'></i>
              </div>
            </div>
          </div>
        </div>
        <div className="perspective-[1000px]">
          <div className="w-full h-[320px] p-[25px] transform-3d rotate-y-0 hover:rotate-y-180 transition duration-700">
            <div className='absolute w-full h-full backface-hidden rounded-[20px] flex flex-col justify-end items-center p-[25px] bg-[url(./assets/3.jpg)]'>
              <button className='w-full cursor-pointer h-[38px]  border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000'>Quad Room</button>
            </div>
            <div className="absolute w-full h-full backface-hidden rounded-[20px] flex flex-col justify-between items-center p-[30px] bg-[url(./assets/3.jpg)] rotate-y-180 Roomafter z-1  ">
              <div className="">
                <p className='py-[8px] px-[10px] bg-[#1e1e1e] text-[#fff] font-poppins'>$150/N</p>
              </div>
              <div className="flex flex-col gap-[10px] font-poppins ">
                <h3 className='font-poppins '>Quad Room</h3>
                <p className='font-poppins'> - Daily Cleaning</p>
                <p className='font-poppins'> - Home Service</p>
                <p className='font-poppins'> - HouseKeeping</p>
                <p className='font-poppins'> - Wifi & Parking</p>
              </div>
              <div className="flex justify-between w-full items-center">
                <button className='cursor-pointer h-[38px] w-[130px] border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000'>Book Now</button>
                <i className='ri-arrow-right-line h-full w-[50px] bg-[#1e1e1e] text-[#fff] flex items-center justify-center'></i>
              </div>
            </div>
          </div>
        </div>
        <div className="perspective-[1000px]">
          <div className="w-full h-[320px] p-[25px] transform-3d rotate-y-0 hover:rotate-y-180 transition duration-700">
            <div className='absolute w-full h-full backface-hidden rounded-[20px] flex flex-col justify-end items-center p-[25px] bg-[url(./assets/4.jpg)]'>
              <button className='w-full cursor-pointer h-[38px]  border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000'>Deulux Room</button>
            </div>
            <div className="absolute w-full h-full backface-hidden rounded-[20px] flex flex-col justify-between items-center p-[30px] bg-[url(./assets/4.jpg)] rotate-y-180 Roomafter z-1  ">
              <div className="">
                <p className='py-[8px] px-[10px] bg-[#1e1e1e] text-[#fff] font-poppins'>$120/N</p>
              </div>
              <div className="flex flex-col gap-[10px] font-poppins ">
                <h3 className='font-poppins '>Deulux Room</h3>
                <p className='font-poppins'> - Daily Cleaning</p>
                <p className='font-poppins'> - Home Service</p>
                <p className='font-poppins'> - HouseKeeping</p>
                <p className='font-poppins'> - Wifi & Parking</p>
              </div>
              <div className="flex justify-between w-full items-center">
                <button className='cursor-pointer h-[38px] w-[130px] border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000'>Book Now</button>
                <i className='ri-arrow-right-line h-full w-[50px] bg-[#1e1e1e] text-[#fff] flex items-center justify-center'></i>
              </div>
            </div>
          </div>
        </div>
        <div className="perspective-[1000px]">
          <div className="w-full h-[320px] p-[25px] transform-3d rotate-y-0 hover:rotate-y-180 transition duration-700">
            <div className='absolute w-full h-full backface-hidden rounded-[20px] flex flex-col justify-end items-center p-[25px] bg-[url(./assets/5.jpg)]'>
              <button className='w-full cursor-pointer h-[38px]  border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000'>Exclusive Room</button>
            </div>
            <div className="absolute w-full h-full backface-hidden rounded-[20px] flex flex-col justify-between items-center p-[30px] bg-[url(./assets/5.jpg)] rotate-y-180 Roomafter z-1  ">
              <div className="">
                <p className='py-[8px] px-[10px] bg-[#1e1e1e] text-[#fff] font-poppins'>$220/N</p>
              </div>
              <div className="flex flex-col gap-[10px] font-poppins ">
                <h3 className='font-poppins '>Exclusive Room</h3>
                <p className='font-poppins'> - Daily Cleaning</p>
                <p className='font-poppins'> - Home Service</p>
                <p className='font-poppins'> - HouseKeeping</p>
                <p className='font-poppins'> - Wifi & Parking</p>
              </div>
              <div className="flex justify-between w-full items-center">
                <button className='cursor-pointer h-[38px] w-[130px] border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000'>Book Now</button>
                <i className='ri-arrow-right-line h-full w-[50px] bg-[#1e1e1e] text-[#fff] flex items-center justify-center'></i>
              </div>
            </div>
          </div>
        </div>
        <div className="perspective-[1000px]">
          <div className="w-full h-[320px] p-[25px] transform-3d rotate-y-0 hover:rotate-y-180 transition duration-700">
            <div className='absolute w-full h-full backface-hidden rounded-[20px] flex flex-col justify-end items-center p-[25px] bg-[url(./assets/6.jpg)]'>
              <button className='w-full cursor-pointer h-[38px]  border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000'>Personal Room</button>
            </div>
            <div className="absolute w-full h-full backface-hidden rounded-[20px] flex flex-col justify-between items-center p-[30px] bg-[url(./assets/6.jpg)] rotate-y-180 Roomafter z-1  ">
              <div className="">
                <p className='py-[8px] px-[10px] bg-[#1e1e1e] text-[#fff] font-poppins'>$190/N</p>
              </div>
              <div className="flex flex-col gap-[10px] font-poppins ">
                <h3 className='font-poppins '>Personal Room</h3>
                <p className='font-poppins'> - Daily Cleaning</p>
                <p className='font-poppins'> - Home Service</p>
                <p className='font-poppins'> - HouseKeeping</p>
                <p className='font-poppins'> - Wifi & Parking</p>
              </div>
              <div className="flex justify-between w-full items-center">
                <button className='cursor-pointer h-[38px] w-[130px] border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000'>Book Now</button>
                <i className='ri-arrow-right-line h-full w-[50px] bg-[#1e1e1e] text-[#fff] flex items-center justify-center'></i>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Rooms
