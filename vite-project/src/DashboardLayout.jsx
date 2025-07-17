import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import LeftBar from './LeftBar';
import Rightbar from './Dashboard';
import Cards from './Cards';
import Dashboard from './Dashboard';
import Subscriptions from './Tabs/Subscriptions';
import Claims from './Tabs/Claims';
import Biller_Queue from './Tabs/Biller_Queue'
import Health from './Tabs/Health';


function DashboardLayout() {


  const [activeTab,setActiveTab] = useState('Dashboard');
  

  // console.log('activeTab', activeTab);

  
let content;

switch (activeTab) {
  case 'Dashboard':
    content = <Dashboard/>;
    break;
  case 'Subscriptions':
    content = <Subscriptions/>;
    break;
  case 'Claims':
    content = <Claims/>;
    break;
  case 'Biller Queue':
    content = <Biller_Queue/>;
    break;
  case 'Health':
    content =  <Health/>;
    break;
 
}



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
    width:'17%',
    height:'100vh',
    
    backgroundColor:'#5041BC'
    // backgroundColor:'#5041BC'
   }}>
    <LeftBar activeTab={activeTab} setActiveTab={setActiveTab}/>

   </Box>


   {/* Right Bar */}
   <Box sx={{
    width:'83%',
    height:'100vh',
    backgroundColor:'white',
    padding:'8px',
    borderRadius:'20px',
    
    
   }}>

    {content}


   </Box>

      
    </Box>
  );
}

export default DashboardLayout;