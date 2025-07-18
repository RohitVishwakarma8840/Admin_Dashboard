import { Height } from '@mui/icons-material'
import React from 'react'
import { Box, Typography,Button } from '@mui/material'
import GetAppIcon from '@mui/icons-material/GetApp';

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
            display:'flex',
             justifyContent:'space-between', gap:2,

           }}>
       <Button sx={{fontFamily:'Nunito', color:'black',textTransform:'none',
       border:'1px solid #dadada',
       width:'2.5rem',
       fontSize:{
        sm:'0.5rem' ,lg:'1rem' , md:'1rem',xl:'2rem',
       },
       flex:1,
      
       Width:'400px',
        fontSize:'1.1rem'}}>Export </Button>

       <Button sx={{fontFamily:'Nunito',color:'black',
       flex:1, width:'100px',
       fontSize:'1rem', border:'1px solid #dadada',
      
        textTransform:'none'}}>Resolve</Button>
       </Box>

    </Box>


  


  </Box>


       
    </>
  )
}

export default Claims
