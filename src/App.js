import React from "react"
import AddExpenseType from "./components/AddExpenseType"
import AddExpense from "./components/AddExpense"
import Home from "./components/Home"
import { BrowserRouter, Route } from "react-router-dom"

export const App = () => (
  <BrowserRouter>
    <div className="App">
      {/*<AddExpenseType />
    <AddExpense />*/}
      <Route exact path="/" component={Home} />
      <Route path="/type/:expense_type" component={AddExpenseType} />
      <Route path="/expense/:expense_type_id" component={AddExpense} />
    </div>
  </BrowserRouter>
)

export default App
