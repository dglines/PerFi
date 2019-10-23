import React from "react"
import Balance from "./Balance"
import ExpenseTypeList from "./ExpenseTypeList"
import { Link } from "react-router-dom"
import MaterialIcon from "material-icons-react"

const Home = props => {
  return (
    <div>
      <Balance />
      <ExpenseTypeList history={props.history} />
      <br />
      <Link to={"/type/0"}>
        <MaterialIcon icon="add_circle" size="40" />
      </Link>
    </div>
  )
}

export default Home
