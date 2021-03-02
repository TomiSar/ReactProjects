const mongoose = require('mongoose');

// Schema
const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative amount (number)']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports =  mongoose.model('Transaction', TransactionSchema);