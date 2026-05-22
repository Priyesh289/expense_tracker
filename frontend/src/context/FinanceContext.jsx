import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { expensesCategoty } from '../assets/assets'
const FinanceContext = createContext();
import { assets } from "../assets/assets";
import { expenseReducer } from "./expenseReducer";

const inialState = {
    transactions: JSON.parse(localStorage.getItem("Data")) || []
}

const FinanceContextProvider = ({ children }) => {

    const [total, seTotal] = useState(0)
    const [category, setCategoty] = useState('All');
    const [editingTransaction, setEditingTransaction] = useState(null);
    const [searchInput, setSearchInput] = useState('')

    const [state, dispatch] = useReducer(expenseReducer, inialState)

    const [formData, setFormData] = useState({
        amount: '',
        note: '',
        type: 'expense',
        date: null,
        category: ''
    })
    const { transactions } = state



    let value = {

        expensesCategoty, category, setCategoty,
        assets, formData, setFormData, dispatch, transactions: state.transactions, editingTransaction,
        setEditingTransaction, searchInput, setSearchInput
    }

    useEffect(() => {
        localStorage.setItem('Data', JSON.stringify(transactions))
        console.log(transactions);

    }, [transactions])



    return (
        <FinanceContext.Provider value={value}>
            {children}
        </FinanceContext.Provider>
    )
}

export const useFinanceData = () => {
    return useContext(FinanceContext)
}
export default FinanceContextProvider;
