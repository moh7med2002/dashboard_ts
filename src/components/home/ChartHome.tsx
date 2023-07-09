import React from 'react'
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',"August","September","Octuber"];
export const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top' as const,
    },
    title: {
        display: true,
        text: 'Orders Stats',
    },
    },
};

const data = {
    labels,
    datasets: [
        {
            label: 'Accepted',
            data: [10,20,30,40,50,20,30,20,40,30],
            backgroundColor: '#0cbc87',
        },
        {
            label: 'Canceled',
            data: [20,30,10,40,30,50,40,10,50,40],
            backgroundColor: '#d6293e',
        },
        ],
    };

export default function Chart() {
    return (
        <div className='rounded-md px-3 py-3 shadow bg-white'>
            <Bar options={options} data={data}/>
        </div>
    )
}