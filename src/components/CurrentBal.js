import React from "react"
import { connect } from "react-redux"

const getBalanceColor = money => {
  if (money < 0) {
    return "red"
  } else if (money < 100) {
    return "darkorange"
  } else if (money < 250) {
    return "gold"
  }
  return "green"
}

const CurrentBal = props => {
  const balanceColor = getBalanceColor(props.start - props.spent)
  console.log(props.spent, props.start, balanceColor)
  return (
    <div>
      <h4>
        <span className="start_bal">Current Balance: $</span>
        <span style={{ color: balanceColor }}>
          {Number(props.start - props.spent).toFixed(2)}
        </span>
      </h4>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    spent: state.expenses.reduce(
      (accumulator, expense) => accumulator + parseFloat(expense.amount),
      0
    ),
    start: parseFloat(state.start)
  }
}
export default connect(mapStateToProps)(CurrentBal)
