import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Button from '@mui/material/Button';

const HomeSliderV2 = () => {
    return(
    <>
    <Swiper
        spaceBetween={30}
        loop="true"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        effect={'fade'}
        navigation={true}
        pagination={{
        clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homeSliderV2"
    >
        <SwiperSlide>
            <div className="item w-full rounded-md overflow-hidden relative">
        <img src="https://serviceapi.spicezgold.com/download/1742439896581_1737036773579_sample-1.jpg" />
        <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
            <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0'>Big Saving Days Sale</h4>
            <h2 className='text-[35px] font-[700] w-full relative -right-[100%] opacity-0'>Women Solid Round Green T-Shirt</h2>

            <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0'>Big Starting At Only {" "} 
                <span className='text-primary text-[30px] font-[700]'>
                $59.00
                </span>
                </h3>
                <div className="w-full relative -right-[100%] opacity-0 btn_">
                    <Button className='btn-org'>SHOP NOW</Button>
                </div>

        </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item w-full rounded-md overflow-hidden">
        <img src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg" />
        <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
            <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0'>Big saving days sale</h4>
            <h2 className='text-[35px] font-[700] w-full relative -right-[100%] opacity-0'>Apple iPhone 13 128 GB, Pink</h2>

            <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0'>Big Starting At Only {" "} 
                <span className='text-primary text-[30px] font-[700]'>
                ₹35,500.00
                </span>
                </h3>
                <div className="w-full relative -right-[100%] opacity-0 btn_">
                    <Button className="btn-org">SHOP NOW</Button>
                </div>

        </div>

        </div>
        </SwiperSlide>
        
    </Swiper>
    </>
    )
}
export default HomeSliderV2;
