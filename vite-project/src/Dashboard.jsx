import React from 'react'
import {Box,Typography,TextField} from '@mui/material'
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TableComponent from './TableComponent';
import Cards from './Cards';
import Graph from './Graph';
import { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Dashboard() {


   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option) => {
    console.log(`${option} clicked!`);
    setIsDropdownOpen(false); 
  };

  const closeDropdown= () => {
    setIsDropdownOpen(false);
  }







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
        display:'flex',
        alignItems:'center',
      
        
     
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

        </Box>

        
        <Box 
        sx={{
          // marginLeft:'300px',
          marginRight:'2vw',
          display:'flex',
          alignItems:'center',
          // textAlign:'end',
          
          justifyContent:'flex-end',
          gap:5,
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
       
   '& ::placeholder': {
  color: 'blue',
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




          <NotificationsIcon sx={{color:'#5041BC'}}/>


          <img src="Profile icon.jpg" alt="" />

          <Typography
            sx={{
              textWrap:'nowrap',
              fontFamily:'Nunito'
            }}
        
          >Danielle Campbell</Typography>
          
          <img src="downArrow.png" alt=""  onClick={handleDropdownToggle} width={'10px'} height={'10px'}/>


           {/* Dropdown  - Conditionally Rendereding happening */}
    {isDropdownOpen && (
      <Box
        sx={{
          position: 'absolute',
          top: '8%', 
          right: '1%',
          backgroundColor: 'white',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
          borderRadius: '8px',
          minWidth: '180px',
          display: 'flex',
          flexDirection: 'column',
          padding: '8px', 
        }}
      >

        <Box sx={{
          display:'flex', justifyContent:'space-between',alignItems:'center'
        }}>
        <Typography
          onClick={() => handleOptionClick('Login')}
          sx={{
            py: '8px',
            px: '16px',
            cursor: 'pointer',
            fontFamily:'Nunito',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          Logout
        </Typography>

 <CloseIcon onClick={closeDropdown}/>



        </Box>
        <Typography
          onClick={() => handleOptionClick('Profile')}
          sx={{
            py: '8px',
            px: '16px',
            cursor: 'pointer',
            fontFamily:'Nunito',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          View Profile
        </Typography>
      </Box>
    )}


          </Box>

    


    </Box>


    







  {/* Table */}
  <Box sx={{
    width:'100%',
    height:'42vh',
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
    height:'18vh',
    backgroundColor:'white',
   
 }}>
    
    <Cards/>

 </Box>





 {/* Page Bottom */}
 <Box sx={{
    width:'100%',
    height:'30vh',
    backgroundColor:'white',
    display:'flex',
    px:0,
    alignItems:'center',
    justifyContent:'center',
    marginTop:0,
  
 }}>
 

   <Box sx={{width:'60%',height:'100%',display:'flex',alignItems:"center"}}>
    {/* <Graph/> */}
    <img src="graph card.jpg" alt="" style={{width:'100%',height:'94%',objectFit:'contain',display:'block'}}/>
    </Box> 
    <Box sx={{width:'40%',height:'100%',display:'flex',alignItems:"center",}}> 

    <img src="colored_graph.jpg" alt="" style={{width:'100%',height:'100%',
      objectFit:"contain",
      
      }} />


   

    </Box> 



 </Box>

      
    </>
  )
}

export default Dashboard
