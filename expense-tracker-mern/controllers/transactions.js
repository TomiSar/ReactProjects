// Import TransactionSchema from models/Transaction
const Transaction = require('../models/Transaction');

// All Method that are used to interact with database 
// @desc    Get All transactions 
// @route   GET /api/v1/transactions
// @access  Public    
exports.getTransactions = async (get, res, next) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

// @desc    Add A transaction 
// @route   POST /api/v1/transactions
// @access  Public
// Postman http://localhost:4000/api/v1/transactions
// {
//     "text": "Payment",
//     "amount": 500
// }
exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body;
        const transaction = await Transaction.create(req.body);  
        return res.status(201).json({
            success: true,
            data: transaction
        }); 
    } catch (err) {
        if (err.name === 'ValidationError') {
            // Get error messages
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server error'
            });
        }
    }
}

// @desc    Post transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
// Delet http://localhost:4000/api/v1/transactions/{id}
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'No transaction found on database'
            })
        }

        await transaction.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}
