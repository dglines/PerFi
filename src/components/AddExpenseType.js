import React, { useState } from "react"
import firebase from "../firebase"

export const AddExpenseType = () => {
  const [expenseType, setExpenseType] = useState()
  const [budget, setBudget] = useState()

  function onSubmit(e) {
    e.preventDefault()

    firebase
      .firestore()
      .collection("ExpenseTypes")
      .add({
        type: expenseType,
        balance: 0,
        budget: parseInt(budget)
      })
      .then(() => {
        setExpenseType("")
        setBudget("")
      })
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Expense Type</label>
        <input
          type="text"
          value={expenseType}
          onChange={e => setExpenseType(e.currentTarget.value)}
        />
      </div>
      <div>
        <label>Budget</label>
        <input
          type="number"
          value={budget}
          onChange={e => setBudget(e.currentTarget.value)}
        />
      </div>
      <button>Add</button>
    </form>
  )
}
