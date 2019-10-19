import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

const AddExpenseType = props => {
  const [expenseType, setExpenseType] = useState("")
  const [budget, setBudget] = useState("")
  const [id, setID] = useState(0)

  useEffect(() => {
    setID(props.match.params.expense_type_id)
  }, [props.match.params.expense_type_id])

  const onSubmit = e => {
    e.preventDefault()
    props.addType({ id: id, type: expenseType, budget: budget })
    back()
  }
  const back = () => {
    setExpenseType("")
    setBudget(0)
    props.history.push("/")
  }
  return (
    <div>
      <form onSubmit={onSubmit} className="addType">
        <h4>Add New Expense Category</h4>
        <label>
          Expense Type:
          <input
            id="type"
            type="text"
            value={expenseType}
            onChange={e => setExpenseType(e.currentTarget.value)}
            required
          />
        </label>
        <br />
        <label>
          Budget: $
          <input
            type="number"
            placeholder="0.00"
            value={budget}
            onChange={e => setBudget(e.currentTarget.value)}
            required
          />
        </label>
        <br />
        <button type="button" onClick={back}>
          Cancel
        </button>
        <button type="submit">Add</button>
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
