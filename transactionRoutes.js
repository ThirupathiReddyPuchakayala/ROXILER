const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Get all transactions (GET)
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new transaction (POST)
router.post('/', async (req, res) => {
    const { type, amount, category } = req.body;
    const newTransaction = new Transaction({ type, amount, category });

    try {
        const savedTransaction = await newTransaction.save();
        res.status(201).json(savedTransaction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
