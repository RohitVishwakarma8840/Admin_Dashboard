import { Height } from '@mui/icons-material'
import React from 'react'
import { Box, Typography,Button } from '@mui/material'

function Claims() {
  return (
    <>
      
  <Box sx={{width:'100%',height:'100%',
    backgroundColor:'blue',
  }}>



    {/* Navbar */}
    <Box sx={{
      width:'100%',height:'9%',backgroundColor:'white',
      display:'flex',
       justifyContent:'space-between', 
       alignItems:'center',
      paddingX:1,
    }}
    >


     <Typography sx={{fontSize:'1.2rem',fontWeight:'500',fontFamily:'Nunito'}}>Claim Management</Typography>

           
           <Box sx={{
            display:'flex',justifyContent:'space-between', gap:2,
           }}>
       <Button sx={{fontFamily:'Nunito', color:'black',textTransform:'none',
       border:'1px solid #dadada',
       Width:'400px',
        fontSize:'1.1rem'}}>Export </Button>

       <Button sx={{fontFamily:'Nunito',color:'black',
       fontSize:'1rem', border:'1px solid #dadada',
      
        textTransform:'none'}}>Resolve</Button>
       </Box>

    </Box>


  


  </Box>


       
    </>
  )
}

export default Claims
