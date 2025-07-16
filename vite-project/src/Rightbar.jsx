import React from 'react'
import {Box,Typography,TextField} from '@mui/material'
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TableComponent from './TableComponent';
import Cards from './Cards';

function Rightbar() {
  return (
    <>




 {/* Navbar */}
    <Box 
    sx={{
        width:'100%',
        height:'8vh',
        backgroundColor:'white',
        // px:1,
        // paddingTop:'8px',
        // paddingLeft:'8px',
        paddingTop:'1vh',
        paddingLeft:'1vw',
        
     
    }}>
     

     <Box sx={{
        display:'flex',

        alignItems:'center',
        justifyContent:'flex-start',
         width:'100%',
         
        
     }}>
     
 
        <Typography
          variant="h1"
          sx={{
            color: 'black', 
            fontSize: '25px',
            fontWeight: '600', 
          }}
        >
          Overview
        </Typography>

        
        <Box 
        sx={{
          // marginLeft:'300px',
          marginLeft:'20vw',
          display:'flex',
          alignItems:'center',
          // textAlign:'end',
          
          justifyContent:'center',
          gap:6,
          // gap:'5vw',
        


        }}
        >


     


<TextField
  placeholder="Search"
  size="small"
  sx={{
    width: { xs: '100%', sm: '300px' }, 
    backgroundColor: '#F5F3FF', 
    color:'#5041BC',
    borderRadius: '37px', 
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none', // No border
      },
      '&:hover fieldset': {
        border: 'none', 
      },
      '&.Mui-focused fieldset': {
        border: 'none', 
      },
      
      borderRadius: '37px',
    },
    '& .MuiInputBase-input': {
      padding: '8px 8px', 
    },
  }}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <SearchIcon sx={{ color: 'grey.600' }} />
      </InputAdornment>
    ),
    'aria-label': 'Search dashboard', // Accessibility
  }}
/>




          <i class="ri-notification-3-fill"></i>


          <img src="Profile icon.jpg" alt="" />

          <Typography>Danielle Campbell</Typography>
          
          <img src="downArrow.png" alt="" />


          </Box>

    


    </Box>


    </Box>







  {/* Table */}
  <Box sx={{
    width:'100%',
    height:'45vh',
    backgroundColor:'white',

  }}>

   
   {/* <Typography sx={{
    paddingX:'12px',
    fontWeight:'600',
   }}>Top Sales Executive</Typography> */}

   <TableComponent/>
  




  </Box>





 {/* Cards */}
 <Box sx={{
    width:'100%',
    height:'12vh',
    backgroundColor:'white',
 }}>
    
    <Cards/>

 </Box>





 {/* Page Bottom */}
 <Box sx={{
    width:'100%',
    height:'33vh',
    backgroundColor:'white',
    display:'flex',
    px:1,
 }}>
 

   <Box sx={{width:'60%',height:'100%',backgroundColor:''}}></Box> 
    <Box sx={{width:'40%',height:'100%',backgroundColor:'',}}> 




   {/* <img src="colored_graph.jpg" alt="" /> */}

   </Box>



 </Box>

      
    </>
  )
}

export default Rightbar
