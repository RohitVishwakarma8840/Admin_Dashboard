import React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography, Avatar } from '@mui/material';

function SalesTable() {
  const data = [
    { name: <img src="Profile icon.jpg" alt="" /> ,P:'John doe',sales: '$2540.58', products: 150, premium: 105, status: '+Gold', avatar: 'path/to/nicholas.jpg', button: '' },
    { name: <img src="Profile icon.jpg" alt="" /> ,P:'John doe', sales: '$1567.80', products: 95, premium: 60, status: '+Silver', avatar: 'path/to/cordell.jpg' },
    { name: <img src="Profile icon.jpg" alt="" /> , P:'John doe',sales: '$1640.26', products: 120, premium: 75, status: '+Silver', avatar: 'path/to/derrick.jpg' },
    { name: <img src="Profile icon.jpg" alt="" /> , P:'John doe',sales: '$2340.58', products: 120, premium: 99, status: '+Gold', avatar: 'path/to/larissa.jpg' },
  ];

  return (
    <Box sx={{ width: '100%', backgroundColor: '#fff', padding: '8px', borderRadius: '20px' }}>
      <Typography  sx={{ fontWeight: '600', marginBottom: '8px', color: '#333' }}>
        Top Sales Representative
      </Typography>
      <Table>
       
        <TableBody sx={{
          backgroundColor:'black'
        
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
            
              <TableCell sx={{ color: '#black', fontSize: '14px',fontWeight:'600' }}>{row.P}</TableCell>
              <TableCell sx={{ color: '#000', fontSize: '14px',fontWeight:'600' }}>{row.sales}</TableCell>
              <TableCell sx={{ color: '#333', fontSize: '14px' }}>{row.products}</TableCell>
              <TableCell sx={{ color: '#333', fontSize: '14px' }}>{row.premium}</TableCell>
              <TableCell sx={{ color: row.status === '+Gold' ? '#F5A623' : '#34A853', fontWeight: 'bold' }}>
                {row.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default SalesTable;