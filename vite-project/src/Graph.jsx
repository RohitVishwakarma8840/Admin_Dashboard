import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,   // needed for x-axis
  LinearScale,     // needed for y-axis
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Line } from 'react-chartjs-2';

// ✅ register all required parts
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Graph() {
  // example data
  const data = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        label: 'Revenue',
        data: [200, 300, 400],
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54,162,235,0.2)',
        tension: 0.4  // makes the line curved
      }
    ]
  };

  // optional options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        text: 'Sample Line Chart'
      }
    }
  };

  return (
    <>
    {/* <div style={{ width: '80%', height: '40%' }}>
      <Line data={data} options={options} />
    </div> */}
    </>
  );
}

export default Graph;
