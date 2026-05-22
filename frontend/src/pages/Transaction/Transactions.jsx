import React, { useState } from 'react'
import './Transactions.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import FilterList from '../../components/FilterList/FilterList'
import { useFinanceData } from '../../context/FinanceContext'
import { useNavigate } from "react-router";


const Transactions = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const { transactions, expensesCategoty, category, dispatch, editingTransaction,
    setEditingTransaction, searchInput } = useFinanceData();

  const navigate = useNavigate();

  

  //dispatch delete
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  const data = [...transactions];

  const searchedTransactions = searchInput
    ? data.filter((t) =>
      t.note.toLowerCase().includes(searchInput.toLowerCase())
    )
    : data;

  // Filter Transactions
  const filteredTransactions =
    category === "All"
      ? searchedTransactions
      : searchedTransactions.filter(
        (transaction) => transaction.category === category
      );

  //sort from recent-last
  const sortedTransactions = [...filteredTransactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const groupedTransactions = sortedTransactions.reduce((acc, transaction) => {
    const transactionDate = new Date(transaction.date);
    const today = new Date();

    // TODAY
    const isToday =
      transactionDate.toDateString() === today.toDateString();

    // YESTERDAY
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const isYesterday =
      transactionDate.toDateString() === yesterday.toDateString();

    let group;

    if (isToday) {
      group = "Today";
    }
    else if (isYesterday) {
      group = "Yesterday";
    }
    else {

      // FORMATTED DATE
      group = transactionDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
      });

    }

    // CREATE GROUP ARRAY
    if (!acc[group]) {
      acc[group] = [];
    }

    // PUSH TRANSACTION
    acc[group].push(transaction);

    return acc;

  }, {});


  return (
    <div>Transactions
      <SearchBar />
      <FilterList />
      {transactions.length ===0 && <h3 style={{textAlign:'center'}}>No transactions yet.</h3>}
      <div>
        {
          Object.entries(groupedTransactions).map(([group, items]) => (
            <div key={group}>

              {/* DATE TITLE */}
              <h4>{group}</h4>

              {/* TRANSACTIONS */}
              <div>
                {items.map((t) => {

                  // find matched category object from expensesCategory array
                  const matchedCategory = expensesCategoty.find(
                    (ele) => ele.name === t.category
                  );

                  return (
                    <div key={t.id} className="transactionListParent"
                      onClick={() =>
                        setActiveMenu(activeMenu === t.id ? null : t.id)}>

                      {/* LEFT SIDE */}
                      <div className="transactionListChild1">

                        {/* IMAGE DIV */}
                        <div className="transactionCategoryImageWrapper">
                          <img
                            src={matchedCategory?.img}
                            alt={t.category}
                            className="transactionCategoryImage"
                          />
                        </div>

                        {/* NOTE + CATEGORY */}
                        <div className="transactionDetails">
                          <p className="transactionNote">{t.note}</p>
                          <p className="transactionCategory">{t.category}</p>
                        </div>
                      </div>

                      {/* RIGHT SIDE */}
                      <div className="transactionListChild2">

                        {/* if expense show - else + */}
                        <p className="transactionAmount">
                          {t.type === "expense"
                            ? `-'$' ${t.amount}`
                            : `+'$' ${t.amount}`}
                        </p>

                        {/* SHOW ONLY WHEN ACTIVE */}
                        {activeMenu === t.id && (
                          <div className="actionButtons">

                            <button
                              className="editBtn"
                              onClick={(e) => {
                                e.stopPropagation();
                                setEditingTransaction(t);

                                navigate("/add-transaction");
                              }}
                            >
                              Edit
                            </button>

                            <button
                              className="deleteBtn"
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteTransaction(t.id);
                                console.log("Delete", t.id);
                              }}
                            >
                              Delete
                            </button>

                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Transactions