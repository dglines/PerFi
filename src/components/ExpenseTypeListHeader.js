import React from "react"
import { connect } from "react-redux"

const ExpenseTypeListHeader = props => {
  //console.log(planned, actual)
  return (
    <div>
      <div className="table-header">
        <span>Expenses......</span>
        <span className="planned">planned</span>
        <span>......</span>
        <span className="actual">actual</span>
        <span>......</span>
        <span className="diff">diff</span>
      </div>
      <div>
        <span className="planned">............{props.planned}</span>
        <span>......</span>
        <span className="actual">{props.actual}</span>
        <span>......</span>
        <span className="diff">
          {Number(props.planned - props.actual).toFixed(2)}
        </span>
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
