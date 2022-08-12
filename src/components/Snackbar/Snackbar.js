import React from "react"
import propTypes from "prop-types"
import "./Snackbar.css"

function Snackbar({ text, bg }) {
  return <div className={`snackbar--${bg} p-1 rounded`}>{text}</div>
}

export default Snackbar

Snackbar.propTypes = {
  text: propTypes.string,
  bg: propTypes.string,
}
