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
  ],
  income: [{ id: "1", amount: "100", description: "nothing" }],
  balance: { spent: "345.07", start: "600.00" }
}

const temprootReducer = (state = initState, action) => {
  // Expense Items
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

      existingExpense.amount = action.expense.amount
      existingExpense.description = action.expense.description
      existingExpense.type = action.expense.type
      break
    // Expense Types
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
      // remove expenses that need updated
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
    case "SET_START":
      const newBalance = {
        start: action.amount,
        spent: state.balance.spent
      }
      return {
        ...state,
        balance: newBalance
      }
    case "ADD_INCOME":
      return {
        ...state,
        income: [...state.income, action.income]
      }

    default:
      return state
  }
}

export default temprootReducer
