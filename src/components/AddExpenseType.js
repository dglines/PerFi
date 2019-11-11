import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { addTypeAction, updateTypeAction } from "../actions/ExpenseTypeActions"

const AddExpenseType = props => {
  const [expenseType, setExpenseType] = useState("")
  const [budget, setBudget] = useState("")
  const [id, setID] = useState("")
  const [btnText, setBtnText] = useState("Add")

  // TODO *** double check logic of useEffect hooks
  useEffect(() => {
    const tempType = props.expenseTypes.find(
      type => type.id === props.match.params.expense_type_id
    )
    if (typeof tempType !== "undefined") {
      // If the expense_type_id route param is 0, it is a new expense type.
      // Otherwise, it is an existing expense type so populate form fields.
      setID(tempType.id)
      setExpenseType(tempType.type)
      setBudget(tempType.budget)
      setBtnText("Update")
    } else {
      // generate a new ID for this new expense type
      setID(Math.ceil(Math.random() * 1000000).toString())
    }
  }, [props, props.match.params.expense_type_id])

  const onSubmit = e => {
    e.preventDefault()
    //check if type already exists
    let typeExists = props.expenseTypes.find(curType => {
      return curType.type !== expenseType
    })
    if (!typeExists) {
      // Don't allow duplicate types
      alert("That expense category already exists.")
      return
    }

    // check if its an add or update
    if (btnText === "Add") {
      props.addType({ id: id, type: expenseType, budget: budget })
    } else {
      // TODO *** create update_type action and call its dispatch here
      props.updateType({ id: id, type: expenseType, budget: budget })
    }

    back()
  }
  // handle delete button click
  const handleDelete = () => {
    props.deleteType(id, expenseType)
    back()
  }
  const back = () => {
    setExpenseType("")
    setBudget("")
    props.history.push("/")
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="addType">
        <h4>{btnText} Expense Category</h4>
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
        <button className="btn" type="button" onClick={back}>
          Cancel
        </button>
        <button className="btn" type="submit">
          {btnText}
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    expenseTypes: state.expenseTypes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addType: newType => {
      //dispatch({ type: "ADD_TYPE", expenseType: newType })
      dispatch(addTypeAction(newType))
    },
    updateType: type => {
      dispatch(updateTypeAction(type))
    },
    deleteType: (id, type) => {
      dispatch({ type: "DELETE_TYPE", id: id, expenseType: type })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExpenseType)
