const mongoose = require('mongoose');

// Define a schema for transactions
const transactionSchema = new mongoose.Schema({
    type: { type: String, required: true },  // Income or Expense
    amount: { type: Number, required: true },  // Transaction amount
    category: { type: String, required: true },  // Category of transaction
    date: { type: Date, default: Date.now },  // Date of transaction (defaults to now)
});

// Create and export the Transaction model
module.exports = mongoose.model('Transaction', transactionSchema);
