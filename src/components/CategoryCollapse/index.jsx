import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FaRegSquarePlus } from "react-icons/fa6";
import { useState } from 'react';
import { FiMinusSquare } from "react-icons/fi";

const CategoryCollapse = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null);
    const [innersubMenuIndex, setinnersubMenuIndex] = useState(null);

    const openSubmenu = (index) => {
    if(submenuIndex === index) {
    setSubmenuIndex(null);
    }else{
    setSubmenuIndex(index);
    }
    }

    const openinnerSubmenu = (index) => {
    if(innersubMenuIndex === index) {
        setinnersubMenuIndex(null);
    }else{
    setinnersubMenuIndex(index);
    }
    }
    return(
        <>
            <div className="scroll">
                <ul className="w-full">
                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/' className='w-full'>
                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'
                        >Fashion</Button>
                        </Link>

                        {
                        submenuIndex == 0 
                        ?(
                        <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                        onClick={()=> openSubmenu(0)}/>)
                        :(
                        <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'
                        onClick={()=> openSubmenu(0)}/>)
                        }
                        


                        <ul className={`subMenu w-full pl-3 ${submenuIndex === 0 ? 'block' : 'hidden'}`}>
                    <li className='list-none relative'>
                    <Link to='/' className='w-full'>
                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'
                        >Apparel</Button>
                        </Link>

                        {
                        innersubMenuIndex == 0
                        ?(
                            <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                        onClick={()=> openinnerSubmenu(0)}/>
                        ):(
                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'
                        onClick={()=> openinnerSubmenu(0)}/>
                        )
                        }
                        

                        <ul className={`inner-subMenu  w-full pl-3 ${innersubMenuIndex === 0 ? 'block' : 'hidden'}`}>
                    <li className='list-none relative'>
                    <Link
                    to='/'
                    className='link w-full !text-left !justify-start !px-3 transition text-[14px] mb-1'
                    >
                    Smart Tablet
                        </Link>
                    </li>

                    <li className='list-none relative'>
                    <Link
                    to='/'
                        className='link w-full !text-left !justify-start !px-3 transition text-[14px] mb-1'
                    >
                        Crepe T-shirt
                        </Link>
                    </li>

                    <li className='list-none relative'>
                    <Link
                    to='/'
                    className='link w-full !text-left !justify-start !px-3 transition text-[14px] mb-1'
                    >
                    Leather Watch
                        </Link>
                    </li>

                    <li className='list-none relative'>
                    <Link
                    to='/'
                    className='link w-full !text-left !justify-start !px-3 transition text-[14px] mb-1'
                    >
                    Rolling Diamond
                        </Link>
                    </li>
                
                </ul>
                    </li>
                </ul>
                    </li>


                                        <li className='list-none flex items-center relative flex-col'>
                        <Link to='/' className='w-full'>
                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'
                        >Fashion</Button>
                        </Link>

                        {
                        submenuIndex == 0 
                        ?(
                        <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                        onClick={()=> openSubmenu(0)}/>)
                        :(
                        <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'
                        onClick={()=> openSubmenu(0)}/>)
                        }
                        


                        <ul className={`subMenu w-full pl-3 ${submenuIndex === 0 ? 'block' : 'hidden'}`}>
                    <li className='list-none relative'>
                    <Link to='/' className='w-full'>
                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'
                        >Apparel</Button>
                        </Link>

                        {
                        innersubMenuIndex == 1
                        ?(
                            <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                        onClick={()=> openinnerSubmenu(1)}/>
                        ):(
                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'
                        onClick={()=> openinnerSubmenu(1)}/>
                        )
                        }
                        

                        <ul className={`inner-subMenu w-full pl-3 ${innersubMenuIndex === 1 ? 'block' : 'hidden'}`}>
                <li className='list-none relative'>
                    <Link
                    to='/'
                    className='link w-full !text-left !justify-start !px-3 transition text-[14px] mb-1'
                    >
                    Smart Tablet
                        </Link>
                </li>

                <li className='list-none relative'>
                    <Link
                    to='/'
                    className='link w-full !text-left !justify-start !px-3 transition text-[14px] mb-1'
                    >
                    Crepe T-shirt
                        </Link>
                </li>

                <li className='list-none relative'>
                    <Link
                    to='/'
                    className='link w-full !text-left !justify-start !px-3 transition text-[14px] mb-1'
                    >
                    Watch
                        </Link>
                </li>

                <li className='list-none relative'>
                    <Link
                    to='/'
                    className='link w-full !text-left !justify-start !px-3 transition text-[14px] mb-1'
                    >
                    Rolling Diamond
                        </Link>
                </li>

                
                </ul>
                </li>
                </ul>
                    </li>
                </ul>

            </div>
        </>
    )
}
export default CategoryCollapse;