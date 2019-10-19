import React, { useState } from "react"
import { connect } from "react-redux"

const AddExpenseType = props => {
  const [expenseType, setExpenseType] = useState("")
  const [budget, setBudget] = useState(0)

  const onSubmit = e => {
    e.preventDefault()
    props.addType({ type: expenseType, budget: budget })
    back()
  }
  const back = () => {
    setExpenseType([])
    setBudget([])
    props.history.push("/")
  }
  return (
    <div>
      <form onSubmit={onSubmit} className="addType">
        <h4>Add New Expense Category</h4>
        <label>
          Expense Type
          <input
            id="type"
            type="text"
            value={expenseType}
            onChange={e => setExpenseType(e.currentTarget.value)}
          />
        </label>
        <br />
        <label>
          Budget
          <input
            type="number"
            value={budget}
            onChange={e => setBudget(e.currentTarget.value)}
          />
        </label>
        <br />
        <button type="button" onClick={back}>
          back
        </button>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addType: newType => {
      dispatch({ type: "ADD_TYPE", expenseType: newType })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddExpenseType)
