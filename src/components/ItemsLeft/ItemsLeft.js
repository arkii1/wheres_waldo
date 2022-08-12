import React from "react"
import propTypes from "prop-types"
import "./ItemsLeft.css"

function ItemsLeft({ itemsLeft }) {
  return (
    <h2 className="text-dark rounded bg-light px-3 py-1">{itemsLeft} left</h2>
  )
}

export default ItemsLeft

ItemsLeft.propTypes = {
  itemsLeft: propTypes.number,
}
