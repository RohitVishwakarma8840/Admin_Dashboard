import { Height } from '@mui/icons-material'
import React from 'react'
import { Box,Card,Typography} from '@mui/material'
import {Button} from '@mui/material'
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

function Subscriptions() {


 const SubData = [
     {name:'Subscribers',count:'1200',mainIcon:<TrendingDownIcon/> , sideIcon:<CardMembershipIcon/>,bgcolor:'aqua',},
     { name: 'Revenue',
        count: '$300K',
        mainIcon: <TrendingUpIcon />, // Keeping TrendingUp as revenue often trends
        sideIcon: <AttachMoneyIcon />,
        bgcolor: 'lightgreen', // Changed color slightly for more distinction
    },
     {
        name: 'Renewal Rate',
        count: '50%',
        mainIcon: <BarChartIcon />, // Changed icon for orders
        sideIcon: <ShoppingCartIcon />,
        bgcolor: 'pink',
     },
     {
        name: 'Average Lifetime',
        count: '1 month',
        mainIcon: <TrendingUpIcon />,
        sideIcon: <PeopleIcon />,
        bgcolor: 'lightyellow', // Changed color slightly for more distinction
     }
]




  return (
    <>

    <Box sx={{
       width:'100%',
       height:'100%',
        backgroundColor:'white',
        p:0,
        m:0,
    }}>



    {/* Header */}
    <Box sx={{
        height:'10%',width:'100%',backgroundColor:'white',p:1,
     display:'flex',justifyContent:'space-between',alignItems:'center'
        
    }}>

        <Typography sx={{
          fontSize: { xs: '0.7rem', md: '1rem',lg:'1.6rem' },
          fontFamily: 'Nunito',
        }}>
            Subscriptions
        </Typography>



      <Box sx={{
        display:'flex',justifyContent:'space-between',textTransform:'none',gap:'1rem',
      }}>
        <Button sx={{color:'#000',fontFamily: 'Nunito',
              fontSize: { xs: '0.75rem', sm: '0.875rem',lg:'1.1rem',xl:'2rem' },
                  border:'1px solid #dadada',
                 
            textTransform:'none'}} >Export</Button>

        <Button sx={{color:'black',fontFamily: 'Nunito',
 fontSize: { xs: '0.75rem', sm: '0.875rem',lg:'1.1rem',xl:'2rem' },
       border:'1px solid #dadada',
            textTransform:'none'}}>Graphview</Button>
        </Box>

        

    </Box>



     
   {/* Subscriptions Cards */}
   <Box
    
   
   sx={{
    width:'100%', height:'20%', backgroundColor:'white',display:'flex',gap:'0.5rem',
    marginTop:'0.5rem',
    
   }}>

   
        {SubData.map((data, index) => (
         
        
     <Box  key={index} sx={{bgcolor:data.bgcolor, width:'28%',height:'80%', display:'flex',
        // gap:'49%',
        justifyContent:'space-between',
    border:'1px solid #dadada', paddingY:2,paddingX:1,borderRadius:'15px'
     }}>


     <Box sx={{display:'flex', flexDirection:'column',gap:'10%'}}>
        <Typography sx={{color:'black',fontFamily:'Nunito',
            fontSize: {
    lg: '1.2rem',
    xl: '1.5rem',
    md: '1rem',
    ls:'0.6rem',
    xs:'0.4rem',
},
            
            }}>{data.name}</Typography>

         {data.mainIcon}
        </Box>


 <Box sx={{display:'flex',flexDirection:'column',gap:'10%'}}>
        
         <Typography sx={{color:'black',fontFamily:'Nunito'}}>{data.count}</Typography>
          {data.sideIcon}
        </Box>

        
       


     </Box>
      ))}








   </Box>


<Box sx={{width:'100%',height:'60%',backgroundColor:'green',
  display:'flex',
  margin:0}}>

  
 <Box sx={{bgcolor:'pink',height:'100%',width:'50%'}}>

 </Box>


 <Box sx={{bgcolor:'yellow',height:'100%',width:'50%'}}>



 </Box>



</Box>

     




    </Box>

    
      
    </>
  )
}

export default Subscriptions
