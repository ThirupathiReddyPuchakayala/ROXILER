import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
    if (!data || data.length === 0) return <p>Loading chart...</p>;

    const labels = data.map(item => item._id);
    const values = data.map(item => item.count);

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Categories',
                data: values,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#8E44AD'],
            },
        ],
    };

    return <Pie data={chartData} />;
};

export default PieChart;
