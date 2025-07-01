import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

import slideBanner1 from '../../assets/slideBanner1.jpg';
import slideBanner2 from '../../assets/slideBanner2.jpg';
import slideBanner4 from '../../assets/slideBanner4.jpg';
import slideBanner5 from '../../assets/slideBanner5.jpg';
// import slideBanner3 from '../../assets/slideBanner3.jpg';


const HomeSlider = () => {
    return (
        <div className="homeSlider py-4">
            <div className="container">
                <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="sliderHome"
                spaceBetween={10}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
                <SwiperSlide>
                    <div className="item rounded-[20px] overflow-hidden ">
                        <img src={slideBanner1} alt='Banner Slide' className='w-full '  />
                    </div>
                </SwiperSlide>
        
            <SwiperSlide>
                <div className="item rounded-[20px] overflow-hidden">
                    <img src={slideBanner4} alt='Banner Slide' className='w-full' />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="item rounded-[20px] overflow-hidden">
                    <img src={slideBanner2} alt='Banner Slide' className='w-full' />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="item rounded-[20px] overflow-hidden">
                    <img src={slideBanner5} alt='Banner Slide' className='w-full' />
                </div>
            </SwiperSlide>


            <SwiperSlide>
                <div className="item rounded-[20px] overflow-hidden">
                    <img src={slideBanner2} alt='Banner Slide' className='w-full' />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="item rounded-[20px] overflow-hidden">
                    <img src={slideBanner1} alt='Banner Slide' className='w-full' />
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className="item rounded-[20px] overflow-hidden">
                    <img src={slideBanner2} alt='Banner Slide' className='w-full' />
                </div>
            </SwiperSlide>

        </Swiper> 
            </div>
        </div>
    );
}
export default HomeSlider;