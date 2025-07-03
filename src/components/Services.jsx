import React from 'react'

const Services = () => {
  return (
    <div className='p-[90px]'>
      <small className='text-[20px] font-semibold text-[#1e1e1e]'>Facilities</small>
        <h2 className='text-[38px] text-[#1e1e1e] font-poppins'>Our Best <span className='text-[#9d7e54]'>Services</span></h2>
       <div className="grid grid-cols-4 max-[1200px]:grid-cols-2 max-[768px]:grid-cols-1 gap-[30px]">
        <div className="py-[35px] px-[30px]  rounded-[12px] flex flex-col gap-[5px] text-[rgba(131,131,131,0.05)] borderofservices transition duration-700">
            <i className='ri-hotel-line   text-[35px] text-[#df8033]'></i>
            <h3 className='text-[20px] mb-[10px]'>Basic Facilities</h3>
            <p className='text-[13px] mt-[3px] font-poppins  text-[rgba(131,131,131,1)]'>- Reception /Front Desk</p>
            <p className='text-[13px] mt-[3px] font-poppins  text-[rgba(131,131,131,1)]'>- Room Services</p>
            <p className='text-[13px] mt-[3px] font-poppins  text-[rgba(131,131,131,1)]'>- House Keeping</p>
            <p className='text-[13px] mt-[3px] font-poppins  text-[rgba(131,131,131,1)]'>- Wifi & Parking</p>
        </div>
        <div className="py-[35px] px-[30px] rounded-[12px] flex flex-col gap-[5px] text-[rgba(131,131,131,0.05)] borderofservices transition duration-700">
            <i className='ri-hotel-bed-line text-[35px] text-[#df8033]'></i>
            <h3 className=' text-[20px] mb-[10px]'>Room Animations</h3>
            <p className='text-[13px] mt-[3px] font-poppins  text-[rgba(131,131,131,1)]'>- Comfortable Badding</p>
            <p className='text-[13px] mt-[3px] font-poppins  text-[rgba(131,131,131,1)]'>- Bed Room and Pool</p>
            <p className='text-[13px] mt-[3px] font-poppins  text-[rgba(131,131,131,1)]'>- TV and AC</p>
            <p className='text-[13px] mt-[3px] font-poppins  text-[rgba(131,131,131,1)]'>- Bar</p>
        </div>
        <div className="py-[35px] px-[30px] rounded-[12px] flex flex-col gap-[5px] text-[rgba(131,131,131,0.05)] borderofservices transition duration-700">
            <i className='ri-goblet-line text-[35px] text-[#df8033]'></i>
            <h3 className='text-[20px] mb-[10px]'>Dining Option</h3>
            <p className='text-[13px] mt-[3px] font-poppins  text-[rgba(131,131,131,1)]'>- Restaurant Cafe</p>
            <p className='text-[13px] mt-[3px] font-poppins  text-[rgba(131,131,131,1)]'>- Bar & Lounge</p>
            <p className='text-[13px] mt-[3px] font-poppins  text-[rgba(131,131,131,1)]'>- Cafe & Canteen</p>
            <p className='text-[13px] mt-[3px] font-poppins  text-[rgba(131,131,131,1)]'>- Room Services</p>
        </div>
        <div className="py-[35px] px-[30px] rounded-[12px] flex flex-col gap-[5px] text-[rgba(131,131,131,0.05)] borderofservices transition duration-700">
            <i className='ri-restaurant-line text-[35px] text-[#df8033]'></i>
            <h3 className='text-[20px] mb-[10px]'>Special Features</h3>
            <p className='text-[13px] mt-[3px] font-poppins  text-[rgba(131,131,131,1)]'>- Custom Rooms</p>
            <p className='text-[13px] mt-[3px] font-poppins  text-[rgba(131,131,131,1)]'>- Cricket Ground</p>
            <p className='text-[13px] mt-[3px] font-poppins  text-[rgba(131,131,131,1)]'>- GYM</p>
        </div>
       </div>
    </div>
  )
}

export default Services
