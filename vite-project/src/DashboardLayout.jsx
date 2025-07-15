import React from 'react';
import { Box } from '@mui/material';
import LeftBar from './LeftBar';

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
    width:'20%',
    height:'100vh',
    
    backgroundColor:'#5041BC'
   }}>
    <LeftBar/>

   </Box>


   {/* Right Bar */}
   <Box sx={{
    width:'80%',
    height:'100vh',
    backgroundColor:'white',
    borderRadius:'20px',
    border:'1px solid black',
    
   }}>


   </Box>

      
    </Box>
  );
}

export default DashboardLayout;