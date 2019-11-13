import { combineReducers } from "redux"
import { firestoreReducer } from "redux-firestore"
import expenseReducer from "./expenseReducer"
import expenseTypeReducer from "./expenseTypeReducer"

const rootReducer = combineReducers({
  //expenses: expenseReducer,
  expenseTypes: expenseTypeReducer,
  // income: incomeReducer,
  // balance: balanceReducer,
  firestore: firestoreReducer
})

export default rootReducer
