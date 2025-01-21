import React, { useState, useEffect } from 'react';
import { fetchTransactions, fetchStatistics, fetchBarChart, fetchPieChart } from './api';
import TransactionsTable from './components/TransactionsTable';
import StatisticsBox from './components/StatisticsBox';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

const App = () => {
    const [month, setMonth] = useState('March');
    const [transactions, setTransactions] = useState([]);
    const [statistics, setStatistics] = useState(null);
    const [barChart, setBarChart] = useState([]);
    const [pieChart, setPieChart] = useState([]);

    // Fetch Data when the month changes
    useEffect(() => {
        loadData();
    }, [month]);

    const loadData = async () => {
        try {
            const transRes = await fetchTransactions(month);
            setTransactions(transRes.data);

            const statsRes = await fetchStatistics(month);
            setStatistics(statsRes.data);

            const barRes = await fetchBarChart(month);
            setBarChart(barRes.data);

            const pieRes = await fetchPieChart(month);
            setPieChart(pieRes.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Transaction Dashboard</h1>

            {/* Month Selection Dropdown */}
            <label>Select Month: </label>
            <select onChange={(e) => setMonth(e.target.value)} value={month}>
                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => 
                    <option key={m} value={m}>{m}</option>
                )}
            </select>

            {/* Statistics Section */}
            <StatisticsBox statistics={statistics} />

            {/* Transactions Table */}
            <TransactionsTable transactions={transactions} />

            {/* Bar Chart for Price Ranges */}
            <BarChart data={barChart} />

            {/* Pie Chart for Categories */}
            <PieChart data={pieChart} />
        </div>
    );
};

export default App;
