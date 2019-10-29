import React, { useState } from "react"
import ExpenseList from "./ExpenseList"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import MaterialIcon from "material-icons-react"

const ExpenseType = props => {
  const [isClicked, setClicked] = useState(false)
  const [icon, setIcon] = useState("chevron_right")
  //var icon = "chevron_right"
  const handleExpand = () => {
    console.log(isClicked)
    setClicked(!isClicked)
    isClicked ? setIcon("chevron_right") : setIcon("chevron_left")
  }

  const handleAdd = () => {
    props.history.push("/expense/" + props.type + "/0")
  }

  return (
    <div>
      <div className="expenseType">
        {/*<span>
          <Link to={"/expense/" + props.type + "/0"}>
            <MaterialIcon icon="add_circle" size="15" />
          </Link>
        </span>*/}
        {isClicked && (
          <MaterialIcon icon="expand_less" onClick={handleExpand} />
        )}
        {!isClicked && (
          <MaterialIcon icon="expand_more" onClick={handleExpand} />
        )}
        <Link to={"/type/" + props.id} className="edit_icon">
          <MaterialIcon icon="edit" size="15" />
        </Link>
        <span className="clickable_expense_type" onClick={handleAdd}>
          <span>{props.type}</span>
          <span className="planned">{Number(props.budget).toFixed(2)}</span>
          <span className="actual">{Number(props.balance).toFixed(2)}</span>
          <span className="diff">
            {Number(props.budget - props.balance).toFixed(2)}
          </span>
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
