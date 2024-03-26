"use client"
import React, { useEffect, useRef } from 'react';
import UseWindowSize from '../../Hooks/UseWindowSize'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom'
        },
    },
};

const labels = ['Line1', 'Line2', 'Line3'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Target',
            data: [11, 8, 17],
            backgroundColor: 'rgba(255, 99, 132, 1)',
        },
        {
            label: 'Output',
            data: [13, 18, 9],
            backgroundColor: 'rgba(53, 162, 235, 1)',
        },
    ],
};

const BarChart = () => {

    const cardBody = {
        width: "45%",
        border: '1px solid #ddd',
        borderRadius: '5px',
      }
      const chartTitle = {
        padding: '40px',
        fontSize: '18px',
        fontWeight: '500'
      }
      return (
        <>
          <div style={cardBody} >
            <p style={chartTitle}>Line Wise - Defect and Downtime</p>
            <Bar options={options} data={data} />
          </div>
        </>
      )

    // const [windowWidth, setWindowWidth] = UseWindowSize();
    // const cardContainer = {
    //     display: 'flex',
    //     width: '45%',
    //     height: "50%",
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',

    //     alignItems: 'center',
    //     marginRight: '40px'
    // }
    // const resCardContainer = {
    //     display: 'flex',
    //     justifyContent: 'space-evenly',
    //     flexDirection: 'column',
    // }

    // const cardBody = {
    //     width: "80%",
    //     height: "60%",
    //     justifyContent: 'center',
    //     alignItem: 'center',
    //     border: '1px solid #ddd',
    //     borderRadius: '5px',
    // }
    // const chartTitle = {
    //     padding: '20px',
    //     fontSize: '18px',
    //     fontWeight: '500'
    // }
    // return (
    //     <>

    //         <div style={windowWidth > 600 ? cardContainer : resCardContainer}>

    //             <div style={cardBody} >
    //             <p style={chartTitle}>Line Wise - Target vs Actual</p>
    //             <Bar options={options} data={data} />
    //             </div>
    //         </div>
        
    //     </>
    // )
}

export default BarChart;