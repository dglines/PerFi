const initState = {
  expenseTypes: [
    { id: "1", budget: "450", type: "Grocery" },
    { id: "2", budget: "300", type: "Misc" },
    { id: "3", budget: "50", type: "Restaruant" },
    { id: "4", budget: "30", type: "Gas" },
    { id: "5", budget: "111", type: "Insurence" },
    { id: "6", budget: "1500", type: "Rent" },
    { id: "7", budget: "76", type: "YMCA" }
  ],
  expenses: [
    { id: "1", amount: "75.50", description: "Kroger", type: "Grocery" },
    { id: "2", amount: "121.45", description: "Sams", type: "Grocery" },
    { id: "3", amount: "12.45", description: "Toyota", type: "Gas" },
    { id: "4", amount: "111", description: "Geic0", type: "Insurence" },
    { id: "5", amount: "24.67", description: "Kroger", type: "Grocery" }
  ],
  spent: "345.07",
  start: "600.00"
}

const rootReducer = (state = initState, action) => {
  // Expense Items
  if (action.type === "DELETE_EXPENSE") {
    const newExpenses = state.expenses.filter(
      expense => expense.id !== action.epense.id
    )
    return {
      ...state,
      expenses: newExpenses
    }
  } else if (action.type === "ADD_EXPENSE") {
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

    // Expense Types
  } else if (action.type === "DELETE_TYPE") {
    // delete expenses of that type
    const newExpenses = state.expenses.filter(
      expense => expense.type !== action.expenseType
    )
    const newTypes = state.expenseTypes.filter(
      expenseType => expenseType.id !== action.id
    )

    return {
      expenseTypes: newTypes,
      expenses: newExpenses
    }
  } else if (action.type === "ADD_TYPE") {
    // if id is already present in expenseTypes
    const existingType = state.expenseTypes.find(
      type => type.id === action.expenseType.id
    )
    if (typeof existingType === "undefined") {
      // type is new so insert it into state
      const newType = {
        id: action.expenseType.id,
        budget: action.expenseType.budget,
        type: action.expenseType.type
      }
      return {
        ...state,
        expenseTypes: [...state.expenseTypes, newType]
      }
    }
    // remove expenses that need updated
    const oldExpenses = state.expenses.filter(
      expense => expense.type !== existingType.type
    )
    // grab expenses that need updated
    const updatedExpenses = state.expenses.filter(
      expense => expense.type === existingType.type
    )
    updatedExpenses.forEach(expense => (expense.type = action.expenseType.type))

    // update existing type's properties
    // really not supposed to do it this way.
    //should create a new state.expenseType instead of modifying
    existingType.type = action.expenseType.type
    existingType.budget = action.expenseType.budget

    return {
      ...state,
      expenses: [...oldExpenses, ...updatedExpenses]
    }
  }
  return state
}

export default rootReducer
