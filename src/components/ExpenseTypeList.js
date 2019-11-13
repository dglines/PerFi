import React from "react"
import ExpenseType from "./ExpenseType"
import ExpenseTypeListHeader from "./ExpenseTypeListHeader"
import "../styles.css"
import { connect } from "react-redux"
/* FIREBASE SUBSCRIPTION
** moved up to ExpenseTypeListContainer
function useExpenseTypes() {
  const [expenseTypes, setExpenseTypes] = useState([])

  // populate expense types from firebase
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("ExpenseItems")
      .onSnapshot(snapshot => {
        const newExpenseTypes = snapshot.docs.map(doc => ({
          type: doc.id,
          ...doc.data()
        }))
        setExpenseTypes(newExpenseTypes)
      })
    return () => unsubscribe()
  }, [])
  return expenseTypes
 }
*/
const ExpenseTypeList = props => {
  const expenseTypes = props.expenseTypes.map(type => {
    return (
      <div key={type.id} className="expense_type_list">
        <ExpenseType
          key={type.id}
          history={props.history}
          id={type.id}
          type={type.type}
          budget={type.budget}
        />
      </div>
    )
  })

  return (
    <div className="expense_type_list">
      <ExpenseTypeListHeader />
      {expenseTypes}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    expenseTypes: state.expenseTypes.expenseTypes
  }
}
export default connect(mapStateToProps)(ExpenseTypeList)
