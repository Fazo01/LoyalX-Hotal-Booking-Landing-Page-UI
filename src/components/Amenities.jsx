import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../assets/pool.jpg";
import img2 from "../assets/gym.jpg";
import img3 from "../assets/rest.jpg";
import { Autoplay } from "swiper/modules";
const Amenities = () => {
  return (
    <div className="p-[90px] max-[1100px]:p-[90px] max-[768px]:p-[30px]">
      <small className="text-[20px] font-semibold text-[#1e1e1e]">
        Luxury Amenities
      </small>
      <h2 className="text-[38px] text-[#1e1e1e] font-poppins">
        Our Best <span className="text-[#9d7e54]">Amenities</span>
      </h2>
      <Swiper
        className="w-full"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={
          {delay:1000,}
        }
        speed={2000}
        modules={[Autoplay]}

      >
        <SwiperSlide>
          <div className="flex max-[768px]:flex-col  items-center gap-[30px]">
            <img
              src={img1}
              alt=""
              className="w-[60%] max-[768px]:w-[100%] h-auto rounded-r-[200px] rounded-l-[30px]"
            />
            <div className="flex flex-col gap-[20px]">
              <h2 className="text-[66px] max-[1200px]:text-[46px] max-[900px]:text-[36px] max-[900px]:ml-[0px] max-[768px]:text-[36px] swim ">Swimming Pool</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, quia consequatur obcaecati molestias, adipisci quam
                accusantium eligendi, praesentium vel totam quaerat maxime
                explicabo rerum. Aliquid nam omnis similique dolorem ullam!
              </p>
              <button className="cursor-pointer h-[38px] w-[130px] border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000">
                Book Now !
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex max-[768px]:flex-col  items-center gap-[30px]">
            <img src={img2} alt="" className="w-[60%] max-[768px]:w-[100%] h-auto rounded-r-[200px] rounded-l-[30px]" />
            <div className="flex flex-col gap-[20px]">
              <h2 className="text-[66px] max-[1200px]:text-[46px] max-[900px]:text-[36px] max-[900px]:ml-[0px] max-[768px]:text-[36px] swim ">GYM and Sports</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, quia consequatur obcaecati molestias, adipisci quam
                accusantium eligendi, praesentium vel totam quaerat maxime
                explicabo rerum. Aliquid nam omnis similique dolorem ullam!
              </p>
              <button className="cursor-pointer h-[38px] w-[130px] border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000">
                Book Now !
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex max-[768px]:flex-col  items-center gap-[30px]">
            <img src={img3} alt="" className="w-[60%] max-[768px]:w-[100%] h-auto rounded-r-[200px] rounded-l-[30px]"/>
            <div className="flex flex-col gap-[20px]">
              <h2 className="text-[66px] max-[1200px]:text-[46px] max-[900px]:text-[36px] max-[900px]:ml-[0px] max-[768px]:text-[36px] swim ">Restro & Cafe</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, quia consequatur obcaecati molestias, adipisci quam
                accusantium eligendi, praesentium vel totam quaerat maxime
                explicabo rerum. Aliquid nam omnis similique dolorem ullam!
              </p>
              <button className="cursor-pointer h-[38px] w-[130px] border-none bg-[#cb5c00] tracking-[2px] text-white rounded-[30px] text-[15px] font-medium shadow-2px hover:shadow-h2px transform scale-100 hover:scale-[0.95] transition duration-1000">
                Book Now !
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Amenities;
