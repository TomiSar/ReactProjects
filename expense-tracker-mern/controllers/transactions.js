// All Method that are used to interact with database 
// @desc    Get All transactions 
// @route   GET /api/v1/transactions
// @access  Public    
exports.getTransactions = (get, res, next) => {
    res.send('GET transactions');
}

// @desc    Add A transaction 
// @route   POST /api/v1/transactions
// @access  Public    
exports.addTransaction = (post, res, next) => {
    res.send('POST transaction');
}

// @desc    Post transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public    
exports.deleteTransaction = (get, res, next) => {
    res.send('DELETE transaction');
}
