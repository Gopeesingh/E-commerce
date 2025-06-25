import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";


const CategoryPanel = (props) => {

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

   const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >

        <h3 className='flex items-center justify-between p-3 text-[16px] font-[500]'>
            Shop By Categories 
            <IoCloseSharp className='cursor-pointer text-[20px]' onClick={toggleDrawer(false)}/>
            </h3>

            <div className="scroll">
                <ul className="w-full">
                    <li className='list-none flex items-center relative'>
                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'
                        >Fashion</Button>
                        <FaRegSquarePlus className='absolute top-[10px] right-[15px]'/>
                    </li>
                </ul>
            </div>

    </Box>
  );
    return (
        <>
      <Drawer open={props.isOpenCatPannel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
        </>
    )
}
export default CategoryPanel;

