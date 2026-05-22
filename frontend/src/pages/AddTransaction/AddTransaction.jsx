import React, { useState, useEffect } from 'react'
import ToggleButton from '../../components/ToggleButton/ToggleButton'
import './AddTransaction.css'
import ExpensesForm from '../../components/ExpensesForm/ExpensesFrom'
import { useFinanceData } from '../../context/FinanceContext'
import { toast } from 'react-toastify';

const AddTransaction = () => {
  const [amount, setAmount] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const { dispatch, expensesCategoty, formData, setFormData,
    editingTransaction, setEditingTransaction } = useFinanceData();

  function handleCategory(ele, index) {
    setActiveIndex(index);
    setFormData({
      ...formData, category: ele.name
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.category == '') {
      toast.error('Please select category')
      return
    }

    //dispatch add transaction
    if (editingTransaction) {

      dispatch({
        type: "UPDATE_TRANSACTION",
        payload: {
          ...formData
        }
      });

      setEditingTransaction(null);

    } else {

      dispatch({
        type: "ADD_TRANSACTION",
        payload: {
          id: Date.now(),
          ...formData,
          date: formData.date
        }
      });

    }

    setFormData({
      amount: '',
      note: '',
      type: 'expense',
      date: null,
      category: ''
    });
  }





  useEffect(() => {
    if (editingTransaction) {
      setFormData({
        id: editingTransaction.id,
        amount: editingTransaction.amount,
        note: editingTransaction.note,
        type: editingTransaction.type,
        date: editingTransaction.date,
        category: editingTransaction.category
      });

    }

  }, [editingTransaction]);

  return (
    <form onSubmit={handleSubmit}>
      {/* Expenses Type */}
      <ToggleButton />

      {/* Amount Form*/}
      <div className="balanceContainer">
        <div className="balanceCard">
          <p className="balanceTitle">AMOUNT</p>

          <div className="inputWrapper">
            <span className="dollarSign">$</span>

            <input
              type="text"
              placeholder="0.00"
              value={formData.amount}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  amount: e.target.value
                })
              }
              className="amountInput"
              required
            />
          </div>
        </div>
      </div>

      {/* Category */}
      <div>
        CATEGORY
      </div>
      <div className="categoryGrid">
        {
          expensesCategoty.slice(1).map((ele, index) => (
            <div key={ele.id} className="categoryCard"
              onClick={() => handleCategory(ele, index)} >
              <div
                className={`categoryCard ${activeIndex === index ? "active" : ""}`}
              >
                <img src={ele.img} alt="" />
              </div>

              <p>{ele.name}</p>
            </div>
          ))
        }
      </div>

      {/* Expenses Form Date and  */}
      <ExpensesForm />

      <div className='btnWrapper'>
        <button type="submit">
          {editingTransaction ? "Save Update" : "Save Transaction"}
        </button>
      </div>
    </form>
  )
}

export default AddTransaction