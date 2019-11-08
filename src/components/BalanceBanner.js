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

const BalanceBanner = props => {
  console.log(props)
  const changeStart = () => {
    props.history.push("/setStart")
  }

  const addToBalance = () => {
    props.history.push("/addIncome")
  }
  const balance = props.start + props.income - props.spent
  const balanceColor = getBalanceColor(balance)
  return (
    <div className="balance-banner row">
      <div
        className="start_bal col s6 left valign-wrapper"
        onClick={changeStart}
      >
        Start Balance: ${props.start}
      </div>
      <div className="right valign-wrapper">
        <span className="cur_bal ">Current Balance: $</span>
        <span style={{ color: balanceColor }}>
          {Number(balance).toFixed(2)}
        </span>
        <span>
          <i className="material-icons small right" onClick={addToBalance}>
            add_circle
          </i>
        </span>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    spent: state.expenses.reduce(
      (accumulator, expense) => accumulator + parseFloat(expense.amount),
      0
    ),
    start: parseFloat(state.balance.start),
    income: state.income.reduce(
      (accumulator, income) => accumulator + parseFloat(income.amount),
      0
    )
  }
}

export default connect(mapStateToProps)(BalanceBanner)
