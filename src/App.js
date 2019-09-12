import React from "react"
import { ExpenseType } from "./components/ExpenseType"
import { AddExpenseType } from "./components/AddExpenseType"

export const App = () => (
  <div className="App">
    <ExpenseType />
    <AddExpenseType />
  </div>
)

export default App
