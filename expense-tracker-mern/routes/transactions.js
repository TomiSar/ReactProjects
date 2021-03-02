const route = require('color-convert/route');
const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');

// Define all routes (path, method) GET and POST methods
router.route('/').get(getTransactions).post(addTransaction);
// DELETE method needs an id (which to delete)
router.route('/:id').delete(deleteTransaction);

module.exports = router;