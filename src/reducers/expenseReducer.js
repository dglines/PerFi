const initState = {
  expenses: [
    { id: "1", amount: "75.50", description: "Kroger", type: "Grocery" },
    { id: "2", amount: "121.45", description: "Sams", type: "Grocery" },
    { id: "3", amount: "12.45", description: "Toyota", type: "Gas" },
    { id: "4", amount: "111", description: "Geico", type: "Insurance" },
    { id: "5", amount: "24.67", description: "Kroger", type: "Grocery" }
  ]
}
const expenseReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_EXPENSE":
      let newExpenses = state.expenses.filter(
        expense => expense.id !== action.id
      )
      return {
        ...state,
        expenses: newExpenses
      }
    case "ADD_EXPENSE":
      const existingExpense = state.expenses.find(
        expense => expense.id === action.expense.id
      )

      if (typeof existingExpense === "undefined") {
        // expense is new, add it
        const newExpense = {
          id: action.expense.id,
          amount: action.expense.amount,
          description: action.expense.description,
          type: action.expense.type
        }
        return {
          ...state,
          expenses: [...state.expenses, newExpense]
        }
      }
      // TODO: this wont work like this
      existingExpense.amount = action.expense.amount
      existingExpense.description = action.expense.description
      existingExpense.type = action.expense.type
      break
    default:
      return state
  }
}
export default expenseReducer
