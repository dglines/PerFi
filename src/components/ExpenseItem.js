import React from "react"
import { connect } from "react-redux"

const ExpenseItem = props => {
  // Click handler for delete button
  const handleClick = () => {
    return props.deleteExpense(props.id)
  }

  return (
    <div className="expenseItem">
      <span>
        ........
        {props.description}
        ........
        {props.amount}
        .....
        <button onClick={handleClick}>delete</button>
      </span>
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
