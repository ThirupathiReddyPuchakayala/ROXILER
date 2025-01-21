import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchTransactions = (month, search = '', page = 1, perPage = 10) => 
    axios.get(`${API_URL}/transactions`, { params: { month, search, page, perPage } });

export const fetchStatistics = (month) => 
    axios.get(`${API_URL}/statistics`, { params: { month } });

export const fetchBarChart = (month) => 
    axios.get(`${API_URL}/bar-chart`, { params: { month } });

export const fetchPieChart = (month) => 
    axios.get(`${API_URL}/pie-chart`, { params: { month } });

export const fetchCombinedData = (month) => 
    axios.get(`${API_URL}/combined`, { params: { month } });
