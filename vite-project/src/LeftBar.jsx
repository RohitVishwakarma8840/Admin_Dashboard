import React from 'react'
import { Box, color } from '@mui/system'
import { Divider } from '@mui/material'

function LeftBar() {
  return (
    <>
      


  {/* Left Bar Top */}
      <Box sx={{marginTop:'30px',marginLeft:'20px',display:'flex',alignItems:'center'}}>
  <Box sx={{width:'20px',height:'20px',borderRadius:'50%',
    backgroundColor:'#FF7F57'}}></Box>
     <Box sx={{width:'40px',height:'40px',borderRadius:'50%',marginLeft:'-10px',
    backgroundColor:'#FFC629'}}></Box>
    <Box sx={{color:'white',fontSize:'14px',fontWeight:'600',
        marginLeft:'-30px'}}>
        <h1>VENTES</h1>
    </Box>

     </Box>



     <Divider sx={{
       width:'80%',
       height:'1px',
       marginLeft:'10px',
       marginTop:'20px',
      textAlign:'center',
        backgroundColor:'#D8D8D8',
     }}/>


     {/* Tabs Layout  */}

     <Box sx={{
        width:'10%',
        height:'30vh',
        backgroundColor:'#5041BC',
        // backgroundColor:'#fff',

        position:'absolute',
        top:'43%',
        left:'6%',
        transform:'translate(-50%,-50%)',
     }}>

        <Box sx={{
            display:'flex',
            flexDirection:'column',
            gap:2,
            color:"white",
        }}>

        <Box sx={{
            display:'flex', alignItems:'center',justifyContent:'space-between'
        }}>
         <i class="ri-layout-grid-fill"></i>
          <h5>Dashboard</h5>
        </Box>



         <Box sx={{
            display:'flex', alignItems:'center',justifyContent:'space-between'
        }}>
         <i class="ri-dashboard-horizontal-fill"></i>
          <h5>Subscriptions</h5>
        </Box>


        <Box sx={{
            display:'flex', alignItems:'center',justifyContent:'space-between'
        }}>
         <i class="ri-article-line"></i>
          <h5>Claims</h5>
        </Box>

        <Box sx={{
            display:'flex', alignItems:'center',justifyContent:'space-between'
        }}>
        <i class="ri-survey-line"></i>
          <h5>Biller Queue</h5>
        </Box>


         <Box sx={{
            display:'flex', alignItems:'center',justifyContent:'space-between'
        }}>
        <i class="ri-heart-2-fill"></i>
          <h5>Health</h5>
        </Box>


       
       </Box>



     </Box>





     {/* Bottom Upgrade Section */}
     <Box sx={{
        width:'13%',
        position:'absolute',
        top:'55%',
        left:'1%',
        height:'30vh',
        backgroundColor:'white',

     }}>

       <Box>
        
        <img src="" alt="" />

       </Box>


     </Box>



    </>
  )
}

export default LeftBar
