import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { Button } from '@mui/material';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2'; 

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement); 

function Subscriptions() {

    const barData = {
        labels: ['2021', '2022', '20243', '2024', '2025'],
        datasets: [{
            label: 'Customer Repeat',
            data: [45, 76, 63,82, 39],
            backgroundColor: 'rgba(24, 248, 136, 0.6)',
            borderColor: 'rgba(150, 100, 255, 1)',
            borderWidth: 1
        }]
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) { 
                            label += context.parsed.y;
                        }
                        return label;
                    }
                }
            }
        },
        scales: { 
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    };

    // Data for the Doughnut chart
    const chartData = {
        labels: ['Premium Subscription', 'Enterprise', 'Basic'],
        datasets: [
            {
                data: [30, 45, 25], 
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)', 
                    'rgba(54, 162, 235, 0.8)', 
                    'rgba(26, 0, 11, 0.8)', 
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)', 
                ],
                borderWidth: 1,
            },
        ],
    };

    //   Doughnut chart
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            label += context.parsed + '%'; 
                        }
                        return label;
                    }
                }
            }
        }
    };

    const SubData = [
        { name: 'Subscribers', count: '1.2K', mainIcon: <TrendingDownIcon />, sideIcon: <CardMembershipIcon />, bgcolor: 'aqua', },
        {
            name: 'Revenue',
            count: '$300K',
            mainIcon: <TrendingUpIcon />,
            sideIcon: <AttachMoneyIcon />,
            bgcolor: 'lightgreen',
        },
        {
            name: 'Renewal Rate',
            count: '50%',
            mainIcon: <BarChartIcon />,
            sideIcon: <ShoppingCartIcon />,
            bgcolor: 'pink',
        },
        {
            name: 'Average Lifetime',
            count: '1 month',
            mainIcon: <TrendingUpIcon />,
            sideIcon: <PeopleIcon />,
            bgcolor: 'lightyellow',
        }
    ];

    return (
        <>
            <Box sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                p: 0,
                m: 0,
            }}>

                {/* Header */}
                <Box sx={{
                    height: '10%', width: '100%', backgroundColor: 'white', p: 1,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                    <Typography sx={{
                        fontSize: { xs: '0.7rem', md: '1rem', lg: '1.6rem' },
                        fontFamily: 'Nunito',
                    }}>
                        Subscriptions
                    </Typography>

                    <Box sx={{
                        display: 'flex', justifyContent: 'space-between', textTransform: 'none', gap: '1rem',
                    }}>
                        <Button sx={{
                            color: '#000', fontFamily: 'Nunito',
                            fontSize: { xs: '0.75rem', sm: '0.875rem', lg: '1.1rem', xl: '2rem' },
                            border: '1px solid #dadada',
                            textTransform: 'none'
                        }} >Export</Button>

                        <Button sx={{
                            color: 'black', fontFamily: 'Nunito',
                            fontSize: { xs: '0.75rem', sm: '0.875rem', lg: '1.1rem', xl: '2rem' },
                            border: '1px solid #dadada',
                            textTransform: 'none'
                        }}>Graphview</Button>
                    </Box>
                </Box>

                {/* Subscriptions Cards */}
                <Box
                    sx={{
                        width: '100%', height: '20%', backgroundColor: 'white', display: 'flex', gap: '0.5rem',
                        marginTop: '0.5rem',
                    }}>
                    {SubData.map((data, index) => (
                        <Box key={index} sx={{
                            bgcolor: data.bgcolor, width: '28%', height: '80%', display: 'flex',
                            justifyContent: 'space-between',
                            border: '1px solid #dadada', paddingY: 2, paddingX: 1, borderRadius: '15px'
                        }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10%' }}>
                                <Typography sx={{
                                    color: 'black', fontFamily: 'Nunito',
                                    fontSize: {
                                        lg: '1.2rem',
                                        xl: '1.5rem',
                                        md: '1rem',
                                        xs: '0.4rem',
                                    },
                                }}>{data.name}</Typography>
                                {data.mainIcon}
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10%' }}>
                                <Typography sx={{ color: 'black', fontFamily: 'Nunito' }}>{data.count}</Typography>
                                {data.sideIcon}
                            </Box>
                        </Box>
                    ))}
                </Box>




                {/* Charts Section */}
                <Box sx={{
                    width: '100%', height: '60%', backgroundColor: 'green', 
                    display: 'flex',
                    margin: 0
                }}>
                    <Box sx={{
                        bgcolor: 'white',
                        height: '100%', width: '50%',
                        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'
                    }}>
                        <Doughnut data={chartData} options={chartOptions} />
                    </Box>

                    <Box sx={{
                        bgcolor: 'white', 
                        height: '100%', width: '50%',
                        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' // Added padding for potential chart
                    }}>
                        <Bar data={barData} options={barOptions} />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Subscriptions;