import React from "react"
import StartBal from "./StartBal"
import CurrentBal from "./CurrentBal"

const BalanceBanner = () => {
  return (
    <div className="row">
      <div className="col s5">
        <StartBal />
      </div>
      <div className="col s5">
        <CurrentBal />
      </div>
      <div className="col s1">
        <i className="material-icons small valign-wrapper">add_circle</i>
      </div>
    </div>
  )
}

export default BalanceBanner
