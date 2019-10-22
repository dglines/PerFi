import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import MaterialIcon from "material-icons-react"

const ExpenseItem = props => {
  return (
    <div className="expenseItem">
      <span className="description">{props.description}</span>
      <span className="amount">{Number(props.amount).toFixed(2)}</span>
      <Link to={"/expense/" + props.type + "/" + props.id}>
        <MaterialIcon icon="edit" size="15" />
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
