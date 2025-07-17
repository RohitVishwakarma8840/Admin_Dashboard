import React from 'react'
import {Box,Typography,TextField} from '@mui/material'
import {Link} from '@mui/material'
import Icon from '@mui/material/Icon';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


function Cards() {


 const cardData = [
    {
      heading: 'Product Sold',
      price: '25.1K',
      change: '+15%',
      changeColor: 'success.main',
      iconClass: 'ri-shopping-cart-line',
      iconBgColor: '#E5DFFF',
      bgcolor:'#A7F0BA'
    },
    {
      heading: 'Total Profit',
      price: '$4,580',
      change: '+22%',
      changeColor: 'success.main',
      iconClass: 'ri-wallet-3-line',
      iconBgColor: '#DFFFE2',
      bgcolor:'#0000ff60',
    },
    {
      heading: 'New Customers',
      price: '850',
      change: '-7%',
      changeColor: 'error.main',
      iconClass: 'ri-user-add-line',
      iconBgColor: 'white',
      bgcolor:'#ffc0cb57'
    },
    {
      heading: 'Total Revenue',
      price: '$28.5K',
      change: '+18%',
      changeColor: 'success.main',
      iconClass: 'ri-pie-chart-line',
      iconBgColor: '#FFF3D8',
      bgcolor:'#ffa60033'
    },
  ];



  return (
    <>



  <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap:1,
        paddingX: 1,
        paddingY:0,
        marginY:0,
        minWidth:'800px',
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        backgroundColor: 'white',
        height:'100%',
        
       
         
      }}
    >
    
      {cardData.map((card, index) => (
        <Box
          key={index} 
          sx={{
             flexGrow: 1, 
            // minWidth: '250px', 
            // maxWidth: '300px',
            width:'18%',
             backgroundColor: card.bgcolor,
           
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            border: '1px solid #e0e0e0',
            padding: 1.2,
            borderRadius: '16px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0.4,
            }}
          >
            <Typography sx={{ color: '#6c757d', fontWeight: '500',fontFamily:'Nunito', }}>
              {card.heading}
            </Typography>
            <Typography sx={{ fontWeight: '600', fontSize: '1.4rem' }}>
              {card.price}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" sx={{ color: card.changeColor, fontWeight: 'bold' }}>
                {card.change}
              </Typography>
              {/* <Typography variant="body2" sx={{ color: '#6c757d' }}>
                this month
              </Typography> */}
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: '48px',
                // width:'100%',
                // height:'100%',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: card.iconBgColor,
                mb: 2, // Margin bottom
              }}
            >
              <Icon
                className={card.iconClass}
                sx={{ fontSize: '24px', color: '#563acc' }}
              />
            </Box>
            <Link href="#" sx={{ fontSize: '0.875rem', textDecoration: 'none',fontFamily:'Nunito' }}>
              View More
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
      
    </>
  )
}

export default Cards
