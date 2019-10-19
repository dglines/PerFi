import React from "react"
import ExpenseTypeTest from "./ExpenseTypeTest"
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
      <div key={type.id}>
        <ExpenseTypeTest
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
    <div>
      <ExpenseTypeListHeader />
      {expenseTypes}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    expenseTypes: state.expenseTypes
  }
}
export default connect(mapStateToProps)(ExpenseTypeList)
