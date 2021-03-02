const express = require('express');
const dotenv = require('dotenv');
const solors = require('colors');
const morgan = require('morgan');
// dotenv config file path 
dotenv.config({path: './config/donfig.env'});
// import transactions from routes
const transactions = require('./routes/transactions');

const app = express();

// Request in this --> route to transactions. This route overrides the '/' route.
// Postman GET http://localhost:4000/api/v1/transactions
app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));