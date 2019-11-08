import { getFirestore } from "redux-firestore"

export const addTypeAction = expenseType => {
  return (dispatch, getState, { getFirebase, getFirstore }) => {
    // async call to firebase
    const firestore = getFirestore()
    firestore
      .collection("expenseTypes")
      .add({
        ...expenseType,
        created: new Date()
      })
      .then(() => {
        // resume dispatch
        dispatch({ type: "ADD_TYPE", expenseType })
      })
      .catch(error => {
        // something went wrong with firebase call
        dispatch({ type: "Add_Type_Errpr", error })
      })
  }
}
