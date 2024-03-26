"use client"
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
            position: 'right'
        },
    },
    layout: {
        padding: {
            left: 70
          }
      }
};

const PieChart = () => {

    const cardBody = {
        width: "45%",
        height: '600px',
        justifyContent: 'center',
        alignItem: 'center',
        border: '1px solid #ddd',
        borderRadius: '5px',
      }
      const chartTitle = {
        paddingTop: '20px',
        paddingLeft: '40px',
        fontSize: '18px',
        fontWeight: '500'
      }
    return (
        <>
          <div style={cardBody} >
            <p style={chartTitle}>Line Wise - Defect and Downtime</p>
            <Pie options={options} data={data} />
          </div>
        </>
        // <>

        //     <div style={windowWidth > 600 ? cardContainer : resCardContainer}>

        //     <div style={cardBody} >
        //         <p style={chartTitle}>Performance by Operation</p>
        //         <Pie options={options} data={data} width={300} height={300} />
        //     </div>
        //     </div>
            
        // </>
    )
}

export default PieChart;