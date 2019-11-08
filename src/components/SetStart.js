import React, { useState } from "react"
import { connect } from "react-redux"

const SetStart = props => {
  const [amount, setAmount] = useState(props.startAmount)

  const onSubmit = e => {
    e.preventDefault()
    props.setStart(amount)
    back()
  }
  const back = () => {
    props.history.push("/")
  }
  return (
    <div className="container">
      <h4>Set Starting Balance</h4>
      <form onSubmit={onSubmit} className="set-start">
        <label>$</label>
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={e => setAmount(e.currentTarget.value)}
        />
        <button className="btn" onClick={back}>
          Cancel
        </button>
        <button className="btn" onSubmit={onSubmit}>
          Add
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    startAmount: state.start
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setStart: amount => {
      dispatch({ type: "SET_START", amount })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetStart)
