import {useState} from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import feet from "../images/feet.jpg";
import teen3 from '../images/teen3.jpg'
import teen4 from '../images/teen4.jpg'
import teen6 from '../images/teen6.jpg'
import teen7_small from '../images/teen7_small.jpg';

import {info} from '../data';
import Card from "../UI/Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const About = () => {
  return (
    <div  className="bg-[#178582] px-10 py-10 clip">
      <h2 className="font-semibold text-white text-[1.7rem] pt-5 md:text-[2rem] mb-7 border border-t-0  border-l-0 border-r-0 md:mb-14">
        What We Do <span className="leading-2 tracking-widest">...</span>
      </h2>
      
      {/* Cards and the main image goes here */}
      <div className="flex flex-col-reverse justify-center items-center md:grid-cols-2 md:gap-[4rem]">
      <Swiper
      className="w-full"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{duration:7}}
    >
      <SwiperSlide className="w-full"><img className="object-contain" src={feet} alt="feet" /></SwiperSlide>
      <SwiperSlide className="w-full"><img className="object-contain" src={teen3} alt="teen 3" /></SwiperSlide>
      <SwiperSlide className="w-full"><img className="object-contain" src={teen4} alt="teen 4" /></SwiperSlide>
      <SwiperSlide className="w-full"><img className="object-contain" src={teen6} alt="teen 4" /></SwiperSlide>
    </Swiper>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {info.map(({title, info, icon}, key)=>{
            return(
              <div key={key} className="">
                <Card title={title} content={info} icon={icon}/>
              </div>
            )
          })}
        </div>
      </div>

      
    </div>
  )
}

export default About