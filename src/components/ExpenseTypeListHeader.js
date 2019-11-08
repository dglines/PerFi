import React from "react"
import { connect } from "react-redux"

const ExpenseTypeListHeader = props => {
  //console.log(planned, actual)
  return (
    <div className="header-cont container">
      <div className="table-header row">
        <div className="expense-title col s4">Expenses</div>
        <div className="col">
          <div className="row">
            <div className="col-name planned col s8">Planned</div>
            <div className="col-name actual col s8">Actual</div>
            <div className="col-name diff col s3">diff</div>
          </div>
          <div className="row">
            <div className="container "></div>
            <div className="header-bottom planned col ">
              ${Number(props.planned).toFixed(2)}
            </div>
            <div className="header-bottom actual col ">
              ${Number(props.actual).toFixed(2)}
            </div>
            <div className="header-bottom diff col ">
              ${Number(props.planned - props.actual).toFixed(2)}
            </div>
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
