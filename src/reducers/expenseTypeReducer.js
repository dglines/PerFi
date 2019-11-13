const initState = {
  expenseTypes: [
    { id: "1", budget: "450", type: "Grocery" },
    { id: "2", budget: "300", type: "Misc" },
    { id: "3", budget: "50", type: "Restaruant" },
    { id: "4", budget: "30", type: "Gas" },
    { id: "5", budget: "111", type: "Insurance" },
    { id: "6", budget: "1500", type: "Rent" },
    { id: "7", budget: "76", type: "YMCA" }
  ],
  expenses: [
    { id: "1", amount: "75.50", description: "Kroger", type: "Grocery" },
    { id: "2", amount: "121.45", description: "Sams", type: "Grocery" },
    { id: "3", amount: "12.45", description: "Toyota", type: "Gas" },
    { id: "4", amount: "111", description: "Geico", type: "Insurance" },
    { id: "5", amount: "24.67", description: "Kroger", type: "Grocery" }
  ]
}

const expenseTypeReducer = (state = initState, action) => {
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

    case "UPDATE_EXPENSE":
      // remove updated expense
      const existingExpenses = state.expenses.filter(
        expense => expense.id !== action.expense.id
      )
      const updatedExpense = {
        ...action.expense
      }
      return {
        ...state,
        expenses: [...existingExpenses, updatedExpense]
      }
    case "DELETE_TYPE":
      // delete expenses of that type
      let remainingExpenses = state.expenses.filter(
        expense => expense.type !== action.expenseType.type
      )
      const remainingTypes = state.expenseTypes.filter(
        expenseType => expenseType.id !== action.expenseType.id
      )
      return {
        ...state,
        expenseTypes: remainingTypes,
        expenses: remainingExpenses
      }
    case "ADD_TYPE":
      const newType = {
        id: action.expenseType.id,
        budget: action.expenseType.budget,
        type: action.expenseType.type
      }
      return {
        ...state,
        expenseTypes: [...state.expenseTypes, newType]
      }

    case "UPDATE_TYPE":
      // get type that is being updated
      const original = state.expenseTypes.find(
        type => type.id === action.expenseType.id
      )
      const existingTypes = state.expenseTypes.filter(
        type => type.id !== action.expenseType.id
      )
      // expenses that dont need updated
      const oldExpenses = state.expenses.filter(
        expense => expense.type !== original.type
      )

      // grab expenses that need updated
      const updatedExpenses = state.expenses.filter(
        expense => expense.type === original.type
      )
      updatedExpenses.forEach(
        expense => (expense.type = action.expenseType.type)
      )

      const newExpenseType = {
        type: action.expenseType.type,
        budget: action.expenseType.budget,
        id: action.expenseType.id
      }

      return {
        ...state,
        expenseTypes: [...existingTypes, newExpenseType],
        expenses: [...oldExpenses, ...updatedExpenses]
      }
    default:
      return state
  }
}
export default expenseTypeReducer
