import React from "react"

export const ExpenseList = props => {
  return (
    <div>
      <ul>
        <li>
          <div className="expense-item">
            {props.expenseType}
            <code className="amount">450</code>
          </div>
        </li>
      </ul>
    </div>
  )
}
