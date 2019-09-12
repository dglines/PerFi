import React, { useState, useEffect } from "react"
import { ExpenseList } from "./ExpenseList"
import firebase from "../firebase"

function useExpenses() {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("ExpenseTypes")
      .onSnapshot(snapshot => {
        const newExpenses = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setExpenses(newExpenses)
      })
    return () => unsubscribe()
  }, [])
  return expenses
}

export const ExpenseType = () => {
  const expenses = useExpenses()
  const [isClicked, setClicked] = useState(false)

  return (
    <div>
      <h2>Expenses</h2>
      {/* this is how you populate a list */}
      <ul>
        {expenses.map(expense => (
          <div className="expense">
            <li
              key={expense.id}
              onClick={() => {
                setClicked(!isClicked)
                console.log(isClicked)
              }}
            >
              <div className="expense-type">{expense.type}</div>
              <div className="expense-amount">{expense.balance}</div>
            </li>
            {isClicked && <ExpenseList expenseType={expense.type} />}
          </div>
        ))}
      </ul>
    </div>
  )
}
