const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')

// dotenv config file path 
dotenv.config({ path: './config/config.env' })

connectDB();

// import transactions from routes
const transactions = require('./routes/transactions');

const app = express();
app.use(express.json());

// development mode use Morgan
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Request in this --> route to transactions. This route overrides the '/' route.
// Postman GET http://localhost:4000/api/v1/transactions
app.use('/api/v1/transactions', transactions);

// Check produnction build first its going to load index.html
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build',
    'index.html')));
}  

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));