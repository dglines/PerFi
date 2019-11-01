import React from "react"
import StartBal from "./StartBal"
import CurrentBal from "./CurrentBal"

const BalanceBanner = () => {
  return (
    <span>
      <StartBal />
      <CurrentBal />
    </span>
  )
}

export default BalanceBanner
