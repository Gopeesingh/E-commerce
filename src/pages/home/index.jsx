
import React from 'react';
import { Link } from 'react-router-dom';
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/homeCatSlider/HomeCatSlider';
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from '../../components/ProductsSlider';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation,  } from 'swiper/modules';
import BlogItem from '../../components/BlogItem';
import HomeSliderV2 from '../../components/HomeSliderV2';
import BannerBoxV2 from '../../components/BannerBoxV2';
import AdsBannerSliderV2 from '../../components/AdsBannerSliderV2';

const Home = () => {
  const [value, setValue] = React.useState(0);

                const handleChange = (event, newValue) => {
                setValue(newValue);
                  };
  return (
    <>
        {/* <HomeSlider /> */}

        <section className='py-6'>
        <div className="container flex  gap-5">
          <div className="part1 w-[75%]">
            <HomeSliderV2 />
          </div>

          <div className="part2 w-[30%] flex items-center justify-between flex-col gap-5">
        <BannerBoxV2 info="left" image={'https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg'}/>
        <BannerBoxV2 info="right" image={'https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg'}/>
          </div>
        </div>
        </section>

        <HomeCatSlider />

        <section className='bg-white py-8'>
          <div className="container">
            <div className='flex items-center justify-between'>
              <div className="leftSec">
                <h2 className='text-[20px] font-[600]'>Popular Product</h2>
                <p className='text-[14px] font-[400]'>Do not miss the current offers until the end of March.</p>
              </div>

              <div className="rightSec w-[60%]">
                <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Fashion" />
        <Tab label="Electronic" />
        <Tab label="Bag" />
        <Tab label="Footwear" />
        <Tab label="Groceries" />
        <Tab label="Beauty" />
        <Tab label="Wellness" />
        <Tab label="Jewellery" />
      </Tabs>
              </div>
            </div>
            <ProductsSlider items={6}/>
          </div>
        </section>

        <section className='py-16 bg-white'>
          <div className="container">
          <div className="freeShipping w-[80%] m-auto py-4 p-4 border-2 border-[#ff5252] flex
          item-center justify-between rounded-md mb-7">
            <div className="col1 flex item-center gap-4">
            <LiaShippingFastSolid className='text-[50px]'/>
            <span className='text-[20px] font-[600] uppercase'>Free Shipping</span>
            </div>

          <div className="col2">
            <p className='mb-0 font-[500]'>Free Delivery Now on your first order and over
              $200</p>
          </div>
          
          <p className='font-bold text-[25px]'>
          - Only $200*
          </p>
          </div>




          <AdsBannerSliderV2 items={4} />


          </div>
        </section>

        <section className='py-5 pt-0 bg-white'>
        <div className="container">
          <h2 className='text-[20px] font-[600]'>Latest Product</h2>
          <ProductsSlider items={6}/>

          <AdsBannerSlider items={4} />

        </div>
        </section>


        

        <section className='py-5 pt-0 bg-white'>
        <div className="container">
          <h2 className='text-[20px] font-[600]'>Feature Product</h2>
          <ProductsSlider items={6}/>

          <AdsBannerSlider items={3} />

        </div>
        </section>

        <section className='py-5 pt-0 pb-8 bg-white blogSection'>
          <div className="container">
            <h2 className='text-[20px] font-[600] mb-4'>From The BLog</h2>
          <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  navigation={true}
                  modules={[Navigation]}
                  className="blogSlider"
                  >
                  <SwiperSlide>
                    <BlogItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <BlogItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <BlogItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <BlogItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <BlogItem />
                  </SwiperSlide>
          </Swiper>
          </div>
        </section>

    </>
  );
};

export default Home;
