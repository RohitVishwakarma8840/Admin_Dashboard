import React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography, Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function SalesTable() {
  const data = [
    { name: <img src="Profile icon.jpg" alt="" /> ,P:'Nicholas Patrick',sales: '$2540.58', products: '150 products', premium: '105 premium', status: '+Gold', avatar: 'path/to/nicholas.jpg', },
    { name: <img src="Profile icon.jpg" alt="" /> ,P:'Corodell Edwards', sales: '$1567.80', products:' 95 products', premium: '60 premium', status: '+Silver', avatar: 'path/to/cordell.jpg' },
    { name: <img src="Profile icon.jpg" alt="" /> , P:'Derrick Spinner',sales: '$1640.26', products: '120 products', premium: '75 premium', status: '+Silver', avatar: 'path/to/derrick.jpg' },
    { name: <img src="Profile icon.jpg" alt="" /> , P:'Larissa Burton',sales: '$2340.58', products: '120 products', premium: '99 premium', status: '+Gold', avatar: 'path/to/larissa.jpg' },
  ];

  return (
  <Box sx={{ width: '100%', backgroundColor: 'white', padding: '12px', borderRadius: '20px', height:'90%' }}>
      <Typography  sx={{ fontWeight: '600', marginBottom: '6px', color: '#000' }}>
        Top Sales Representative
      </Typography>
      <Table sx={{
        height:'100%'
      }}>
       
        <TableBody sx={{
        
         
   
        
        }}>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: 'white',
                marginBottom: '0px',
                border:'1px solid #EBE8FF',
                borderRadius: '30px',
              

                // '&:last-child': { marginBottom: 0 },
                '& td': { border: 'none', padding: '4px' },
              }}
            >
              <TableCell>
              <TableCell sx={{ color: '#333', fontSize: '3px' }}>{row.name}</TableCell>
              </TableCell>
            
              <TableCell sx={{ color: '#797D8C', fontSize: '14px',fontWeight:'500' }}>{row.P}</TableCell>
              <TableCell sx={{ color: '#000', fontSize: '14px',fontWeight:'600' }}>{row.sales}</TableCell>
              <TableCell sx={{ color: '#333', fontSize: '14px',fontFamily:'Nunito' }}>{row.products}</TableCell>
              <TableCell sx={{ color: '#333', fontSize: '14px',fontFamily:'Nunito' }}>{row.premium}</TableCell>

              <TableCell sx={{ color: row.status === '+Gold' ? '#F5A623' : '#34A853', fontWeight: 'bold' }}>
                {row.status}
              </TableCell>
              <TableCell><MoreVertIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default SalesTable;