const initState = {
  expenseTypes: [
    { id: "1", budget: "450", type: "test1" },
    { id: "2", budget: "300", type: "test2" },
    { id: "3", budget: "50", type: "test3" }
  ],
  expenses: [
    { id: "1", amount: "15.50", description: "thing", type: "test1" },
    { id: "2", amount: "12", description: "bologna", type: "test2" }
  ]
}

const rootReducer = (state = initState, action) => {
  // Expense Items
  if (action.type === "DELETE_EXPENSE") {
    const newExpenses = state.expenses.filter(
      expense => expense.id !== action.id
    )
    return {
      ...state,
      expenses: newExpenses
    }
  } else if (action.type === "ADD_EXPENSE") {
    const newExpense = {
      id: action.expense.id,
      amount: parseFloat(action.expense.amount).toFixed(2),
      description: action.expense.description,
      type: action.expense.type
    }
    return {
      ...state,
      expenses: [...state.expenses, newExpense]
    }
    // Expense Types
  } else if (action.type === "DELETE_TYPE") {
    // delete expenses of that type
    const newExpenses = state.expenses.filter(
      expense => expense.type === action.expenseType.type
    )
    const newTypes = state.expenseTypes.filter(
      expenseType => expenseType.id !== action.id
    )

    return {
      expenseTypes: newTypes,
      expenses: newExpenses
    }
  } else if (action.type === "ADD_TYPE") {
    const newType = {
      id: Math.random(),
      budget: action.expenseType.budget,
      type: action.expenseType.type
    }
    return {
      ...state,
      expenseTypes: [...state.expenseTypes, newType]
    }
  }
  return state
}

export default rootReducer
