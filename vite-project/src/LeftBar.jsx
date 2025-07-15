import React from 'react'
import { Box, color, textAlign } from '@mui/system'
import { Divider } from '@mui/material'
import {Button} from '@mui/material'

function LeftBar() {
  return (
    <>
      


  {/* Left Bar Top */}
      <Box sx={{display:"flex",justifyContent:'center',alignItems:"center" ,mt:3}}>
  <Box sx={{width:'20px',height:'20px',borderRadius:'50%',
    backgroundColor:'#FF7F57'}}></Box>
     <Box sx={{width:'40px',height:'40px',borderRadius:'50%',marginLeft:'-10px',
    backgroundColor:'#FFC629'}}></Box>
    <Box sx={{color:'white',fontSize:'14px',fontWeight:'500',
        marginLeft:'-30px',
        '& h1': {
      fontWeight: 800, // Apply fontWeight directly to h1
      
    },
        }}>
        <h1>VENTES</h1>
    </Box>

     </Box>



     <Divider sx={{
       width:'80%',
       height:'1px',
       marginLeft:'20px',
       marginTop:'20px',
       marginRight:'20px',
      textAlign:'center',
        backgroundColor:'#D8D8D8',
     }}/>


     {/* Tabs Layout  */}

    <Box
  sx={{
    width: '14vw',
    height: '30vh',
    backgroundColor: '#5041BC',
    position: 'absolute',
    top: '36%',
    left: '8%',
    transform: 'translate(-50%,-50%)',
  }}
>
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      gap: 2,
      color: 'white',
    }}
  >
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row', // Ensure row direction for icon and text
        alignItems: 'center',
        gap: '3vw', // Space between icon and text
        height: '20%',
        paddingLeft: '20px', // Optional: consistent left padding for alignment
        '&:hover': {
          backgroundColor: 'white',
          color: 'blue',
          height:'20%',
        },
      }}
    >
      <i className="ri-layout-grid-fill"></i>
      <h5>Dashboard</h5>
    </Box>

    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '3vw',
        height: '20%',
        paddingLeft: '20px',
        '&:hover': {
          backgroundColor: 'white',
          color: 'blue',
          height:'20%',
        },
      }}
    >
      <i className="ri-dashboard-horizontal-fill"></i>
      <h5>Subscriptions</h5>
    </Box>

    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '3vw',
        height: '20%',
        paddingLeft: '20px',
        '&:hover': {
          backgroundColor: 'white',
          color: 'blue',
          height:'20%',
        },
      }}
    >
      <i className="ri-article-line"></i>
      <h5>Claims</h5>
    </Box>

    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '3vw',
        height: '20%',
        paddingLeft: '20px',
        '&:hover': {
          backgroundColor: 'white',
          color: 'blue',
          height:'20%',
        },
      }}
    >
      <i className="ri-survey-line"></i>
      <h5>Biller Queue</h5>
    </Box>

    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '3vw',
        height: '20%',
        paddingLeft: '20px',
        '&:hover': {
          backgroundColor: 'white',
          color: 'blue',
          height:'20%',
        },
      }}
    >
      <i className="ri-heart-2-fill"></i>
      <h5>Health</h5>
    </Box>
  </Box>
</Box>





     {/* Bottom Upgrade Section */}
     <Box sx={{
        width:'14%',
        position:'absolute',
        top:'60%',
        left:'1%',
        height:'33vh',
        // height:'200px',
        backgroundColor:'white',
        borderRadius:'20px',

     }}>

       <Box
       sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        gap:2,
        padding:'1vw',
        fontWeight:600,
        height:'100%',
        width:'100%',
        
        
       }}>
        
        <img src="plane.jpg" alt="" style={{ height: '80%', width: '80%' }} />


        <p style={{
            height:'80%', width:'80%',textAlign:'center'
        }}>Want to Upgrade</p>

      
  

<Button
  sx={{
    backgroundColor: '#FF8057', // Orange background
    color: 'white', // Ensure readable text
    '&:hover': {
      backgroundColor: '#000',
      color:'#fff',
    },
    // default styles
    textTransform: 'none', //
    padding: '4px 4px', 
    borderRadius: '8px',
    border: 'none', 
    // width:'140px',
    width:'9vw',
    height:'7vh',
  }}
>
  Upgrade Now
</Button>
        

       </Box>


     </Box>



    </>
  )
}

export default LeftBar
