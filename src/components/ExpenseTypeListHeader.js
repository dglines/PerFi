import React from "react"
import { connect } from "react-redux"

const ExpenseTypeListHeader = props => {
  //console.log(planned, actual)
  return (
    <div>
      <div className="table-header row">
        <h4 className="col s2">Expenses</h4>
        <div className="col s10">
          <div className="col s3"></div>
          <h5 className="planned col s2">planned</h5>
          <h5 className="actual col s2">actual</h5>
          <h5 className="diff col s3">diff</h5>
        </div>
      </div>
      <div className="row">
        <div className="col s2"></div>
        <div className="col s10">
          <div className="col s3"></div>
          <h6 className="planned col s2">
            ${Number(props.planned).toFixed(2)}
          </h6>
          <h6 className="actual col s2">${Number(props.actual).toFixed(2)}</h6>
          <h6 className="diff col s3">
            ${Number(props.planned - props.actual).toFixed(2)}
          </h6>
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
