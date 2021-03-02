export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
        return {
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
    // Add action.payload new transaction to current transactions array [...states.transactions]
    case 'ADD_TRANSACTION':
        return {
            ...state,
            transactions: [action.payload, ...state.transactions]
        }
    default:
      return state;
  }
}