import React from "react"
import "./Navbar.css"
import propTypes from "prop-types"

function Navbar({ itemsLeft }) {
  return (
    <nav className="d-flex py-3 justify-content-around align-items-center w-100 position-fixed fixed-top bg-dark">
      <h2 className="text-dark rounded bg-light px-3 py-1">{itemsLeft} left</h2>
    </nav>
  )
}

Navbar.propTypes = {
  itemsLeft: propTypes.number.isRequired,
}

export default Navbar
