import React, { useState } from "react"
import ExpenseList from "./ExpenseList"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import MaterialIcon from "material-icons-react"

const ExpenseType = props => {
  const [isClicked, setClicked] = useState(false)

  const handleExpand = () => {
    setClicked(!isClicked)
  }

  const handleAdd = () => {
    props.history.push("/expense/" + props.type + "/0")
  }

  return (
    <div>
      <div className="expenseTypeRow row valign-wrapper">
        {/*<span>
          <Link to={"/expense/" + props.type + "/0"}>
            <MaterialIcon icon="add_circle" size="15" />
          </Link>
        </span>*/}
        <div className="chevron col s1">
          {isClicked && (
            <MaterialIcon icon="expand_less" onClick={handleExpand} />
          )}
          {!isClicked && (
            <MaterialIcon icon="expand_more" onClick={handleExpand} />
          )}
        </div>
        <div className="edit-icon col s1">
          <Link to={"/type/" + props.id} className="edit_icon">
            <MaterialIcon icon="edit" size="15" />
          </Link>
        </div>

        <div className="clickable_expense_type col s10" onClick={handleAdd}>
          <div className="col s3 truncate">{props.type}</div>
          <div className="planned col s3">
            ${Number(props.budget).toFixed(2)}
          </div>
          <div className="actual col s3">
            ${Number(props.balance).toFixed(2)}
          </div>
          <div className="diff col s3">
            ${Number(props.budget - props.balance).toFixed(2)}
          </div>
        </div>
      </div>
      {isClicked && <ExpenseList expenseType={props.type} />}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    balance: state.expenseTypes.expenses
      .filter(expense => expense.type === ownProps.type)
      .reduce(
        (accumulator, expense) => accumulator + parseFloat(expense.amount),
        0
      )
  }
}

export default connect(mapStateToProps)(ExpenseType)
