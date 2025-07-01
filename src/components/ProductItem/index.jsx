import React from 'react'
import { Link } from 'react-router-dom';
import proImg1 from '../../assets/proImg1.jpg'
import proImg1A from '../../assets/proImg1.1.jpg'
import proImg1B from '../../assets/proImg1.1.jpg'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";

const ProductItem = () => {
    return(
        <div className="productItem rounded-md shadow-lg overflow-hidden">
            <div className="group imgWrapper w-[100%] h-[220px] overflow-hidden rounded-md relative">
                <Link to='/'>
                <div className="img h-[220px] overflow-hidden">
                <img src={proImg1} className='w-full' />

                <img src={proImg1B} className='w-full transition-all duration-700 absolute top-0 left-0
                opacity-0 group-hover:opacity-100 group-hover:scale-105' />

                <img src={proImg1A} className='w-full transition-all duration-700 absolute top-0 left-0
                opacity-0 group-hover:opacity-100 group-hover:scale-105' />
                </div>
                
                </Link>
                <span className='discount flex items-center absolute top-[10px] left-[10px]
                z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]'>10%</span>

                <div className="actions absolute top-[-200px] right-[5px] z-50 flex item-center gap-2
                flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0
                group-hover:opacity-100">
                <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black
                hover:!bg-[#ff5252] hover:text-white group'>
                    <MdZoomOutMap className='text-[18px] !text-black group-hover:text-white hover:!text-white'/>
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black
                hover:!bg-[#ff5252] hover:text-white group'>
                    <IoGitCompareOutline className='text-[18px] !text-black group-hover:text-white hover:!text-white'/>
                    </Button>

                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black
                hover:!bg-[#ff5252] hover:text-white group'>
                    <FaRegHeart className='text-[18px] !text-black group-hover:text-white hover:!text-white'/>
                    </Button>

                </div>
            </div>

            <div className="info p-3 py-5">
                <h6 className='text-[13px] '><Link to='/' className='link transition-all'>kasee</Link>
                </h6>
                <h3 className='text-[13px] title mt-1 mb-1 font-[500] text-[#000]'>
                    <Link to='/' className='link transition-all'>Embellished Embroidered Saree</Link>
                </h3>

                <Rating name="size-small" defaultValue={4} size="small" readOnly/>

                <div className="flex items-center gap-4">
                    <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]
                    '>$58.00</span>
                    <span className='price text-primary text-[15px] font-[600]'>$58.00</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;