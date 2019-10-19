import React from "react"
import ExpenseTypeList from "./ExpenseTypeList"
import { Link } from "react-router-dom"

const Home = props => {
  return (
    <div>
      <ExpenseTypeList history={props.history} />
      <Link to={"/type/" + Math.ceil(Math.random() * 1000000)}>+</Link>
    </div>
  )
}

export default Home
