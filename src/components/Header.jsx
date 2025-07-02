
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import hero1 from '../assets/hero-1.png';
import hero2 from '../assets/hero-2.png';
import hero3 from '../assets/hero-3.png';
import {Autoplay, Parallax} from 'swiper/modules'
const slides = [hero1, hero2, hero3];

const Header = () => {
  

  return (
    <div className='min-h-screen w-full relative'>
      <Swiper className='h-full w-full' loop={true} slidesPreView={1} spaceBetween={0} autoplay={{delay:2500,}} speed={1500} parallax={true} modules={[Autoplay,Parallax]}>
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen w-full bg-no-repeat bg-cover bg-center relative gradient-after"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute bottom-[18%] max-sm:bottom-[14%]  left-[15%] z-2 flex flex-col gap-[18px]  ">
                <small className='text-white text-[22px] max-ss:text-[14px]' data-swiper-parallax="-200">Luxury Hotel & Restaurant</small>
                <h2 data-swiper-parallax="-300" className='text-white text-[46px] max-sm:text-[30px] max-ss:text-[25px]'>
                  Enjoy Your <span className='text-[#df8033]'>Dream</span> Time with <br />
                  <span className='text-[#df8033]'>Luxury</span> Experience
                </h2>
                <p data-swiper-parallax="-400" className='text-white text-[20px] max-ss:text-[15px] font-poppins'>Call Now <span className='text-[#df8033]  block font-semibold'>9876543210</span></p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
