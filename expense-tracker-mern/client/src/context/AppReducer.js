export default (state, action) => {
  switch (action.type) {
    case 'GET_TRANSACTIONS':
        return {
            ...state,
            loading: false,
            transactions: action.payload
        }

    case 'DELETE_TRANSACTION':
        return {
            ...state,
            transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
        }
    // Add action.payload [...states.transactions, action.payload] new transaction to last when fetching API
    case 'ADD_TRANSACTION':
        return {
            ...state,
            transactions: [...state.transactions, action.payload]
        }
    case 'TRANSACTION_ERROR':
        return {
            ...state,
            error: action.payload
        }
    default:
      return state;
  }
}