import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Context API (documentation) ==> https://reactjs.org/docs/context.html
const initialState = {
    transactions: []
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

    // Actions that makes a call to Reducer
    // Delete transaction with id
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}