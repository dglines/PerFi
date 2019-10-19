import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

const AddExpense = props => {
  //const [type, setType] = useState(props.type)
  //const type = props.expenseType
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("")
  const id = Math.ceil(Math.random() * 1000000)

  useEffect(() => {
    const expenseType = props.expenseTypes.filter(
      type => type.id === props.match.params.expense_type_id
    )
    setType(expenseType[0].type)
  }, [props, props.expenseTypes, props.match.params.expense_type_id, type])

  /* FIREBASE SUBSCRIPTION
  function onSubmit(e) {
    e.preventDefault()

    firebase
      .firestore()
      .collection("ExpenseItems")
      .add({
        type: type,
        description: description,
        amount: parseInt(amount)
      })
      .then(() => {
        const increment = firebase.firestore.FieldValue.increment(
          parseInt(amount)
        )
        // add new expense amount to ExpenseType balance
        firebase
          .firestore()
          .collection("ExpenseTypes")
          .doc(type)
          .update({ balance: increment })
      })

    // add new expense amount to ExpenseType balance
    // firebase
    //   .firestore()
    //   .collection("ExpensesTypes")
    //   .doc(this.state.type)
    //   .update({ balance: this.state.amount })
  }
  */
  const onSubmit = e => {
    e.preventDefault()
    setAmount(parseFloat(amount).toFixed(2))
    props.addExpense({
      id: id,
      type: type,
      amount: amount,
      description: description
    })
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
        <h4>Add Expense Item</h4>
        <label>Type:</label>
        <input readOnly type="text" value={type} />
      </div>

      <div>
        <label>Description:</label>
        <input
          type="description"
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
        {/* maybe a custom hook for this one? */}
      </div>

      <button type="button" onClick={back}>
        Cancel
      </button>
      <button onSubmit={onSubmit}>Add</button>
    </form>
  )
}
const mapStateToProps = state => {
  return {
    expenseTypes: state.expenseTypes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addExpense: expense => {
      dispatch({ type: "ADD_EXPENSE", expense: expense })
    }
  }
}

export default connect(
  mapStateToProps, // no need for state
  mapDispatchToProps
)(AddExpense)
