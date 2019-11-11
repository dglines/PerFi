import React from "react"
import { connect } from "react-redux"

const ExpenseTypeListHeader = props => {
  //console.log(planned, actual)
  return (
    <div className="header-container ">
      <div className="expense-title">Expenses</div>
      <div className="header-rows">
        <div className="headder-column">
          <div className="planned ">Planned</div>
          <div className="planned">${Number(props.planned).toFixed(2)}</div>
        </div>

        <div className="header-column">
          <div className="actual ">Actual</div>
          <div className="actual">${Number(props.actual).toFixed(2)}</div>
        </div>

        <div className="headder-column">
          <div className="diff ">diff</div>
          <div className="diff">
            ${Number(props.planned - props.actual).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    planned: state.expenseTypes.reduce(
      (accumulator, type) => accumulator + parseFloat(type.budget),
      0
    ),
    actual: state.expenses.reduce(
      (accumulator, expense) => accumulator + parseFloat(expense.amount),
      0
    )
  }
}

export default connect(mapStateToProps)(ExpenseTypeListHeader)
