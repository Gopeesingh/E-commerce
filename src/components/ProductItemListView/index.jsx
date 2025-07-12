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
import { MdOutlineShoppingCart } from 'react-icons/md';

const ProductItemListView = () => {
    return(
        <div className="productItem rounded-md shadow-lg overflow-hidden border-0 border-[rgba(0,0,0.1)] flex items-center">
            <div className="group imgWrapper w-[25%] h-[220px] overflow-hidden rounded-md relative">
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

            <div className="info p-3 py-5 px-8 w-[75%]">
                <h6 className='text-[18px] '><Link to='/' className='link transition-all'>kasee</Link>
                </h6>
                <h3 className='text-[13px] title mt-3 mb-3 font-[500] text-[#000]'>
                    <Link to='/' className='link transition-all'>Embellished Embroidered Saree</Link>
                </h3>
                <p className='text-[14px] mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique iusto voluptatibus impedit odio cupiditate obcaecati voluptatem assumenda reiciendis aperiam, labore perferendis, minus alias asperiores consequatur dolores accusantium quae eaque necessitatibus?</p>

                <Rating name="size-small" defaultValue={4} size="small" readOnly/>

                <div className="flex items-center gap-4">
                    <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]
                    '>$58.00</span>
                    <span className='price text-primary text-[15px] font-[600]'>$58.00</span>
                    <div className="mt-3">
                        <Button className='btn-org flex gap-2'><MdOutlineShoppingCart className='text-[20px]'/>Add to Cart</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductItemListView;