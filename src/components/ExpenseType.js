import React, { useState } from "react"
import ExpenseList from "./ExpenseList"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import MaterialIcon from "material-icons-react"

const ExpenseType = props => {
  const [isClicked, setClicked] = useState(false)

  return (
    <div>
      <div className="expenseType" onClick={() => setClicked(!isClicked)}>
        <Link to={"/type/" + props.id} className="edit_icon">
          <MaterialIcon icon="edit" size="15" />
        </Link>
        <span>{props.type}</span>
        <span className="planned">{Number(props.budget).toFixed(2)}</span>
        <span className="actual">{Number(props.balance).toFixed(2)}</span>
        <span className="diff">
          {Number(props.budget - props.balance).toFixed(2)}
        </span>
        <span>
          <Link to={"/expense/" + props.type + "/0"}>
            <MaterialIcon icon="add_circle" size="15" />
          </Link>
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

export default connect(mapStateToProps)(ExpenseType)
