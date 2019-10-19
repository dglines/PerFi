import React, { useState } from "react"
import ExpenseList from "./ExpenseList"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const ExpenseTypeTest = props => {
  const [isClicked, setClicked] = useState(false)

  // handle delete button click
  const handleDelete = () => {
    props.deleteType(props.id, props.type)
  }

  return (
    <div>
      <div className="expenseType">
        <span onClick={() => setClicked(!isClicked)}>{props.type}......</span>
        <span className="planned">{props.budget}</span>
        <span>.........</span>
        <span className="actual">{props.balance}</span>
        <span>.........</span>
        <span className="diff">
          {Number(props.budget - props.balance).toFixed(2)}
        </span>
        <span>
          .....
          <button onClick={handleDelete}>delete</button>
          <Link to={"/expense/" + props.id}>+</Link>
        </span>
      </div>
      {isClicked && <ExpenseList expenseType={props.type} />}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    balance: state.expenses
      .filter(expense => expense.type === ownProps.type)
      .reduce(
        (accumulator, expense) => accumulator + parseFloat(expense.amount),
        0
      )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteType: (id, type) => {
      dispatch({ type: "DELETE_TYPE", id: id, expenseType: type })
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseTypeTest)
