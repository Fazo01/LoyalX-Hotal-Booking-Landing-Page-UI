import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import img1 from '../assets/testi-01.jpg'
import img2 from '../assets/testi-04.jpg'
import img3 from '../assets/testi-03.jpg'
const Testinomials = () => {
  return (
    <div className="p-[90px] max-[1100px]:p-[90px] max-[768px]:p-[30px]">
      <small className="text-[20px] font-semibold text-[#1e1e1e]">
        Testinomials
      </small>
      <h2 className="text-[38px] text-[#1e1e1e] font-poppins">
        What Our Client <span className="text-[#9d7e54]">Says</span>
      </h2>
      <Swiper
        className="w-full"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={
          {delay:1000,}
        }
        breakpoints={{
          0:{
            slidesPerView:1
          },
          1200:{
            slidesPerView:2
          }
        }}
        speed={1500}
        modules={[Autoplay]}>
          <SwiperSlide>
            <div className="flex max-[768px]:flex-col items-center max-[768px]:items-start gap-[40px]">
              <img src={img1} alt="" className='w-[200px] rounded-t-[100px] rounded-tr-[100px] rounded-b-[15px] rounded-br-[15px]' />
              <div className="p-[10px] flex flex-col gap-[15px]">
                <h3 className='text-[35px] max-[768px]:text-[24px]'>Amrita <span className='block text-[15px] font-poppins font-light'>manager</span></h3>
                <p className='p-[20px] testi_border rounded-[30px] max-[768px]:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, deserunt beatae unde minus inventore optio quidem dolore. Hic veritatis officiis mollitia, a nemo saepe excepturi eligendi natus ducimus odio nisi?</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex max-[768px]:flex-col items-center max-[768px]:items-start gap-[40px]">
              <img src={img2} alt="" className='w-[200px] rounded-t-[100px] rounded-tr-[100px] rounded-b-[15px] rounded-br-[15px]' />
              <div className="p-[10px] flex flex-col gap-[15px]">
                <h3 className='text-[35px] max-[768px]:text-[24px]'>Samantha <span className='block text-[15px] font-poppins font-light'>Sales manager</span></h3>
                <p className='p-[20px] testi_border rounded-[30px] max-[768px]:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, deserunt beatae unde minus inventore optio quidem dolore. Hic veritatis officiis mollitia, a nemo saepe excepturi eligendi natus ducimus odio nisi?</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex max-[768px]:flex-col items-center max-[768px]:items-start gap-[40px]">
              <img src={img3} alt="" className='w-[200px] rounded-t-[100px] rounded-tr-[100px] rounded-b-[15px] rounded-br-[15px]' />
              <div className="p-[10px] flex flex-col gap-[15px]">
                <h3 className='text-[35px] max-[768px]:text-[24px]'>John Doe <span className='block text-[15px] font-poppins font-light'>manager</span></h3>
                <p className='p-[20px] testi_border rounded-[30px] max-[768px]:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, deserunt beatae unde minus inventore optio quidem dolore. Hic veritatis officiis mollitia, a nemo saepe excepturi eligendi natus ducimus odio nisi?</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testinomials
