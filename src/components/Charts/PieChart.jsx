"use client"
import {
    Card
} from "../../components/ui/card"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Bust seam', 'Re-Busseam', 'Fold and fix Inner Panel', 'Attach Hook and Eye'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom'
        },
    },
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
const PieChart = () => {
    return (
        <>
            <div className="w-[100%] d-flex space-between">
                <Card style={cardTitle}>
                    <p>Performance by Operation</p>
                </Card>
                <Card  style={cardBody}>
                    <Pie options={options} data={data} width={300} height={300}/>
                </Card>
            </div>
        </>
    )
}

export default PieChart;