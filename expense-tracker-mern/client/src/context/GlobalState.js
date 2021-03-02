import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Context API (documentation) ==> https://reactjs.org/docs/context.html
// initialState state no transactions
const initialState = {
    transactions: [],
    error: null,
    loading: true
};

// Initial state (dummy transActions data for test purposes)
// const initialState = {
//     transactions: [
//         { id: 1, text: 'Flower', amount: -30 },
//         { id: 2, text: 'Salary', amount: 350 },
//         { id: 3, text: 'Food', amount: -70 },
//         { id: 4, text: 'Camera', amount: 150 }
//     ]
// };
// Create context (used in TransactionList)

export const GlobalContext = createContext(initialState);

// Provider Component (wrap all other components inside this component)
// Provides a state, actions, etc.. to the components it's wrap around
// 1. AppReducer is passed to useReducer
// 2. state values (transactions) can be accessed 
// 3. Then it's passed to the value of Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions that makes a call to Reducer, Delete transaction with id, Add, GET
    // initialState state calls the transactionList ans that fetches the transactions from backend (in DB)
    // Dispacth the data to Reducer and send the data as payload to reducer. Reducer handles the data and send it to Provider.
    // Provider (wrapper) send the data to Main components. 
    async function getTransactions () {
        try {
            const res = await axios.get('/api/v1/transactions');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function addTransaction(transaction) {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions/', transaction, config);
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}