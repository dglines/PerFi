// import React, { useState, useEffect } from "react"
// import ExpenseList from "./ExpenseList"
// import firebase from "../firebase"

// function useExpenses(type) {
//   const [expenses, setExpenses] = useState([])
//   console.log(type)
//   useEffect(() => {
//     const unsubscribe = firebase
//       .firestore()
//       .collection("ExpenseItems")
//       .where("type", "==", type)
//       .onSnapshot(snapshot => {
//         const newExpenses = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }))
//         setExpenses(newExpenses)
//       })
//     return () => unsubscribe()
//   }, [type])
//   return expenses
// }

// export const ExpenseType = props => {
//   const [isClicked, setClicked] = useState(false)
//   const expenses = useExpenses(props.type)
//   console.log(expenses)
//   let balance = 0
//   // if (expenses.length > 0) {
//   //   balance = expenses.reduce((total, cur) => total + cur)
//   // }
//   return (
//     <div className="expense-type" onClick={() => setClicked(!isClicked)}>
//       <div>
//         <span>{props.type}......</span>
//         <span className="planned">{props.budget}</span>
//         <span>.........</span>
//         <span className="actual">{balance}</span>
//         <span>.........</span>
//         <span className="diff">{props.budget - balance}</span>
//       </div>
//       {isClicked && <ExpenseList type={props.type} />}
//     </div>
//   )
// }
