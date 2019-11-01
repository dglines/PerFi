import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const ExpenseItem = props => {
  return (
    <div className="expenseItem row">
      <div className="col s3"></div>
      <Link to={"/expense/" + props.type + "/" + props.id} className="red-text">
        <div className="description truncate col s4">{props.description}</div>
        <div className="amount col s2">{Number(props.amount).toFixed(2)}</div>
      </Link>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteExpense: id => {
      dispatch({ type: "DELETE_EXPENSE", id: id })
    }
  }
}

export default connect(
  null, // no need to match state to props
  mapDispatchToProps
)(ExpenseItem)
