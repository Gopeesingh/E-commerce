import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation,  } from 'swiper/modules';
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'
import banner5 from '../../assets/banner5.jpg'
import banner6 from '../../assets/banner6.jpg'
import banner7 from '../../assets/banner7.jpg'
import banner8 from '../../assets/banner8.jpg'
import banner9 from '../../assets/banner9.jpg'
import banner10 from '../../assets/banner10.jpg'
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
    return(
        <div className='py-5 w-full'>
        <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="smlBtn"
                >
                    <SwiperSlide>
                    <BannerBox img={banner5} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <BannerBox img={banner6} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <BannerBox img={banner7} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <BannerBox img={banner8} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <BannerBox img={banner9} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <BannerBox img={banner10} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <BannerBox img={banner3} />
                    </SwiperSlide>

                    <SwiperSlide>
                    <BannerBox img={banner4} />
                    </SwiperSlide>

                </Swiper>
        </div>
    )
}
export default AdsBannerSlider;