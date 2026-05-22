

export const expenseReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }

        case "UPDATE_TRANSACTION":

            return {
                ...state,

                transactions: state.transactions.map((transaction) =>

                    transaction.id === action.payload.id
                        ? action.payload
                        : transaction
                )
            };
        case "DELETE_TRANSACTION":

            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== action.payload
                )
            };

        default:
            return state;
    }

}
