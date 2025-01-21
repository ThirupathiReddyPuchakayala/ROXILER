import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
    if (!data || data.length === 0) return <p>Loading chart...</p>;

    const labels = data.map(item => `${item._id}`);
    const values = data.map(item => item.count);

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Price Range',
                data: values,
                backgroundColor: 'rgba(75,192,192,0.6)',
            },
        ],
    };

    return <Bar data={chartData} />;
};

export default BarChart;
