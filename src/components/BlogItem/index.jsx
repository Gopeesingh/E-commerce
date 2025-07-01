import React from 'react'
import { IoIosArrowForward, IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';

const BlogItem = () => {
    return (
        <div>
        <div className="blogItem group">
            <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
                <img src="https://serviceapi.spicezgold.com/download/1741758867669_7-6.jpg" alt="blog img"
                className='w-full transition-all group-hover:scale-105 group-hover:rotate-1'/>

                <span className='flex item-center justify-center text-white absolute bottom-[15px]
                right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1'>
                <IoMdTime className='text-[16px]'/> 30 jun 2025
                </span>
            </div>

            <div className="info py-4">
                <h2 className='text-[15px] font-[600] text-black'>
                    <Link to='/' className='link'>This prefabrice passive house is highly sustainable</Link>
                    </h2>
                <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At hic ad natus ....</p>

                <Link className='link font-[500] text-[14px] flex items-center gap-1 '>Read More
                <IoIosArrowForward />
                </Link>
            </div>
        </div>
        </div>
    )
}
export default BlogItem;