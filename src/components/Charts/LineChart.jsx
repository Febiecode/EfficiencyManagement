"use client"
import {
    Card
} from "../../components/ui/card"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
  scales: {
    y1: {
      position: 'left',
      title: {
        display: true,
        text: 'Defects in #s',
      },
    },
    y2: {
      position: 'right',
      title: {
        display: true,
        text: 'Machine Downtime in mins',
      },
    },
  },
};

const labels = ['Line1', 'Line2', 'Line3'];

export const data = {
  labels,
  datasets: [
    {
      yAxisID: 'y1',
      label: 'Defects',
      data: [11, 8, 17],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      yAxisID: 'y2',
      label: 'Downtime',
      data: [13, 18, 9],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
const LineChart = () => {
    return (
        <>
            <div className="w-[100%] d-flex space-between">
                <Card style={cardTitle}>
                    <p>Line Wise - Defect and Downtime</p>
                </Card>
                <Card  style={cardBody}>
                    <Line options={options} data={data} width={300} height={300}/>
                </Card>
            </div>
        </>
    )
}

export default LineChart;
