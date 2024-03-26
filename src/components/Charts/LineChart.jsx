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


const LineChart = () => {

  const cardBody = {
    width: "45%",
    justifyContent: 'center',
    alignItem: 'center',
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
        <Line options={options} data={data} />
      </div>
    </>
  )
}

export default LineChart;
