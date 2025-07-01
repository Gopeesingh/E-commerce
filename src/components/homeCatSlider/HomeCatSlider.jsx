import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation,  } from 'swiper/modules';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
    return (
        <div className="homeCatSlider pt-4 py-8">
            <div className="container">
            
        <Swiper
        slidesPerView={8}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="sliderHome"
        >
        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col">
                <img src= {img1}
                className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Fashion</h3>
            </div>
            </Link>
        </SwiperSlide>

        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col">
                <img src= {img2}
                className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Electronic</h3>
            </div>
            </Link>
        </SwiperSlide>

        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col">
                <img src= {img3}
                className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Bag</h3>
            </div>
            </Link>
        </SwiperSlide>

        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col">
                <img src= {img4}
                className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Footwear</h3>
            </div>
            </Link>
        </SwiperSlide>

        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col">
                <img src= {img5}
                className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Groceries</h3>
            </div>
            </Link>
        </SwiperSlide>

        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col">
                <img src= {img6}
                className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Beauty</h3>
            </div>
            </Link>
        </SwiperSlide>

        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col">
                <img src= {img7}
                className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Wellness</h3>
            </div>
            </Link>
        </SwiperSlide>

        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col">
                <img src= {img8}
                className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Jewellery</h3>
            </div>
            </Link>
        </SwiperSlide>

        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col">
                <img src= {img4}
                className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Kids Footwear</h3>
            </div>
            </Link>
        </SwiperSlide>

        <SwiperSlide>
            <Link to="/">
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center
            justify-center flex-col">
                <img src= {img5}
                className='w-[60px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Daily Essentials</h3>
            </div>
            </Link>
        </SwiperSlide>

        

        
        </Swiper>
            </div>
        </div>
    )
}
export default HomeCatSlider;