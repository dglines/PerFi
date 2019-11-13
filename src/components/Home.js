import React from "react"
import BalanceBanner from "./BalanceBanner"
import ExpenseTypeList from "./ExpenseTypeList"
import { Link } from "react-router-dom"
import MaterialIcon from "material-icons-react"
import logo from "../img/fin_logo_2.ico"

const Home = props => {
  return (
    <div>
      <img src={logo} alt="" height="50" width="50" />
      {/* <BalanceBanner history={props.history} /> */}
      <br />
      <ExpenseTypeList history={props.history} />
      <br />
      <Link to={"/type/0"}>
        <MaterialIcon icon="add_circle" size="40" />
      </Link>
    </div>
  )
}

export default Home
