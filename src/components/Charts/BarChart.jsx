"use client"
import React, { useEffect, useRef } from 'react';
import {
    Card
} from "../../components/ui/card"
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

const cardBody = {
    'margin-top': '10px',
    'padding':'20px',
    'box-shadow': 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px',
    'border-radius': '5px',
}
const cardTitle = {
    'margin-top': '10px',
    'padding':'5px',
    'backgroundColor':'#D7D7D7',
    'color':'#000',
    'text-align':'center',
    'border-radius': '5px',
}
const BarChart = () => {
    return (
        <>
            <div className="w-[100%] d-flex space-between">
                <Card style={cardTitle}>
                    <p>Line Wise - Target vs Actual</p>
                </Card>
                <Card  style={cardBody}>
                    <Bar options={options} data={data} width={300} height={300}/>
                </Card>
            </div>
        </>
    )
}

export default BarChart;