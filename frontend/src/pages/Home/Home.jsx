import React, { useState } from 'react'
import { useFinanceData } from '../../context/FinanceContext';
import './Home.css'
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { toast } from 'react-toastify';

const Home = () => {

  const { transactions, expensesCategoty } = useFinanceData();


  //calculate income
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  //calculate expense
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  //show recent 3 data
  const lastFourTransactions = transactions.slice(-3);

  //total
  const total = income - expense;

  function handleView() {
    toast.success('open Transaction Page')
  }
  return (
    <div className='transactionWrapper'
      style={{
        backgroundColor: '#f3f4f6', // light gray app background
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        paddingTop: "0.5rem"
      }}
    >

      {/* Total Balance Card */}
      <div
        style={{
          color: 'white',
          padding: '1rem',
          borderRadius: '0.8rem',
          textAlign: 'center'
        }}
      >
        <p style={{ fontSize: '16px', color: 'black' }}>TOTAL BALANCE</p>

        <p
          style={{
            margin: '10px 0 0 0',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: 'black'
          }}
        >
          $ {total}
        </p>
      </div>


      {/* Income & Expense */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'center',
          gap: '15px',
        }}
      >

        {/* Income */}
        <div
          style={{
            width: '100%',
            backgroundColor: 'white',
            flex: 1,
            padding: '20px',
          }}
        >
          <p
            style={{
              margin: 0,
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <FaArrowTrendUp color="green" />
            INCOME
          </p>

          <p
            style={{
              backgroundColor: 'white',
              marginTop: '10px',
              fontSize: '24px',
              fontWeight: 'bold',

            }}
          >
            $ {income}
          </p>
        </div>

        {/* Expense */}
        <div
          style={{
            backgroundColor: 'white',
            flex: 1,
            padding: '20px',
            borderRadius: '4px',
          }}
        >
          <p
            style={{
              margin: 0,
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <FaArrowTrendDown color="red" />
            EXPENSES
          </p>

          <p
            style={{
              backgroundColor: 'white',
              marginTop: '10px',
              fontSize: '24px',
              fontWeight: 'bold',

            }}
          >
            $ {expense}
          </p>
        </div>
      </div>

      {/* Spend Analysis */}
      <div
        style={{
          backgroundColor: '#111827',
          color: 'white',
          padding: '20px',

        }}
      >
        <h3 style={{
          margin: 0,
          backgroundColor: '#111827',
        }}>Spend Analysis</h3>

        <p style={{ marginTop: '10px', backgroundColor: '#111827', marginRight: '5rem' }}>
          You spent 12% less on dining this week
        </p>
      </div>

      {/* Transactions */}
      <div
        style={{
          display: "flex",
          justifyContent: 'space-between',
          padding: '0.5rem',
          borderRadius: '12px',
        }}
      >
        <h3 style={{ fontSize: '16px' }}>Recent Transactions</h3>
        <p onClick={handleView} style={{ fontSize: '16px', cursor: 'pointer' }}>VIEW ALL</p>
      </div>
      {transactions.length ===0 && <h3 style={{textAlign:'center'}}>No transactions yet.</h3>}
      <div>
        {lastFourTransactions.map((t) => {

          // find matched category object from expensesCategory array
          const matchedCategory = expensesCategoty.find(
            (item) => item.name === t.category
          );

          return (
            <div key={t.id} className="transactionListParent">

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

                <p className="transactionDate">{
                  new Date(t.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",

                  })
                }</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Home