import React from 'react';
import { Box } from '@mui/material';
import LeftBar from './LeftBar';
import Rightbar from './Rightbar';

function DashboardLayout() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh', 
        backgroundColor: 'white',
        display:'flex',
      }}
    >

   {/* Left Bar */}
   <Box sx={{
    width:'18%',
    height:'100vh',
    
    backgroundColor:'#5041BC'
    // backgroundColor:'#5041BC'
   }}>
    <LeftBar/>

   </Box>


   {/* Right Bar */}
   <Box sx={{
    width:'82%',
    height:'100vh',
    backgroundColor:'white',
    borderRadius:'20px',
    border:'1px solid black',
    
   }}>

    <Rightbar/>


   </Box>

      
    </Box>
  );
}

export default DashboardLayout;