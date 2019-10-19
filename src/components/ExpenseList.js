import React from "react"
import { connect } from "react-redux"
import ExpenseItem from "./ExpenseItem"
/*  FIREBASE SUBSCRIPTION

function useExpenses(type) {
const [expenses, setExpenses] = useState([])
const [expenseType, setExpenseType] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("ExpenseTypes")
      .doc(type)
      .collection("Expenses")
      .onSnapshot(snapshot => {
        const newExpenses = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setExpenses(newExpenses)
      })
    return () => unsubscribe()
  }, [type])
  return expenses
}
*/

function ExpenseList(props) {
  // create array of expenses
  const expenses = props.expenses.map(expense => {
    return (
      <div key={expense.id}>
        <ExpenseItem
          id={expense.id}
          description={expense.description}
          type={expense.type}
          amount={expense.amount}
        />
      </div>
    )
  })

  // return array of expenses
  return <div>{expenses}</div>
}

// get state from redux
const mapStateToProps = (state, ownProps) => {
  return {
    expenses: state.expenses.filter(
      expense => expense.type === ownProps.expenseType
    )
  }
}

export default connect(mapStateToProps)(ExpenseList)
