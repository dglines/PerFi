import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import {
  addExpenseAction,
  updateExpenseAction,
  deleteExpenseAction
} from "../actions/ExpenseActions"

const AddExpense = props => {
  //const [type, setType] = useState(props.type)
  //const type = props.expenseType
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("")
  const [id, setId] = useState("")
  const [btnText, setBtnText] = useState("Add")

  useEffect(() => {
    const existingExpense = props.expenses.find(
      type => type.id === props.match.params.expense_id
    )
    if (typeof existingExpense === "undefined") {
      // new type
      setId(Math.ceil(Math.random() * 1000000).toString())
      setType(props.match.params.expense_type)
    } else {
      setId(props.match.params.expense_id)
      setType(existingExpense.type)
      setDescription(existingExpense.description)
      setAmount(existingExpense.amount)
      setBtnText("Update")
    }
  }, [props, props.expenseTypes, props.match.params.expense_type_id, type])

  const onSubmit = e => {
    e.preventDefault()
    setAmount(parseFloat(amount).toFixed(2))

    if (btnText === "Add") {
      // add new expense
      props.addExpense({
        id: id,
        type: type,
        amount: amount,
        description: description
      })
    } else {
      // update existing expense
      props.updateExpense({
        id,
        type,
        amount,
        description
      })
    }
    back()
  }

  const handleDelete = () => {
    props.deleteExpense(id)
    back()
  }

  // back button click handler
  const back = () => {
    setAmount(0)
    setDescription("")
    props.history.push("/")
  }

  return (
    <form onSubmit={onSubmit} className="addItem">
      <div>
        <h4>{btnText} Expense</h4>
        {btnText === "Update" && (
          <div>
            <button
              className="btn-small red"
              type="button"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
        <label>Type:</label>
        <input readOnly type="text" value={type} />
      </div>

      <div>
        <label>Description:</label>
        <input
          id="type"
          type="text"
          value={description}
          onChange={e => setDescription(e.currentTarget.value)}
        />
      </div>
      <div>
        <label>amount: $</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          placeholder="0.00"
          value={amount}
          onChange={e => setAmount(e.currentTarget.value)}
          required
        />
      </div>
      {/* maybe a custom hook for this one? */}
      <button className="btn large" type="button" onClick={back}>
        Cancel
      </button>
      <button className="btn large" onSubmit={onSubmit}>
        {btnText}
      </button>
    </form>
  )
}
const mapStateToProps = state => {
  return {
    expenseTypes: state.expenseTypes.expenseTypes,
    expenses: state.expenseTypes.expenses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addExpense: expense => {
      dispatch(addExpenseAction(expense))
      //  dispatch({ type: "ADD_EXPENSE", expense })
    },
    updateExpense: id => {
      dispatch(updateExpenseAction(id))
    },
    deleteExpense: id => {
      dispatch(deleteExpenseAction(id))
      // dispatch({ type: "DELETE_EXPENSE", id })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExpense)
