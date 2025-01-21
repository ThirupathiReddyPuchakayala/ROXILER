const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());  // Parse JSON requests
app.use(cors());  // Allow cross-origin requests (frontend to backend)

// Routes
app.use('/transactions', require('./routes/transactionRoutes'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
