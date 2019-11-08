import React, { useState } from "react"
import { connect } from "react-redux"

const AddIncome = props => {
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    const income = {
      amount: amount,
      description: description
    }
    props.addIncome(income)
    back()
  }
  const back = () => {
    props.history.push("/")
  }
  return (
    <div className="container">
      <h4>Add Income</h4>
      <form onSubmit={onSubmit} className="add-income">
        <label> description:</label>
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.currentTarget.value)}
        ></input>
        <label>$</label>
        <input
          type="number"
          step="0.01"
          placeholder="0.00"
          value={amount}
          onChange={e => setAmount(e.currentTarget.value)}
        ></input>
        <button className="btn" onClick={back}>
          Cancel
        </button>
        <button className="btn" onSubmit={onSubmit}>
          Add
        </button>
      </form>
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

const mapDispatchToProps = dispatch => {
  return {
    addIncome: income => {
      dispatch({ type: "ADD_INCOME", income })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddIncome)
