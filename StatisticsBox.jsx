import React from 'react';

const StatisticsBox = ({ statistics }) => {
    if (!statistics) return <p>Loading statistics...</p>;

    return (
        <div>
            <h2>Statistics</h2>
            <p>Total Sales Amount: ${statistics.totalAmount}</p>
            <p>Sold Items: {statistics.totalSold}</p>
            <p>Unsold Items: {statistics.totalNotSold}</p>
        </div>
    );
};

export default StatisticsBox;
