import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from "react-icons/io5";
import CategoryCollapse from '../../CategoryCollapse';

const CategoryPanel = (props) => {

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">

        <h3 className='flex items-center justify-between p-3 text-[16px] font-[500]'>
            Shop By Categories 
            <IoCloseSharp className='cursor-pointer text-[20px]' onClick={toggleDrawer(false)}/>
            </h3>
            <CategoryCollapse />

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

