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
