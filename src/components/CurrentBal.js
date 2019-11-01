import React from "react"
import { connect } from "react-redux"
import MaterialIcon from "material-icons-react"

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
  return (
    <div>
      <span className="cur_bal">Current Balance: $</span>
      <span style={{ color: balanceColor }}>
        {Number(props.start - props.spent).toFixed(2)}
      </span>
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
