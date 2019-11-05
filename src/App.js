import React from "react"
import AddExpenseType from "./components/AddExpenseType"
import AddExpense from "./components/AddExpense"
import Home from "./components/Home"
import SetStart from "./components/SetStart"
import { BrowserRouter, Route } from "react-router-dom"
import AddIncome from "./components/AddIncome"

export const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/type/:expense_type_id" component={AddExpenseType} />
      <Route path="/expense/:expense_type/:expense_id" component={AddExpense} />
      <Route path="/setStart" component={SetStart} />
      <Route path="/addIncome" component={AddIncome} />
    </div>
  </BrowserRouter>
)

export default App
