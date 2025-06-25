
import React from 'react';
import Button from '@mui/material/Button';
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategaoryPannel';
import { useState } from 'react';
import '../navigation/style.css';


const Navigation = () => {
    const [isOpenCatPannel, setIsOpenCatPanel] = useState(false);

    const openCategoryPannel = () => {
        setIsOpenCatPanel(true);
    }

    return (
        <>
        <nav className='py-2'>
            <div className="container flex items-center justify-end gap-8">
                <div className="col_1 w-[20%] ">
                    <Button className='!text-black gap-2 w-full' onClick={openCategoryPannel}>
                        <RiMenu2Fill className='text-[18px]'/>
                        Shop By Categories
                        <FaAngleDown className='text-[13px] ml-auto font-bold'/>
                        </Button>
                </div>

                <div className="col_2 w-[60%]">
                    <ul className='flex item-center gap-3 nav'>
                        <li className='list-none'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252]'>
                            Home
                            </Button>
                            </Link>
                        </li>

                        <li className='list-none relative'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252]'>
                            Fashion
                            </Button>
                            </Link>

                            <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white
                            shadow-md opacity-0 transition-all">
                            <ul>
                                <li className='list-none w-full relative'>
                                    <Link to="/" className="w-full">
                                    <Button className=' !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                                    Mens
                                    </Button>

                                    <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white
                            shadow-md opacity-0 transition-all">
                            <ul>
                                <li className='list-none w-full'>
                                    <Link to="/" className="w-full">
                                    <Button className=' !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                                    T-shirt
                                    </Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to="/" className="w-full">
                                    <Button className=' !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                                    Jeans
                                    </Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to="/" className="w-full">
                                    <Button className=' !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                                    Watch
                                    </Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to="/" className="w-full">
                                    <Button className=' !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                                    Footwear
                                    </Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to="/" className="w-full">
                                    <Button className=' !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                                    Shirt
                                    </Button>
                                    </Link>
                                </li>
                            </ul>
                            </div>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to="/" className="w-full">
                                    <Button className=' !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                                    Womens
                                    </Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to="/" className="w-full">
                                    <Button className=' !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                                    Kids
                                    </Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to="/" className="w-full">
                                    <Button className=' !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                                    Girls
                                    </Button>
                                    </Link>
                                </li>

                                <li className='list-none'>
                                    <Link to="/" className="w-full">
                                    <Button className=' !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                                    Boys
                                    </Button>
                                    </Link>
                                </li>
                            </ul>
                            </div>
                            


                        </li>

                        <li className='list-none'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252]'>
                            Electronics
                            </Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252]'>
                            Bags
                            </Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252]'>
                            Footwear
                            </Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252]'>
                            Groceries
                            </Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252]'>
                            Bueaty
                            </Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252]'>
                            Wellness
                            </Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.9)]
                            hover:!text-[#ff5252]'>
                            Jewellery
                            </Button>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-3 w-[20%] ">
                <p className='text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0'>
                    <GoRocket className='text-[18px]'/>
                    Free International Delivery

                </p>
                </div>
            </div>
        </nav>

    {/* Category Panel component  */}
        <CategoryPanel isOpenCatPannel={isOpenCatPannel} setIsOpenCatPanel={setIsOpenCatPanel} />
        </>
    );
};
export default Navigation;